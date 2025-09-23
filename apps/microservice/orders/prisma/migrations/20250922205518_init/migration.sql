-- CreateEnum
CREATE TYPE "public"."TypeOrder" AS ENUM ('PANTING', 'PAID', 'REJECT', 'DELIVERED');

-- CreateTable
CREATE TABLE "public"."Order" (
    "id" UUID NOT NULL,
    "buyerId" UUID NOT NULL,
    "transactionId" UUID NOT NULL,
    "receiptId" UUID,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OrderItem" (
    "id" UUID NOT NULL,
    "orderId" UUID NOT NULL,
    "price" DECIMAL NOT NULL,
    "count" INTEGER NOT NULL,
    "pruductId" UUID NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Comment" (
    "id" UUID NOT NULL,
    "orderId" UUID NOT NULL,
    "value" TEXT NOT NULL,
    "typeOrder" "public"."TypeOrder" NOT NULL DEFAULT 'PANTING',

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Transaction" (
    "id" UUID NOT NULL,
    "orderId" UUID NOT NULL,
    "comment" TEXT,
    "buyerId" UUID NOT NULL,
    "paymentId" TEXT NOT NULL,
    "status" TEXT,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "OrderItem_orderId_idx" ON "public"."OrderItem"("orderId");

-- CreateIndex
CREATE INDEX "Comment_orderId_idx" ON "public"."Comment"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_orderId_key" ON "public"."Transaction"("orderId");

-- AddForeignKey
ALTER TABLE "public"."OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "public"."Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
