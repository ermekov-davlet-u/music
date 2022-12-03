import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JanrModule } from './janr/janr.module';
import { MusicModule } from './music/music.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Music } from './music/entities/music.entity';
import { Janr } from './janr/entities/janr.entity';
import { User } from './users/entity/user.entity';
import { ExecutorModule } from './executor/executor.module';
import { BackgroundModule } from './background/background.module';
import { Background } from './background/entities/background.entity';
import { MusicianModule } from './musician/musician.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'music',
    entities: [Music, Janr, User, Background],
    synchronize: true,
  }), AuthModule, UsersModule, JanrModule, MusicModule, ExecutorModule, BackgroundModule, MusicianModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
