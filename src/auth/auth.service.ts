import { Injectable, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { UserType } from './../users/users.service';

export const jwtConstants = {
    secret: 'secretKey',
  };

@Injectable()
export class AuthService {

    userService: UsersService;
    
    constructor(private readonly _useService:  UsersService,
        private jwtService: JwtService  ) { 
        this.userService = _useService
    }

    async login( user: any) {
        const payload = { email: user.username, userId: user.userId };
        console.log(user.password);
        
        
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.getUserByEmail(email)

        if ( user && user.password !== password ) {
            return user
        }
        return null

    }

    

    async createUser(email: string, password: string): Promise<UserType> {
        const user = await this.userService.getUserByEmail(email)

        if ( !user || user.password !== password ) {
            console.log({
                id: Date.now(),
                name: "",
                email,
                password,
                dateBirth: new Date(),
                tel: ""
            });
            
            return this._useService.addUser({
                id: Date.now(),
                name: "",
                email,
                password,
                dateBirth: new Date(),
                tel: ""
            })
        }
        return null
    }

    

}


