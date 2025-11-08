import { Injectable } from '@nestjs/common';
import { CreateProviderDto,CreateProviderResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class CreateProviderUsecase extends Usecase<IProductsController['createProvider']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: CreateProviderDto) {
    return super.excecute(dto);
  }

  public async handler(dto: CreateProviderDto): Promise<CreateProviderResponse> {
    const provider=await this.productsRepository.createProvider(dto);

    return {
      id: provider.id,
      name: provider.name,
      address: provider.address??undefined,
      site: provider.site??undefined,
      createdAt: (provider as any).createdAt??new Date(),
    };
  }
}
