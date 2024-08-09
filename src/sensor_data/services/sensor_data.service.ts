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

  async create(sensorData: SensorData): Promise<SensorData> {
    return await this.sensorDataRepository.save(sensorData);
  }
}
