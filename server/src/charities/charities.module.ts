import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CharitiesController } from './charities.controller';
import { CharitiesService } from './charities.service';
import { CharitySchema } from './charity.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Charity', schema: CharitySchema }]),
  ],
  controllers: [CharitiesController],
  providers: [CharitiesService],
})
export class CharitiesModule {}
