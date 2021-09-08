import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Bookmark } from './bookmark.model';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectModel('Bookmark') private readonly bookmarkModel: Model<Bookmark>,
  ) {}

  async insertBookmark(
    name: string,
    link: string,
    dateAdded: string,
    userId: string,
  ) {
    const newBookmark = new this.bookmarkModel({
      name,
      link,
      dateAdded,
      userId,
    });
    const result = await newBookmark.save();
    return {
      statusCode: 200,
      bookmark: {
        id: result.id,
        name: result.name,
        link: result.link,
        dateAdded: result.dateAdded,
        userId: result.userId,
      },
    };
  }

  async getBookmarks() {
    const bookmarks = await this.bookmarkModel.find().exec();
    return {
      statusCode: 200,
      bookmarks: bookmarks.map((bookmark) => ({
        id: bookmark.id,
        name: bookmark.name,
        link: bookmark.link,
        dateAdded: bookmark.dateAdded,
        userId: bookmark.userId,
      })),
    };
  }
  async getBookmarksForUser(userId: string) {
    const bookmarks = await this.bookmarkModel.find({ userId }).exec();
    return {
      statusCode: 200,
      bookmarks: bookmarks.map((bookmark) => ({
        id: bookmark.id,
        name: bookmark.name,
        link: bookmark.link,
        dateAdded: bookmark.dateAdded,
        userId: bookmark.userId,
      })),
    };
  }

  async getSingleBookmark(bookmarkId: string) {
    const bookmark = (await this.findBookmark(bookmarkId)).bookmark;
    return {
      statusCode: 200,
      bookmark: {
        id: bookmark.id,
        name: bookmark.name,
        link: bookmark.link,
        dateAdded: bookmark.dateAdded,
        userId: bookmark.userId,
      },
    };
  }

  async updateBookmark(
    bookmarkId: string,
    name: string,
    link: string,
    dateAdded: string,
    userId: string,
  ) {
    const updatedBookmark = (await this.findBookmark(bookmarkId)).bookmark;
    if (name) {
      updatedBookmark.name = name;
    }

    if (link) {
      updatedBookmark.link = link;
    }
    if (dateAdded) {
      updatedBookmark.dateAdded = dateAdded;
    }
    if (userId) {
      updatedBookmark.userId = userId;
    }
    updatedBookmark.save();
    return updatedBookmark;
  }

  async deleteBookmark(bookmarkId: string) {
    const result = await this.bookmarkModel
      .deleteOne({ _id: bookmarkId })
      .exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find bookmark.');
    }
  }
  private async findBookmark(
    id: string,
  ): Promise<{ statusCode: number; bookmark: Bookmark }> {
    let bookmark;
    try {
      bookmark = await this.bookmarkModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find bookmark.');
    }
    if (!bookmark) {
      throw new NotFoundException('Could not find bookmark.');
    }
    return { statusCode: 200, bookmark };
  }
}
