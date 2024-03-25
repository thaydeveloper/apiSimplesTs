import "dotenv/config";
import express from "express";
import cors from "cors";
import rotas from "./routes/rotas";
const app = express();
app.use(cors());
app.use(express.json());
app.use(rotas);

app.listen("3033", () => {
  console.log("servidor conectadoa a porta 3033");
});
