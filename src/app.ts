import express from "express";
import RumahRoutes from "./route/rumah";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(RumahRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
