import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import UserRole from "./roles.enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    location: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.EMPLOYEE,
    })
    role: UserRole;
}