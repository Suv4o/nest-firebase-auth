import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';
import { Permissions } from './decorators/permissions.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('protected')
  @Permissions('DEVELOPER', 'ADMIN')
  @UseGuards(AuthGuard)
  getHelloProtected(): string {
    return 'Protected';
  }
}
