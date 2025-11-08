import { Module } from '@nestjs/common';
import { ProductsPublisherModule,UserPublisherModule } from '@perfume-platform/common';
import { AuthUserModule } from '../../modules/auth/auth.module';
import { PerfumeController } from './perfume.controller';

@Module({
    imports: [
        ProductsPublisherModule.register(),
        UserPublisherModule.register(),

        AuthUserModule,
    ],
    controllers: [PerfumeController]
})
export class PerfumeModule { }
