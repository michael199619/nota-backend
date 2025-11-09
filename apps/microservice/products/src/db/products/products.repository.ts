import { Injectable } from "@nestjs/common";
import { AddProductForCollectionDto,BatchComponentsDto,ChangeStatusOfCollectionDto,ChangeStatusPerfumeDto,CreateCollectionDto,CreateMusicDto,CreatePerfumeDto,CreateProductDto,CreateProviderDto,CreateTrackDto,EditPerfumeDto,GetCollectionsDto,GetComponentsDto,GetMusicsDto,GetPerfumesDto,GetProvidersDto,GetTracksDto,RemoveProductFromCollectionDto,SetFinishComponentDto } from "@perfume-platform/common";
import { Repository } from "../base.repository";
import { ComponentHistoryType,Prisma,PrismaService } from "../prisma.service";
import { selectCollection,selectProduct } from "./products.select";

@Injectable()
export class ProductsRepository extends Repository {
    constructor(
        prisma: PrismaService,
    ) {
        super(prisma);
    }

    async getCollections(dto: GetCollectionsDto,tx?: Prisma.TransactionClient) {
        const { skip,take }=this.preparePagination(dto)
        const where=dto.search? {
            name: {
                contains: dto.search
            }
        }:undefined;

        const [data,total]=await Promise.all([
            this.getContext(tx).collection.findMany({
                select: {
                    name: true,
                    description: true,
                    id: true,
                    imageIds: true,
                    status: true
                },
                where,
                take,
                skip
            }),
            this.getContext(tx).collection.count({ where })
        ]);

        return this.paginationResponse({ data,total,take })
    }

