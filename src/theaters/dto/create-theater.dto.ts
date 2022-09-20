import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { ITheaters } from '../interface/ITheaters';

export class CreateTheaterDto {
  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Trás o código de identificação da sala de cinema',
  })
  @IsNotEmpty()
  theatherId: number;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Agrupa os resultados de endereço e posicionamento geografico das salar',
  })
  @IsNotEmpty()
  location: ITheaters;
}
