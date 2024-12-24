import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateButgetDto } from './dto/create-butget.dto';
import { UpdateButgetDto } from './dto/update-butget.dto';

@Injectable()
export class ButgetService {
  butget: CreateButgetDto[] = [
    {
      id: 1,
      startTime: new Date('2024-12-23T09:00:00.000Z'),
      lesson: true,
      eatMealPrice: 15.5,
      doingHomework: new Date('2024-12-24T10:00:00.000Z'),
      wastedTime: new Date('2024-12-24T11:30:00.000Z'),
      spendendMoney: 25,
      endTime: new Date('2024-12-24T20:00:00.000Z'),
    },
  ];
  async create(createButgetDto: CreateButgetDto) {
    const id = this.butget.length + 1;
    this.butget.push({ id, ...createButgetDto });
    return {
      createButgetId: id,
      msg: 'creted butget',
    };
  }

  findAll() {
    return this.butget;
  }

  findOne(id: number) {
    const finById = this.butget.findIndex((item) => item.id === id);
    if (!finById) {
      throw new Error('Not Found');
    }
    return this.butget[finById];
  }

  update(id: number, updateBudgetDto: UpdateButgetDto) {
    const existingBudget = this.butget.find((item) => item.id === id);
    if (!existingBudget) {
      throw new NotFoundException('Budget not found');
    }
    const updatedBudget = { ...existingBudget, ...updateBudgetDto };
    const budgetIndex = this.butget.findIndex((item) => item.id === id);
    this.butget[budgetIndex] = updatedBudget;
    return { msg: 'Budget Updated', updatedBudgetId: id };
  }

  remove(id: number) {
    const finByIdDelete = this.butget.findIndex((item) => item.id === id);
    if (!finByIdDelete) {
      throw new Error('Not Found');
    }
    this.butget.splice(finByIdDelete, 1);
    return `This action removes a #${id} butget`;
  }
}
