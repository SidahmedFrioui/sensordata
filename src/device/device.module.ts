import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { DeviceController } from './controllers/device.controller';
import { DeviceRepository } from './repositories/device.repository';
import { DeviceService } from './services/device.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DeviceController],
  providers: [DeviceService, ...DeviceRepository],
})
export class DeviceModule {}
