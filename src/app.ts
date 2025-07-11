import express from "express";
import RumahRoutes from "./route/rumah";

const app = express();

app.use(express.json());
app.use(RumahRoutes);

export default app;
