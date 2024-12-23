// import { PartialType } from '@nestjs/mapped-types';
// import { CreateButgetDto } from './create-butget.dto';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateButgetDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  startTime: Date;

  @IsBoolean()
  lesson: boolean;

  @IsNumber()
  eatMealPrice: number;

  @IsString()
  doingHomework: Date;

  @IsString()
  wastedTime: Date;

  @IsNumber()
  spendendMoney: number;

  @IsString()
  endTime: Date;
}
