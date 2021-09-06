import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { BookmarksService } from './bookmarks.service';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Post()
  async addBookmark(
    @Body('name') bookmarkName: string,
    @Body('link') bookmarkLink: string,
    @Body('dateAdded') bookmarkDateAdded: string,
    @Body('userId') bookmarkUserId: string,
  ) {
    const response = await this.bookmarksService.insertBookmark(
      bookmarkName,
      bookmarkLink,
      bookmarkDateAdded,
      bookmarkUserId,
    );
    return response;
  }

  @Get()
  async getAllBookmarks() {
    const response = await this.bookmarksService.getBookmarks();
    return response;
  }
  @Get('/userId=:userId')
  async getAllBookmarksForUser(@Param('userId') userId: string) {
    const response = await this.bookmarksService.getBookmarksForUser(userId);
    return response;
  }

  @Get(':id')
  getBookmark(@Param('id') bookmarkId: string) {
    return this.bookmarksService.getSingleBookmark(bookmarkId);
  }

  @Patch(':id')
  async updateBookmark(
    @Param('id') bookmarkId: string,
    @Body('name') bookmarkName: string,
    @Body('link') bookmarkLink: string,
    @Body('dateAdded') bookmarkDateAdded: string,
    @Body('userId') bookmarkUserId: string,
  ) {
    const response = await this.bookmarksService.updateBookmark(
      bookmarkId,
      bookmarkName,
      bookmarkLink,
      bookmarkDateAdded,
      bookmarkUserId,
    );
    return response;
  }

  @Delete(':id')
  async removeBookmark(@Param('id') bookmarkId: string) {
    await this.bookmarksService.deleteBookmark(bookmarkId);
    return null;
  }
}
