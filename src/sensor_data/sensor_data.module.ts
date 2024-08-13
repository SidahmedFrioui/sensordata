import { Module } from '@nestjs/common';
import { SensorDataController } from './controllers/sensor_data.controller';
import { SensorDataRepository } from './repositories/sensor_data.repository';
import { SensorDataService } from './services/sensor_data.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SensorDataController],
  providers: [SensorDataService, ...SensorDataRepository],
})
export class SensorDataModule {}
