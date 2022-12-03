import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService, jwtConstants } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/users/users.module';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [ PassportModule, UsersModule, JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }) ],
  providers: [AuthService, LocalStrategy ],
  exports: [ AuthService ]
})
export class AuthModule {}
