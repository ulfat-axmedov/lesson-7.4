import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Post } from '../posts/posts.model';

@Module({
  imports: [SequelizeModule.forFeature([Category, Post])],
  providers: [CategoriesService],
  controllers: [CategoriesController],
  exports: [CategoriesService],
})
export class CategoriesModule {}
