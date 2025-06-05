import { Request, Response } from "express";
import prisma from "../prismaClient";

// Fungsi untuk membuat data rumah
export const createData = async (req: Request, res: Response) => {
  try {
    const { lokasi, luasTanah, kamarTidur } = req.body;

    // Menyimpan data rumah ke dalam database
    const rumah = await prisma.rumah.create({
      data: {
        lokasi,
        luasTanah,
        kamarTidur,
      },
    });

    res.status(201).json(rumah);
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
    res.json(semuaRumah);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data rumah", error });
  }
};

module.exports = { createData, getAllData };
