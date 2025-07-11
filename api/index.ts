import app from "../src/app";
import { createServer } from "http";
import { parse } from "url";
import type { VercelRequest, VercelResponse } from "@vercel/node";

// Adapt Express to Vercel
export default (req: VercelRequest, res: VercelResponse) => {
  const server = createServer((req2, res2) => app(req2, res2));
  const { url } = req;

  req.url = parse(url!).path || "/";
  server.emit("request", req, res);
};
