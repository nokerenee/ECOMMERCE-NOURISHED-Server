import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://EcommerceProject123:NourishMe456@ecommerce.kcvbql0.mongodb.net/ecommerce"
);

app.listen(3001, () => console.log("SERVER STARTED"));
