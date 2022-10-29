import { IsNumber, IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  readonly title: string;
  @IsString()
  readonly faculty: string;
  @IsString()
  readonly teacher: string;
  @IsString()
  readonly room: string;
  @IsString()
  readonly numerator: string;
  @IsNumber()
  readonly count: number;
  @IsString()
  readonly timeWork: string;
  @IsNumber()
  readonly dayOfWeek: number;
}
