import { Injectable } from '@nestjs/common';
import { CreateTrackDto,CreateTrackResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class CreateTrackUsecase extends Usecase<IProductsController['createTrack']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: CreateTrackDto) {
    return super.excecute(dto);
  }

  public async handler(dto: CreateTrackDto): Promise<CreateTrackResponse> {
    const track=await this.productsRepository.createTrack(dto);

    return {
      id: track.id,
      shortTrackId: track.shortTrackId,
      fullTrackId: track.fullTrackId??undefined,
      createdAt: (track as any).createdAt??new Date(),
    };
  }
}
