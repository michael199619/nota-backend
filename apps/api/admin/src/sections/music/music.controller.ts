import { Body,Controller,Delete,Get,Param,ParseUUIDPipe,Post,Query,UseGuards } from '@nestjs/common';
import { ApiOkResponse,ApiOperation,ApiTags } from '@nestjs/swagger';
import { CreateMusicDto,CreateMusicResponse,CreateTrackDto,CreateTrackResponse,GetMusicByIdResponse,GetMusicsDto,GetMusicsResponse,GetTracksDto,GetTracksResponse,ProductsPublisher,RemoveMusicResponse,RemoveTrackResponse } from "@perfume-platform/common";
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from '../../modules/auth/auth.guard';

@ApiTags('Музыка')
@UseGuards(AuthGuard)
@Controller('music')
export class MusicController {
  constructor(
    private readonly productsPublisher: ProductsPublisher
  ) { }

  @Post('track')
  @ApiOperation({
    description: 'Создать трек',
  })
  @ApiOkResponse({
    type: CreateTrackResponse
  })
  createTrack(
    @Body() dto: CreateTrackDto) {
    return firstValueFrom(this.productsPublisher.createTrack(dto))
  }

  @Get('track')
  @ApiOperation({
    description: 'Получить список треков',
  })
  @ApiOkResponse({
    type: GetTracksResponse
  })
  getTracks(
    @Query() dto: GetTracksDto) {
    return firstValueFrom(this.productsPublisher.getTracks(dto))
  }

  @Delete('track/:id')
  @ApiOperation({
    description: 'Удалить трек',
  })
  @ApiOkResponse({
    type: RemoveTrackResponse
  })
  removeTrack(
    @Param('id',ParseUUIDPipe) id: string) {
    return firstValueFrom(this.productsPublisher.removeTrack({ id }))
  }

  @Post()
  @ApiOperation({
    description: 'Создать музыку',
  })
  @ApiOkResponse({
    type: CreateMusicResponse
  })
  createMusic(
    @Body() dto: CreateMusicDto) {
    return firstValueFrom(this.productsPublisher.createMusic(dto))
  }

  @Get()
  @ApiOperation({
    description: 'Получить список музыки',
  })
  @ApiOkResponse({
    type: GetMusicsResponse
  })
  getMusics(
    @Query() dto: GetMusicsDto) {
    return firstValueFrom(this.productsPublisher.getMusics(dto))
  }

  @Get(':id')
  @ApiOperation({
    description: 'Получить музыку по идентификатору',
  })
  @ApiOkResponse({
    type: GetMusicByIdResponse
  })
  getMusicById(
    @Param('id',ParseUUIDPipe) id: string) {
    return firstValueFrom(this.productsPublisher.getMusicById({ id }))
  }

  @Delete(':id')
  @ApiOperation({
    description: 'Удалить музыку',
  })
  @ApiOkResponse({
    type: RemoveMusicResponse
  })
  removeMusic(
    @Param('id',ParseUUIDPipe) id: string) {
    return firstValueFrom(this.productsPublisher.removeMusic({ id }))
  }
}
