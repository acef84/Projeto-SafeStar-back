/*
  Warnings:

  - Added the required column `dowLink` to the `games2` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `games2` ADD COLUMN `dowLink` VARCHAR(191) NOT NULL;
