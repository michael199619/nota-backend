/*
  Warnings:

  - You are about to drop the column `componentId` on the `CollectionItem` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `CollectionItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."CollectionItem" DROP CONSTRAINT "CollectionItem_componentId_fkey";

-- AlterTable
ALTER TABLE "public"."CollectionItem" DROP COLUMN "componentId",
DROP COLUMN "description";

-- AlterTable
ALTER TABLE "public"."collection" ADD COLUMN     "imageIds" UUID[];
