import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Music } from 'src/music/entities/music.entity';
import { Janr } from './entities/janr.entity';
import { JanrController } from './janr.controller';
import { JanrService } from './janr.service';

@Module({
  imports: [ TypeOrmModule.forFeature([Janr, Music])],
  controllers: [JanrController],
  providers: [JanrService]
})
export class JanrModule {}
