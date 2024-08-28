/*
  Warnings:

  - Added the required column `user_type` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ADMIN', 'TEACHER', 'USER');

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "user_type" "UserType" NOT NULL;
