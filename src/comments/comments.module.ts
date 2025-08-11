import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from './comments.model';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { Post } from '../posts/posts.model';
import { User } from '../users/users.model';

@Module({
  imports: [SequelizeModule.forFeature([Comment, Post, User])],
  providers: [CommentsService],
  controllers: [CommentsController],
  exports: [CommentsService],
})
export class CommentsModule {}
