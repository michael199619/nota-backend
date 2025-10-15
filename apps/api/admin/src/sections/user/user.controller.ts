import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddSalaryUserResponse, ChangeRoleUserResponse, CreateUserDto, CreateUserResponse, EditUserResponse, GetAllUsersDto, GetAllUsersResponse, GetSalaryUserResponse, GetSalaryUsersDto, GetSalaryUsersResponse, GetUserResponse, OrderPublisher, RemoveSalaryUserResponse, RemoveUserResponse, UsersPublisher } from '@perfume-platform/common';
import { firstValueFrom } from 'rxjs';
import { AdminAddSalaryUserDto, AdminChangeRoleUserDto, AdminEditUserDto, AdminGetSalaryUserDto, AdminGetUserDto, AdminRemoveSalaryUserDto } from './user.dto';
@ApiTags('Пользователи')
@Controller('users')
export class UserController {
    constructor(
        private readonly usersPublisher: UsersPublisher,
        private readonly orderPublisher: OrderPublisher
    ) { }

    @Post(':id/salary')
    @ApiOperation({
        description: 'Добавить зарплату пользователю',
    })
    @ApiResponse({
        type: AddSalaryUserResponse
    })
    addSalaryUser(
        @Body() dto: AdminAddSalaryUserDto,
        @Param('id', ParseUUIDPipe) id: string
    ) {
        return firstValueFrom(this.usersPublisher.addSalaryUser({ ...dto, id }))
    }

    @Post(':id/role')
    @ApiOperation({
        description: 'Изменить роль пользователя',
    })
    @ApiResponse({
        type: ChangeRoleUserResponse
    })
    changeRoleUser(
        @Body() dto: AdminChangeRoleUserDto,
        @Param('id', ParseUUIDPipe) id: string
    ) {
        return firstValueFrom(this.usersPublisher.changeRoleUser({ ...dto, id }))
    }

    @Post()
    @ApiOperation({
        description: 'Создать пользователя',
    })
    @ApiResponse({
        type: CreateUserResponse
    })
    createUser(
        @Body() dto: CreateUserDto
    ) {
        return firstValueFrom(this.usersPublisher.createUser(dto))
    }

    @Put(':id')
    @ApiOperation({
        description: 'Редактировать пользователя',
    })
    @ApiResponse({
        type: EditUserResponse
    })
    editUser(
        @Body() dto: AdminEditUserDto,
        @Param('id', ParseUUIDPipe) id: string
    ) {
        return firstValueFrom(this.usersPublisher.editUser({ ...dto, id }))
    }

    @Get()
    @ApiOperation({
        description: 'Получить пользователей',
    })
    @ApiResponse({
        type: GetAllUsersResponse
    })
    getAll(
        @Query() dto: GetAllUsersDto
    ) {
        return firstValueFrom(this.usersPublisher.getAllUsers(dto))
    }

    @Get(':id/salary')
    @ApiOperation({
        description: 'Получить пользователя с зарплатой',
    })
    @ApiResponse({
        type: GetSalaryUserResponse
    })
    getSalaryUser(
        @Query() dto: AdminGetSalaryUserDto,
        @Param('id', ParseUUIDPipe) id: string
    ) {
        return firstValueFrom(this.usersPublisher.getSalaryUser({ id, ...dto }))
    }

    @Get('salary')
    @ApiOperation({
        description: 'Получить пользователей с зарплатой',
    })
    @ApiResponse({
        type: GetSalaryUsersResponse
    })
    getSalaryUsers(
        @Query() dto: GetSalaryUsersDto
    ) {
        return firstValueFrom(this.usersPublisher.getSalaryUsers(dto))
    }

    @Get(':id')
    @ApiOperation({
        description: 'Получить пользователя',
    })
    @ApiResponse({
        type: GetUserResponse
    })
    getUser(
        @Param('id', ParseUUIDPipe) id: string,
        @Query() dto: AdminGetUserDto
    ) {
        return firstValueFrom(this.usersPublisher.getUser({ id, ...dto }))
    }

    @Delete(':id/salary')
    @ApiOperation({
        description: 'Удалить зарплату пользователя',
    })
    @ApiResponse({
        type: RemoveSalaryUserResponse
    })
    removeSalaryUser(
        @Param('id', ParseUUIDPipe) userId: string,
        @Body() dto: AdminRemoveSalaryUserDto
    ) {
        return firstValueFrom(this.usersPublisher.removeSalaryUser({ userId, ...dto }))
    }


    @Delete(':id')
    @ApiOperation({
        description: 'Удалить пользователя',
    })
    @ApiResponse({
        type: RemoveUserResponse
    })
    removeUser(
        @Param('id', ParseUUIDPipe) id: string
    ) {
        return firstValueFrom(this.usersPublisher.removeUser({ id }))
    }
} 