import { Injectable } from '@nestjs/common';
import { GetComponentsDto,GetComponentsResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class GetComponentsUsecase extends Usecase<IProductsController['getComponents']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: GetComponentsDto) {
    return super.excecute(dto);
  }

  public async handler(dto: GetComponentsDto): Promise<GetComponentsResponse> {
    return this.productsRepository.getComponents(dto);
  }
}
