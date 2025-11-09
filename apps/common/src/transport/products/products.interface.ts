import { ControllerResponse } from "../../utils";
import { AddProductForCollectionDto,AddProductForCollectionResponse,BatchComponentsDto,BatchComponentsResponse,ChangeStatusOfCollectionDto,ChangeStatusOfCollectionResponse,ChangeStatusPerfumeDto,ChangeStatusPerfumeResponse,CreateCollectionDto,CreateCollectionResponse,CreateMusicDto,CreateMusicResponse,CreatePerfumeDto,CreatePerfumeResponse,CreateProductDto,CreateProductResponse,CreateProviderDto,CreateProviderResponse,CreateTrackDto,CreateTrackResponse,EditPerfumeDto,EditPerfumeResponse,GetCollectionByIdDto,GetCollectionByIdResponse,GetCollectionsDto,GetCollectionsResponse,GetComponentsDto,GetComponentsResponse,GetMusicByIdDto,GetMusicByIdResponse,GetMusicsDto,GetMusicsResponse,GetPerfumeByIdDto,GetPerfumeByIdResponse,GetPerfumesDto,GetPerfumesResponse,GetProductByIdDto,GetProductByIdResponse,GetProviderByIdDto,GetProviderByIdResponse,GetProvidersDto,GetProvidersResponse,GetTracksDto,GetTracksResponse,RemoveCollectionDto,RemoveCollectionResponse,RemoveMusicDto,RemoveMusicResponse,RemoveProductFromCollectionDto,RemoveProductFromCollectionResponse,RemoveProviderDto,RemoveProviderResponse,RemoveTrackDto,RemoveTrackResponse,SetFinishComponentDto,SetFinishComponentResponse } from "./dtos";

export interface IProductsTransportOptions {
    clientId: string;
    kafkaBrokers: string[];
    natsServers: string[];
}

export interface IProductsController {
    addProductForCollection(dto: AddProductForCollectionDto): ControllerResponse<AddProductForCollectionResponse>;
    editPerfume(dto: EditPerfumeDto): ControllerResponse<EditPerfumeResponse>;
    getProviders(dto: GetProvidersDto): ControllerResponse<GetProvidersResponse>;
    batchComponents(dto: BatchComponentsDto): ControllerResponse<BatchComponentsResponse>;
    getCollectionById(dto: GetCollectionByIdDto): ControllerResponse<GetCollectionByIdResponse>;
    getTracks(dto: GetTracksDto): ControllerResponse<GetTracksResponse>
    changeStatusOfCollection(dto: ChangeStatusOfCollectionDto): ControllerResponse<ChangeStatusOfCollectionResponse>;
    getCollections(dto: GetCollectionsDto): ControllerResponse<GetCollectionsResponse>;
    changeStatusPerfume(dto: ChangeStatusPerfumeDto): ControllerResponse<ChangeStatusPerfumeResponse>;
    getComponents(dto: GetComponentsDto): ControllerResponse<GetComponentsResponse>;
    removeCollection(dto: RemoveCollectionDto): ControllerResponse<RemoveCollectionResponse>;
    createCollection(dto: CreateCollectionDto): ControllerResponse<CreateCollectionResponse>;
    getMusicById(dto: GetMusicByIdDto): ControllerResponse<GetMusicByIdResponse>;
    removeMusic(dto: RemoveMusicDto): ControllerResponse<RemoveMusicResponse>;
    createMusic(dto: CreateMusicDto): ControllerResponse<CreateMusicResponse>;
    getMusics(dto: GetMusicsDto): ControllerResponse<GetMusicsResponse>;
    removeProductFromCollection(dto: RemoveProductFromCollectionDto): ControllerResponse<RemoveProductFromCollectionResponse>;
    createPerfume(dto: CreatePerfumeDto): ControllerResponse<CreatePerfumeResponse>;
    getPerfumeById(dto: GetPerfumeByIdDto): ControllerResponse<GetPerfumeByIdResponse>;
    removeProvider(dto: RemoveProviderDto): ControllerResponse<RemoveProviderResponse>;
    createProduct(dto: CreateProductDto): ControllerResponse<CreateProductResponse>;
    getPerfumes(dto: GetPerfumesDto): ControllerResponse<GetPerfumesResponse>;
    removeTrack(dto: RemoveTrackDto): ControllerResponse<RemoveTrackResponse>;
    createProvider(dto: CreateProviderDto): ControllerResponse<CreateProviderResponse>;
    getProviderById(dto: GetProviderByIdDto): ControllerResponse<GetProviderByIdResponse>;
    setFinishComponent(dto: SetFinishComponentDto): ControllerResponse<SetFinishComponentResponse>;
    createTrack(dto: CreateTrackDto): ControllerResponse<CreateTrackResponse>
    getProductById(dto: GetProductByIdDto): ControllerResponse<GetProductByIdResponse>;
}