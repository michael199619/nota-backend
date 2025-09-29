-- CreateEnum
CREATE TYPE "public"."StorageType" AS ENUM ('TRACK', 'IMAGE', 'DOCUMENT');

-- CreateTable
CREATE TABLE "public"."Storage" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "type" "public"."StorageType" NOT NULL,

    CONSTRAINT "Storage_pkey" PRIMARY KEY ("id")
);
