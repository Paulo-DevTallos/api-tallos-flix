import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  _id?: string;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
