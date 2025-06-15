/*
  Warnings:

  - You are about to drop the `ConnectionRequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ConnectionRequest" DROP CONSTRAINT "ConnectionRequest_patientId_fkey";

-- DropForeignKey
ALTER TABLE "ConnectionRequest" DROP CONSTRAINT "ConnectionRequest_therapistId_fkey";

-- DropTable
DROP TABLE "ConnectionRequest";

-- DropEnum
DROP TYPE "RequestStatus";
