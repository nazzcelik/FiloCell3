"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const role_enum_1 = require("../common/enums/role.enum");
let VehiclesService = class VehiclesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getCompanyVehicles(user) {
        return this.prisma.vehicle.findMany({
            where: { companyId: user.companyId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getVehicleLiveData(user) {
        const vehicles = await this.prisma.vehicle.findMany({
            where: { companyId: user.companyId },
            select: {
                id: true,
                plateNumber: true,
                brand: true,
                model: true,
                status: true,
                driver: {
                    select: { id: true, fullName: true },
                },
                locationLogs: {
                    orderBy: { recordedAt: 'desc' },
                    take: 1,
                    select: {
                        latitude: true,
                        longitude: true,
                        speed: true,
                        heading: true,
                        recordedAt: true,
                    },
                },
            },
        });
        return vehicles.map((vehicle) => ({
            id: vehicle.id,
            plateNumber: vehicle.plateNumber,
            brand: vehicle.brand,
            model: vehicle.model,
            status: vehicle.status,
            driver: vehicle.driver,
            latestLocation: vehicle.locationLogs[0] ?? null,
        }));
    }
    async getVehicleHistory(user, vehicleId, query) {
        const vehicle = await this.prisma.vehicle.findFirst({
            where: {
                id: vehicleId,
                companyId: user.companyId,
            },
            select: {
                id: true,
                companyId: true,
                driverId: true,
                plateNumber: true,
            },
        });
        if (!vehicle) {
            throw new common_1.NotFoundException('Vehicle not found');
        }
        if (user.role === role_enum_1.Role.DRIVER && vehicle.driverId !== user.id) {
            throw new common_1.ForbiddenException('You can only access your own vehicle history');
        }
        const fromDate = query.from ? new Date(query.from) : undefined;
        const toDate = query.to ? new Date(query.to) : undefined;
        return this.prisma.locationLog.findMany({
            where: {
                vehicleId: vehicle.id,
                recordedAt: {
                    gte: fromDate,
                    lte: toDate,
                },
            },
            orderBy: { recordedAt: 'asc' },
        });
    }
};
exports.VehiclesService = VehiclesService;
exports.VehiclesService = VehiclesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VehiclesService);
//# sourceMappingURL=vehicles.service.js.map