-- CreateEnum
CREATE TYPE "public"."salary_type" AS ENUM ('SALE_OWN_PRODUCT', 'SALE_ALL_PRODUCT', 'FIX');

-- CreateEnum
CREATE TYPE "public"."salary_value_type" AS ENUM ('PROCENT', 'CURRENCY');

-- CreateTable
CREATE TABLE "public"."role" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Salary" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "day" INTEGER,
    "type" "public"."salary_type" NOT NULL DEFAULT 'FIX',
    "value_type" "public"."salary_value_type" NOT NULL DEFAULT 'CURRENCY',
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Salary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" UUID NOT NULL,
    "login" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatar_id" UUID,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role_id" UUID NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Salary" ADD CONSTRAINT "Salary_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
