import { Module } from '@nestjs/common';
import { ProductsPublisherModule,UserPublisherModule } from '@perfume-platform/common';
import { AuthUserModule } from '../../modules/auth/auth.module';
import { MusicController } from './music.controller';

@Module({
    imports: [
        ProductsPublisherModule.register(),
        UserPublisherModule.register(),
        AuthUserModule,
    ],
    controllers: [MusicController]
})
export class MusicModule { }
