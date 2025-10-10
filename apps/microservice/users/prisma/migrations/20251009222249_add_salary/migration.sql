/*
  Warnings:

  - You are about to drop the column `allPerfumeSaleInProcent` on the `Salary` table. All the data in the column will be lost.
  - You are about to drop the column `mounth` on the `Salary` table. All the data in the column will be lost.
  - You are about to drop the column `myPerfumeSaleInProcent` on the `Salary` table. All the data in the column will be lost.
  - Added the required column `value` to the `Salary` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."SalaryType" AS ENUM ('SALE_OWN_PRODUCT', 'SALE_ALL_PRODUCT', 'FIX');

-- CreateEnum
CREATE TYPE "public"."SalaryValueType" AS ENUM ('PROCENT', 'CURRENCY');

-- AlterTable
ALTER TABLE "public"."Salary" DROP COLUMN "allPerfumeSaleInProcent",
DROP COLUMN "mounth",
DROP COLUMN "myPerfumeSaleInProcent",
ADD COLUMN     "day" INTEGER,
ADD COLUMN     "type" "public"."SalaryType" NOT NULL DEFAULT 'FIX',
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "valueType" "public"."SalaryValueType" NOT NULL DEFAULT 'CURRENCY';
