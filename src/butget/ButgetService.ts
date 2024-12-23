import { Injectable } from '@nestjs/common';
import { CreateButgetDto } from './dto/create-butget.dto';
import { UpdateButgetDto } from './dto/update-butget.dto';

@Injectable()
export class ButgetService {
  butget: CreateButgetDto[] = [];
  async create(createButgetDto: CreateButgetDto) {
    const id = this.butget.length + 1;
    const createBtg = this.butget.push({ id, ...createButgetDto });
    return createBtg;
  }

  findAll() {
    return this.butget;
  }

  async findOne(id: number) {
    const finById = await this.butget.findIndex((item) => item.id == id);
    if (!finById) {
      throw new Error('Not Found');
    }
    return this.butget[finById];
  }

  async update(id: number, updateButgetDto: UpdateButgetDto) {
    // return `This action updates a #${id} butget`;
    const finByIdUpdate = await this.butget.findIndex((item) => item.id == id);
    if (!finByIdUpdate) {
      throw new Error('Not Found');
    }
    this.butget.splice(finByIdUpdate, 1);
    this.butget.push({ ...updateButgetDto });
  }

  async remove(id: number) {
    const finByIdDelete = await this.butget.findIndex((item) => item.id == id);
    if (!finByIdDelete) {
      throw new Error('Not Found');
    }
    this.butget.splice(finByIdDelete, 1);
    return `This action removes a #${id} butget`;
  }
}
