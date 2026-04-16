import { PrismaService } from '../prisma/prisma.service';
import { AuthUser } from '../common/interfaces/auth-user.interface';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
export declare class TasksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getTasks(user: AuthUser): import("@prisma/client").Prisma.PrismaPromise<({
        driver: {
            id: string;
            fullName: string;
            email: string;
        };
        vehicle: {
            id: string;
            plateNumber: string;
            brand: string;
            model: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        status: import("@prisma/client").$Enums.TaskStatus;
        driverId: string;
        title: string;
        startLocation: string;
        destinationLocation: string;
        estimatedMinutes: number;
        notes: string | null;
        vehicleId: string;
    })[]>;
    updateDriverTaskStatus(user: AuthUser, taskId: string, dto: UpdateTaskStatusDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        status: import("@prisma/client").$Enums.TaskStatus;
        driverId: string;
        title: string;
        startLocation: string;
        destinationLocation: string;
        estimatedMinutes: number;
        notes: string | null;
        vehicleId: string;
    }>;
}
