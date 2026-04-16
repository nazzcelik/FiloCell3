import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthUser } from '../common/interfaces/auth-user.interface';

@Injectable()
export class DriversService {
  constructor(private readonly prisma: PrismaService) {}

  /** Şirkete ait DRIVER rolündeki tüm kullanıcıları döndürür */
  async findAllByCompany(user: AuthUser) {
    return this.prisma.user.findMany({
      where: {
        companyId: user.companyId,
        role: 'DRIVER',
        isActive: true,
      },
      select: {
        id:        true,
        fullName:  true,
        email:     true,
        phone:     true,
        role:      true,
        isActive:  true,
        createdAt: true,
        // Atanmış araç bilgisi (schema: assignedVehicle)
        assignedVehicle: {
          select: {
            id:          true,
            plateNumber: true,
            brand:       true,
            model:       true,
            status:      true,
          },
        },
      },
      orderBy: { fullName: 'asc' },
    });
  }
}
