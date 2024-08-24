import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AlertRepository } from './repositories/alert.repository';
import { AlertController } from './controllers/alert.controller';
import { AlertService } from './services/alert.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AlertController],
  providers: [AlertService, ...AlertRepository],
  exports: [AlertService,]
})
export class AlertModule {}
