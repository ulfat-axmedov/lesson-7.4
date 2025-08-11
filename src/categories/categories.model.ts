import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Post } from '../posts/posts.model';

@Table({ tableName: 'categories', timestamps: true })
export class Category extends Model<Category> {
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @HasMany(() => Post)
  posts: Post[];
}
