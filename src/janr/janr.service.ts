import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Janr } from './entities/janr.entity';

@Injectable()
export class JanrService {

    constructor(
        @InjectRepository(Janr) private readonly janrRepository: Repository<Janr>
    ){}

    getFakeData(){
        return null
    }

    async createJanr(data: {
        janrName: string;
        janrDesc: string;
    }){
        try {
            const janr = await this.janrRepository.create(data);
            return this.janrRepository.save(janr);
        } catch (error) {
            console.log(error.message);
        }
    }

    getAllJanr(){
        return this.janrRepository.find()
    }

    getJanrById(id: number): Promise<Janr | null> {
        return this.janrRepository.findOneBy({ idJanr: id })
    }



}
