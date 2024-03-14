import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

app.listen("3001", () => {
  console.log("servidor conectadoa a porta 3001");
});
