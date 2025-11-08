import { Injectable } from '@nestjs/common';
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
    const removed=await this.productsRepository.removeMusic(dto.id);

    return {
      id: removed.id,
      success: true,
    };
  }
}
