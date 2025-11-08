import { Injectable,NotFoundException } from '@nestjs/common';
import { GetCollectionByIdDto,GetCollectionByIdResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class GetCollectionByIdUsecase extends Usecase<IProductsController['getCollectionById']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: GetCollectionByIdDto) {
    return super.excecute(dto);
  }

  public async handler(dto: GetCollectionByIdDto): Promise<GetCollectionByIdResponse> {
    const collection=await this.productsRepository.getCollectionById(dto.id);

    if (!collection) {
      throw new NotFoundException();
    }

    return {
      id: collection.id,
      createdAt: (collection as any).createdAt??new Date(),
      updatedAt: (collection as any).updatedAt??new Date(),
    };
  }
}
