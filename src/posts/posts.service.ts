import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private model: typeof Post) {}

  create(dto: any) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.findAll({ include: { all: true, nested: true } });
  }

  async findOne(id: number) {
    const item = await this.model.findByPk(id, { include: { all: true, nested: true } });
    if (!item) throw new NotFoundException('Post not found');
    return item;
  }

  async update(id: number, dto: any) {
    const item = await this.findOne(id);
    return item.update(dto);
  }

  async remove(id: number) {
    const item = await this.findOne(id);
    await item.destroy();
    return { deleted: true };
  }
}
