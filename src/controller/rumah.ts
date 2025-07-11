import { Request, Response } from "express";
import prisma from "../prismaClient";

// Fungsi untuk membuat data rumah
export const createData = async (req: Request, res: Response) => {
  try {
    const {
      lokasi,
      luasTanah,
      kamarTidur,
      harga,
      jumlahKamarMandi,
      lantai,
      sertifikat,
      tipeProperti,
      tahunBangun,
      dayaListrik,
      garasi,
      aksesJalan,
      fasilitasUmum,
      jarakkePusatKota,
    } = req.body;

    const rumah = await prisma.rumah.create({
      data: {
        lokasi,
        luasTanah,
        kamarTidur,
        harga,
        jumlahKamarMandi,
        lantai,
        sertifikat,
        tipeProperti,
        tahunBangun,
        dayaListrik,
        garasi,
        aksesJalan,
        fasilitasUmum,
        jarakkePusatKota,
      },
    });

    const rumahDenganSatuan = {
      ...rumah,
      luasTanah: `${rumah.luasTanah} m²`,
      harga: `Rp ${rumah.harga.toLocaleString()}`,
      dayaListrik: `${rumah.dayaListrik} VA`,
      garasi: rumah.garasi ? "Ada" : "Tidak Ada",
      jarakkePusatKota: `${rumah.jarakkePusatKota} km`,
    };

    res.status(201).json(rumahDenganSatuan);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat menyimpan data rumah", error });
  }
};

// Fungsi untuk mengambil semua data rumah
export const getAllData = async (req: Request, res: Response) => {
  try {
    const semuaRumah = await prisma.rumah.findMany();
    const rumahDenganSatuan = semuaRumah.map((rumah: any) => ({
      ...rumah,
      luasTanah: `${rumah.luasTanah} m²`,
      harga: `Rp ${rumah.harga.toLocaleString()}`,
      dayaListrik: `${rumah.dayaListrik} VA`,
      garasi: rumah.garasi ? "Ada" : "Tidak Ada",
      jarakkePusatKota: `${rumah.jarakkePusatKota} km`,
    }));

    res.json(rumahDenganSatuan);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data rumah", error });
  }
};
