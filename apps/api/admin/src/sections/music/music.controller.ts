import { Body,Controller,Delete,Get,Param,ParseUUIDPipe,Post,Query,UseGuards } from '@nestjs/common';
import { ApiOperation,ApiResponse,ApiTags } from '@nestjs/swagger';
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
  @ApiResponse({
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
  @ApiResponse({
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
  @ApiResponse({
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
  @ApiResponse({
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
  @ApiResponse({
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
  @ApiResponse({
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
  @ApiResponse({
    type: RemoveMusicResponse
  })
  removeMusic(
    @Param('id',ParseUUIDPipe) id: string) {
    return firstValueFrom(this.productsPublisher.removeMusic({ id }))
  }
}
