import { Body,Controller,Delete,Get,Param,ParseUUIDPipe,Post,Query,UseGuards } from '@nestjs/common';
import { ApiOperation,ApiResponse,ApiTags } from '@nestjs/swagger';
import { CreateProviderDto,CreateProviderResponse,GetProviderByIdResponse,GetProvidersDto,GetProvidersResponse,ProductsPublisher,RemoveProviderResponse } from "@perfume-platform/common";
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from '../../modules/auth/auth.guard';

@ApiTags('Магазины')
@UseGuards(AuthGuard)
@Controller('providers')
export class ProviderController {
  constructor(
    private readonly productsPublisher: ProductsPublisher
  ) { }

  @Post()
  @ApiOperation({
    description: 'Создать провайдера',
  })
  @ApiResponse({
    type: CreateProviderResponse
  })
  createProvider(
    @Body() dto: CreateProviderDto) {
    return firstValueFrom(this.productsPublisher.createProvider(dto))
  }

  @Get()
  @ApiOperation({
    description: 'Получить список провайдеров',
  })
  @ApiResponse({
    type: GetProvidersResponse
  })
  getProviders(
    @Query() dto: GetProvidersDto) {
    return firstValueFrom(this.productsPublisher.getProviders(dto))
  }

  @Get(':id')
  @ApiOperation({
    description: 'Получить провайдера по идентификатору',
  })
  @ApiResponse({
    type: GetProviderByIdResponse
  })
  getProviderById(
    @Param('id',ParseUUIDPipe) id: string) {
    return firstValueFrom(this.productsPublisher.getProviderById({ id }))
  }

  @Delete(':id')
  @ApiOperation({
    description: 'Удалить провайдера',
  })
  @ApiResponse({
    type: RemoveProviderResponse
  })
  removeProvider(
    @Param('id',ParseUUIDPipe) id: string) {
    return firstValueFrom(this.productsPublisher.removeProvider({ id }))
  }
}
