import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SensorData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  temp: number;

  @Column()
  humidity: number;

  @Column()
  co: number;

  @Column()
  smoke: number;

  @Column()
  lpg: number;
}
