import { Injectable } from '@nestjs/common';
import { AddProductForCollectionDto,AddProductForCollectionResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class AddProductForCollectionUsecase extends Usecase<IProductsController['addProductForCollection']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: AddProductForCollectionDto) {
    return super.excecute(dto);
  }

  public async handler(dto: AddProductForCollectionDto): Promise<AddProductForCollectionResponse> {
    const item=await this.productsRepository.addProductForCollection(dto);

    return {
      id: item.id,
      productId: item.productId!,
      collectionId: item.collectionId,
      index: item.index,
      imageIds: item.imageIds,
    };
  }
}
