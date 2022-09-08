import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { isPublic } from 'src/auth/decorators/is-public-decorator';

@ApiTags('users')
@ApiBearerAuth('JWT-auth')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @isPublic()
  @Post('POST')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('GET')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('GET/:email')
  findOne(@Param('email') email: string) {
    return this.usersService.findOneByEmail(email);
  }

  @Patch('PATCH/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('DELETE/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
