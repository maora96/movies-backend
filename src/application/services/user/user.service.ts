import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/model/User/User';
import { Repository } from 'typeorm';
import { EditUserDTO } from './dtos';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async update(body: EditUserDTO, id: string) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    user.edit(body);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      updatedAt: user.updatedAt,
      cratedAt: user.createdAt,
    };
  }

  async delete(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userRepository.softRemove(user);

    return true;
  }
}
