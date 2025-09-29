-- CreateEnum
CREATE TYPE "public"."EmailStatus" AS ENUM ('PENDING', 'SUCCESS', 'REJECT');

-- CreateEnum
CREATE TYPE "public"."SubscriptionType" AS ENUM ('ALL', 'IMPORTANT', 'NOT');

-- CreateTable
CREATE TABLE "public"."Emails" (
    "id" UUID NOT NULL,
    "buyerId" UUID NOT NULL,
    "text" TEXT NOT NULL,
    "comment" TEXT,
    "status" "public"."EmailStatus" NOT NULL DEFAULT 'PENDING',
    "newletterId" UUID NOT NULL,

    CONSTRAINT "Emails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Subscription" (
    "id" UUID NOT NULL,
    "type" "public"."SubscriptionType" NOT NULL DEFAULT 'ALL',

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Client" (
    "buyerId" UUID NOT NULL,
    "subscriptionId" UUID NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("buyerId")
);

-- CreateTable
CREATE TABLE "public"."NewsLetterUser" (
    "buyerId" UUID NOT NULL,
    "newLetterId" UUID NOT NULL,

    CONSTRAINT "NewsLetterUser_pkey" PRIMARY KEY ("buyerId")
);

-- CreateTable
CREATE TABLE "public"."NewLetterId" (
    "id" UUID NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "finishTime" TIMESTAMP(3) NOT NULL,
    "isForAll" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "NewLetterId_pkey" PRIMARY KEY ("id")
);
