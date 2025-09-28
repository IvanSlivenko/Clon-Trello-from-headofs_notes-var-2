/*
  Warnings:

  - You are about to drop the column `widtch` on the `Columns` table. All the data in the column will be lost.
  - Added the required column `width` to the `Columns` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Columns" DROP COLUMN "widtch",
ADD COLUMN     "width" INTEGER NOT NULL;
