import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/product", productRouter);

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://EcommerceProject123:NourishMe456@ecommerce.kcvbql0.mongodb.net/ecommerce"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err.message);
  }
};

const startServer = async () => {
  await connectDB();
  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
