import { Body, Controller, Get, Param, Patch, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import type { AuthUser } from '../common/interfaces/auth-user.interface';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { TasksService } from './tasks.service';

@ApiTags('Tasks')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @Roles(Role.ADMIN, Role.FLEET_MANAGER, Role.DRIVER)
  @ApiOperation({ summary: 'Get tasks by role scope' })
  @ApiResponse({ status: 200, description: 'Tasks list' })
  getTasks(@CurrentUser() user: AuthUser) {
    return this.tasksService.getTasks(user);
  }

  @Patch(':id/status')
  @Roles(Role.DRIVER)
  @ApiOperation({ summary: 'Driver updates own task status' })
  @ApiResponse({ status: 200, description: 'Updated task' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  updateTaskStatus(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Body() dto: UpdateTaskStatusDto,
  ) {
    return this.tasksService.updateDriverTaskStatus(user, id, dto);
  }
}
