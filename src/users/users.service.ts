import { Injectable } from '@nestjs/common';

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

    constructor() { }

    async getAllUsers(): Promise<UserType[]> {
        return this.users
    }

    async getUserById(id: number): Promise<UserType> {
        return this.users.find(item => item.id === id)
    }

    async getUserByEmail(email: string): Promise<UserType> {
        return this.users.find(item => item.email === email)
    }

    async addUser(user: UserType): Promise<UserType> {
        const a = await this.users.push(user)

        const newUser = await this.users.find(item => item.email === user.email)
        
        return newUser
    }


}
