-- CreateEnum
CREATE TYPE "public"."article_status" AS ENUM ('DRAFT', 'PUBLISHED');

-- CreateTable
CREATE TABLE "public"."article" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author_id" UUID NOT NULL,
    "published_at" TIMESTAMP(3),
    "status" "public"."article_status" NOT NULL DEFAULT 'DRAFT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."tag_item" (
    "tag_item" UUID NOT NULL,
    "article_id" UUID NOT NULL,

    CONSTRAINT "tag_item_pkey" PRIMARY KEY ("tag_item","article_id")
);

-- CreateTable
CREATE TABLE "public"."tag" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."tag_item" ADD CONSTRAINT "tag_item_article_id_fkey" FOREIGN KEY ("article_id") REFERENCES "public"."article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tag_item" ADD CONSTRAINT "tag_item_tag_item_fkey" FOREIGN KEY ("tag_item") REFERENCES "public"."tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
