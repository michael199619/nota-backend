import { Injectable } from '@nestjs/common';
import { CreateArticleDto,CreateArticleResponse,INewsController,SanitizeService,Usecase,UserPublisher } from '@perfume-platform/common';
import { firstValueFrom } from 'rxjs';
import { ArticlesRepository } from '../../db/articles/articles.repository';

@Injectable()
export class CreateArticleUsecase extends Usecase<INewsController['createArticle']> {
  constructor(
    private readonly articlesRepository: ArticlesRepository,
    private readonly sanitizeService: SanitizeService,
    private readonly usersPublisher: UserPublisher
  ) {
    super()
  }
  public excecute(dto: CreateArticleDto) {
    return super.excecute(dto)
  }

  async handler(dto: CreateArticleDto): Promise<CreateArticleResponse> {
    const user=await firstValueFrom(this.usersPublisher.getUser({ id: dto.authorId }));

    const content=this.sanitizeService.sanitize(dto.content);

    const article=await this.articlesRepository.createArticle({
      ...dto,
      content
    });


    return {
      ...article,
      authorName: user.name
    }
  }
}