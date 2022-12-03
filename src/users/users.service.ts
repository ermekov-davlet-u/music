import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

export interface UserType {
    id: number;
    name: string;
    email: string;
    password: string;
    dateBirth: Date;
    tel: string;

}


@Injectable()
export class UsersService {
    users: UserType[] = [] 

    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ){}

    getUser(id: number) : Promise<User | null> {
        return this.userRepository.findOneBy({
            idUser: id
        });
    }

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.find()
    }

    async getUserByEmail(email: string): Promise<User> {
        return this.userRepository.findOneBy({email: email})
    }

    async addUser(user: {
        email: string
        username: string
        password: string
    }): Promise<User> {
        
        return this.userRepository.save(user)
    }


}
