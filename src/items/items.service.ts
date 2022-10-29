import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}
  async createItem(dto: CreateItemDto) {
    return await this.prisma.item.create({
      data: { ...dto },
    });
  }
  async findAll() {
    return await this.prisma.item.findMany();
  }
  async getByNumerator(numerator: string) {
    return await this.prisma.item.findMany({
      where: {
        numerator,
      },
      orderBy: {
        dayOfWeek: 'asc',
      },
    });
  }
  async getByDayOfWeek(numerator: string, dayOfWeek: number) {
    return await this.prisma.item.findMany({
      where: {
        numerator,
        dayOfWeek,
      },
      orderBy: {
        count: 'asc',
      },
    });
  }
  async getById(id: number) {
    return await this.prisma.item.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }
  async updateItem(dto: UpdateItemDto) {
    return await this.prisma.item.update({
      where: {
        id: dto.id,
      },
      data: {
        ...dto,
      },
    });
  }
  async deleteItem(id: number) {
    return await this.prisma.item.delete({
      where: {
        id,
      },
    });
  }
}
