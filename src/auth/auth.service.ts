import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userServices: UsersService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userServices.findOneByEmail(email);

    if (user) {
      console.log(user);
    }
  }
}
