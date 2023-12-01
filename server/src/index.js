import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(2001, () => {
  console.log("Listening to port 2001");
});
