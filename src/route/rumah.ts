import { Router, Request, Response } from "express";
import { createData, getAllData } from "../controller/rumah";

const router = Router();

// GET /rumah — ambil semua data rumah
router.get("/rumah", async (req: Request, res: Response) => {
  try {
    const data = await getAllData(req, res);
    if (!res.headersSent) res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil data rumah" });
  }
});

// POST /rumah — buat data rumah baru
router.post("/rumah", async (req: Request, res: Response) => {
  try {
    const result = await createData(req, res);
    if (!res.headersSent) res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: "Gagal menambahkan data rumah" });
  }
});

export default router;
