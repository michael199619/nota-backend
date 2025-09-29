-- CreateEnum
CREATE TYPE "public"."BuyerAuthType" AS ENUM ('INST', 'TELEGRAM', 'SITE');

-- CreateTable
CREATE TABLE "public"."Buyer" (
    "id" UUID NOT NULL,
    "login" VARCHAR(255) NOT NULL,
    "phone" INTEGER NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "typeAuth" "public"."BuyerAuthType" NOT NULL DEFAULT 'SITE',
    "password" CHAR(1) NOT NULL,

    CONSTRAINT "Buyer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BuyerInfo" (
    "buyerId" UUID NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "BuyerInfo_pkey" PRIMARY KEY ("buyerId")
);

-- CreateTable
CREATE TABLE "public"."Address" (
    "id" UUID NOT NULL,
    "buyerId" UUID NOT NULL,
    "address" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."BuyerInfo" ADD CONSTRAINT "BuyerInfo_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "public"."Buyer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Address" ADD CONSTRAINT "Address_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "public"."BuyerInfo"("buyerId") ON DELETE RESTRICT ON UPDATE CASCADE;
