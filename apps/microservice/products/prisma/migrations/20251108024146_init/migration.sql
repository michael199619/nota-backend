-- CreateEnum
CREATE TYPE "public"."music_type" AS ENUM ('TRACK', 'ALBUM');

-- CreateEnum
CREATE TYPE "public"."component_lvl" AS ENUM ('TOP', 'MIDDLE', 'BOTTOM', 'ARRANGEMENT');

-- CreateEnum
CREATE TYPE "public"."component_type" AS ENUM ('NOTE_ALCOHOL', 'NOTE_ETHEREAL', 'ALCOHOL', 'ETHEREAL');

-- CreateEnum
CREATE TYPE "public"."sex" AS ENUM ('MAN', 'WOMEN', 'UNISEX');

-- CreateEnum
CREATE TYPE "public"."product_entity" AS ENUM ('PERFUME');

-- CreateEnum
CREATE TYPE "public"."component_history_type" AS ENUM ('ADD', 'CREATE', 'SPENT');

-- CreateEnum
CREATE TYPE "public"."perfume_status" AS ENUM ('DRAFT', 'PUBLISH');

-- CreateEnum
CREATE TYPE "public"."collection_status" AS ENUM ('DRAFT', 'PENDING', 'PUBLISH');

-- CreateTable
CREATE TABLE "public"."track" (
    "id" UUID NOT NULL,
    "short_track_id" UUID NOT NULL,
    "full_track_id" UUID,

    CONSTRAINT "track_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."music" (
    "id" UUID NOT NULL,
    "track_id" UUID,
    "name" VARCHAR(255) NOT NULL,
    "type" "public"."music_type" NOT NULL,

    CONSTRAINT "music_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."collection" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "status" "public"."collection_status" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CollectionItem" (
    "id" UUID NOT NULL,
    "product_id" UUID,
    "description" TEXT NOT NULL,
    "collection_id" UUID NOT NULL,
    "index" INTEGER NOT NULL,
    "image_ids" UUID[],
    "componentId" UUID,

    CONSTRAINT "CollectionItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ComponentHistory" (
    "id" UUID NOT NULL,
    "receipt_id" UUID,
    "created_id" TIMESTAMP(3) NOT NULL,
    "type" "public"."component_history_type" NOT NULL DEFAULT 'CREATE',
    "count" DECIMAL(65,30) NOT NULL DEFAULT 1,
    "component_id" UUID NOT NULL,

    CONSTRAINT "ComponentHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."provider" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255),
    "site" VARCHAR(255),

    CONSTRAINT "provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."component" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "volume" DECIMAL(65,30) NOT NULL,
    "type" "public"."component_type" NOT NULL DEFAULT 'ALCOHOL',
    "provider_id" UUID NOT NULL,

    CONSTRAINT "component_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."component_item" (
    "id" UUID NOT NULL,
    "component_id" UUID NOT NULL,
    "lvl" "public"."component_lvl" NOT NULL,
    "volume" INTEGER NOT NULL,
    "index" INTEGER NOT NULL,
    "perfume_id" UUID NOT NULL,

    CONSTRAINT "component_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."perfume" (
    "id" UUID NOT NULL,
    "author_id" UUID NOT NULL,
    "sex" "public"."sex" NOT NULL DEFAULT 'UNISEX',
    "author_description" TEXT NOT NULL,
    "status" "public"."perfume_status" NOT NULL DEFAULT 'DRAFT',

    CONSTRAINT "perfume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."product" (
    "id" UUID NOT NULL,
    "is_collection" BOOLEAN NOT NULL DEFAULT true,
    "music_id" UUID NOT NULL,
    "current_price" DECIMAL(65,30) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "item_id" UUID NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."product_item" (
    "id" UUID NOT NULL,
    "entity" "public"."product_entity" NOT NULL DEFAULT 'PERFUME',
    "perfume_id" UUID,
    "count" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "product_item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CollectionItem_product_id_key" ON "public"."CollectionItem"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "component_name_key" ON "public"."component"("name");

-- CreateIndex
CREATE UNIQUE INDEX "product_item_id_key" ON "public"."product"("item_id");

-- AddForeignKey
ALTER TABLE "public"."music" ADD CONSTRAINT "music_track_id_fkey" FOREIGN KEY ("track_id") REFERENCES "public"."track"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CollectionItem" ADD CONSTRAINT "CollectionItem_collection_id_fkey" FOREIGN KEY ("collection_id") REFERENCES "public"."collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CollectionItem" ADD CONSTRAINT "CollectionItem_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CollectionItem" ADD CONSTRAINT "CollectionItem_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "public"."component"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ComponentHistory" ADD CONSTRAINT "ComponentHistory_component_id_fkey" FOREIGN KEY ("component_id") REFERENCES "public"."component"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."component" ADD CONSTRAINT "component_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "public"."provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."component_item" ADD CONSTRAINT "component_item_component_id_fkey" FOREIGN KEY ("component_id") REFERENCES "public"."component"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."component_item" ADD CONSTRAINT "component_item_perfume_id_fkey" FOREIGN KEY ("perfume_id") REFERENCES "public"."perfume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."product" ADD CONSTRAINT "product_music_id_fkey" FOREIGN KEY ("music_id") REFERENCES "public"."music"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."product" ADD CONSTRAINT "product_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "public"."product_item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."product_item" ADD CONSTRAINT "product_item_perfume_id_fkey" FOREIGN KEY ("perfume_id") REFERENCES "public"."perfume"("id") ON DELETE SET NULL ON UPDATE CASCADE;
