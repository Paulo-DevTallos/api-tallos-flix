import { Test, TestingModule } from '@nestjs/testing';
import { ThatersService } from './thaters.service';

describe('ThatersService', () => {
  let service: ThatersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThatersService],
    }).compile();

    service = module.get<ThatersService>(ThatersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
