import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let sda = 234;
    return 'Hello World!';
  }
}
