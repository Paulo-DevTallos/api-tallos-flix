import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectModel(Session.name)
    private readonly sessionModel: Model<CreateSessionDto>,
  ) {}

  async create(createSession: CreateSessionDto) {
    const newSession = this.sessionModel.create(createSession);

    return await newSession;
  }

  async findAll() {
    return await this.sessionModel.find();
  }

  async findOne(id: string) {
    return await this.sessionModel.findById({ _id: id });
  }

  async update(id: string, updateSessionDto: UpdateSessionDto) {
    return await this.sessionModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateSessionDto },
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.sessionModel.deleteOne({ _id: id });
  }
}
