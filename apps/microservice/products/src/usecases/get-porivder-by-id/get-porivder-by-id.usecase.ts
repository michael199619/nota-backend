import { Injectable,NotFoundException } from '@nestjs/common';
import { GetProviderByIdDto,GetProviderByIdResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class GetProvivderByIdUsecase extends Usecase<IProductsController['getProviderById']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: GetProviderByIdDto) {
    return super.excecute(dto);
  }

  public async handler(dto: GetProviderByIdDto): Promise<GetProviderByIdResponse> {
    const provider=await this.productsRepository.getProviderById(dto.id);

    if (!provider) {
      throw new NotFoundException();
    }

    return provider;
  }
}
