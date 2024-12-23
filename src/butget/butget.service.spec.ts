import { Test, TestingModule } from '@nestjs/testing';
import { ButgetService } from './ButgetService';
import { CreateButgetDto } from './dto/create-butget.dto';

describe('ButgetService', () => {
  let service: ButgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ButgetService],
    }).compile();

    service = module.get<ButgetService>(ButgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('create', async () => {
    const data: CreateButgetDto = {
      startTime: new Date('2024-12-23T09:00:00.000Z'),
      lesson: true,
      eatMealPrice: 15.5,
      doingHomework: new Date('2024-12-24T10:00:00.000Z'),
      wastedTime: new Date('2024-12-24T11:30:00.000Z'),
      spendendMoney: 25,
      endTime: new Date('2024-12-24T20:00:00.000Z'),
    };
    const result = await service.create(data);
    console.log(result);
    const expected = {
      // createButgetId: 1,
      msg: ' butget',
    };

    expect(result).toEqual(expected);
  });
});
