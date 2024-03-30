import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { UserService } from 'src/application/services/user/user.service';
import { UpdateUserDTO } from './dtos/signup.dto';
import { ClientGuard } from '../auth/client.guard';

@Controller('/v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(ClientGuard)
  @Patch('/:id')
  async update(@Body() body: UpdateUserDTO, @Param('id') id: string) {
    const content = await this.userService.update(body, id);

    return content;
  }

  @UseGuards(ClientGuard)
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const content = await this.userService.delete(id);

    return content;
  }
}
