import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Executor {

    @PrimaryGeneratedColumn()
    id_execitor: number;

    @Column()
    executor_name: string;

    

}
