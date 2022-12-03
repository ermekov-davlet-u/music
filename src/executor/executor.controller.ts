import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExecutorService } from './executor.service';
import { CreateExecutorDto } from './dto/create-executor.dto';
import { UpdateExecutorDto } from './dto/update-executor.dto';

@Controller('executor')
export class ExecutorController {
  constructor(private readonly executorService: ExecutorService) {}

  @Post()
  create(@Body() createExecutorDto: CreateExecutorDto) {
    return this.executorService.create(createExecutorDto);
  }

  @Get()
  findAll() {
    return this.executorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.executorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExecutorDto: UpdateExecutorDto) {
    return this.executorService.update(+id, updateExecutorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.executorService.remove(+id);
  }
}
