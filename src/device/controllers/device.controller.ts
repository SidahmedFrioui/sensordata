import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DeviceService } from '../services/device.service';
import { Device } from '../models/device.entity';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Get()
  getAll(): Promise<Device[]> {
    return this.deviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: any): Promise<Device> {
    return this.deviceService.findOne(id);
  }

  @Post()
  createStore(@Body() device: Device): Promise<Device> {
    return this.deviceService.create(device);
  }
}
