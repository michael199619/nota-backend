import { Body,Controller,Delete,Get,Param,ParseUUIDPipe,Post,Put,Query,UseGuards } from '@nestjs/common';
import { ApiOkResponse,ApiOperation,ApiTags } from '@nestjs/swagger';
import { AddSalaryUserResponse,ChangeRoleUserResponse,CreateUserDto,CreateUserResponse,EditUserResponse,GetAllUsersDto,GetAllUsersResponse,GetSalaryUserResponse,GetSalaryUsersDto,GetSalaryUsersResponse,GetUserResponse,OrderPublisher,RemoveSalaryUserResponse,RemoveUserResponse,UserPublisher } from '@perfume-platform/common';
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from '../../modules/auth/auth.guard';
import { AdminAddSalaryUserDto,AdminChangeRoleUserDto,AdminEditUserDto,AdminGetSalaryUserDto,AdminGetUserDto,AdminRemoveSalaryUserDto } from './user.dto';
@ApiTags('Пользователи')
@UseGuards(AuthGuard)
@Controller('users')
export class UserController {
    constructor(
        private readonly userPublisher: UserPublisher,
        private readonly orderPublisher: OrderPublisher
    ) { }

    @Post(':id/salary')
    @ApiOperation({
        description: 'Добавить зарплату пользователю',
    })
    @ApiOkResponse({
        type: AddSalaryUserResponse
    })
    addSalaryUser(
        @Body() dto: AdminAddSalaryUserDto,
        @Param('id',ParseUUIDPipe) id: string
    ) {
        return firstValueFrom(this.userPublisher.addSalaryUser({ ...dto,id }))
    }

    @Post(':id/role')
    @ApiOperation({
        description: 'Изменить роль пользователя',
    })
    @ApiOkResponse({
        type: ChangeRoleUserResponse
    })
    changeRoleUser(
        @Body() dto: AdminChangeRoleUserDto,
        @Param('id',ParseUUIDPipe) id: string
    ) {
        return firstValueFrom(this.userPublisher.changeRoleUser({ ...dto,id }))
    }

    @Post()
    @ApiOperation({
        description: 'Создать пользователя',
    })
    @ApiOkResponse({
        type: CreateUserResponse
    })
    createUser(
        @Body() dto: CreateUserDto
    ) {
        return firstValueFrom(this.userPublisher.createUser(dto))
    }

    @Put(':id')
    @ApiOperation({
        description: 'Редактировать пользователя',
    })
    @ApiOkResponse({
        type: EditUserResponse
    })
    editUser(
        @Body() dto: AdminEditUserDto,
        @Param('id',ParseUUIDPipe) id: string
    ) {
        return firstValueFrom(this.userPublisher.editUser({ ...dto,id }))
    }

    @Get()
    @ApiOperation({
        description: 'Получить пользователей',
    })
    @ApiOkResponse({
        type: GetAllUsersResponse
    })
    getAll(
        @Query() dto: GetAllUsersDto
    ) {
        return firstValueFrom(this.userPublisher.getAllUsers(dto))
    }

    @Get(':id/salary')
    @ApiOperation({
        description: 'Получить пользователя с зарплатой',
    })
    @ApiOkResponse({
        type: GetSalaryUserResponse
    })
    getSalaryUser(
        @Query() dto: AdminGetSalaryUserDto,
        @Param('id',ParseUUIDPipe) id: string
    ) {
        return firstValueFrom(this.userPublisher.getSalaryUser({ id,...dto }))
    }

    @Get('salary')
    @ApiOperation({
        description: 'Получить пользователей с зарплатой',
    })
    @ApiOkResponse({
        type: GetSalaryUsersResponse
    })
    getSalaryUsers(
        @Query() dto: GetSalaryUsersDto
    ) {
        return firstValueFrom(this.userPublisher.getSalaryUsers(dto))
    }

    @Get(':id')
    @ApiOperation({
        description: 'Получить пользователя',
    })
    @ApiOkResponse({
        type: GetUserResponse
    })
    getUser(
        @Param('id',ParseUUIDPipe) id: string,
        @Query() dto: AdminGetUserDto
    ) {
        return firstValueFrom(this.userPublisher.getUser({ id,...dto }))
    }

    @Delete(':id/salary')
    @ApiOperation({
        description: 'Удалить зарплату пользователя',
    })
    @ApiOkResponse({
        type: RemoveSalaryUserResponse
    })
    removeSalaryUser(
        @Param('id',ParseUUIDPipe) userId: string,
        @Body() dto: AdminRemoveSalaryUserDto
    ) {
        return firstValueFrom(this.userPublisher.removeSalaryUser({ userId,...dto }))
    }


    @Delete(':id')
    @ApiOperation({
        description: 'Удалить пользователя',
    })
    @ApiOkResponse({
        type: RemoveUserResponse
    })
    removeUser(
        @Param('id',ParseUUIDPipe) id: string
    ) {
        return firstValueFrom(this.userPublisher.removeUser({ id }))
    }
} 