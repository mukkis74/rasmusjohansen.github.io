import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.get("/health", (_req, res) => res.status(200).send("ok"));
app.use(express.static(path.join(__dirname, ".."))); // serves repo root (index.html, etc.)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Static site on :${PORT}`));
