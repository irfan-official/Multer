import express from "express";
import { config } from "dotenv";
config();
import DB_CONNECTION from "./config/databaseConnection.js";
import defaultRoute from "./routes/default.routes.js";
import uploadsRoutes from "./routes/uploads.routes.js";
const app = express();

export default app;

app.listen(process.env.PORT, () => {
  console.log(`App started at http://localhost:${process.env.PORT}`);
  // DB_CONNECTION();
});
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.set("view engine", "ejs");

app.use("/", defaultRoute);
app.use("/uploads", uploadsRoutes);
