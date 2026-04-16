import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import type { AuthUser } from '../common/interfaces/auth-user.interface';
import { VehiclesService } from './vehicles.service';
import { LocationHistoryQueryDto } from './dto/location-history-query.dto';

@ApiTags('Vehicles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  @ApiOperation({ summary: 'Get vehicles for authenticated user company' })
  @ApiResponse({ status: 200, description: 'Company vehicles list' })
  getVehicles(@CurrentUser() user: AuthUser) {
    return this.vehiclesService.getCompanyVehicles(user);
  }

  @Get('live')
  @ApiOperation({ summary: 'Get latest known location per vehicle' })
  @ApiResponse({ status: 200, description: 'Vehicles with latest location data' })
  getVehiclesLive(@CurrentUser() user: AuthUser) {
    return this.vehiclesService.getVehicleLiveData(user);
  }

  @Get(':id/history')
  @ApiOperation({ summary: 'Get vehicle location history by date range' })
  @ApiResponse({ status: 200, description: 'Vehicle location history' })
  getVehicleHistory(
    @CurrentUser() user: AuthUser,
    @Param('id') id: string,
    @Query() query: LocationHistoryQueryDto,
  ) {
    return this.vehiclesService.getVehicleHistory(user, id, query);
  }
}
