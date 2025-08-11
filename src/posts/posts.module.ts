import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from './posts.model';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { User } from '../users/users.model';
import { Category } from '../categories/categories.model';
import { Comment } from '../comments/comments.model';

@Module({
  imports: [SequelizeModule.forFeature([Post, User, Category, Comment])],
  providers: [PostsService],
  controllers: [PostsController],
  exports: [PostsService],
})
export class PostsModule {}
