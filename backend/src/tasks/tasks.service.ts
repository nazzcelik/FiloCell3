import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthUser } from '../common/interfaces/auth-user.interface';
import { Role } from '../common/enums/role.enum';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  getTasks(user: AuthUser) {
    const where =
      user.role === Role.DRIVER
        ? { companyId: user.companyId, driverId: user.id }
        : { companyId: user.companyId };

    return this.prisma.task.findMany({
      where,
      include: {
        vehicle: {
          select: {
            id: true,
            plateNumber: true,
            brand: true,
            model: true,
          },
        },
        driver: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateDriverTaskStatus(
    user: AuthUser,
    taskId: string,
    dto: UpdateTaskStatusDto,
  ) {
    const task = await this.prisma.task.findFirst({
      where: {
        id: taskId,
        companyId: user.companyId,
      },
      select: {
        id: true,
        driverId: true,
      },
    });

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    if (task.driverId !== user.id) {
      throw new ForbiddenException('You can only update your own tasks');
    }

    return this.prisma.task.update({
      where: { id: task.id },
      data: { status: dto.status },
    });
  }
}
