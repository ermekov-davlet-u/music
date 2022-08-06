import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }




  @Post("auth/create")
  async create(@Body() {email, password}: { email: string, password: string} ) {
    console.log(email);
    
    return this.authService.createUser(email, password);
  }

  @Post("auth/login")
  async login( @Req() req: any ){
    return this.authService.login(req.body)
  }

}
