import { Injectable } from '@nestjs/common';
import { Book } from '@nx-dev-starter/api-one-interfaces';

@Injectable()
export class AppService {
  getData(): Book {
    return ({ name: 'Angular', author: 'Nest' });
  }
}
