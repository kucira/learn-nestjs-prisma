import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Todo } from '@prisma/client';
import { TodoDto } from 'src/types/todo';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async getAllTodo(): Promise<TodoDto[]> {
    return this.prisma.todo.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        completed: true,
        owner: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async createTodo(data: Todo): Promise<Todo> {
    return this.prisma.todo.create({
      data,
    });
  }
}
