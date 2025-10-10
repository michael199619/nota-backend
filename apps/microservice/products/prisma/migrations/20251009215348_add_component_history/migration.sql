/*
  Warnings:

  - You are about to drop the column `isFinish` on the `Component` table. All the data in the column will be lost.
  - You are about to drop the column `receiptId` on the `Component` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Component" DROP COLUMN "isFinish",
DROP COLUMN "receiptId";

-- CreateTable
CREATE TABLE "public"."ComponentHistory" (
    "id" UUID NOT NULL,
    "isFinish" BOOLEAN NOT NULL DEFAULT false,
    "receiptId" UUID,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "componentId" UUID NOT NULL,

    CONSTRAINT "ComponentHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ComponentHistory" ADD CONSTRAINT "ComponentHistory_componentId_fkey" FOREIGN KEY ("componentId") REFERENCES "public"."Component"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
