// Serveur de prévisualisation local : `npm run dev` puis http://localhost:4000
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const ROOT = "dist";
const PORT = process.env.PORT || 4000;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

const resolve = async (url) => {
  let path = join(ROOT, normalize(decodeURIComponent(new URL(url, "http://x").pathname)));
  if ((await stat(path).catch(() => null))?.isDirectory()) path = join(path, "index.html");
  return path;
};

createServer(async (req, res) => {
  try {
    const path = await resolve(req.url);
    const body = await readFile(path);
    res.writeHead(200, { "Content-Type": types[extname(path)] || "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": types[".html"] });
    res.end(await readFile(join(ROOT, "404.html")).catch(() => "404"));
  }
}).listen(PORT, () => console.log(`→ http://localhost:${PORT}`));
