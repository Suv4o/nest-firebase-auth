import { Controller, Get } from '@nestjs/common';
import { Auth } from './decorators/auth.decorator';

@Controller()
export class AppController {
  @Get('/morning')
  @Auth('ADMIN')
  goodMorning() {
    return 'Good Morning!';
  }

  @Get('/afternoon')
  @Auth('DEVELOPER')
  goodAfternoon() {
    return 'Good Afternoon!';
  }

  @Get('/evening')
  goodEvening() {
    return 'Good Evening!';
  }
}
