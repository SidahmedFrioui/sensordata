import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorDataModule } from './sensor_data/sensor_data.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { DeviceModule } from './device/device.module';
import { AlertModule } from './alert/alert.module';

@Module({
  imports: [
    DatabaseModule,
    SensorDataModule,
    UserModule,
    DeviceModule,
    AlertModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
