import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { MoviesModule } from './movies/movies.module';
import { TheatersModule } from './theaters/theaters.module';
import { AuthModule } from './auth/auth.module';
import { SessionsModule } from './sessions/sessions.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATA_BASE_STRING_CONNECTION),
    UsersModule,
    CommentsModule,
    MoviesModule,
    TheatersModule,
    SessionsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
