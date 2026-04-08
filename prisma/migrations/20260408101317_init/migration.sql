-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'OPERATOR');

-- CreateEnum
CREATE TYPE "JenisKelamin" AS ENUM ('JANTAN', 'BETINA');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nama" VARCHAR(255) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'OPERATOR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kambing" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "kode_kambing" TEXT NOT NULL,
    "jenis_kambing" TEXT NOT NULL,
    "beratAwal" DOUBLE PRECISION NOT NULL,
    "jenis_kelamin" "JenisKelamin",
    "tgl_lahir" TIMESTAMP(3),
    "tgl_Masuk" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Kambing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RiwayatBerat" (
    "id" TEXT NOT NULL,
    "berat" DOUBLE PRECISION NOT NULL,
    "kambingId" TEXT NOT NULL,
    "tgl_cek" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RiwayatBerat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Kambing_kode_kambing_key" ON "Kambing"("kode_kambing");

-- AddForeignKey
ALTER TABLE "Kambing" ADD CONSTRAINT "Kambing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RiwayatBerat" ADD CONSTRAINT "RiwayatBerat_kambingId_fkey" FOREIGN KEY ("kambingId") REFERENCES "Kambing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
