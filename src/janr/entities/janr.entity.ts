import { Music } from "src/music/entities/music.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";




@Entity()
export class Janr {
    @PrimaryGeneratedColumn()
    idJanr: number;

    @Column({
        nullable: false,
    })
    janrName: string;

    @Column()
    janrDesc: string;

    @OneToMany(() => Music, music => music.janr)
    music: Music[];

} 