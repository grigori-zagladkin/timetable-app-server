import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/registartion')
  registration(@Body() dto: CreateUserDto) {}

  @Post('/login')
  login(@Body() dto: LoginUserDto) {}

  @Post('/logout')
  logout() {}
}
