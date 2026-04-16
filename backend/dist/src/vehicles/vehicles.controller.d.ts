import type { AuthUser } from '../common/interfaces/auth-user.interface';
import { VehiclesService } from './vehicles.service';
import { LocationHistoryQueryDto } from './dto/location-history-query.dto';
export declare class VehiclesController {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    getVehicles(user: AuthUser): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        companyId: string;
        plateNumber: string;
        brand: string;
        model: string;
        year: number;
        fuelType: import("@prisma/client").$Enums.FuelType;
        currentKm: number;
        status: import("@prisma/client").$Enums.VehicleStatus;
        driverId: string | null;
    }[]>;
    getVehiclesLive(user: AuthUser): Promise<{
        id: string;
        plateNumber: string;
        brand: string;
        model: string;
        status: import("@prisma/client").$Enums.VehicleStatus;
        driver: {
            id: string;
            fullName: string;
        } | null;
        latestLocation: {
            recordedAt: Date;
            latitude: number;
            longitude: number;
            speed: number;
            heading: number;
        };
    }[]>;
    getVehicleHistory(user: AuthUser, id: string, query: LocationHistoryQueryDto): Promise<{
        id: string;
        vehicleId: string;
        recordedAt: Date;
        latitude: number;
        longitude: number;
        speed: number;
        heading: number;
    }[]>;
}
