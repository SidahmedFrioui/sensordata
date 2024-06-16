import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorDataModule } from './sensor_data/sensor_data.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    SensorDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
