import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/core/guards/auth.guard';
import { Alert } from '../models/alert.entity';
import { AlertService } from '../services/alert.service';

@Controller('alerts')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(): Promise<Alert[]> {
    return this.alertService.findAll();
  }

  @Post()
  createStore(@Body() alert: Alert): Promise<Alert> {
    return this.alertService.create(alert);
  }
}
