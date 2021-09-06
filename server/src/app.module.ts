import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import config from 'config/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharitiesModule } from './charities/charities.module';
import { UsersModule } from './users/users.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { NotesModule } from './notes/notes.module';
import { TodosModule } from './todos/todos.module';
@Module({
  imports: [
    CharitiesModule,
    UsersModule,
    BookmarksModule,
    NotesModule,
    TodosModule,
    MongooseModule.forRoot(config.mongoURI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
