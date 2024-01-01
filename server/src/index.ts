import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/user";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

mongoose.connect(
  "mongodb+srv://EcommerceProject123:NourishMe456@ecommerce.kcvbql0.mongodb.net/ecommerce"
);

app.listen(3001, () => console.log("SERVER STARTED"));
