import { HttpStatus,Injectable } from '@nestjs/common';
import { IProductsController,RemoveProviderDto,RemoveProviderResponse,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class RemoveProviderUsecase extends Usecase<IProductsController['removeProvider']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: RemoveProviderDto) {
    return super.excecute(dto);
  }

  public async handler(dto: RemoveProviderDto): Promise<RemoveProviderResponse> {
    await this.productsRepository.removeProvider(dto.id);

    return {
      status: HttpStatus.OK,
    };
  }
}
