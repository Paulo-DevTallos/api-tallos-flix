import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  create() {
    console.log('testando');
    return 'This action adds a new auth';
  }
}
