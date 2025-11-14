import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './db/prisma.module';
import { ConfigurationModule } from './modules/config/config.module';
import { TransportModule } from './modules/transport/transport.module';
import { AddProductForCollectionModule } from './usecases/add-product-for-collection/add-product-for-collection.module';
import { BatchComponentsModule } from './usecases/batch-components/batch-components.module';
import { ChangeStatusOfCollectionModule } from './usecases/change-status-of-collection/change-status-of-collection.module';
import { ChangeStatusPerfumeModule } from './usecases/change-status-perfume/change-status-perfume.module';
import { CreateCollectionModule } from './usecases/create-collection/create-collection.module';
import { CreateMusicModule } from './usecases/create-music/create-music.module';
import { CreatePerfumeModule } from './usecases/create-perfume/create-perfume.module';
import { CreateProductModule } from './usecases/create-product/create-product.module';
import { CreateProviderModule } from './usecases/create-provider/create-provider.module';
import { CreateTrackModule } from './usecases/create-track/create-track.module';
import { EditPerfumeModule } from './usecases/edit-perfume/edit-perfume.module';
import { GetCollectionByIdModule } from './usecases/get-collection-by-id/get-collection-by-id.module';
import { GetCollectionsModule } from './usecases/get-collections/get-collections.module';
import { GetComponentsModule } from './usecases/get-components/get-components.module';
import { GetMusicByIdModule } from './usecases/get-music-by-id/get-music-by-id.module';
import { GetMusicsModule } from './usecases/get-musics/get-musics.module';
import { GetPerfumeByIdModule } from './usecases/get-perfume-by-id/get-perfume-by-id.module';
import { GetPerfumesModule } from './usecases/get-perfumes/get-perfumes.module';
import { GetPorivderByIdModule } from './usecases/get-porivder-by-id/get-porivder-by-id.module';
import { GetProductByIdModule } from './usecases/get-product-by-id/get-product-by-id.module';
import { GetProviderModule } from './usecases/get-providers/get-providers.module';
import { GetTracksModule } from './usecases/get-tracks/get-tracks.module';
import { RemoveCollectionModule } from './usecases/remove-collection/remove-collection.module';
import { RemoveMusicModule } from './usecases/remove-music/remove-music.module';
import { RemoveProductFromCollectionModule } from './usecases/remove-product-from-collection/remove-product-from-collection.module';
import { RemoveProviderModule } from './usecases/remove-provider/remove-provider.module';
import { RemoveTrackModule } from './usecases/remove-track/remove-track.module';
import { SetFinishComponentModule } from './usecases/set-finish-component/set-finish-component.module';

@Module({
    imports: [
        ConfigurationModule,
        TransportModule,
        PrismaModule,
        AddProductForCollectionModule,
        BatchComponentsModule,
        ChangeStatusOfCollectionModule,
        ChangeStatusPerfumeModule,
        CreateCollectionModule,
        CreateMusicModule,
        CreatePerfumeModule,
        CreateProductModule,
        CreateProviderModule,
        CreateTrackModule,
        EditPerfumeModule,
        GetCollectionByIdModule,
        GetCollectionsModule,
        GetComponentsModule,
        GetMusicByIdModule,
        GetMusicsModule,
        GetPerfumeByIdModule,
        GetPerfumesModule,
        GetPorivderByIdModule,
        GetProductByIdModule,
        GetProviderModule,
        GetTracksModule,
        RemoveCollectionModule,
        RemoveMusicModule,
        RemoveProductFromCollectionModule,
        RemoveProviderModule,
        RemoveTrackModule,
        SetFinishComponentModule,
    ],
    controllers: [AppController],
})
export class AppModule { }


