import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FirebaseAdmin } from '../config/firebase.setup';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, FirebaseAdmin],
})
export class AppModule {}
