import { IsInt } from 'class-validator';
import { CreateItemDto } from './create-item.dto';

export class UpdateItemDto extends CreateItemDto {
  @IsInt()
  readonly id: number;
}
