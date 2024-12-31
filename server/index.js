import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/api/v1/reviews", (req, res) => {
  const code = req.body.code;

  return res.send({
    review: "# Your code is awesome!",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
