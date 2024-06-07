import { DataSource } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'mysql-9b5fec5-sensordata.e.aivencloud.com',
        port: 23020,
        username: 'avnadmin',
        password: 'AVNS_nKOPM9ep06o_HQws2KI',
        database: 'defaultdb',
        synchronize: true,
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
      });

      return dataSource.initialize();
    },
  },
];