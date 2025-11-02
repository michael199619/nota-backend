import { Injectable } from "@nestjs/common";
import { ArticleStatus,CreateArticleDto,EditArticleDto,GetArticlesDto,getContains } from "@perfume-platform/common";
import { Repository } from "../base.repository";
import { Article,Prisma,PrismaService } from "../prisma.service";

@Injectable()
export class ArticlesRepository extends Repository {
    constructor(
        prisma: PrismaService,
    ) {
        super(prisma);
    }

    getArticleById(id: string) {
        return this.prisma.article.findFirst({
            select: {
                id: true,
                title: true,
                description: true,
                status: true,
                publishedAt: true,
                createdAt: true,
                authorId: true,
                updatedAt: true,
                content: true
            },
            where: { id }
        })
    }

    createArticle(dto: CreateArticleDto) {
        return this.prisma.article.create({
            data: {
                title: dto.title,
                description: dto.description,
                authorId: dto.authorId,
                content: dto.content,
                status: ArticleStatus.DRAFT
            }
        })
    }

    publishArticleById(id: string) {
        return this.prisma.article.update({
            where: { id },
            data: {
                status: ArticleStatus.PUBLISHED,
                publishedAt: new Date()
            }
        })
    }

    async deleteArticle(id: string) {
        await this.prisma.article.delete({
            where: { id }
        })
    }

    editArticle(dto: EditArticleDto) {
        return this.prisma.article.update({
            where: { id: dto.id },
            data: {
                title: dto.title,
                description: dto.description,
                content: dto.content
            }
        })
    }

    async getArticles(dto: GetArticlesDto) {
        const { skip,take }=this.preparePagination(dto);
        const where: Prisma.ArticleWhereInput={};

        if (dto.authorId) {
            where.authorId=dto.authorId;
        }

        if (dto.status) {
            where.status=dto.status;
        }

        if (dto.dateFrom) {
            where.createdAt={
                gte: dto.dateFrom
            }
        }

        if (dto.dateTo) {
            where.createdAt=where.createdAt as Prisma.DateTimeFilter<"Article">||{}
            where.createdAt.lte=dto.dateTo;
        }

        if (dto.isMy!==undefined&&dto.userId) {
            if (!dto.isMy) {
                where.authorId=dto.authorId? {
                    equals: dto.authorId,
                    not: dto.userId
                }:{ not: dto.userId };
            } else {
                where.authorId=dto.userId;
            }
        }

        if (dto.search) {
            where.OR=where.OR||[];
            where.OR.push(getContains<Article>('title',dto.search)!);
            where.OR.push(getContains<Article>('description',dto.search)!);
        }

        const [articles,total]=await Promise.all([
            this.prisma.article.findMany({
                skip,
                take,
                select: {
                    authorId: true,
                    createdAt: true,
                    content: true,
                    id: true,
                    status: true,
                    publishedAt: true,
                    title: true,
                    updatedAt: true,
                },
                where,
                orderBy: {
                    createdAt: 'desc',
                },
            }),
            this.prisma.article.count({
                where,
            })
        ]);

        return this.paginationResponse({ data: articles,total,take,page: dto.page });
    }

} 