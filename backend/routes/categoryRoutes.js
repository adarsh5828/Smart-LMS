import express from "express";
const router = express.Router();
import { getCategory } from "../controllers/categoryController.js";
// import { getCategory } from "../controllers/categoryController.js";
// get all courses
router.get('/',getCategory);
export default router;
