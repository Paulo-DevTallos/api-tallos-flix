import { Test, TestingModule } from '@nestjs/testing';
import { ThatersController } from './thaters.controller';
import { ThatersService } from './thaters.service';

describe('ThatersController', () => {
  let controller: ThatersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThatersController],
      providers: [ThatersService],
    }).compile();

    controller = module.get<ThatersController>(ThatersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
