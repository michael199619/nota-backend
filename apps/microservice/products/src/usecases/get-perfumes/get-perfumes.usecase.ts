import { Injectable } from '@nestjs/common';
import { GetPerfumesDto,GetPerfumesResponse,IProductsController,Usecase,UserPublisher } from "@perfume-platform/common";
import { firstValueFrom } from 'rxjs';
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class GetPerfumesUsecase extends Usecase<IProductsController['getPerfumes']> {
  constructor(
    private readonly productsRepository: ProductsRepository,
    private readonly usersPublisher: UserPublisher
  ) {
    super();
  }

  public excecute(dto: GetPerfumesDto) {
    return super.excecute(dto);
  }

  public async handler(dto: GetPerfumesDto): Promise<GetPerfumesResponse> {
    const perfumes=await this.productsRepository.getPerfumes(dto);
    const userIds=new Set<string>()

    perfumes.data.forEach(({ authorId }) => userIds.add(authorId));

    console.log([...userIds])

    const users=await firstValueFrom(this.usersPublisher.getAllUsers({
      ids: [...userIds],limit: userIds.size,page: 1
    }))

    return {
      ...perfumes,
      data: perfumes.data.map((perfume) => ({
        ...perfume,
        authorName: users.data.find(user => user.id===perfume.authorId)?.name||'Неизвестный парфюмер'
      }))
    }
  }
}
