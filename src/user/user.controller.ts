import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { AuthGuard } from '../guards/auth.guard';
import { Permissions } from '../decorators/permissions.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  @Permissions('SUPER_ADMIN')
  @UseGuards(AuthGuard)
  signUp(@Body() userRequest: UserDto): Promise<void> {
    return this.userService.createUser(userRequest);
  }
}
