import { Inject, Injectable } from "@nestjs/common";
import { User } from "../models/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
        private jwtService: JwtService
    ) {}

    async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(email: string): Promise<User | undefined> {
        return await this.userRepository.findOne({ where: { email } });
    }

    async create(user: any): Promise<User> {
        return await this.userRepository.save(user);
    }

    async register(user: any): Promise<string> {
        const findUser = await this.findOne(user.email);
        if (findUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(user.password, 10);
    
        user.password = hashedPassword;

        const newUser = await this.create(user);

        return this.jwtService.sign({ username: newUser.email, sub: newUser.id });
    }

    async login(credentials: any): Promise<{token: string}> {
        const user = await this.findOne(credentials.username);
        const passwordMatch = await bcrypt.compare(credentials.password, user.password);

        if (!user || !passwordMatch) {
          throw new Error('Invalid credentials');
        }

        const token = this.jwtService.sign({ username: user.email, sub: user.id });

        return { token };
    }

    async validateUser(payload: any): Promise<any> {
        return this.findOne(payload.username);
    }
}