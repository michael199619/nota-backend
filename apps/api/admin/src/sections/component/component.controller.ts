import { Body,Controller,Get,Post,Query,UseGuards } from '@nestjs/common';
import { ApiOkResponse,ApiOperation,ApiProperty,ApiTags } from '@nestjs/swagger';
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
  @ApiOkResponse({
    type: GetComponentsResponse
  })
  @ApiProperty({ type: GetComponentsDto })
  getComponents(
    @Query() dto: GetComponentsDto) {
    return firstValueFrom(this.productsPublisher.getComponents(dto))
  }

  @Post('batch')
  @ApiOperation({
    description: 'Создание/добавления компонентов',
  })
  @ApiOkResponse({
    type: BatchComponentsResponse
  })
  batchComponents(
    @Body() dto: BatchComponentsDto) {
    return firstValueFrom(this.productsPublisher.batchComponents(dto))
  }

  @Post('spent')
  @ApiOperation({
    description: 'Расход компонента',
  })
  @ApiOkResponse({
    type: SetFinishComponentResponse
  })
  spentComponent(
    @Body() dto: SetFinishComponentDto) {
    return firstValueFrom(this.productsPublisher.setFinishComponent(dto))
  }
}
