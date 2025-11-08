import { Module } from '@nestjs/common';
import { ProductsPublisherModule,UserPublisherModule } from '@perfume-platform/common';
import { AuthUserModule } from '../../modules/auth/auth.module';
import { ProductController } from './product.controller';

@Module({
    imports: [
        ProductsPublisherModule.register(),
        UserPublisherModule.register(),
        AuthUserModule,
    ],
    controllers: [ProductController]
})
export class ProductModule { }
