import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  checkLiveness(): { status: string } {
    return { status: 'ok' };
  }
}