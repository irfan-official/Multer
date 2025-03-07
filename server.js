import express from "express";
import { config } from "dotenv";
config();
import DB_CONNECTION from "./config/databaseConnection.js";
import defaultRoute from "./routes/default.routes.js";
import uploadsRoutes from "./routes/uploads.routes.js";
import path from "path";

const app = express();

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Routes
app.use("/", defaultRoute);
app.use("/uploads", uploadsRoutes);

// Start Server (moved to the end)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App started at http://localhost:${PORT}`);
  DB_CONNECTION(); // Ensure database connects when the server starts
});

export default app;
