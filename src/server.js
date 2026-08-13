import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();

app.get("/health", (_req, res) => res.status(200).send("ok"));
app.use(express.static(path.join(__dirname, ".."))); // serves repo root (index.html, etc.)

// CV download endpoint
app.get("/download/cv", (_req, res) => {
  const cvPath = path.join(__dirname, "..", "cv", "Rasmus-Johansen-CV.pdf");

  res.download(cvPath, "Rasmus-Johansen-CV.pdf", (err) => {
    if (err && err.code === "ENOENT") {
      res.status(404).send("CV not found");
      return;
    }

    if (err) {
      console.error("Failed to download CV:", err);
      res.status(500).send("Unable to download CV");
    }
  });
});

const PORT = process.env.PORT || 8080;

if (process.argv[1] === __filename) {
  app.listen(PORT, () => console.log(`Static site on :${PORT}`));
}
