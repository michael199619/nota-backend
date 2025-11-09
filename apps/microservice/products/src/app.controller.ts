import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import {
    AddProductForCollectionDto,
    BatchComponentsDto,
    ChangeStatusOfCollectionDto,
    ChangeStatusPerfumeDto,
    CreateCollectionDto,
    CreateMusicDto,
    CreatePerfumeDto,
    CreateProductDto,
    CreateProviderDto,
    CreateTrackDto,
    EditPerfumeDto,
    GetCollectionByIdDto,
    GetCollectionsDto,
    GetComponentsDto,
    GetMusicByIdDto,
    GetMusicsDto,
    GetPerfumeByIdDto,
    GetPerfumesDto,
    GetProductByIdDto,
    GetProviderByIdDto,
    GetProvidersDto,
    GetTracksDto,
    IProductsController,
    ProductsSubject,
    ProductsTopics,
    RemoveCollectionDto,
    RemoveMusicDto,
    RemoveProductFromCollectionDto,
    RemoveProviderDto,
    RemoveTrackDto,
    SetFinishComponentDto
} from '@perfume-platform/common';
import { AddProductForCollectionUsecase } from './usecases/add-product-for-collection/add-product-for-collection.usecase';
import { BatchComponentsUsecase } from './usecases/batch-components/batch-components.usecase';
import { ChangeStatusOfCollectionUsecase } from './usecases/change-status-of-collection/change-status-of-collection.usecase';
import { ChangeStatusPerfumeUsecase } from './usecases/change-status-perfume/change-status-perfume.usecase';
import { CreateCollectionUsecase } from './usecases/create-collection/create-collection.usecase';
import { CreateMusicUsecase } from './usecases/create-music/create-music.usecase';
import { CreatePerfumeUsecase } from './usecases/create-perfume/create-perfume.usecase';
import { CreateProductUsecase } from './usecases/create-product/create-product.usecase';
import { CreateProviderUsecase } from './usecases/create-provider/create-provider.usecase';
import { CreateTrackUsecase } from './usecases/create-track/create-track.usecase';
import { EditPerfumeUsecase } from './usecases/edit-perfume/edit-perfume.usecase';
import { GetCollectionByIdUsecase } from './usecases/get-collection-by-id/get-collection-by-id.usecase';
import { GetCollectionsUsecase } from './usecases/get-collections/get-collections.usecase';
import { GetComponentsUsecase } from './usecases/get-components/get-components.usecase';
import { GetMusicByIdUsecase } from './usecases/get-music-by-id/get-music-by-id.usecase';
import { GetMusicsUsecase } from './usecases/get-musics/get-musics.usecase';
import { GetPerfumeByIdUsecase } from './usecases/get-perfume-by-id/get-perfume-by-id.usecase';
import { GetPerfumesUsecase } from './usecases/get-perfumes/get-perfumes.usecase';
import { GetProvivderByIdUsecase } from './usecases/get-porivder-by-id/get-porivder-by-id.usecase';
import { GetProductByIdUsecase } from './usecases/get-product-by-id/get-product-by-id.usecase';
import { GetProviderUsecase } from './usecases/get-providers/get-providers.usecase';
import { GetTracksUsecase } from './usecases/get-tracks/get-tracks.usecase';
import { RemoveCollectionUsecase } from './usecases/remove-collection/remove-collection.usecase';
import { RemoveMusicUsecase } from './usecases/remove-music/remove-music.usecase';
import { RemoveProductFromCollectionUsecase } from './usecases/remove-product-from-collection/remove-product-from-collection.usecase';
import { RemoveProviderUsecase } from './usecases/remove-provider/remove-provider.usecase';
import { RemoveTrackUsecase } from './usecases/remove-track/remove-track.usecase';
import { SetFinishComponentUsecase } from './usecases/set-finish-component/set-finish-component.usecase';

@Controller()
export class AppController implements IProductsController {
    constructor(
        private readonly addProductForCollectionUsecase: AddProductForCollectionUsecase,
        private readonly batchComponentsUsecase: BatchComponentsUsecase,
        private readonly changeStatusOfCollectionUsecase: ChangeStatusOfCollectionUsecase,
        private readonly changeStatusPerfumeUsecase: ChangeStatusPerfumeUsecase,
        private readonly createCollectionUsecase: CreateCollectionUsecase,
        private readonly createMusicUsecase: CreateMusicUsecase,
        private readonly createPerfumeUsecase: CreatePerfumeUsecase,
        private readonly createProductUsecase: CreateProductUsecase,
        private readonly createProviderUsecase: CreateProviderUsecase,
        private readonly createTrackUsecase: CreateTrackUsecase,
        private readonly editPerfumeUsecase: EditPerfumeUsecase,
        private readonly getCollectionByIdUsecase: GetCollectionByIdUsecase,
        private readonly getCollectionsUsecase: GetCollectionsUsecase,
        private readonly getComponentsUsecase: GetComponentsUsecase,
        private readonly getMusicByIdUsecase: GetMusicByIdUsecase,
        private readonly getMusicsUsecase: GetMusicsUsecase,
        private readonly getPerfumeByIdUsecase: GetPerfumeByIdUsecase,
        private readonly getPerfumesUsecase: GetPerfumesUsecase,
        private readonly getProductByIdUsecase: GetProductByIdUsecase,
        private readonly getProviderByIdUsecase: GetProvivderByIdUsecase,
        private readonly getProvidersUsecase: GetProviderUsecase,
        private readonly getTracksUsecase: GetTracksUsecase,
        private readonly removeCollectionUsecase: RemoveCollectionUsecase,
        private readonly removeMusicUsecase: RemoveMusicUsecase,
        private readonly removeProductFromCollectionUsecase: RemoveProductFromCollectionUsecase,
        private readonly removeProviderUsecase: RemoveProviderUsecase,
        private readonly removeTrackUsecase: RemoveTrackUsecase,
        private readonly setFinishComponentUsecase: SetFinishComponentUsecase
    ) { }

