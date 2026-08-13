import { app } from "../../src/server.js";

test("math", () => expect(1 + 1).toBe(2));

test("download/cv serves the PDF file", async () => {
  const server = app.listen(0);

  await new Promise((resolve) => server.once("listening", resolve));

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/download/cv`);

  expect(response.status).toBe(200);
  expect(response.headers.get("content-disposition")).toContain("Rasmus-Johansen-CV.pdf");

  const buffer = Buffer.from(await response.arrayBuffer());
  expect(buffer.length).toBeGreaterThan(1000);

  await new Promise((resolve, reject) => {
    server.close((err) => (err ? reject(err) : resolve()));
  });
});
