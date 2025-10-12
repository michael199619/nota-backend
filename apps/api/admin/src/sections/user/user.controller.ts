import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddSalaryUserDto, AddSalaryUserResponse, ChangeRoleUserDto, ChangeRoleUserResponse, OrderPublisher, UsersPublisher } from '@perfume-platform/common';
import { firstValueFrom } from 'rxjs';

@ApiTags('user')
@Controller()
export class UserController {
    constructor(
        private readonly usersPublisher: UsersPublisher,
        private readonly orderPublisher: OrderPublisher
    ) { }

    @Post('add-salary')
    @ApiOperation({
        description: 'Добавить заррплату пользователю',
    })
    @ApiResponse({
        type: AddSalaryUserResponse
    })
    addSalaryUser(
        @Body() dto: AddSalaryUserDto
    ) {
        return firstValueFrom(this.usersPublisher.addSalaryUser(dto))
    }

    @Post('change-role')
    @ApiOperation({
        description: 'Изменить роль пользователя',
    })
    @ApiResponse({
        type: ChangeRoleUserResponse
    })
    changeRoleUser(
        @Body() dto: ChangeRoleUserDto
    ) {
        return firstValueFrom(this.usersPublisher.changeRoleUser(dto))
    }
} 