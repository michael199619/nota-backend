import { Injectable } from '@nestjs/common';
import { GetProvidersDto,GetProvidersResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class GetProviderUsecase extends Usecase<IProductsController['getProviders']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: GetProvidersDto) {
    return super.excecute(dto);
  }

  public async handler(dto: GetProvidersDto): Promise<GetProvidersResponse> {
    return this.productsRepository.getProviders(dto);
  }
}
