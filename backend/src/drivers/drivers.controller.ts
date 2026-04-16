import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DriversService } from './drivers.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import type { AuthUser } from '../common/interfaces/auth-user.interface';

@ApiTags('Drivers')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Get()
  @ApiOperation({ summary: 'Şirkete ait tüm sürücüleri listele' })
  @ApiResponse({ status: 200, description: 'Sürücü listesi döndürüldü' })
  @ApiResponse({ status: 401, description: 'Kimlik doğrulama gerekli' })
  async findAll(@CurrentUser() user: AuthUser) {
    return this.driversService.findAllByCompany(user);
  }
}
