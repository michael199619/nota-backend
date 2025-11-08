import { Injectable } from '@nestjs/common';
import { GetMusicsDto,GetMusicsResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class GetMusicsUsecase extends Usecase<IProductsController['getMusics']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: GetMusicsDto) {
    return super.excecute(dto);
  }

  public async handler(dto: GetMusicsDto): Promise<GetMusicsResponse> {
    return this.productsRepository.getMusics(dto);
  }
}
