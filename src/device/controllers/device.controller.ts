import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { DeviceService } from '../services/device.service';
import { Device } from '../models/device.entity';
import { SensorData } from 'src/sensor_data/models/sensor_data.entity';
import { JwtAuthGuard } from 'src/core/guards/auth.guard';

@Controller('devices')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(): Promise<Device[]> {
    return this.deviceService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('history/:id')
  getHistory(@Param('id') id: any): Promise<SensorData[]> {
    return this.deviceService.getHistory(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: any): Promise<Device> {
    return this.deviceService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createStore(@Body() device: Device): Promise<Device> {
    return this.deviceService.create(device);
  }
}
