import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller("")
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authService: AuthService) {}

  @Post("auth/create")
  async create(@Body() {email, password, username}: { email: string, password: string, username} ) {
    
    return this.authService.createUser(email, username, password);
  }

  @Post("auth/login")
  async login( @Req() req: any ){
    return this.authService.login(req.body)
  }

  @Get()
  sayHello(){
    return "Hello my friend!";
  }

}
