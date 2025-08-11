import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Post } from '../posts/posts.model';
import { Comment } from '../comments/comments.model';

@Table({ tableName: 'users', timestamps: true })
export class User extends Model<User> {
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @HasMany(() => Post)
  posts: Post[];

  @HasMany(() => Comment)
  comments: Comment[];
}
