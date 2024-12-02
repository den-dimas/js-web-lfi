import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(cors("*"));
app.use(express.json());

// Local File Inclusion
app.get("/journal", async (req, res) => {
  const filename = req.query.filename || "";

  try {
    res.download("./documents/" + filename);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

const PORT = 5000;

app.listen(PORT, async () => {
  try {
    /* === Connection information === */
    process.stdout.write("\x1Bc");
    console.log(`\nServer\t : \x1b[4m%s\x1b[0m`, `http://localhost:${PORT}`);
  } catch (error) {
    throw new Error(error);
  }
});