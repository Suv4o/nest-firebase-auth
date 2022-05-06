import { Injectable, BadRequestException } from '@nestjs/common';
import { FirebaseAdmin } from '../../config/firebase.setup';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly admin: FirebaseAdmin) {}

  async createUser(userRequest: UserDto): Promise<void> {
    const { email, password, firstName, lastName, role } = userRequest;
    const app = this.admin.setup();

    try {
      const createdUser = await app.auth().createUser({
        email,
        password,
        displayName: `${firstName} ${lastName}`,
      });
      const user = await app
        .auth()
        .setCustomUserClaims(createdUser.uid, { role });
      return user;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
