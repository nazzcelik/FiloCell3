import type { AuthUser } from '../common/interfaces/auth-user.interface';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMe(user: AuthUser): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        fullName: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        phone: string;
        isActive: boolean;
        companyId: string;
    }>;
}
