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
    const existUser = await this.userModel.findOne({
      email: createUser.email,
    });

    if (existUser) throw new Error('O Usuário já existe!');

    const newUser = new this.userModel(createUser);
    newUser.password = await Encript.encodePassword(newUser.password);

    return await newUser.save();
  }

  async findAll() {
    return await this.userModel.find().sort({ createdAt: -1 });
  }

  async findAndPaginate(documentToSkip = 1, limitsOfDocument?: number) {
    const findQuery = this.userModel
      .find()
      .sort({ createdAt: -1 })
      .skip(documentToSkip);

    if (limitsOfDocument) {
      findQuery.limit(limitsOfDocument);
    }

    const result = await findQuery;
    const count = await this.userModel.countDocuments();

    console.log(documentToSkip);
    return { result, count };
  }

  async findOneUser(id: string) {
    return await this.userModel.findById(id);
  }

  async findUserByEmail(email: string) {
    return await this.userModel.find({ email });
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async update(id: string, updateUser: UpdateUserDto) {
    return await this.userModel.findOneAndUpdate(
      { _id: id },
      { $set: updateUser },
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.userModel.deleteOne({ _id: id }).exec();
  }
}
