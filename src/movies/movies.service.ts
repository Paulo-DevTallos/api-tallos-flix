import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie, MovieDocument } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie.name)
    private readonly moviesModel: Model<MovieDocument>,
  ) {}

  async create(createMovie: CreateMovieDto) {
    const newMovie = this.moviesModel.create(createMovie);

    return await newMovie;
  }

  async findAll() {
    return await this.moviesModel.find().limit(10);
  }

  async findAndPaginate(limit: number, skip: number) {
    const skipValue = limit * (skip - 1);
    return this.moviesModel.find().limit(limit).skip(skipValue);
  }

  async findMovieByName(title: string) {
    return await this.moviesModel.find({ title });
  }

  async findOne(id: string) {
    return await this.moviesModel.findById({ _id: id });
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    return await this.moviesModel.findOneAndUpdate(
      { _id: id },
      { $set: updateMovieDto },
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.moviesModel.deleteOne({ _id: id }).exec();
  }
}
