import { HttpStatus,Injectable } from '@nestjs/common';
import { IProductsController,RemoveTrackDto,RemoveTrackResponse,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class RemoveTrackUsecase extends Usecase<IProductsController['removeTrack']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: RemoveTrackDto) {
    return super.excecute(dto);
  }

  public async handler(dto: RemoveTrackDto): Promise<RemoveTrackResponse> {
    await this.productsRepository.removeTrack(dto.id);

    return {
      status: HttpStatus.OK
    };
  }
}
