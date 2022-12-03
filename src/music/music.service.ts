import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { Music } from './entities/music.entity';

@Injectable()
export class MusicService {

  constructor( 
    @InjectRepository(Music) private readonly musicRepository: Repository<Music>
    ){}

  create(createMusicDto: CreateMusicDto) {
    return this.musicRepository.save(createMusicDto);
  }

  findAll() {
    return this.musicRepository.find();
  }

  findOne(id: number) {
    return this.musicRepository.findOneBy({
      id: id
    });
  }

  update(id: number, updateMusicDto: UpdateMusicDto) {
    return `This action updates a #${id} music`;
  }

  remove(id: number) {
    return this.musicRepository.delete(id);
  }
}
