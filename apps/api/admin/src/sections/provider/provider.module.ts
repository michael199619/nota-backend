import { Module } from '@nestjs/common';
import { ProductsPublisherModule,UserPublisherModule } from '@perfume-platform/common';
import { AuthUserModule } from '../../modules/auth/auth.module';
import { ProviderController } from './provider.controller';

@Module({
    imports: [
        ProductsPublisherModule.register(),
        UserPublisherModule.register(),
        AuthUserModule,
    ],
    controllers: [ProviderController]
})
export class ProviderModule { }
