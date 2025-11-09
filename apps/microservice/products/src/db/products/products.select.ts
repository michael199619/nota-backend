import { Prisma } from "../prisma.service";

export const selectProduct={
    id: true,
    name: true,
    currentPrice: true,
    isCollection: true,
    collectionItem: {
        select: {
            collection: {
                select: {
                    id: true,
                    name: true,
                    status: true,
                    imageIds: true,
                }
            }
        }
    },
    description: true,
    music: {
        select: {
            id: true,
            name: true,
            trackId: true,
            track: {
                select: {
                    id: true,
                    fullTrackId: true,
                    shortTrackId: true
                }
            }
        }
    },
    item: {
        select: {
            entity: true,
            count: true,
            id: true,
            perfume: {
                select: {
                    sex: true,
                    status: true,
                    id: true,
                    authorDescription: true,
                    authorId: true,
                    componentsItems: {
                        select: {
                            lvl: true,
                            volume: true,
                            component: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                }
            }
        }
    }
} satisfies Prisma.ProductSelect;

export const selectCollection: Prisma.CollectionSelect={
    id: true,
    name: true,
    description: true,
    status: true,
    imageIds: true,
    items: {
        select: {
            id: true,
            productId: true,
            index: true,
            imageIds: true,
            product: {
                select: {
                    id: true,
                    name: true,
                    description: true
                }
            }
        }
    }
}