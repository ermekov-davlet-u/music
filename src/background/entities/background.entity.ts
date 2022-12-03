import { Music } from "src/music/entities/music.entity";
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from "typeorm";

@Entity()
export class Background {

    @PrimaryGeneratedColumn()
    idBackground: number;

    @Column({
        nullable: false,
    })
    backgroundUrl: string;

    @Column()
    desc: string;

    @OneToMany(() => Music, music => music.bg)
    music: Music[];

}