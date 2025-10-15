import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetRolesDto, GetRolesResponse, UsersPublisher } from '@perfume-platform/common';
import { firstValueFrom } from 'rxjs';

@ApiTags('Роли')
@Controller('roles')
export class RoleController {
    constructor(
        private readonly usersPublisher: UsersPublisher
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
        return firstValueFrom(this.usersPublisher.getRoles(dto))
    }
}