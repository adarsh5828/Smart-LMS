import express from "express";
import { getCourse, getCourseById,enrollStudentInCourse, myCourses } from "../controllers/courseController.js";
import { authProtect } from "../middlewares/authMiddleware.js";
const router = express.Router();
// get my courses

router.get('my-courses',authProtect,myCourses);
// get all courses
router.get('/',getCourse);
// get details of a specific course against id 
router.get('/:id',getCourseById)

//enroll user
router.post('/:id/enroll',authProtect,enrollStudentInCourse);
export default router;
