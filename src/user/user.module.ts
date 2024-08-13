import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UserService } from "./services/user.service";
import { UserRepository } from "./repositories/user.repository";
import { UserController } from "./controllers/user.controller";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports: [
        DatabaseModule,
        JwtModule.register({
            secret: 'GxsZIRO90_(èlm099LLMbx*',
            signOptions: { expiresIn: '1h' },
        })
    ],
    providers: [
        UserService,
        JwtStrategy,
        ...UserRepository
    ],
    controllers: [
        UserController
    ]
})
export class UserModule {}