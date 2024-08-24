import { DataSource } from 'typeorm';
import { Alert } from '../models/alert.entity';

export const AlertRepository = [
  {
    provide: 'ALERT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Alert),
    inject: ['DATA_SOURCE'],
  },
];
