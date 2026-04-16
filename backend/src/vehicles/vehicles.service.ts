import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthUser } from '../common/interfaces/auth-user.interface';
import { Role } from '../common/enums/role.enum';
import { LocationHistoryQueryDto } from './dto/location-history-query.dto';

@Injectable()
export class VehiclesService {
  constructor(private readonly prisma: PrismaService) {}

  getCompanyVehicles(user: AuthUser) {
    return this.prisma.vehicle.findMany({
      where: { companyId: user.companyId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getVehicleLiveData(user: AuthUser) {
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

  async getVehicleHistory(
    user: AuthUser,
    vehicleId: string,
    query: LocationHistoryQueryDto,
  ) {
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
      throw new NotFoundException('Vehicle not found');
    }

    if (user.role === Role.DRIVER && vehicle.driverId !== user.id) {
      throw new ForbiddenException('You can only access your own vehicle history');
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
}
