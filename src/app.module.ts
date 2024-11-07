import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { Games2Module } from './games2/games2.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UsersModule,Games2Module],
  providers: [PrismaService],
})
export class AppModule {}
