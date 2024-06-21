import express from "express";
import { CreateCourse, ViewCourse, ViewCourseDetail } from "../controllers/CourseController.js";

const router = express.Router();

router.post("/createcourse", CreateCourse);
router.get("/viewcourse", ViewCourse);
router.get("/course/:id", ViewCourseDetail)

export default router;