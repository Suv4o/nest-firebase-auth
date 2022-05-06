import { Module } from '@nestjs/common';
import { FirebaseAdmin } from 'config/firebase.setup';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, FirebaseAdmin],
})
export class UserModule {}
