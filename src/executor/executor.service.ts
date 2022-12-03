import { Injectable } from '@nestjs/common';
import { CreateExecutorDto } from './dto/create-executor.dto';
import { UpdateExecutorDto } from './dto/update-executor.dto';

@Injectable()
export class ExecutorService {
  create(createExecutorDto: CreateExecutorDto) {
    return 'This action adds a new executor';
  }

  findAll() {
    return `This action returns all executor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} executor`;
  }

  update(id: number, updateExecutorDto: UpdateExecutorDto) {
    return `This action updates a #${id} executor`;
  }

  remove(id: number) {
    return `This action removes a #${id} executor`;
  }
}
