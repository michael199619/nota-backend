import { Body,Controller,Get,Param,ParseUUIDPipe,Post,UseGuards } from '@nestjs/common';
import { ApiOkResponse,ApiOperation,ApiTags } from '@nestjs/swagger';
import { CreateProductDto,CreateProductResponse,GetProductByIdResponse,ProductsPublisher } from "@perfume-platform/common";
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from '../../modules/auth/auth.guard';

@ApiTags('Продукты')
@UseGuards(AuthGuard)
@Controller('products')
export class ProductController {
  constructor(
    private readonly productsPublisher: ProductsPublisher
  ) { }

  @Post()
  @ApiOperation({
    description: 'Создать продукт',
  })
  @ApiOkResponse({
    type: CreateProductResponse
  })
  createProduct(
    @Body() dto: CreateProductDto) {
    return firstValueFrom(this.productsPublisher.createProduct(dto))
  }

  @Get(':id')
  @ApiOperation({
    description: 'Получить продукт по идентификатору',
  })
  @ApiOkResponse({
    type: GetProductByIdResponse
  })
  getProductById(
    @Param('id',ParseUUIDPipe) id: string) {
    return firstValueFrom(this.productsPublisher.getProductById({ id }))
  }
}
