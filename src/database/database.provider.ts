import { DataSource } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '',
        port: 23020,
        username: '',
        password: '',
        database: 'defaultdb',
        synchronize: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      });

      return dataSource.initialize();
    },
  },
];
