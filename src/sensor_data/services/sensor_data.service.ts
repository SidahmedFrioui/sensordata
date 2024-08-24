import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SensorData } from '../models/sensor_data.entity';
import { SensorDataGateway } from '../gateways/sensordata.gateway';
import { AlertService } from 'src/alert/services/alert.service';
import { Alert } from 'src/alert/models/alert.entity';

@Injectable()
export class SensorDataService {
  constructor(
    @Inject('SENSOR_DATA_REPOSITORY')
    private sensorDataRepository: Repository<SensorData>,
    private sensorDataGateway: SensorDataGateway,
    private alertService: AlertService,
  ) {}

  async findAll(): Promise<SensorData[]> {
    return await this.sensorDataRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findLatest(): Promise<SensorData | null> {
    const results = await this.sensorDataRepository.find({
      order: { createdAt: 'DESC' },
      take: 1,
    });
    return results[0] || null;
  }

  async create(sensorData: SensorData): Promise<SensorData> {
    this.alertService.create({
      type: 'threshold_exceeded',
    } as Alert);
    this.sensorDataGateway.emitNewData();
    return await this.sensorDataRepository.save(sensorData);
  }
}
