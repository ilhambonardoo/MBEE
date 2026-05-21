-- DropForeignKey
ALTER TABLE "Kambing" DROP CONSTRAINT "Kambing_userId_fkey";

-- AlterTable
ALTER TABLE "Kambing" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Kambing" ADD CONSTRAINT "Kambing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
