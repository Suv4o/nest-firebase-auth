import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as firebaseServiceAccount from './firebaseServiceAccountKey.json';
const serviceAccount: object = firebaseServiceAccount;
let app: admin.app.App = null;
@Injectable()
export class FirebaseAdmin implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    if (!app) {
      app = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    }
  }
  setup() {
    return app;
  }
}
