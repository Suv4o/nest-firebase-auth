import { Controller, Post, Body } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signUp(@Body() userRequest: UserDto): Promise<void> {
    return this.userService.createUser(userRequest);
  }
}
