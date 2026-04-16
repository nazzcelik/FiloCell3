import { PrismaService } from '../prisma/prisma.service';
import { AuthUser } from '../common/interfaces/auth-user.interface';
export declare class DriversService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllByCompany(user: AuthUser): Promise<{
        id: string;
        createdAt: Date;
        fullName: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        phone: string;
        isActive: boolean;
        assignedVehicle: {
            id: string;
            plateNumber: string;
            brand: string;
            model: string;
            status: import("@prisma/client").$Enums.VehicleStatus;
        }[];
    }[]>;
}
