import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { SetMetadata } from '@nestjs/common';
import UserRole from '../models/roles.enum';

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
  
    canActivate(context: ExecutionContext): boolean {
      const requiredRoles = this.reflector.get<UserRole[]>('roles', context.getHandler());
  
      if (!requiredRoles) {
        return true;
      }
  
      const request = context.switchToHttp().getRequest();
      const user = request.user;
  
      if (user && user.role) {
        return requiredRoles.some((role) => role === user.role);
      }
  
      return false;
    }
}
  
  
  
  

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);