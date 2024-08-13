import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Device } from '../models/device.entity';

@Injectable()
export class DeviceService {
  constructor(
    @Inject('DEVICE_REPOSITORY')
    private deviceRepository: Repository<Device>,
  ) {}

  async findAll(): Promise<Device[]> {
    return await this.deviceRepository.find();
  }

  async findOne(id: any): Promise<Device> {
    return await this.deviceRepository.findOne(id);
  }

  async create(device: Device): Promise<Device> {
    return await this.deviceRepository.save(device);
  }
}
