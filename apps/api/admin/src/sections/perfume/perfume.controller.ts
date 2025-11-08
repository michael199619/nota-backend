import { Body,Controller,Get,Param,ParseUUIDPipe,Post,Put,Query,UseGuards } from '@nestjs/common';
import { ApiOperation,ApiResponse,ApiTags } from '@nestjs/swagger';
import { ChangeStatusPerfumeDto,ChangeStatusPerfumeResponse,ContextService,CreatePerfumeResponse,EditPerfumeDto,EditPerfumeResponse,GetPerfumeByIdResponse,GetPerfumesDto,GetPerfumesResponse,ProductsPublisher } from "@perfume-platform/common";
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from '../../modules/auth/auth.guard';
import { AdminCreatePerfumeDto } from './perfume.dto';

@ApiTags('Парфюмы')
@UseGuards(AuthGuard)
@Controller('perfumes')
export class PerfumeController {
  constructor(
    private readonly productsPublisher: ProductsPublisher,
    private readonly ctx: ContextService
  ) { }

  @Post()
  @ApiOperation({
    description: 'Создать парфюм',
  })
  @ApiResponse({
    type: CreatePerfumeResponse
  })
  createPerfume(
    @Body() dto: AdminCreatePerfumeDto) {
    return firstValueFrom(this.productsPublisher.createPerfume({ ...dto,authorId: this.ctx.user.id }))
  }

  @Get()
  @ApiOperation({
    description: 'Получить список парфюмов',
  })
  @ApiResponse({
    type: GetPerfumesResponse
  })
  getPerfumes(
    @Query() dto: GetPerfumesDto) {
    return firstValueFrom(this.productsPublisher.getPerfumes(dto))
  }

  @Get(':id')
  @ApiOperation({
    description: 'Получить парфюм по идентификатору',
  })
  @ApiResponse({
    type: GetPerfumeByIdResponse
  })
  getPerfumeById(
    @Param('id',ParseUUIDPipe) id: string) {
    return firstValueFrom(this.productsPublisher.getPerfumeById({ id }))
  }

  @Put(':id')
  @ApiOperation({
    description: 'Редактировать парфюм',
  })
  @ApiResponse({
    type: EditPerfumeResponse
  })
  editPerfume(
    @Param('id',ParseUUIDPipe) id: string,
    @Body() dto: EditPerfumeDto) {
    return firstValueFrom(this.productsPublisher.editPerfume({ ...dto,id }))
  }

  @Post(':id/status')
  @ApiOperation({
    description: 'Изменить статус парфюма',
  })
  @ApiResponse({
    type: ChangeStatusPerfumeResponse
  })
  changeStatusPerfume(
    @Param('id',ParseUUIDPipe) id: string,
    @Body() dto: ChangeStatusPerfumeDto) {
    return firstValueFrom(this.productsPublisher.changeStatusPerfume({ ...dto,id }))
  }
}
