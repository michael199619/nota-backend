import { Injectable } from '@nestjs/common';
import { CreateProductDto,CreateProductResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class CreateProductUsecase extends Usecase<IProductsController['createProduct']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: CreateProductDto) {
    return super.excecute(dto);
  }

  public async handler(dto: CreateProductDto): Promise<CreateProductResponse> {
    const created=await this.productsRepository.createProduct(dto);

    return {
      id: created.id,
      isCollection: !!created.isCollection,
      musicId: created.musicId,
      currentPrice: +created.currentPrice,
      name: created.name,
      description: created.description
    };
  }
}