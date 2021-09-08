import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodoSchema } from './todo.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])],
  controllers: [TodosController],
  providers: [TodosService, Logger],
})
export class TodosModule {}
