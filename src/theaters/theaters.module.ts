import { Module } from '@nestjs/common';
import { TheatersService } from './theaters.service';
import { TheatersController } from './theaters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Theaters, TheatersSchema } from './entities/theater.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Theaters.name, schema: TheatersSchema },
    ]),
  ],
  controllers: [TheatersController],
  providers: [TheatersService],
})
export class TheatersModule {}
