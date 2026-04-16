import type { AuthUser } from '../common/interfaces/auth-user.interface';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
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
    updateTaskStatus(user: AuthUser, id: string, dto: UpdateTaskStatusDto): Promise<{
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
