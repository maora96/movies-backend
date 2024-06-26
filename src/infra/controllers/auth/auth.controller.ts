import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/application/services/auth/auth.service';
import { SignInDTO } from './dtos/signin.dto';
import { SignUpDTO } from './dtos/signup.dto';
import { AdminGuard } from './admin.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async signIn(@Body() body: SignInDTO) {
    const content = await this.authService.signIn(body.email, body.password);

    return content;
  }

  @UseGuards(AdminGuard)
  @Post('signup')
  async signUp(@Body() body: SignUpDTO) {
    const content = await this.authService.signUp(
      body.email,
      body.password,
      body.name,
      body.role,
    );

    return content;
  }
}
