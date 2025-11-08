import { Injectable } from '@nestjs/common';
import { ChangeStatusOfCollectionDto,ChangeStatusOfCollectionResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class ChangeStatusOfCollectionUsecase extends Usecase<IProductsController['changeStatusOfCollection']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: ChangeStatusOfCollectionDto) {
    return super.excecute(dto);
  }

  public async handler(dto: ChangeStatusOfCollectionDto): Promise<ChangeStatusOfCollectionResponse> {
    const collection=await this.productsRepository.changeStatusOfCollection(dto);

    return {
      id: collection.id,
      status: collection.status,
    };
  }
}
