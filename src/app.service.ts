import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApp() {
    return (
      JSON.stringify({ message: 'BoxFul API is running' })
    )
  }
}
