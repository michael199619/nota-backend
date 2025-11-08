import { HttpStatus,Injectable } from '@nestjs/common';
import { IProductsController,RemoveCollectionDto,RemoveCollectionResponse,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class RemoveCollectionUsecase extends Usecase<IProductsController['removeCollection']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: RemoveCollectionDto) {
    return super.excecute(dto);
  }

  public async handler(dto: RemoveCollectionDto): Promise<RemoveCollectionResponse> {
    await this.productsRepository.removeCollection(dto.id);

    return {
      status: HttpStatus.OK
    };
  }
}
