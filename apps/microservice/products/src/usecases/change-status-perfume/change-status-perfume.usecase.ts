import { Injectable } from '@nestjs/common';
import { ChangeStatusPerfumeDto,ChangeStatusPerfumeResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class ChangeStatusPerfumeUsecase extends Usecase<IProductsController['changeStatusPerfume']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: ChangeStatusPerfumeDto) {
    return super.excecute(dto);
  }

  public async handler(dto: ChangeStatusPerfumeDto): Promise<ChangeStatusPerfumeResponse> {
    const perfume=await this.productsRepository.changeStatusPerfume(dto);

    return {
      id: perfume.id,
      status: perfume.status,
    };
  }
}
