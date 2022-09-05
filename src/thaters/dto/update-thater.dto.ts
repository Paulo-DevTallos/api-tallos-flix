import { PartialType } from '@nestjs/mapped-types';
import { CreateThaterDto } from './create-thater.dto';

export class UpdateThaterDto extends PartialType(CreateThaterDto) {}
