import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productsRouter from "./routes/productsRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import morgan from "morgan";
import chalk from "chalk";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan("dev"));
app.use("/products", productsRouter);
app.use("/categories", categoryRouter);

const PORT = process.env.PORT || 9002;

app.listen(PORT, () => {
  mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => console.log(chalk.green(`Server ${PORT} portda başladıldı`)))
  .then(() => console.log(chalk.blue.bgRed.bold("Databazaya bağlandı")))
  .catch((error) => console.log(chalk.red(error)));
});
