import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateButgetDto } from './dto/create-butget.dto';
import { UpdateButgetDto } from './dto/update-butget.dto';

@Injectable()
export class ButgetService {
  butget: CreateButgetDto[] = [];
  async create(createButgetDto: CreateButgetDto) {
    const id = this.butget.length + 1;
    this.butget.push({ id, ...createButgetDto });
    return {
      // createButgetId: id,
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
