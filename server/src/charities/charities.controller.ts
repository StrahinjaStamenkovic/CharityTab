import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { CharitiesService } from './charities.service';

@Controller('charities')
export class CharitiesController {
  constructor(private readonly charitiesService: CharitiesService) {}

  @Post()
  async addCharity(
    @Body('name') charityName: string,
    @Body('description') charityDescription: string,
    @Body('imagePath') charityImagePath: string,
    @Body('link') charityLink: string,
    @Body('totalHeartsDonated') charityTotalHeartsDonated: number,
    @Body('totalMoneyRaised') charityTotalMoneyRaised: number,
  ) {
    const response = await this.charitiesService.insertCharity(
      charityName,
      charityDescription,
      charityImagePath,
      charityLink,
      charityTotalHeartsDonated,
      charityTotalMoneyRaised,
    );
    return response;
  }

  @Get()
  async getAllCharities() {
    const response = await this.charitiesService.getCharities();
    return response;
  }

  @Get(':id')
  getCharity(@Param('id') charityId: string) {
    return this.charitiesService.getSingleCharity(charityId);
  }

  @Patch(':id')
  async updateCharity(
    @Param('id') charityId: string,
    @Body('name') charityName: string,
    @Body('description') charityDescription: string,
    @Body('imagePath') charityImagePath: string,
    @Body('link') charityLink: string,
    @Body('totalHeartsDonated') charityTotalHeartsDonated: number,
    @Body('totalMoneyRaised') charityTotalMoneyRaised: number,
  ) {
    const response = await this.charitiesService.updateCharity(
      charityId,
      charityName,
      charityDescription,
      charityImagePath,
      charityLink,
      charityTotalHeartsDonated,
      charityTotalMoneyRaised,
    );
    return response;
  }

  @Delete(':id')
  async removeCharity(@Param('id') charityId: string) {
    await this.charitiesService.deleteCharity(charityId);
    return null;
  }
}
