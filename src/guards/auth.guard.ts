import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import * as admin from 'firebase-admin';
import * as firebaseServiceAccount from '../../config/firebaseServiceAccountKey.json';
const serviceAccount: object = firebaseServiceAccount;

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    const idToken = context.getArgs()[0]?.headers?.authorization.split(' ')[1];

    const permissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );

    console.log('Permissions: ', permissions);

    try {
      const claims = await app.auth().verifyIdToken(idToken);

      if (claims.admin === 'SUPER_ADMIN') {
        return true;
      }
      throw new UnauthorizedException();
    } catch (error) {
      console.log('Error', error);
      throw new UnauthorizedException();
    }
  }
}
