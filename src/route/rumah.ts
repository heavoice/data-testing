import { Router } from "express";
import { createData, getAllData } from "../controller/rumah";

const router = Router();

router.get("/rumah", getAllData);
router.post("/rumah", createData);

export default router;
