import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { games2 } from '@prisma/client';

@Injectable()
export class Games2Service {
  constructor(private prisma: PrismaService) {}

  async create(data: { id: number; nome: string; imagem: string; descricao: string; createdAt: Date }): Promise<games2> {
    return this.prisma.games2.create({ data });
  }

  async findAll(): Promise<games2[]> {
    return this.prisma.games2.findMany();
  }

  async findOne(id: number): Promise<games2> {
    return this.prisma.games2.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<{ id: number; nome: string; imagem: string; descricao: string; createdAt: Date }>): Promise<games2> {
    return this.prisma.games2.update({ where: { id }, data });
  }

  async remove(id: number): Promise<games2> {
    return this.prisma.games2.delete({ where: { id } });
  }
}
