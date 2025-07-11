// /api/index.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import app from "../src/app";

// Express-compatible wrapper
export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
