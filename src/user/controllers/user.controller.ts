import { Controller, Post, Body, Get, UseGuards } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { User } from "../models/user.entity";
import { AuthGuard } from "@nestjs/passport";
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

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

    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    @Get('me')
    @UseGuards(AuthGuard('jwt')) 
    getProfile(@GetUser() user) {
        const { password, ...currentUser } = user;
        return currentUser;
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