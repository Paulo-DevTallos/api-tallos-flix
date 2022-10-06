import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { ITheaters } from '../interface/ITheaters';

export class CreateTheaterDto {
  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Trás o código de identificação da sala de cinema',
  })
  @IsNotEmpty()
  theaterId: number;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Trás o nome da sala de cinema',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Agrupa os resultados de endereço e posicionamento geografico das salar',
  })
  @IsNotEmpty()
  location: ITheaters;
}
