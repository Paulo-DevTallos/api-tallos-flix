import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { Theaters } from './entities/theater.entity';

@Injectable()
export class TheatersService {
  constructor(
    @InjectModel(Theaters.name)
    private readonly theatersModel: Model<CreateTheaterDto>,
  ) {}

  create(createTheater: CreateTheaterDto) {
    return 'This action adds a new thater';
  }

  async findAll() {
    return await this.theatersModel.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} thater`;
  }

  update(id: string, updateTheaterDto: UpdateTheaterDto) {
    return `This action updates a #${id} thater`;
  }

  remove(id: string) {
    return `This action removes a #${id} thater`;
  }
}
