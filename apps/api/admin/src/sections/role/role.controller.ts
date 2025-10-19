import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetRolesDto, GetRolesResponse, UserPublisher } from '@perfume-platform/common';
import { firstValueFrom } from 'rxjs';

@ApiTags('Роли')
@Controller('roles')
export class RoleController {
    constructor(
        private readonly userPublisher: UserPublisher
    ) { }

    @Get()
    @ApiOperation({
        description: 'Получить роли',
    })
    @ApiResponse({
        type: GetRolesResponse
    })
    getRoles(
        @Query() dto: GetRolesDto
    ) {
        return firstValueFrom(this.userPublisher.getRoles(dto))
    }
}