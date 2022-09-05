import { Injectable } from '@nestjs/common';
import { CreateThaterDto } from './dto/create-thater.dto';
import { UpdateThaterDto } from './dto/update-thater.dto';

@Injectable()
export class ThatersService {
  create(createThaterDto: CreateThaterDto) {
    return 'This action adds a new thater';
  }

  findAll() {
    return `This action returns all thaters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} thater`;
  }

  update(id: number, updateThaterDto: UpdateThaterDto) {
    return `This action updates a #${id} thater`;
  }

  remove(id: number) {
    return `This action removes a #${id} thater`;
  }
}
