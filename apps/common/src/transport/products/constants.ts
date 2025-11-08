export const TRANSPORT_PRODUCTS_KAFKA='TRANSPORT_PRODUCTS_KAFKA';
export const TRANSPORTS_PRODUCT_NATS='TRANSPORT_PRODUCTS_NATS';
export const TRASPORT_PRODUCTS_GROUP='TRANSPORT_PRODUCTS_GROUP';

export enum ProductsTopics {
    changeStatusPerfume='change.status.perfume',
    changeStatusOfCollection='change.status.of.collection',
    removeCollection='remove.collection',
    removeMusic='remove.music',
    removeProductFromCollection='remove.product.collection',
    removeProvider='remove.provider',
    removeTrack='remove.track',
    setFinishComponent='set.finish.component',
    batchComponents='batch.components',
    editPerfume='edit.perfume',
    createCollection='create.collection',
    createMusic='create.music',
    createPerfume='create.perfume',
    createProduct='create.product',
    createProvider='create.provider',
    createTrack='create.track',
    addProductForCollection='add.product.collection',
}

export enum ProductsSubject {
    getProvider='get.provider',
    getCollectionById='get.collection.id',
    getTracks='get.tracks',
    getCollections='get.collections',
    getComponents='get.components',
    getMusicById='get.music.id',
    getMusics='get.musics',
    getPerfumeById='get.perfume.id',
    getPerfumes='get.perfumes',
    getPorivderById='get.porivder.id',
    getProductById='get.product.id',
}

export enum Sex {
    MAN='MAN',
    WOMEN='WOMEN',
    UNISEX='UNISEX'
}

export enum PerfumeStatus {
    DRAFT='DRAFT',
    PUBLISH='PUBLISH'
}

export enum CollectionStatus {
    DRAFT='DRAFT',
    PENDING='PENDING',
    PUBLISH='PUBLISH'
}

export enum MusicType {
    TRACK='TRACK',
    ALBUM='ALBUM'
}

export enum ComponentLvl {
    TOP='TOP',
    MIDDLE='MIDDLE',
    BOTTOM='BOTTOM',
    ARRANGEMENT='ARRANGEMENT'
}

export enum VolumeType {
    DROP='DROP',
    LITTER='LITTER'
}

export enum ComponentType {
    NOTE_ALCOHOL='NOTE_ALCOHOL',
    NOTE_ETHEREAL='NOTE_ETHEREAL',
    ALCOHOL='ALCOHOL',
    ETHEREAL='ETHEREAL'
}

export enum ProductEntity {
    PERFUME='PERFUME'
}

export enum ComponentHistoryType {
    ADD='ADD',
    CREATE='CREATE',
    SPENT='SPENT'
}

export const productsTopics=Object.values(ProductsTopics);