import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Logger,
} from '@nestjs/common';

import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(
    private readonly todosService: TodosService,
    private logger: Logger,
  ) {}

  @Post()
  async addTodo(
    @Body('task') todoTask: string,
    @Body('status') todoStatus: boolean,
    @Body('dateAdded') todoDateAdded: string,
    @Body('userId') todoUserId: string,
  ) {
    const response = await this.todosService.insertTodo(
      todoTask,
      todoStatus,
      todoDateAdded,
      todoUserId,
    );
    return response;
  }

  @Get()
  async getAllTodos() {
    const response = await this.todosService.getTodos();
    return response;
  }
  @Get('/userId=:userId')
  async getAllTodosForUser(@Param('userId') userId: string) {
    const response = await this.todosService.getTodosForUser(userId);
    return response;
  }

  @Get(':id')
  getTodo(@Param('id') todoId: string) {
    return this.todosService.getSingleTodo(todoId);
  }

  @Patch(':id')
  async updateTodo(
    @Param('id') todoId: string,
    @Body('task') todoTask: string,
    @Body('status') todoStatus: boolean,
    @Body('dateAdded') todoDateAdded: string,
    @Body('userId') todoUserId: string,
  ) {
    this.logger.verbose(
      `Updating Todo with parameters: ${todoId},${todoTask},${todoStatus},${todoDateAdded},${todoUserId}`,
    );
    await this.todosService.updateTodo(
      todoId,
      todoTask,
      todoStatus,
      todoDateAdded,
      todoUserId,
    );
    return null;
  }

  @Delete(':id')
  async removeTodo(@Param('id') todoId: string) {
    await this.todosService.deleteTodo(todoId);
    return null;
  }
}
