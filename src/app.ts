import express from "express";
import RumahRoutes from "./route/rumah";

const app = express();

app.use(express.json());

// Prefix semua route di rumah.ts dengan /api
app.use("/api", RumahRoutes);

export default app;
