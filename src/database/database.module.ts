import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from './sequelize.config';
import { User } from '../users/users.model';
import { Post } from '../posts/posts.model';
import { Comment } from '../comments/comments.model';
import { Category } from '../categories/categories.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...sequelizeConfig,
      models: [User, Post, Comment, Category],
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
