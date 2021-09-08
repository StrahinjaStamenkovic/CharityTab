import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Charity } from './charity.model';

@Injectable()
export class CharitiesService {
  constructor(
    @InjectModel('Charity') private readonly charityModel: Model<Charity>,
  ) {}

  async insertCharity(
    name: string,
    description: string,
    imagePath: string,
    link: string,
    totalHeartsDonated: number,
    totalMoneyRaised: number,
  ) {
    const newCharity = new this.charityModel({
      name,
      description,
      imagePath,
      link,
      totalHeartsDonated,
      totalMoneyRaised,
    });
    const result = await newCharity.save();
    return {
      statusCode: 200,
      charity: {
        id: result.id,
        name: result.name,
        description: result.description,
        imagePath: result.imagePath,
        link: result.link,
        totalHeartsDonated: result.totalHeartsDonated,
        totalMoneyRaised: result.totalMoneyRaised,
      },
    };
  }

  async getCharities() {
    const charities = await this.charityModel.find().exec();
    return {
      statusCode: 200,
      charities: charities.map((charity) => ({
        id: charity.id,
        name: charity.name,
        description: charity.description,
        imagePath: charity.imagePath,
        link: charity.link,
        totalHeartsDonated: charity.totalHeartsDonated,
        totalMoneyRaised: charity.totalMoneyRaised,
      })),
    };
  }

  async getSingleCharity(charityId: string) {
    const charity = (await this.findCharity(charityId)).charity;
    return {
      statusCode: 200,
      charity: {
        id: charity.id,
        name: charity.name,
        description: charity.description,
        imagePath: charity.imagePath,
        link: charity.link,
        totalHeartsDonated: charity.totalHeartsDonated,
        totalMoneyRaised: charity.totalMoneyRaised,
      },
    };
  }

  async updateCharity(
    charityId: string,
    name: string,
    description: string,
    imagePath: string,
    link: string,
    totalHeartsDonated: number,
    totalMoneyRaised: number,
  ) {
    const updatedCharity = (await this.findCharity(charityId)).charity;
    if (name) {
      updatedCharity.name = name;
    }
    if (description) {
      updatedCharity.description = description;
    }
    if (imagePath) {
      updatedCharity.imagePath = imagePath;
    }
    if (link) {
      updatedCharity.link = link;
    }
    if (totalHeartsDonated) {
      updatedCharity.totalHeartsDonated = totalHeartsDonated;
    }
    if (totalMoneyRaised) {
      updatedCharity.totalMoneyRaised = totalMoneyRaised;
    }
    updatedCharity.save();
    return {
      statusCode: 200,
      charity: {
        id: updatedCharity.id,
        name: updatedCharity.name,
        description: updatedCharity.description,
        imagePath: updatedCharity.imagePath,
        link: updatedCharity.link,
        totalHeartsDonated: updatedCharity.totalHeartsDonated,
        totalMoneyRaised: updatedCharity.totalMoneyRaised,
      },
    };
  }

  async deleteCharity(charityId: string) {
    const result = await this.charityModel.deleteOne({ _id: charityId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find charity.');
    }
  }

  private async findCharity(
    id: string,
  ): Promise<{ statusCode: number; charity: Charity }> {
    let charity;
    try {
      charity = await this.charityModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find charity.');
    }
    if (!charity) {
      throw new NotFoundException('Could not find charity.');
    }
    return { statusCode: 200, charity };
  }
}
