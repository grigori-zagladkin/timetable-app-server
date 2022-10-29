import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Post()
  createItem(@Body() dto: CreateItemDto) {
    return this.itemsService.createItem(dto);
  }
  @Get()
  index(
    @Query('numerator') numerator: string,
    @Query('dayofweek') dayOfWeek: string,
  ) {
    if (!numerator && !dayOfWeek) {
      return this.itemsService.findAll();
    } else if (numerator && dayOfWeek) {
      return this.itemsService.getByDayOfWeek(numerator, +dayOfWeek);
    } else if (numerator && !dayOfWeek) {
      return this.itemsService.getByNumerator(numerator);
    }
  }
  @Get('/:id')
  getItemById(@Param('id') id: string) {
    return this.itemsService.getById(+id);
  }
  @Patch()
  updateItem(@Body() dto: UpdateItemDto) {
    return this.itemsService.updateItem(dto);
  }
  @Delete('/:id')
  deleteItem(@Param('id') id: string) {
    return this.itemsService.deleteItem(+id);
  }
}
