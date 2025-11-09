import { HttpStatus,Injectable } from '@nestjs/common';
import { IProductsController,RemoveMusicDto,RemoveMusicResponse,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class RemoveMusicUsecase extends Usecase<IProductsController['removeMusic']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: RemoveMusicDto) {
    return super.excecute(dto);
  }

  public async handler(dto: RemoveMusicDto): Promise<RemoveMusicResponse> {
    await this.productsRepository.removeMusic(dto.id);

    return {
      status: HttpStatus.OK
    };
  }
}
