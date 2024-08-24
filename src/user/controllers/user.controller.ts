import { Controller, Post, Body, Get, UseGuards, Req } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { User } from "../models/user.entity";
import { AuthGuard } from "@nestjs/passport";
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from "src/core/guards/auth.guard";

export const GetUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return request.user;
  },
);

@Controller('users')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getMe(@Req() req: any) {
        return this.userService.findById(req.user.userId);
    }

    @Post('login')
    async login(@Body() credentials: any): Promise<{token: string}> {
        return this.userService.login(credentials);
    }

    @Post()
    createUser(@Body() userData: any): Promise<string> {
        return this.userService.register(userData);
    }
}