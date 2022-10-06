import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comments, CommentsDocument } from './entities/comment.entity';
import { InjectModel } from '@nestjs/mongoose/dist';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name)
    private readonly commentsModel: Model<CommentsDocument>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const newComment = new this.commentsModel(createCommentDto);

    return await newComment.save();
  }

  async findAll() {
    return await this.commentsModel.find().sort({ date: -1 }).limit(10);
  }

  async findAndPaginate(limit: number, skip: number) {
    const skipValue = limit * (skip - 1);
    return this.commentsModel.find().limit(limit).skip(skipValue);
  }

  async findCommentByUserName(name: string) {
    return await this.commentsModel.find({ name });
  }

  async findOne(id: string) {
    return await this.commentsModel.findById({ _id: id });
  }

  async update(id: string, updateComment: UpdateCommentDto) {
    console.log(updateComment);
    return await this.commentsModel.findOneAndUpdate(
      { _id: id },
      { $set: updateComment },
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.commentsModel.deleteOne({ _id: id }).exec();
  }
}
