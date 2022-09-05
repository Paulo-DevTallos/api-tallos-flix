import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATA_BASE_STRING_CONNECTION),
    UsersModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
