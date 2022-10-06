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

  async create(createTheater: CreateTheaterDto) {
    const newTheaters = this.theatersModel.create(createTheater);

    return await newTheaters;
  }

  async findAndPaginate(limit: number, skip: number) {
    const skipValue = limit * (skip - 1);
    return this.theatersModel.find().limit(limit).skip(skipValue);
  }

  async findAll() {
    return await this.theatersModel.find().sort({ name: -1 }).limit(10);
  }

  async findOne(id: string) {
    return await this.theatersModel.findById({ _id: id });
  }

  async update(id: string, updateTheaterDto: UpdateTheaterDto) {
    return await this.theatersModel.findOneAndUpdate(
      { _id: id },
      { $set: updateTheaterDto },
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.theatersModel.deleteOne({ _id: id });
  }
}
