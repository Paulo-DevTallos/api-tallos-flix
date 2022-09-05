import { Injectable } from '@nestjs/common';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';

@Injectable()
export class TheatersService {
  create(createTheater: CreateTheaterDto) {
    return 'This action adds a new thater';
  }

  findAll() {
    return `This action returns all thaters`;
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
