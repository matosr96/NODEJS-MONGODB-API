import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import "dotenv/config";
import usuariosRoutes from "./routes/user.routes.js";
import cors from "cors";

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("conected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.use(cors());

app.listen(PORT);
console.log("SERVER IS RUNNING ON PORT", PORT);

//middleware
app.use(express.json());
app.use("/api/v1", usuariosRoutes);

