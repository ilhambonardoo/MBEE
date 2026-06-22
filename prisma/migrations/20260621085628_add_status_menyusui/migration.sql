-- CreateEnum
CREATE TYPE "StatusMenyusui" AS ENUM ('MENYUSUI', 'TIDAK_MENYUSUI');

-- AlterTable
ALTER TABLE "Ternak" ADD COLUMN     "statusMenyusui" "StatusMenyusui";
