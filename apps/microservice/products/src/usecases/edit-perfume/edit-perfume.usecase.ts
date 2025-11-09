import { Injectable } from '@nestjs/common';
import { EditPerfumeDto,EditPerfumeResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class EditPerfumeUsecase extends Usecase<IProductsController['editPerfume']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: EditPerfumeDto) {
    return super.excecute(dto);
  }

  public async handler(dto: EditPerfumeDto): Promise<EditPerfumeResponse> {
    const perfume=await this.productsRepository.editPerfume(dto);

    return {
      id: perfume.id,
      authorId: perfume.authorId,
      sex: perfume.sex,
      authorDescription: perfume.authorDescription,
      status: perfume.status
    };
  }
}
