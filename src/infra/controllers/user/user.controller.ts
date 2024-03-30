import { Body, Controller, Delete, Param, Patch } from '@nestjs/common';
import { UserService } from 'src/application/services/user/user.service';
import { UpdateUserDTO } from './dtos/signup.dto';

@Controller('/v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Patch()
  async update(@Body() body: UpdateUserDTO) {
    const content = await this.userService.update(body);

    return content;
  }

  @Delete()
  async delete(@Param('id') id: string) {
    const content = await this.userService.delete(id);

    return content;
  }
}
