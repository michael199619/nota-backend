import { Injectable,NotFoundException } from '@nestjs/common';
import { GetPerfumeByIdDto,GetPerfumeByIdResponse,IProductsController,Usecase,UserPublisher } from "@perfume-platform/common";
import { firstValueFrom } from 'rxjs';
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class GetPerfumeByIdUsecase extends Usecase<IProductsController['getPerfumeById']> {
  constructor(
    private readonly productsRepository: ProductsRepository,
    private readonly usersPublisher: UserPublisher
  ) {
    super();
  }

  public excecute(dto: GetPerfumeByIdDto) {
    return super.excecute(dto);
  }

  public async handler(dto: GetPerfumeByIdDto): Promise<GetPerfumeByIdResponse> {
    const perfume=await this.productsRepository.getPerfumeById(dto.id);

    if (!perfume) {
      throw new NotFoundException();
    }

    const user=await firstValueFrom(this.usersPublisher.getUser({ id: perfume.authorId }))

    return {
      id: perfume.id,
      authorId: perfume.authorId,
      name: perfume.name,
      sex: perfume.sex,
      authorName: user.name,
      authorDescription: perfume.authorDescription,
      status: perfume.status,
      volume: perfume.componentsItems.reduce((a,b) => a+b.volume,0),
      components: perfume.componentsItems.map((item) => ({
        id: item.id,
        lvl: item.lvl,
        index: item.index,
        description: item.component.description,
        providerId: item.component.providerId,
        volume: item.volume,
        name: item.component.name,
        type: item.component.type
      }))
    };
  }
}
