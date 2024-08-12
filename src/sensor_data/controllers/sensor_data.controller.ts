import { Body, Controller, Get, Post } from '@nestjs/common';
import { SensorDataService } from '../services/sensor_data.service';
import { SensorData } from '../models/sensor_data.entity';

@Controller('sensordata')
export class SensorDataController {
  constructor(private readonly sensorDataService: SensorDataService) {}

  @Get()
  getAll(): Promise<SensorData[]> {
    return this.sensorDataService.findAll();
  }

  @Get('/latest')
  getLatest(): Promise<SensorData> {
    return this.sensorDataService.findLatest();
  }

  @Post()
  createStore(@Body() sensorData: SensorData): Promise<SensorData> {
    return this.sensorDataService.create(sensorData);
  }
}
