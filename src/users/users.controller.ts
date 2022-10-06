import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
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
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('paginate')
  findAndPaginate(@Query('limit') limit: number, @Query('skip') skip: number) {
    return this.usersService.findAndPaginate(skip, limit);
  }

  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return this.usersService.findOneUser(id);
  }

  @Get('search/:email')
  findUser(@Param('email') email: string) {
    return this.usersService.findUserByEmail(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
