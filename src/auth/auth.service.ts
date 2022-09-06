import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSessionDto } from 'src/sessions/dto/create-session.dto';
import { Session } from 'src/sessions/entities/session.entity';
import { User } from 'src/users/entities/user.entity';
import { Encript } from 'src/users/helpers/cripto';
import { UsersService } from 'src/users/users.service';
import { UserPayload } from './models/user.payload';
import { UserToken } from './models/user.token';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Session.name) private sessionModel: Model<CreateSessionDto>,
    private readonly userServices: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: User): UserToken {
    const payload: UserPayload = {
      sub: user._id,
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

  async registerSession(id: string, jwt: string) {
    const session = {
      user_id: id,
      jwt,
    };
    if (session.user_id === id) {
      this.sessionModel.deleteOne({ user_id: session.user_id }).exec();
    }
    this.sessionModel.create(session);
  }
}
