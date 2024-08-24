import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SensorDataService } from '../services/sensor_data.service';
import { SensorData } from '../models/sensor_data.entity';
import { JwtAuthGuard } from 'src/core/guards/auth.guard';

@Controller('sensordata')
export class SensorDataController {
  constructor(private readonly sensorDataService: SensorDataService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(): Promise<SensorData[]> {
    return this.sensorDataService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/latest')
  getLatest(): Promise<SensorData> {
    return this.sensorDataService.findLatest();
  }

  @Post()
  createStore(@Body() sensorData: SensorData): Promise<SensorData> {
    return this.sensorDataService.create(sensorData);
  }
}
