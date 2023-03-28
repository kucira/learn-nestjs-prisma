import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { Todo } from '@prisma/client';
import { TodoDto } from 'src/types/todo';

@Controller('api/v1/todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    async getAllTodo(): Promise<TodoDto[]> {
        return this.todoService.getAllTodo();
    }

    @Post()
    async createTodo(@Body() data: Todo): Promise<Todo> {
        return this.todoService.createTodo(data);
    }
}
