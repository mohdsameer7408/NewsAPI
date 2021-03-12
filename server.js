import express from "express";
import cors from "cors";
import axios from "axios";

// configuration
const app = express();
const PORT = process.env.PORT || 80;

// middlewares
app.use(express.json());
app.use(cors());

// endpoints
app.get("/", async (req, res) => res.status(200).send("Hello World!"));

app.get("/api/news", async (req, res) => {
  try {
    const { data } = await axios.get(
      "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=448cedba20ca451c8ad387d3b590c564"
    );
    res.status(200).json(data.articles);
  } catch (error) {
    res.status(500).json("Something went wrong and an errr occured: ", error);
  }
});

app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
