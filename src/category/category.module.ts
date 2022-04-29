
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { CategoryController } from './category.controller';
import { categoryProviders } from './category.providers';
import { CategoryService } from './category.service';


@Module({
  imports: [TypeOrmModule.forFeature(), DatabaseModule],
  controllers:[CategoryController],
  providers: [
    ...categoryProviders,
    CategoryService,
  ],
})
export class CategoryModule {}
