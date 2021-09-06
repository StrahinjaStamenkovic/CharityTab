import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async insertTodo(
    task: string,
    status: boolean,
    dateAdded: string,
    userId: string,
  ) {
    const newTodo = new this.todoModel({
      task,
      status,
      dateAdded,
      userId,
    });
    const result = await newTodo.save();
    return { statusCode: 200, todo: result };
  }

  async getTodos() {
    const todos = await this.todoModel.find().exec();
    return {
      statusCode: 200,
      todos: todos.map((todo) => ({
        id: todo.id,
        task: todo.task,
        status: todo.status,
        dateAdded: todo.dateAdded,
        userId: todo.userId,
      })),
    };
  }
  async getTodosForUser(userId: string) {
    const todos = await this.todoModel.find({ userId }).exec();
    return {
      statusCode: 200,
      todos: todos.map((todo) => ({
        id: todo.id,
        task: todo.task,
        status: todo.status,
        dateAdded: todo.dateAdded,
        userId: todo.userId,
      })),
    };
  }

  async getSingleTodo(todoId: string) {
    const todo = (await this.findTodo(todoId)).todo;
    return {
      statusCode: 200,
      todo: {
        id: todo.id,
        task: todo.task,
        status: todo.status,
        dateAdded: todo.dateAdded,
        userId: todo.userId,
      },
    };
  }

  async updateTodo(
    todoId: string,
    task: string,
    status: boolean,
    dateAdded: string,
    userId: string,
  ) {
    const updatedTodo = (await this.findTodo(todoId)).todo;

    if (task) {
      updatedTodo.task = task;
    }

    if (dateAdded) {
      updatedTodo.dateAdded = dateAdded;
    }
    if (status) {
      updatedTodo.status = status;
    }

    if (userId) {
      updatedTodo.userId = userId;
    }

    updatedTodo.save();
  }

  async deleteTodo(todoId: string) {
    const result = await this.todoModel.deleteOne({ _id: todoId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find todo.');
    }
  }
  private async findTodo(
    id: string,
  ): Promise<{ statusCode: number; todo: Todo }> {
    let todo;
    try {
      todo = await this.todoModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find todo.');
    }
    if (!todo) {
      throw new NotFoundException('Could not find todo.');
    }
    return { statusCode: 200, todo };
  }
}
