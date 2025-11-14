import { Controller,Get,Query,UseGuards } from '@nestjs/common';
import { ApiOkResponse,ApiOperation,ApiTags } from '@nestjs/swagger';
import { GetRolesDto,GetRolesResponse,UserPublisher } from '@perfume-platform/common';
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from '../../modules/auth/auth.guard';

@ApiTags('Роли')
@UseGuards(AuthGuard)
@Controller('roles')
export class RoleController {
    constructor(
        private readonly userPublisher: UserPublisher
    ) { }

    @Get()
    @ApiOperation({
        description: 'Получить роли',
    })
    @ApiOkResponse({
        type: GetRolesResponse
    })
    getRoles(
        @Query() dto: GetRolesDto
    ) {
        return firstValueFrom(this.userPublisher.getRoles(dto))
    }
}