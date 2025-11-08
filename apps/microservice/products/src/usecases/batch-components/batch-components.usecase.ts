import { Injectable } from '@nestjs/common';
import { BatchComponentsDto,BatchComponentsResponse,ComponentHistoryType,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class BatchComponentsUsecase extends Usecase<IProductsController['batchComponents']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: BatchComponentsDto) {
    return super.excecute(dto);
  }

  public async handler(dto: BatchComponentsDto): Promise<BatchComponentsResponse> {
    const components=await this.productsRepository.batchComponents(dto);

    const data: Record<Exclude<ComponentHistoryType,ComponentHistoryType.SPENT>,number>=components.reduce((prev,next) => {
      return {
        ...prev,
        [next.histories[0].type]: prev[next.histories[0].type]+1
      }
    },{ [ComponentHistoryType.CREATE]: 0,[ComponentHistoryType.ADD]: 0 })

    return {
      newComponentCount: data[ComponentHistoryType.CREATE],
      oldComponentCount: data[ComponentHistoryType.ADD]
    };
  }
}
