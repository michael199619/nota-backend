import { Injectable } from '@nestjs/common';
import { CreatePerfumeDto,CreatePerfumeResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class CreatePerfumeUsecase extends Usecase<IProductsController['createPerfume']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: CreatePerfumeDto) {
    return super.excecute(dto);
  }

  public async handler(dto: CreatePerfumeDto): Promise<CreatePerfumeResponse> {
    const perfume=await this.productsRepository.createPerfume(dto);

    return {
      id: perfume.id,
      authorId: perfume.authorId,
      sex: perfume.sex as any,
      authorDescription: perfume.authorDescription,
      status: perfume.status as any,
      createdAt: (perfume as any).createdAt??new Date(),
      components: dto.components,
    };
  }
}
