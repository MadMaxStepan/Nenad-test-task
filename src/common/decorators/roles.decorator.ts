import { ReflectMetadata } from '@nestjs/common';
import { UserRole } from '../enums/user-role.enum';

export const AcceptableRoles = (...roles: UserRole[]) => ReflectMetadata('roles', roles);
