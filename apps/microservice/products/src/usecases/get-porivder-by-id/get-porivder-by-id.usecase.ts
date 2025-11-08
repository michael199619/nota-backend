import { Injectable,NotFoundException } from '@nestjs/common';
import { GetPorivderByIdDto,GetPorivderByIdResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class GetPorivderByIdUsecase extends Usecase<IProductsController['getProviderById']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: GetPorivderByIdDto) {
    return super.excecute(dto);
  }

  public async handler(dto: GetPorivderByIdDto): Promise<GetPorivderByIdResponse> {
    const provider=await this.productsRepository.getProviderById(dto.id);

    if (!provider) {
      throw new NotFoundException();
    }

    return {
      id: provider.id,
      createdAt: (provider as any).createdAt??new Date(),
      updatedAt: (provider as any).updatedAt??new Date(),
    };
  }
}
