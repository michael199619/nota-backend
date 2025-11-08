import { HttpStatus,Injectable } from '@nestjs/common';
import { IProductsController,SetFinishComponentDto,SetFinishComponentResponse,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class SetFinishComponentUsecase extends Usecase<IProductsController['setFinishComponent']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: SetFinishComponentDto) {
    return super.excecute(dto);
  }

  public async handler(dto: SetFinishComponentDto): Promise<SetFinishComponentResponse> {
    await this.productsRepository.setFinishComponent(dto);

    return {
      status: HttpStatus.OK
    };
  }
}
