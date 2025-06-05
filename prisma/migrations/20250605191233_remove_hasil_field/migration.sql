-- CreateTable
CREATE TABLE "Rumah" (
    "id" SERIAL NOT NULL,
    "lokasi" TEXT NOT NULL,
    "luasTanah" DOUBLE PRECISION NOT NULL,
    "kamarTidur" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Rumah_pkey" PRIMARY KEY ("id")
);
