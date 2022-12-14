import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post('POST')
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get('GET')
  findAll() {
    return this.moviesService.findAll();
  }

  @Get('GET/:id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(id);
  }

  @Patch('PATCH/:id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(id, updateMovieDto);
  }

  @Delete('DELETE/:id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
  }
}
