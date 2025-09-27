import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import cors from "cors";
const app = express();
import connectDB from "./config/db.js";
connectDB();

import authRoutes from './routes/authRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import courseRoutes from './routes/courseRoutes.js';

app.use(express.json());
app.use(cors());

app.use('/api/auth',authRoutes);  // goes to authRoute
app.use('api/course',courseRoutes);
app.use('api/category',categoryRoutes);

if(process.env.NODE_ENV === "dev"){
    app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
