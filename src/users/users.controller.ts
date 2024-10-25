import { Controller, Get, Post, Body, Param, Put, Delete, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register') // Rota específica para registro
  async register(@Body() createUserDto: { name: string; email: string; password: string }): Promise<User> {
    try {
      // Criptografar a senha antes de salvar
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      return this.usersService.create({ ...createUserDto, password: hashedPassword });
    } catch (error) {
      throw new BadRequestException('Erro ao cadastrar usuário');
    }
  }

  @Post() // Rota para criação genérica, se necessário
  create(@Body() createUserDto: { name: string; email: string; password: string }): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: Partial<{ name: string; email: string; password: string }>): Promise<User> {
    return this.usersService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove(Number(id));
  }
}
