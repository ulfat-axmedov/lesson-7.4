import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  create(dto: any) {
    return this.userModel.create(dto);
  }

  findAll() {
    return this.userModel.findAll({ include: { all: true, nested: true } });
  }

  async findOne(id: number) {
    const user = await this.userModel.findByPk(id, { include: { all: true, nested: true } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: number, dto: any) {
    const user = await this.findOne(id);
    return user.update(dto);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    await user.destroy();
    return { deleted: true };
  }
}
