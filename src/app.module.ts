import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MoviesModule } from './movies/movies.module';
import { TheatersModule } from './theaters/theaters.module';
import { SessionsModule } from './sessions/sessions.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATA_BASE_STRING_CONNECTION),
    UsersModule,
    CommentsModule,
    MoviesModule,
    TheatersModule,
    SessionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