    getCollectionById(id: string,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).collection.findUnique({
            where: { id },
            select: selectCollection
        })
    }

    createCollection(dto: CreateCollectionDto,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).collection.create({
            data: dto
        })
    }

    removeCollection(id: string,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).collection.delete({
            where: { id }
        })
    }

    changeStatusOfCollection(dto: ChangeStatusOfCollectionDto,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).collection.update({
            where: { id: dto.id },
            data: {
                status: dto.status
            }
        })
    }

    async addProductForCollection(
        dto: AddProductForCollectionDto,
        tx?: Prisma.TransactionClient,
    ) {
        return this.getContext(tx).collectionItem.create({
            data: {
                productId: dto.productId,
                collectionId: dto.collectionId,
                index: dto.index,
                imageIds: dto.imageIds,
            },
        });
    }

    async removeProductFromCollection(
        dto: RemoveProductFromCollectionDto,
        tx?: Prisma.TransactionClient
    ) {
        return this.getContext(tx).collectionItem.delete({
            where: { collectionId: dto.collectionId,id: dto.collectionItemId },
        });
    }

    getProductById(id: string,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).product.findFirst({
            select: selectProduct,
            where: { id },
        });
    }

    async createProduct(
        data: CreateProductDto,
        tx?: Prisma.TransactionClient,
    ) {
        return this.transaction(tx,async (trx) => {
            const productItem=await trx.productItem.create({
                data: {
                    perfumeId: data.perfumeId,
                    count: 1,
                }
            });

            const product=await trx.product.create({
                data: {
                    isCollection: data.isCollection,
                    musicId: data.musicId,
                    currentPrice: data.currentPrice,
                    name: data.name,
                    description: data.description,
                    itemId: productItem.id,
                }
            });

            return product;
        });
    }

    // Track methods
    async getTracks(dto: GetTracksDto,tx?: Prisma.TransactionClient) {
        const { skip,take }=this.preparePagination({ page: dto.page??1,limit: dto.limit??10 });

        const [data,total]=await Promise.all([
            this.getContext(tx).track.findMany({
                take,
                skip
            }),
            this.getContext(tx).track.count()
        ]);

        return this.paginationResponse({ data,total,take,page: dto.page??1 });
    }

    createTrack(dto: CreateTrackDto,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).track.create({
            data: dto
        });
    }

    removeTrack(id: string,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).track.delete({
            where: { id }
        });
    }

    // Music methods
    async getMusics(dto: GetMusicsDto,tx?: Prisma.TransactionClient) {
        const { skip,take }=this.preparePagination({ page: dto.page??1,limit: dto.limit??10 });
        const where=dto.search? {
            name: {
                contains: dto.search
            }
        }:undefined;

        const [data,total]=await Promise.all([
            this.getContext(tx).music.findMany({
                where,
                take,
                skip
            }),
            this.getContext(tx).music.count({ where })
        ]);

        return this.paginationResponse({ data,total,take,page: dto.page??1 });
    }

    getMusicById(id: string,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).music.findUnique({
            where: { id },
            include: {
                track: true
            }
        });
    }

    createMusic(dto: CreateMusicDto,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).music.create({
            data: dto
        });
    }

    removeMusic(id: string,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).music.delete({
            where: { id }
        });
    }

    // Perfume methods
    async getPerfumes(dto: GetPerfumesDto,tx?: Prisma.TransactionClient) {
        const { skip,take }=this.preparePagination({ page: dto.page??1,limit: dto.limit??10 });
        const where=dto.search? {
            authorDescription: {
                contains: dto.search
            }
        }:undefined;

        const [data,total]=await Promise.all([
            this.getContext(tx).perfume.findMany({
                select: {
                    id: true,
                    sex: true,
                    authorId: true,
                    status: true
                },
                where,
                take,
                skip
            }),
            this.getContext(tx).perfume.count({ where })
        ]);

        return this.paginationResponse({ data,total,take,page: dto.page });
    }

    getPerfumeById(id: string,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).perfume.findUnique({
            select: {
                id: true,
                authorId: true,
                authorDescription: true,
                sex: true,
                productItems: true,
                status: true,
                componentsItems: {
                    select: {
                        id: true,
                        index: true,
                        lvl: true,
                        volume: true,
                        component: {
                            select: {
                                description: true,
                                id: true,
                                providerId: true,
                                type: true,
                                name: true
                            }
                        }
                    }
                }
            },
            where: { id }
        });
    }

    async createPerfume(dto: CreatePerfumeDto,tx?: Prisma.TransactionClient) {
        return await this.getContext(tx).perfume.create({
            data: {
                authorId: dto.authorId,
                sex: dto.sex,
                authorDescription: dto.authorDescription,
                componentsItems: {
                    createMany: {
                        data: dto.components.map(component => ({
                            componentId: component.id,
                            lvl: component.lvl,
                            volume: component.volume,
                            index: component.index
                        }))
                    }
                }
            }
        });
    }

    editPerfume(dto: EditPerfumeDto,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).perfume.update({
            where: { id: dto.id },
            data: {
                sex: dto.sex,
                authorDescription: dto.authorDescription,
            }
        });
    }

    changeStatusPerfume(dto: ChangeStatusPerfumeDto,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).perfume.update({
            where: { id: dto.id },
            data: {
                status: dto.status
            }
        });
    }

    // Provider methods
    async getProviders(dto: GetProvidersDto,tx?: Prisma.TransactionClient) {
        const { skip,take }=this.preparePagination({ page: dto.page??1,limit: dto.limit??10 });
        const where=dto.search? {
            name: {
                contains: dto.search
            }
        }:undefined;

        const [data,total]=await Promise.all([
            this.getContext(tx).provider.findMany({
                select: {
                    id: true,
                    name: true
                },
                where,
                take,
                skip
            }),
            this.getContext(tx).provider.count({ where })
        ]);

        return this.paginationResponse({ data,total,take,page: dto.page });
    }

    getProviderById(id: string,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).provider.findUnique({
            where: { id }
        });
    }

    createProvider(dto: CreateProviderDto,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).provider.create({
            data: dto
        });
    }

    removeProvider(id: string,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).provider.delete({
            where: { id }
        });
    }

    // Component methods
    async getComponents(dto: GetComponentsDto,tx?: Prisma.TransactionClient) {
        const { skip,take }=this.preparePagination({ page: dto.page??1,limit: dto.limit??10 });
        const where=dto.search? {
            name: {
                contains: dto.search
            }
        }:undefined;

        const [data,total]=await Promise.all([
            this.getContext(tx).component.findMany({
                where,
                take,
                skip,
                select: {
                    name: true,
                    type: true,
                    id: true
                }
            }),
            this.getContext(tx).component.count({ where })
        ]);

        return this.paginationResponse({ data,total,take,page: dto.page??1 });
    }

    async batchComponents(dto: BatchComponentsDto,tx?: Prisma.TransactionClient) {
        return this.transaction(tx,(trx) => {
            return Promise.all(
                dto.components.map((item) => {
                    return trx.component.upsert({
                        select: {
                            histories: {
                                where: {
                                    type: {
                                        not: ComponentHistoryType.SPENT
                                    }
                                },
                                select: {
                                    type: true,
                                    count: true,
                                },
                                take: 1,
                                orderBy: {
                                    createdAt: 'desc'
                                }
                            }
                        },
                        where: { name: item.name,providerId: dto.providerId },
                        update: {
                            histories: {
                                create: {
                                    receiptId: dto.receiptId,
                                    count: item.count,
                                    type: ComponentHistoryType.ADD
                                }
                            }
                        },
                        create: {
                            name: item.name,
                            volume: item.count,
                            providerId: dto.providerId,
                            type: item.type,
                            histories: {
                                create: {
                                    receiptId: dto.receiptId,
                                    count: item.count,
                                    type: ComponentHistoryType.CREATE
                                }
                            }
                        }
                    });
                })
            );
        });
    }

    setFinishComponent(dto: SetFinishComponentDto,tx?: Prisma.TransactionClient) {
        return this.getContext(tx).componentHistory.create({
            data: {
                componentId: dto.id,
                receiptId: dto.receiptId,
                count: dto.count,
                type: 'SPENT'
            }
        });
    }
}