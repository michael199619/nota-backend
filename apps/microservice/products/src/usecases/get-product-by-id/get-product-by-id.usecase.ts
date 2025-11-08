import { Injectable,NotFoundException } from '@nestjs/common';
import { GetProductByIdDto,GetProductByIdResponse,IProductsController,ProductEntity,Usecase } from "@perfume-platform/common";
import { ProductsRepository } from '../../db/products/products.repository';

@Injectable()
export class GetProductByIdUsecase extends Usecase<IProductsController['getProductById']> {
  constructor(
    private readonly productsRepository: ProductsRepository
  ) {
    super();
  }

  public excecute(dto: GetProductByIdDto) {
    return super.excecute(dto);
  }

  public async handler(dto: GetProductByIdDto): Promise<GetProductByIdResponse> {
    const product=await this.productsRepository.getProductById(dto.id);

    if (!product) {
      throw new NotFoundException();
    }

    return {
      id: product.id,
      isCollection: !!product.isCollection,
      currentPrice: +product.currentPrice,
      name: product.name,
      description: product.description,
      collection: product.isCollection? {
        name: product.collectionItem!.collection.name,
        id: product.collectionItem!.collection.id
      }:null,
      music: {
        id: product.music.id,
        name: product.music.name,
        track: product.music.trackId? {
          ...product.music.track!
        }:null,
      },
      count: +product.item.count,
      entity: product.item.entity,
      perfume: product.item.entity===ProductEntity.PERFUME? {
        volume: product.item.perfume!.componentsItems.reduce((a,b) => a+b.volume,0),
        sex: product.item.perfume!.sex,
        id: product.item.perfume!.id,
        authorId: product.item.perfume!.authorId
      }:null
    };
  }
}
