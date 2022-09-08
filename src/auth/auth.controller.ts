import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/auth.request';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('login')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('POST')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  login(@Request() req: AuthRequest) {
    const user = req as any;
    const userId = user.user.email;
    const token = this.authService.login(req.user);
    const session_token = token.access_token;
    this.authService.registerSession(userId, session_token);
    return token;
  }
}
