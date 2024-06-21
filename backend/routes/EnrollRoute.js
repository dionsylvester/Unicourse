import express from "express";
import {
  CreateEnrollment,
  ViewEnrollments,
} from "../controllers/EnrollController.js";

const router = express.Router();

router.post("/create", CreateEnrollment);
router.get("/viewEnroll/:userId", ViewEnrollments);

export default router;
