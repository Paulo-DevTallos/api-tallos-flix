import { ApiProperty } from '@nestjs/swagger';
import { ITheaters } from '../interface/ITheaters';

export class CreateTheaterDto {
  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Trás o código de identificação da sala de cinema',
  })
  theatherId: number;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Agrupa os resultados de endereço e posicionamento geografico das salar',
  })
  location: ITheaters;
}
