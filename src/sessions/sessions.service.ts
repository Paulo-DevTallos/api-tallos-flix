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

  create(createSession: CreateSessionDto) {
    const newSession = this.sessionModel.create(createSession);

    return newSession;
  }

  findAll() {
    return this.sessionModel.find();
  }

  findOne(id: string) {
    return this.sessionModel.findById({ _id: id });
  }

  update(id: string, updateSessionDto: UpdateSessionDto) {
    return this.sessionModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateSessionDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.sessionModel.deleteOne({ _id: id });
  }
}
