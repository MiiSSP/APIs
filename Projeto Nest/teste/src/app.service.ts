import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Love of my life, you've hurt me You've broken my heart, and now you leave me`;
  }

  getFoi(): string {
  return `Love of my life, can't you see?`;
}
}