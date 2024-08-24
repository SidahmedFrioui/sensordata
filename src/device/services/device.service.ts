import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Device } from '../models/device.entity';
import { SensorData } from 'src/sensor_data/models/sensor_data.entity';

@Injectable()
export class DeviceService {
  constructor(
    @Inject('DEVICE_REPOSITORY')
    private deviceRepository: Repository<Device>,
    @Inject('SENSOR_DATA_REPOSITORY')
    private sensorData: Repository<SensorData>,
  ) {}

  async findAll(): Promise<Device[]> {
    return await this.deviceRepository.find();
  }

  async findOne(id: any): Promise<Device> {
    return await this.deviceRepository.findOne(id);
  }

  async getHistory(sensorID: string): Promise<SensorData[]> {
    return await this.sensorData.find({
      order: { createdAt: 'DESC' },
      where: { sensorID: sensorID },
    });
  }

  async create(device: Device): Promise<Device> {
    return await this.deviceRepository.save(device);
  }
}
