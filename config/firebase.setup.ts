import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as firebaseServiceAccount from './firebaseServiceAccountKey.json';
const serviceAccount: object = firebaseServiceAccount;

@Injectable()
export class FirebaseAdmin {
  setup() {
    const app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    return app;
  }
}
