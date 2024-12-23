import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ButgetService } from './ButgetService';
import { CreateButgetDto } from './dto/create-butget.dto';
import { UpdateButgetDto } from './dto/update-butget.dto';

@Controller('butget')
export class ButgetController {
  constructor(private readonly butgetService: ButgetService) {}

  @Post('create')
  create(@Body() createButgetDto: CreateButgetDto) {
    return this.butgetService.create(createButgetDto);
  }

  @Get('all')
  findAll() {
    return this.butgetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.butgetService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateButgetDto: UpdateButgetDto) {
    return this.butgetService.update(+id, updateButgetDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.butgetService.remove(+id);
  }
}
