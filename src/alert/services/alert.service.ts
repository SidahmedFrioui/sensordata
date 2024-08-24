import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Alert } from '../models/alert.entity';

@Injectable()
export class AlertService {
  constructor(
    @Inject('ALERT_REPOSITORY')
    private alertRepository: Repository<Alert>,
  ) {}

  async findAll(): Promise<Alert[]> {
    return await this.alertRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async create(alert: Alert): Promise<Alert> {
    return await this.alertRepository.save(alert);
  }
}
