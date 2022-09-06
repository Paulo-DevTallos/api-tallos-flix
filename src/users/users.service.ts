import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Encript } from './helpers/cripto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUser: CreateUserDto) {
    const newUser = new this.userModel(createUser);
    newUser.password = await Encript.encodePassword(newUser.password);

    return newUser.save();
  }

  async findAll() {
    return await this.userModel.find();
  }

  findOneByEmail(email: string) {
    return this.userModel.find({ email });
  }

  update(id: string, updateUser: UpdateUserDto) {
    return this.userModel.findOneAndUpdate(
      { _id: id },
      { $set: updateUser },
      { new: true },
    );
  }

  remove(id: string) {
    return this.userModel.deleteOne({ _id: id }).exec();
  }
}
