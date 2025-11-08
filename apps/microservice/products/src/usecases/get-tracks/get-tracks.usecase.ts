import { Injectable } from '@nestjs/common';
import { GetTracksDto,GetTracksResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class GetTracksUsecase extends Usecase<IProductsController['getTracks']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: GetTracksDto) {
    return super.excecute(dto);
  }

  public async handler(dto: GetTracksDto): Promise<GetTracksResponse> {
    return this.productsRepository.getTracks(dto);
  }
}
