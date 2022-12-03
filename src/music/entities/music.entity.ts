import { Background } from "src/background/entities/background.entity";
import { Janr } from "src/janr/entities/janr.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Music {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: "Не известно"
    })
    musicName: string;

    @Column()
    urlMusic: string;

    @Column()
    rating: number;

    @Column()
    descMusic: string;

    @ManyToOne(() => Janr, janr => janr.music)
    janr: Janr;

    @ManyToOne(() => Background, bg => bg.music)
    bg: Background;

}
