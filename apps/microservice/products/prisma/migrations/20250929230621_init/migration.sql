-- CreateEnum
CREATE TYPE "public"."MusicType" AS ENUM ('TRACK', 'ALBUM');

-- CreateEnum
CREATE TYPE "public"."ComponentLvl" AS ENUM ('TOP', 'MIDDLE', 'BOTOM', 'ARRANGEMENT');

-- CreateEnum
CREATE TYPE "public"."Provider" AS ENUM ('DROP', 'LITTER');

-- CreateEnum
CREATE TYPE "public"."ComponentType" AS ENUM ('NOTE_ALCOHOL', 'NOTE_ETHEREAL', 'ALCOHOL', 'ETHEREAL');

-- CreateEnum
CREATE TYPE "public"."Sex" AS ENUM ('MAN', 'WOMEN', 'UNISEX');

-- CreateEnum
CREATE TYPE "public"."ProductEntity" AS ENUM ('PERFUME');

-- CreateTable
CREATE TABLE "public"."Track" (
    "id" UUID NOT NULL,
    "shortTrackId" UUID NOT NULL,
    "fullTrackId" UUID,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Music" (
    "id" UUID NOT NULL,
    "trackId" UUID,
    "name" VARCHAR(255) NOT NULL,
    "type" "public"."MusicType" NOT NULL,

    CONSTRAINT "Music_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Collection" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CollectionItem" (
    "id" UUID NOT NULL,
    "productId" UUID,
    "description" TEXT NOT NULL,
    "collectionId" UUID NOT NULL,
    "index" INTEGER NOT NULL,
    "imageIds" UUID[],

    CONSTRAINT "CollectionItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Component" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "volume" DECIMAL(65,30) NOT NULL,
    "provider" "public"."Provider" NOT NULL,
    "type" "public"."ComponentType" NOT NULL,
    "receiptId" UUID,
    "isFinish" BOOLEAN,

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ComponentItem" (
    "id" UUID NOT NULL,
    "componentId" UUID NOT NULL,
    "lvl" "public"."ComponentLvl" NOT NULL,
    "value" INTEGER NOT NULL,
    "typeVolume" "public"."Provider" NOT NULL,
    "index" INTEGER NOT NULL,

    CONSTRAINT "ComponentItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Perfume" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "sex" "public"."Sex" NOT NULL DEFAULT 'UNISEX',
    "authorDescription" TEXT NOT NULL,

    CONSTRAINT "Perfume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Product" (
    "id" UUID NOT NULL,
    "isCollection" BOOLEAN,
    "musicId" UUID NOT NULL,
    "currentPrice" DECIMAL(65,30) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProductItem" (
    "id" UUID NOT NULL,
    "entity" "public"."ProductEntity" NOT NULL DEFAULT 'PERFUME',
    "perfumeId" UUID,
    "count" DECIMAL(65,30) NOT NULL,
    "productId" UUID NOT NULL,

    CONSTRAINT "ProductItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Music" ADD CONSTRAINT "Music_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "public"."Track"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CollectionItem" ADD CONSTRAINT "CollectionItem_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "public"."Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CollectionItem" ADD CONSTRAINT "CollectionItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_musicId_fkey" FOREIGN KEY ("musicId") REFERENCES "public"."Music"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductItem" ADD CONSTRAINT "ProductItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductItem" ADD CONSTRAINT "ProductItem_perfumeId_fkey" FOREIGN KEY ("perfumeId") REFERENCES "public"."Perfume"("id") ON DELETE SET NULL ON UPDATE CASCADE;
