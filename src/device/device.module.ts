import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DeviceController } from './controllers/device.controller';
import { DeviceRepository } from './repositories/device.repository';
import { DeviceService } from './services/device.service';
import { SensorDataRepository } from 'src/sensor_data/repositories/sensor_data.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [DeviceController],
  providers: [DeviceService, ...DeviceRepository, ...SensorDataRepository],
})
export class DeviceModule {}
