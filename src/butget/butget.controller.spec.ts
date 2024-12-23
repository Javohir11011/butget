import { Test, TestingModule } from '@nestjs/testing';
import { ButgetController } from './butget.controller';
import { ButgetService } from './ButgetService';

describe('ButgetController', () => {
  let controller: ButgetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ButgetController],
      providers: [ButgetService],
    }).compile();

    controller = module.get<ButgetController>(ButgetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
