import { Body,Controller,Get,Post,Query,UseGuards } from '@nestjs/common';
import { ApiOperation,ApiResponse,ApiTags } from '@nestjs/swagger';
import { BatchComponentsDto,BatchComponentsResponse,GetComponentsDto,GetComponentsResponse,ProductsPublisher,SetFinishComponentDto,SetFinishComponentResponse } from "@perfume-platform/common";
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from '../../modules/auth/auth.guard';

@ApiTags('Компоненты')
@UseGuards(AuthGuard)
@Controller('components')
export class ComponentController {
  constructor(
    private readonly productsPublisher: ProductsPublisher
  ) { }

  @Get()
  @ApiOperation({
    description: 'Получить список компонентов',
  })
  @ApiResponse({
    type: GetComponentsResponse
  })
  getComponents(
    @Query() dto: GetComponentsDto) {
    return firstValueFrom(this.productsPublisher.getComponents(dto))
  }

  @Post('batch')
  @ApiOperation({
    description: 'Пакетное создание/обновление компонентов',
  })
  @ApiResponse({
    type: BatchComponentsResponse
  })
  batchComponents(
    @Body() dto: BatchComponentsDto) {
    return firstValueFrom(this.productsPublisher.batchComponents(dto))
  }

  @Post('finish')
  @ApiOperation({
    description: 'Установить компонент как финишный',
  })
  @ApiResponse({
    type: SetFinishComponentResponse
  })
  setFinishComponent(
    @Body() dto: SetFinishComponentDto) {
    return firstValueFrom(this.productsPublisher.setFinishComponent(dto))
  }
}
