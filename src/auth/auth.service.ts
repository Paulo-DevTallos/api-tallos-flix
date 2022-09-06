import { Injectable } from '@nestjs/common';
import { Encript } from 'src/users/helpers/cripto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userServices: UsersService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userServices.findOneByEmail(email);

    if (user) {
      const compareValidPass = await Encript.ComparePassword(
        password,
        user.password,
      );

      if (compareValidPass) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new Error('Email ou senha estão incorretos!');
  }
}
