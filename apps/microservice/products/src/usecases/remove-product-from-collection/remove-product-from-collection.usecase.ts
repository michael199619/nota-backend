import { HttpStatus,Injectable } from '@nestjs/common';
import { IProductsController,RemoveProductFromCollectionDto,RemoveProductFromCollectionResponse,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class RemoveProductFromCollectionUsecase extends Usecase<IProductsController['removeProductFromCollection']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: RemoveProductFromCollectionDto) {
    return super.excecute(dto);
  }

  public async handler(dto: RemoveProductFromCollectionDto): Promise<RemoveProductFromCollectionResponse> {
    await this.productsRepository.removeProductFromCollection(dto);

    return {
      status: HttpStatus.OK
    };
  }
}
