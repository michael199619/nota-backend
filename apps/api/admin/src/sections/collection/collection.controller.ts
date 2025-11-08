import { Body,Controller,Delete,Get,Param,ParseUUIDPipe,Post,Put,Query,UseGuards } from '@nestjs/common';
import { ApiOperation,ApiResponse,ApiTags } from '@nestjs/swagger';
import { AddProductForCollectionDto,AddProductForCollectionResponse,ChangeStatusOfCollectionDto,ChangeStatusOfCollectionResponse,CreateCollectionDto,CreateCollectionResponse,GetCollectionByIdResponse,GetCollectionsDto,GetCollectionsResponse,ProductsPublisher,RemoveCollectionResponse,RemoveProductFromCollectionResponse } from "@perfume-platform/common";
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from '../../modules/auth/auth.guard';

@ApiTags('Коллекции')
@UseGuards(AuthGuard)
@Controller('collections')
export class CollectionController {
  constructor(
    private readonly productsPublisher: ProductsPublisher
  ) { }

  @Post()
  @ApiOperation({
    description: 'Создать коллекцию',
  })
  @ApiResponse({
    type: CreateCollectionResponse
  })
  createCollection(
    @Body() dto: CreateCollectionDto) {
    return firstValueFrom(this.productsPublisher.createCollection(dto))
  }

  @Get()
  @ApiOperation({
    description: 'Получить список коллекций',
  })
  @ApiResponse({
    type: GetCollectionsResponse
  })
  getCollections(
    @Query() dto: GetCollectionsDto) {
    return firstValueFrom(this.productsPublisher.getCollections(dto))
  }

  @Get(':id')
  @ApiOperation({
    description: 'Получить коллекцию по идентификатору',
  })
  @ApiResponse({
    type: GetCollectionByIdResponse
  })
  getCollectionById(
    @Param('id',ParseUUIDPipe) id: string) {
    return firstValueFrom(this.productsPublisher.getCollectionById({ id }))
  }

  @Put(':id/status')
  @ApiOperation({
    description: 'Изменить статус коллекции',
  })
  @ApiResponse({
    type: ChangeStatusOfCollectionResponse
  })
  changeStatusOfCollection(
    @Param('id',ParseUUIDPipe) id: string,
    @Body() dto: ChangeStatusOfCollectionDto) {
    return firstValueFrom(this.productsPublisher.changeStatusOfCollection({ ...dto,id }))
  }

  @Delete(':id')
  @ApiOperation({
    description: 'Удалить коллекцию',
  })
  @ApiResponse({
    type: RemoveCollectionResponse
  })
  removeCollection(
    @Param('id',ParseUUIDPipe) id: string) {
    return firstValueFrom(this.productsPublisher.removeCollection({ id }))
  }

  @Post(':id/add-item')
  @ApiOperation({
    description: 'Добавить продукт в коллекцию',
  })
  @ApiResponse({
    type: AddProductForCollectionResponse
  })
  addProductForCollection(
    @Param('id',ParseUUIDPipe) collectionId: string,
    @Body() dto: AddProductForCollectionDto
  ) {
    return firstValueFrom(this.productsPublisher.addProductForCollection({ ...dto,collectionId }))
  }

  @Delete(':id/item/:productId')
  @ApiOperation({
    description: 'Удалить продукт из коллекции',
  })
  @ApiResponse({
    type: RemoveProductFromCollectionResponse
  })
  removeProductFromCollection(
    @Param('id',ParseUUIDPipe) collectionId: string,
    @Param('itemId',ParseUUIDPipe) collectionItemId: string
  ) {
    return firstValueFrom(this.productsPublisher.removeProductFromCollection({ collectionId,collectionItemId }))
  }
}
