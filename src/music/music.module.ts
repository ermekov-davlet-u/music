import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Music } from './entities/music.entity';
import { Janr } from 'src/janr/entities/janr.entity';
import { Background } from 'src/background/entities/background.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Music, Janr, Background])],
  controllers: [MusicController],
  providers: [MusicService]
})
export class MusicModule {}
