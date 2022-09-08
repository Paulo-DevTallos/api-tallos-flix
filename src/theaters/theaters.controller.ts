import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { TheatersService } from './theaters.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('theaters')
@ApiBearerAuth('JWT-auth')
@Controller('theaters')
export class TheatersController {
  constructor(private readonly theatersService: TheatersService) {}

  @Post('POST')
  create(@Body() createTheaterDto: CreateTheaterDto) {
    return this.theatersService.create(createTheaterDto);
  }

  @Get('GET')
  findAll() {
    return this.theatersService.findAll();
  }

  @Get('GET/:id')
  findOne(@Param('id') id: string) {
    return this.theatersService.findOne(id);
  }

  @Patch('PATCH/:id')
  update(@Param('id') id: string, @Body() updateTheaterDto: UpdateTheaterDto) {
    return this.theatersService.update(id, updateTheaterDto);
  }

  @Delete('DELETE/:id')
  remove(@Param('id') id: string) {
    return this.theatersService.remove(id);
  }
}
