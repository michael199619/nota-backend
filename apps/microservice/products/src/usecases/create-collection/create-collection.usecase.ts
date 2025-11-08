import { Injectable } from '@nestjs/common';
import { CreateCollectionDto,CreateCollectionResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class CreateCollectionUsecase extends Usecase<IProductsController['createCollection']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: CreateCollectionDto) {
    return super.excecute(dto);
  }

  public async handler(dto: CreateCollectionDto): Promise<CreateCollectionResponse> {
    const collection=await this.productsRepository.createCollection(dto);

    return {
      id: collection.id,
      name: collection.name,
      description: collection.description,
      status: collection.status,
      createdAt: (collection as any).createdAt??new Date(),
    };
  }
}
