import { AuthUser } from '../common/interfaces/auth-user.interface';
import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    } | null>;
}
