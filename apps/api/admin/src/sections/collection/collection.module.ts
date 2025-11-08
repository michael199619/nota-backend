import { Module } from '@nestjs/common';
import { ProductsPublisherModule,UserPublisherModule } from '@perfume-platform/common';
import { AuthUserModule } from '../../modules/auth/auth.module';
import { CollectionController } from './collection.controller';

@Module({
    imports: [
        ProductsPublisherModule.register(),
        UserPublisherModule.register(),
        AuthUserModule,
    ],
    controllers: [CollectionController]
})
export class CollectionModule { }
