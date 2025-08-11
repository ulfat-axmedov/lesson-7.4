import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Post } from '../posts/posts.model';
import { User } from '../users/users.model';

@Table({ tableName: 'comments', timestamps: true })
export class Comment extends Model<Comment> {
  @Column({ type: DataType.STRING, allowNull: false })
  text: string;

  @ForeignKey(() => Post)
  @Column
  postId: number;

  @BelongsTo(() => Post)
  post: Post;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