    @MessagePattern(ProductsTopics.addProductForCollection)
    async addProductForCollection(dto: AddProductForCollectionDto) {
        return await this.addProductForCollectionUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.batchComponents)
    async batchComponents(dto: BatchComponentsDto) {
        return await this.batchComponentsUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.changeStatusOfCollection)
    async changeStatusOfCollection(dto: ChangeStatusOfCollectionDto) {
        return await this.changeStatusOfCollectionUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.changeStatusPerfume)
    async changeStatusPerfume(dto: ChangeStatusPerfumeDto) {
        return await this.changeStatusPerfumeUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.createCollection)
    async createCollection(dto: CreateCollectionDto) {
        return await this.createCollectionUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.createMusic)
    async createMusic(dto: CreateMusicDto) {
        return await this.createMusicUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.createPerfume)
    async createPerfume(dto: CreatePerfumeDto) {
        return await this.createPerfumeUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.createProduct)
    async createProduct(dto: CreateProductDto) {
        return await this.createProductUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.createProvider)
    async createProvider(dto: CreateProviderDto) {
        return await this.createProviderUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.createTrack)
    async createTrack(dto: CreateTrackDto) {
        return await this.createTrackUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.editPerfume)
    async editPerfume(dto: EditPerfumeDto) {
        return await this.editPerfumeUsecase.excecute(dto);
    }

    @MessagePattern(ProductsSubject.getCollectionById)
    async getCollectionById(dto: GetCollectionByIdDto) {
        return await this.getCollectionByIdUsecase.excecute(dto);
    }

    @MessagePattern(ProductsSubject.getCollections)
    async getCollections(dto: GetCollectionsDto) {
        return await this.getCollectionsUsecase.excecute(dto);
    }

    @MessagePattern(ProductsSubject.getComponents)
    async getComponents(dto: GetComponentsDto) {
        return await this.getComponentsUsecase.excecute(dto);
    }

    @MessagePattern(ProductsSubject.getMusicById)
    async getMusicById(dto: GetMusicByIdDto) {
        return await this.getMusicByIdUsecase.excecute(dto);
    }

    @MessagePattern(ProductsSubject.getMusics)
    async getMusics(dto: GetMusicsDto) {
        return await this.getMusicsUsecase.excecute(dto);
    }

    @MessagePattern(ProductsSubject.getPerfumeById)
    async getPerfumeById(dto: GetPerfumeByIdDto) {
        return await this.getPerfumeByIdUsecase.excecute(dto);
    }

    @MessagePattern(ProductsSubject.getPerfumes)
    async getPerfumes(dto: GetPerfumesDto) {
        return await this.getPerfumesUsecase.excecute(dto);
    }

    @MessagePattern(ProductsSubject.getProductById)
    async getProductById(dto: GetProductByIdDto) {
        return await this.getProductByIdUsecase.excecute(dto);
    }

    @MessagePattern(ProductsSubject.getPorivderById)
    async getProviderById(dto: GetProviderByIdDto) {
        return await this.getProviderByIdUsecase.excecute(dto);
    }

    @MessagePattern(ProductsSubject.getProvider)
    async getProviders(dto: GetProvidersDto) {
        return await this.getProvidersUsecase.excecute(dto);
    }

    @MessagePattern(ProductsSubject.getTracks)
    async getTracks(dto: GetTracksDto) {
        return await this.getTracksUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.removeCollection)
    async removeCollection(dto: RemoveCollectionDto) {
        return await this.removeCollectionUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.removeMusic)
    async removeMusic(dto: RemoveMusicDto) {
        return await this.removeMusicUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.removeProductFromCollection)
    async removeProductFromCollection(dto: RemoveProductFromCollectionDto) {
        return await this.removeProductFromCollectionUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.removeProvider)
    async removeProvider(dto: RemoveProviderDto) {
        return await this.removeProviderUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.removeTrack)
    async removeTrack(dto: RemoveTrackDto) {
        return await this.removeTrackUsecase.excecute(dto);
    }

    @MessagePattern(ProductsTopics.setFinishComponent)
    async setFinishComponent(dto: SetFinishComponentDto) {
        return await this.setFinishComponentUsecase.excecute(dto);
    }
}
