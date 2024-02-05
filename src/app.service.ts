import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService){}
  getHello(): string {
    return `The port in the development is : ${this.configService.get<number>('port')}`
  }
}
