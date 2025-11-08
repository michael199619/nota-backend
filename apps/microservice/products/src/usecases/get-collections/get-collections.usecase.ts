import { Injectable } from '@nestjs/common';
import { GetCollectionsDto,GetCollectionsResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class GetCollectionsUsecase extends Usecase<IProductsController['getCollections']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: GetCollectionsDto) {
    return super.excecute(dto);
  }

  public async handler(dto: GetCollectionsDto): Promise<GetCollectionsResponse> {
    const result=await this.productsRepository.getCollections(dto);

    return {
      ...result,
      data: result.data.map(item => ({ id: item.id }))
    };
  }
}
