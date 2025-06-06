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

    // Menyimpan data rumah ke dalam database
    const rumah = await prisma.rumah.create({
      data: {
        lokasi,
        luasTanah, // Menyimpan luasTanah sebagai number, bukan string
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

    // Menambahkan satuan pada output response
    const rumahDenganSatuan = {
      ...rumah,
      luasTanah: `${rumah.luasTanah} m²`, // Menambahkan satuan pada luasTanah
      harga: `Rp ${rumah.harga.toLocaleString()}`, // Menambahkan format Rupiah pada harga
      dayaListrik: `${rumah.dayaListrik} VA`, // Menambahkan satuan pada dayaListrik
      garasi: rumah.garasi ? "Ada" : "Tidak Ada", // Mengubah nilai boolean garasi menjadi string
      jarakkePusatKota: `${rumah.jarakkePusatKota} km`, // Menambahkan satuan pada jarakkePusatKota
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
    // Menambahkan satuan pada setiap data rumah sebelum mengirim ke client
    const rumahDenganSatuan = semuaRumah.map((rumah: any) => ({
      ...rumah,
      luasTanah: `${rumah.luasTanah} m²`, // Menambahkan satuan pada luasTanah
      harga: `Rp ${rumah.harga.toLocaleString()}`, // Menambahkan format Rupiah pada harga
      dayaListrik: `${rumah.dayaListrik} VA`, // Menambahkan satuan pada dayaListrik
      garasi: rumah.garasi ? "Ada" : "Tidak Ada", // Mengubah nilai boolean garasi menjadi string
      jarakkePusatKota: `${rumah.jarakkePusatKota} km`, // Menambahkan satuan pada jarakkePusatKota
    }));

    res.json(rumahDenganSatuan);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data rumah", error });
  }
};

module.exports = { createData, getAllData };
