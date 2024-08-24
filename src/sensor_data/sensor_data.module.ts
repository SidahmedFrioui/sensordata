import { Module } from '@nestjs/common';
import { SensorDataController } from './controllers/sensor_data.controller';
import { SensorDataRepository } from './repositories/sensor_data.repository';
import { SensorDataService } from './services/sensor_data.service';
import { DatabaseModule } from 'src/database/database.module';
import { SensorDataGateway } from './gateways/sensordata.gateway';
import { AlertModule } from 'src/alert/alert.module';

@Module({
  imports: [DatabaseModule, AlertModule,],
  controllers: [SensorDataController],
  providers: [SensorDataService, ...SensorDataRepository, SensorDataGateway],
})
export class SensorDataModule {}
