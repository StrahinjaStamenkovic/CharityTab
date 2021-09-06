import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async addUser(
    @Body('name') userName: string,
    @Body('lastName') userLastName: string,
    @Body('username') userUsername: string,
    @Body('password') userPassword: string,
    @Body('isAdmin') userIsAdmin: number,
    @Body('totalCollectedHearts') userTotalCollectedHearts: number,
    @Body('currentAmountOfHearts') userCurrentAmountOfHearts: number,
    @Body('totalMoneyDonated') userTotalMoneyDonated: number,
    @Body('totalHeartsDonated') userTotalHeartsDonated: number,
    @Body('totalTabsOpened') userTotalTabsOpened: number,
    @Body('dateJoined') userDateJoined: string,
  ) {
    const response = await this.usersService.insertUser(
      userName,
      userLastName,
      userUsername,
      userPassword,
      userIsAdmin,
      userTotalCollectedHearts,
      userCurrentAmountOfHearts,
      userTotalMoneyDonated,
      userTotalHeartsDonated,
      userTotalTabsOpened,
      userDateJoined,
    );
    return response;
  }

  @Get()
  async getAllUsers() {
    const response = await this.usersService.getUsers();
    return response;
  }

  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.usersService.getSingleUser(userId);
  }
  @Get('login/username=:username&password=:password')
  async loginUser(
    @Param('username') userUsername: string,
    @Param('password') userPassword: string,
  ) {
    return await this.usersService.checkLoginData(userUsername, userPassword);
  }
  @Get('username/:username')
  async checkUsername(@Param('username') userUsername: string) {
    return await this.usersService.checkUsernameAvailability(userUsername);
  }

  @Patch(':id')
  async updateUsert(
    @Param('id') userId: string,
    @Body('name') userName: string,
    @Body('lastName') userLastName: string,
    @Body('username') userUsername: string,
    @Body('password') userPassword: string,
    @Body('isAdmin') userIsAdmin: number,
    @Body('totalCollectedHearts') userTotalCollectedHearts: number,
    @Body('currentAmountOfHearts') userCurrentAmountOfHearts: number,
    @Body('totalMoneyDonated') userTotalMoneyDonated: number,
    @Body('totalHeartsDonated') userTotalHeartsDonated: number,
    @Body('totalTabsOpened') userTotalTabsOpened: number,
    @Body('dateJoined') userDateJoined: string,
  ) {
    await this.usersService.updateUser(
      userId,
      userName,
      userLastName,
      userUsername,
      userPassword,
      userIsAdmin,
      userTotalCollectedHearts,
      userCurrentAmountOfHearts,
      userTotalMoneyDonated,
      userTotalHeartsDonated,
      userTotalTabsOpened,
      userDateJoined,
    );
    return null;
  }

  @Delete(':id')
  async removeUser(@Param('id') userId: string) {
    await this.usersService.deleteUser(userId);
    return null;
  }
}
