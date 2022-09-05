import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThatersService } from './thaters.service';
import { CreateThaterDto } from './dto/create-thater.dto';
import { UpdateThaterDto } from './dto/update-thater.dto';

@Controller('thaters')
export class ThatersController {
  constructor(private readonly thatersService: ThatersService) {}

  @Post()
  create(@Body() createThaterDto: CreateThaterDto) {
    return this.thatersService.create(createThaterDto);
  }

  @Get()
  findAll() {
    return this.thatersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.thatersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThaterDto: UpdateThaterDto) {
    return this.thatersService.update(+id, updateThaterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thatersService.remove(+id);
  }
}
