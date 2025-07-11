import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Data rumah (GET)" });
  } else if (req.method === "POST") {
    res.status(201).json({ message: "Data rumah ditambahkan (POST)" });
  } else {
    res.status(405).json({ message: "Method tidak diizinkan" });
  }
}
