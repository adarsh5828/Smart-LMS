import express from "express";
import { getCourse, getCourseById } from "../controllers/courseController.js";
const router = express.Router();
// import { getCourse, getCourseById } from "../controllers/courseController.js";
// get all courses
router.get('/',getCourse);
// get details of a specific course against id 
router.get('/:id',getCourseById)
export default router;
