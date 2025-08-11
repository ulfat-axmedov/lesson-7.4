import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model';
import { Post } from '../posts/posts.model';
import { Comment } from '../comments/comments.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Post, Comment])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
