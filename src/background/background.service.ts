import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBackgroundDto } from './dto/create-background.dto';
import { UpdateBackgroundDto } from './dto/update-background.dto';
import { Background } from './entities/background.entity';

@Injectable()
export class BackgroundService {

  constructor(
    @InjectRepository(Background) private readonly brRepo: Repository<Background>
  ){}

  create(createBackgroundDto: CreateBackgroundDto) {
    return this.brRepo.save(createBackgroundDto);
  }

  findAll() {
    return `This action returns all background`;
  }

  findOne(id: number) {
    return `This action returns a #${id} background`;
  }

  update(id: number, updateBackgroundDto: UpdateBackgroundDto) {
    return `This action updates a #${id} background`;
  }

  remove(id: number) {
    return `This action removes a #${id} background`;
  }
}
