import { ClientKafka,ClientNats } from "@nestjs/microservices";
import { GetProviderDto } from "apps/common/dist/transport/products/dtos/get-provider";
import { ProductsSubject,ProductsTopics,productsTopics } from "./constants";
import {
    AddProductForCollectionDto,AddProductForCollectionResponse,
    BatchComponentsDto,BatchComponentsResponse,
    ChangeStatusOfCollectionDto,ChangeStatusOfCollectionResponse,
    ChangeStatusPerfumeDto,ChangeStatusPerfumeResponse,
    CreateCollectionDto,CreateCollectionResponse,
    CreateMusicDto,CreateMusicResponse,
    CreatePerfumeDto,CreatePerfumeResponse,
    CreateProductDto,CreateProductResponse,
    CreateProviderDto,CreateProviderResponse,
    CreateTrackDto,CreateTrackResponse,
    EditPerfumeDto,EditPerfumeResponse,
    GetCollectionByIdDto,GetCollectionByIdResponse,
    GetCollectionsDto,GetCollectionsResponse,
    GetComponentsDto,GetComponentsResponse,
    GetMusicByIdDto,GetMusicByIdResponse,
    GetMusicsDto,
    GetPerfumeByIdDto,GetPerfumeByIdResponse,
    GetPerfumesDto,GetPerfumesResponse,
    GetProductByIdDto,GetProductByIdResponse,
    GetProviderByIdDto,GetProviderByIdResponse,
    GetProvidersResponse,
    GetTracksDto,GetTracksResponse,
    RemoveCollectionDto,RemoveCollectionResponse,
    RemoveMusicDto,RemoveMusicResponse,
    RemoveProductFromCollectionDto,RemoveProductFromCollectionResponse,
    RemoveProviderDto,RemoveProviderResponse,
    RemoveTrackDto,RemoveTrackResponse,
    SetFinishComponentDto,SetFinishComponentResponse
} from "./dtos";
import { IProductsController } from "./products.interface";

export class ProductsPublisher implements IProductsController {
    constructor(
        private kafkaService: ClientKafka,
        private natsService: ClientNats
    ) {
    }

    private async onApplicationBootstrap() {
        productsTopics.forEach(pattern => this.kafkaService.subscribeToResponseOf(pattern))
        await this.kafkaService.connect()
    }

    addProductForCollection(dto: AddProductForCollectionDto) {
        return this.kafkaService.send<AddProductForCollectionResponse>(ProductsTopics.addProductForCollection,dto)
    }

    editPerfume(dto: EditPerfumeDto) {
        return this.kafkaService.send<EditPerfumeResponse>(ProductsTopics.editPerfume,dto)
    }

    getProviders(dto: GetProviderDto) {
        return this.natsService.send<GetProvidersResponse>(ProductsSubject.getProvider,dto)
    }

    batchComponents(dto: BatchComponentsDto) {
        return this.kafkaService.send<BatchComponentsResponse>(ProductsTopics.batchComponents,dto)
    }

    getCollectionById(dto: GetCollectionByIdDto) {
        return this.natsService.send<GetCollectionByIdResponse>(ProductsSubject.getCollectionById,dto)
    }

    getTracks(dto: GetTracksDto) {
        return this.natsService.send<GetTracksResponse>(ProductsSubject.getTracks,dto)
    }

    changeStatusOfCollection(dto: ChangeStatusOfCollectionDto) {
        return this.kafkaService.send<ChangeStatusOfCollectionResponse>(ProductsTopics.changeStatusOfCollection,dto)
    }

    getCollections(dto: GetCollectionsDto) {
        return this.natsService.send<GetCollectionsResponse>(ProductsSubject.getCollections,dto)
    }

    changeStatusPerfume(dto: ChangeStatusPerfumeDto) {
        return this.kafkaService.send<ChangeStatusPerfumeResponse>(ProductsTopics.changeStatusPerfume,dto)
    }

    getComponents(dto: GetComponentsDto) {
        return this.natsService.send<GetComponentsResponse>(ProductsSubject.getComponents,dto)
    }

    removeCollection(dto: RemoveCollectionDto) {
        return this.kafkaService.send<RemoveCollectionResponse>(ProductsTopics.removeCollection,dto)
    }

    createCollection(dto: CreateCollectionDto) {
        return this.kafkaService.send<CreateCollectionResponse>(ProductsTopics.createCollection,dto)
    }

    getMusicById(dto: GetMusicByIdDto) {
        return this.natsService.send<GetMusicByIdResponse>(ProductsSubject.getMusicById,dto)
    }

    removeMusic(dto: RemoveMusicDto) {
        return this.kafkaService.send<RemoveMusicResponse>(ProductsTopics.removeMusic,dto)
    }

    createMusic(dto: CreateMusicDto) {
        return this.kafkaService.send<CreateMusicResponse>(ProductsTopics.createMusic,dto)
    }

    getMusics(dto: GetMusicsDto) {
        return this.natsService.send<GetMusicByIdResponse>(ProductsSubject.getMusics,dto)
    }

    removeProductFromCollection(dto: RemoveProductFromCollectionDto) {
        return this.kafkaService.send<RemoveProductFromCollectionResponse>(ProductsTopics.removeProductFromCollection,dto)
    }

    createPerfume(dto: CreatePerfumeDto) {
        return this.kafkaService.send<CreatePerfumeResponse>(ProductsTopics.createPerfume,dto)
    }

    getPerfumeById(dto: GetPerfumeByIdDto) {
        return this.natsService.send<GetPerfumeByIdResponse>(ProductsSubject.getPerfumeById,dto)
    }

    removeProvider(dto: RemoveProviderDto) {
        return this.kafkaService.send<RemoveProviderResponse>(ProductsTopics.removeProvider,dto)
    }

    createProduct(dto: CreateProductDto) {
        return this.kafkaService.send<CreateProductResponse>(ProductsTopics.createProduct,dto)
    }

    getPerfumes(dto: GetPerfumesDto) {
        return this.natsService.send<GetPerfumesResponse>(ProductsSubject.getPerfumes,dto)
    }

    removeTrack(dto: RemoveTrackDto) {
        return this.kafkaService.send<RemoveTrackResponse>(ProductsTopics.removeTrack,dto)
    }

    createProvider(dto: CreateProviderDto) {
        return this.kafkaService.send<CreateProviderResponse>(ProductsTopics.createProvider,dto)
    }

    getProviderById(dto: GetProviderByIdDto) {
        return this.natsService.send<GetProviderByIdResponse>(ProductsSubject.getPorivderById,dto)
    }

    setFinishComponent(dto: SetFinishComponentDto) {
        return this.kafkaService.send<SetFinishComponentResponse>(ProductsTopics.setFinishComponent,dto)
    }

    createTrack(dto: CreateTrackDto) {
        return this.kafkaService.send<CreateTrackResponse>(ProductsTopics.createTrack,dto)
    }

    getProductById(dto: GetProductByIdDto) {
        return this.natsService.send<GetProductByIdResponse>(ProductsSubject.getProductById,dto)
    }
}