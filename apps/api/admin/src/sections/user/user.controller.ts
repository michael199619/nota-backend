import { Body,Controller,Delete,Get,Param,ParseUUIDPipe,Post,Put,Query,UseGuards } from '@nestjs/common';
import { ApiOperation,ApiResponse,ApiTags } from '@nestjs/swagger';
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
    @ApiResponse({
        type: AddSalaryUserResponse
    })
    addSalaryUser(
        @Body() dto: AdminAddSalaryUserDto,
        @Param('id', ParseUUIDPipe) id: string
    ) {
        return firstValueFrom(this.userPublisher.addSalaryUser({ ...dto, id }))
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
        return firstValueFrom(this.userPublisher.changeRoleUser({ ...dto, id }))
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
        return firstValueFrom(this.userPublisher.createUser(dto))
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
        return firstValueFrom(this.userPublisher.editUser({ ...dto, id }))
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
        return firstValueFrom(this.userPublisher.getAllUsers(dto))
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
        return firstValueFrom(this.userPublisher.getSalaryUser({ id, ...dto }))
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
        return firstValueFrom(this.userPublisher.getSalaryUsers(dto))
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
        return firstValueFrom(this.userPublisher.getUser({ id, ...dto }))
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
        return firstValueFrom(this.userPublisher.removeSalaryUser({ userId, ...dto }))
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
        return firstValueFrom(this.userPublisher.removeUser({ id }))
    }
} 