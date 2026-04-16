import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsISO8601, IsOptional } from 'class-validator';

export class LocationHistoryQueryDto {
  @ApiPropertyOptional({ example: '2026-04-15T00:00:00.000Z' })
  @IsOptional()
  @IsISO8601()
  from?: string;

  @ApiPropertyOptional({ example: '2026-04-16T23:59:59.999Z' })
  @IsOptional()
  @IsISO8601()
  to?: string;
}
