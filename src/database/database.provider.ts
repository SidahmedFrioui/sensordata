import { env } from 'process';
import { DataSource } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: env.DATABASE_HOST,
        port: parseInt(env.DATABASE_PORT),
        username: env.DATABASE_USERNAME,
        password: env.DATABASE_PASSWORD,
        database: env.DATABASE_NAME,
        synchronize: true,
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
      });

      return dataSource.initialize();
    },
  },
];