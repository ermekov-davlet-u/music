import { Module } from '@nestjs/common';
import { BackgroundService } from './background.service';
import { BackgroundController } from './background.controller';
import { Background } from './entities/background.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Music } from 'src/music/entities/music.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Background, Music]) ],
  controllers: [BackgroundController],
  providers: [BackgroundService]
})
export class BackgroundModule {}
