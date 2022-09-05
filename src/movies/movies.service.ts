import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name)
    private readonly moviesModel: Model<CreateMovieDto>,
  ) {}

  async create(createMovie: CreateMovieDto) {
    const newMovie = this.moviesModel.create(createMovie);

    return await newMovie;
  }

  findAll() {
    return this.moviesModel.find();
  }

  findOne(id: string) {
    return this.moviesModel.findById({ _id: id });
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: string) {
    return `This action removes a #${id} movie`;
  }
}
