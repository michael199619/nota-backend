import { Injectable } from '@nestjs/common';
import { CreateMusicDto,CreateMusicResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class CreateMusicUsecase extends Usecase<IProductsController['createMusic']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: CreateMusicDto) {
    return super.excecute(dto);
  }

  public async handler(dto: CreateMusicDto): Promise<CreateMusicResponse> {
    const music=await this.productsRepository.createMusic(dto);

    return {
      id: music.id,
      trackId: music.trackId??undefined,
      name: music.name,
      type: music.type,
      createdAt: (music as any).createdAt??new Date(),
    };
  }
}
