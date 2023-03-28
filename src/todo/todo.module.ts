import { Module } from '@nestjs/common';
import { TodoService } from './service/todo.service';
import { PrismaService } from '../prisma/prisma.service';
import { TodoController } from './controller/todo.controller';

@Module({
  providers: [TodoService, PrismaService],
  controllers: [TodoController]
})
export class TodoModule {}
