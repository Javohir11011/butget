import { IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateButgetDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsDate()
  @Type(() => Date)
  startTime: Date;

  @IsBoolean()
  lesson: boolean;

  @IsNumber()
  eatMealPrice: number;

  @IsDate()
  @Type(() => Date)
  doingHomework: Date;

  @IsDate()
  @Type(() => Date)
  wastedTime: Date;

  @IsNumber()
  spendendMoney: number;

  @IsDate()
  @Type(() => Date)
  endTime: Date;
}
