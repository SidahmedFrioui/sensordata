import { DataSource } from 'typeorm';
import { Device } from '../models/device.entity';

export const DeviceRepository = [
  {
    provide: 'DEVICE_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Device),
    inject: ['DATA_SOURCE'],
  },
];
