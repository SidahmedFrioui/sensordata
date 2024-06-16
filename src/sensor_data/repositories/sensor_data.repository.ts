import { DataSource } from 'typeorm';
import { SensorData } from '../models/sensor_data.entity';

export const SensorDataRepository = [
  {
    provide: 'SENSOR_DATA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(SensorData),
    inject: ['DATA_SOURCE'],
  },
];