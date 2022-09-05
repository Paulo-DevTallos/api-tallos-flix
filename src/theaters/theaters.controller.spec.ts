import { Test, TestingModule } from '@nestjs/testing';
import { TheatersController } from './theaters.controller';
import { TheatersService } from './theaters.service';

describe('TheatersController', () => {
  let controller: TheatersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TheatersController],
      providers: [TheatersService],
    }).compile();

    controller = module.get<ThatersController>(TheatersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
