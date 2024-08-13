import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorDataModule } from './sensor_data/sensor_data.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [
    DatabaseModule,
    SensorDataModule,
    UserModule,
    DeviceModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
