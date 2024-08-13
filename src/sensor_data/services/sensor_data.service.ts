import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SensorData } from '../models/sensor_data.entity';

@Injectable()
export class SensorDataService {
  constructor(
    @Inject('SENSOR_DATA_REPOSITORY')
    private sensorDataRepository: Repository<SensorData>,
  ) {}

  async findAll(): Promise<SensorData[]> {
    return await this.sensorDataRepository.find();
  }

  async findLatest(): Promise<SensorData | null> {
    const results = await this.sensorDataRepository.find({
      order: { createdAt: 'DESC' },
      take: 1,
    });
    return results[0] || null;
  }

  async create(sensorData: SensorData): Promise<SensorData> {
    return await this.sensorDataRepository.save(sensorData);
  }
}
