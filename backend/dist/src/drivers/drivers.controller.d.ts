import { DriversService } from './drivers.service';
import type { AuthUser } from '../common/interfaces/auth-user.interface';
export declare class DriversController {
    private readonly driversService;
    constructor(driversService: DriversService);
    findAll(user: AuthUser): Promise<{
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
