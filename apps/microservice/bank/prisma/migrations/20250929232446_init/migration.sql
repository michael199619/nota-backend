-- CreateEnum
CREATE TYPE "public"."PaymentStatus" AS ENUM ('APPROVE', 'PARTIALLY', 'REJECT', 'PENDING');

-- CreateEnum
CREATE TYPE "public"."PaymentType" AS ENUM ('BUY', 'TRANSFER');

-- CreateEnum
CREATE TYPE "public"."RecipientType" AS ENUM ('PROVIDER', 'COMPONENT', 'USER');

-- CreateEnum
CREATE TYPE "public"."RecipientStatus" AS ENUM ('APPROV', 'REJECT', 'PENDING');

-- CreateEnum
CREATE TYPE "public"."ReceiptType" AS ENUM ('INCOME', 'EXPENSE');

-- CreateEnum
CREATE TYPE "public"."ReceiptEntityType" AS ENUM ('USER', 'COMPONENT', 'ORDER', 'PROVIDER');

-- CreateTable
CREATE TABLE "public"."Payment" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" "public"."PaymentType" NOT NULL DEFAULT 'BUY',
    "receiptId" UUID,
    "status" "public"."PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Recipient" (
    "id" UUID NOT NULL,
    "type" "public"."RecipientType" NOT NULL DEFAULT 'PROVIDER',
    "price" DECIMAL(65,30) NOT NULL,
    "status" "public"."RecipientStatus" NOT NULL DEFAULT 'PENDING',
    "paymentId" UUID NOT NULL,
    "receiptId" UUID,

    CONSTRAINT "Recipient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Receipt" (
    "id" UUID NOT NULL,
    "entities" UUID[],
    "type" "public"."ReceiptType" NOT NULL,
    "entityType" "public"."ReceiptEntityType" NOT NULL DEFAULT 'PROVIDER',
    "price" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "documentId" UUID NOT NULL,

    CONSTRAINT "Receipt_pkey" PRIMARY KEY ("id")
);
