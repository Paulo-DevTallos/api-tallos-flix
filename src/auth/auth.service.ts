import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { Encript } from 'src/users/helpers/cripto';
import { UsersService } from 'src/users/users.service';
import { UserPayload } from './models/user.payload';
import { UserToken } from './models/user.token';

@Injectable()
export class AuthService {
  constructor(
    private readonly userServices: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: User): UserToken {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userServices.findOneByEmail(email);

    if (user) {
      const compareValidPass = await Encript.ComparePassword(
        password,
        user.password,
      );

      if (compareValidPass) {
        user.password = undefined;

        return user;
      }
    }
    throw new Error('Email ou senha estão incorretos!');
  }
}
