import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async insertUser(
    name: string,
    lastName: string,
    username: string,
    password: string,
    isAdmin: number,
    totalCollectedHearts: number,
    currentAmountOfHearts: number,
    totalMoneyDonated: number,
    totalHeartsDonated: number,
    totalTabsOpened: number,
    dateJoined: string,
  ): Promise<{ statusCode: number; user: User }> {
    const newUser = new this.userModel({
      name,
      lastName,
      username,
      password,
      isAdmin,
      totalCollectedHearts,
      currentAmountOfHearts,
      totalMoneyDonated,
      totalHeartsDonated,
      totalTabsOpened,
      dateJoined,
    });
    const generatedUser = await newUser.save();
    return { statusCode: 200, user: generatedUser };
  }

  async getUsers() {
    const users = await this.userModel.find().exec();
    return {
      statusCode: 200,
      users: users.map((user) => ({
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
        isAdmin: user.isAdmin,
        totalCollectedHearts: user.totalCollectedHearts,
        currentAmountOfHearts: user.currentAmountOfHearts,
        totalMoneyDonated: user.totalMoneyDonated,
        totalHeartsDonated: user.totalHeartsDonated,
        totalTabsOpened: user.totalTabsOpened,
        dateJoined: user.dateJoined,
      })),
    };
  }

  async getSingleUser(userId: string) {
    const user = await this.findUser(userId);
    return {
      statusCode: 200,
      user: {
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
        isAdmin: user.isAdmin,
        totalCollectedHearts: user.totalCollectedHearts,
        currentAmountOfHearts: user.currentAmountOfHearts,
        totalMoneyDonated: user.totalMoneyDonated,
        totalHeartsDonated: user.totalHeartsDonated,
        totalTabsOpened: user.totalTabsOpened,
        dateJoined: user.dateJoined,
      },
    };
  }

  async updateUser(
    userId: string,
    name: string,
    lastName: string,
    username: string,
    password: string,
    isAdmin: number,
    totalCollectedHearts: number,
    currentAmountOfHearts: number,
    totalMoneyDonated: number,
    totalHeartsDonated: number,
    totalTabsOpened: number,
    dateJoined: string,
  ) {
    const updatedUser = await this.findUser(userId);
    if (name) {
      updatedUser.name = name;
    }
    if (lastName) {
      updatedUser.lastName = lastName;
    }
    if (username) {
      updatedUser.username = username;
    }
    if (password) {
      updatedUser.password = password;
    }
    if (isAdmin) {
      updatedUser.isAdmin = isAdmin;
    }
    if (totalCollectedHearts) {
      updatedUser.totalCollectedHearts = totalCollectedHearts;
    }
    if (currentAmountOfHearts) {
      updatedUser.currentAmountOfHearts = currentAmountOfHearts;
    }
    if (totalMoneyDonated) {
      updatedUser.totalMoneyDonated = totalMoneyDonated;
    }
    if (totalHeartsDonated) {
      updatedUser.totalHeartsDonated = totalHeartsDonated;
    }
    if (totalTabsOpened) {
      updatedUser.totalTabsOpened = totalTabsOpened;
    }
    if (dateJoined) {
      updatedUser.dateJoined = dateJoined;
    }
    updatedUser.save();
  }

  async deleteUser(userId: string) {
    const result = await this.userModel.deleteOne({ _id: userId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find user.');
    }
  }

  private async findUser(id: string): Promise<User> {
    let user;
    try {
      user = await this.userModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find user.');
    }
    if (!user) {
      throw new NotFoundException('Could not find user.');
    }
    return user;
  }

  public async checkLoginData(username: string, password?: string) {
    let user;
    try {
      user = await this.userModel.findOne({ username, password }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find user.');
    }
    if (!user) {
      throw new NotFoundException('Could not find user.');
    }
    return { statusCode: 200, user };
  }

  public async checkUsernameAvailability(username: string) {
    let user;
    try {
      user = await this.userModel.findOne({ username }).exec();
    } catch (error) {
      return { statusCode: 200, status: 'Free' };
    }
    if (!user) {
      return { statusCode: 200, status: 'Free' };
    }

    return { statusCode: 200, status: 'Taken' };
  }
}
