
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import {
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
} from "class-validator"

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    idUser: number;

    @Column()
    email: string;

    @Column()
    username: string;

    @Min(10)
    @Column({
        nullable: false,
        
    })
    password: string;

}