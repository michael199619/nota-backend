import { Injectable } from '@nestjs/common';
import { GetPerfumesDto,GetPerfumesResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class GetPerfumesUsecase extends Usecase<IProductsController['getPerfumes']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: GetPerfumesDto) {
    return super.excecute(dto);
  }

  public async handler(dto: GetPerfumesDto): Promise<GetPerfumesResponse> {
    return this.productsRepository.getPerfumes(dto);
  }
}
