import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class SensorData {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  temp: number;

  @Column()
  sensorID: number;

  @Column()
  heatIndex: number;

  @Column()
  humidity: number;

  @Column()
  co: number;

  @Column()
  smoke: number;

  @Column()
  lpg: number;
}
