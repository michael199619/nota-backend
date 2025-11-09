import { Injectable,NotFoundException } from '@nestjs/common';
import { GetMusicByIdDto,GetMusicByIdResponse,IProductsController,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class GetMusicByIdUsecase extends Usecase<IProductsController['getMusicById']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: GetMusicByIdDto) {
    return super.excecute(dto);
  }

  public async handler(dto: GetMusicByIdDto): Promise<GetMusicByIdResponse> {
    const music=await this.productsRepository.getMusicById(dto.id);

    if (!music) {
      throw new NotFoundException();
    }

    return {
      id: music.id,
      name: music.name,
      track: music.track? {
        id: music.track.id,
        shortTrackId: music.track.shortTrackId,
        fullTrackId: music.track.fullTrackId,
      }:null,
    };
  }
}
