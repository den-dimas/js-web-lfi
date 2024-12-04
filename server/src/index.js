import express from "express";
import fs from "fs";
import cors from "cors";
import multer from "multer";
import path from "path"

const app = express();

//config multer
const storage = multer.diskStorage({
	  destination: (req, file, cb) => {
		      cb(null, "../client/uploads");
		    },
	  filename: (req, file, cb) => {
		      cb(null, file.originalname);
		    }
});

const upload = multer({ storage });

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

//insecure file upload
app.post("/upload-journal", upload.single("journal"), async (req, res) => {
	  if (req.file) {
		      console.log("Uploaded file:", req.file);
		      
		      if (req.file.mimetype !== "text/plain") {
			            return res.status(400).send("Only text files are allowed!");
			          }

		      res.status(200).send("File uploaded successfully!");
		    } else {
			        res.status(400).send("No file uploaded.");
			      }
})

app.listen(PORT, '0.0.0.0', async () => {
  try {
    /* === Connection information === */
    process.stdout.write("\x1Bc");
    console.log(`\nServer\t : \x1b[4m%s\x1b[0m`, `http://localhost:${PORT}`);
  } catch (error) {
    throw new Error(error);
  }
});
