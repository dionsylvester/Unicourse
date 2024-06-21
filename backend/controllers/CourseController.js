import Courses from "../models/Courses.js";
import Users from "../models/Users.js";

export const CreateCourse = async (req, res) => {
  const {
    instructorId,
    title,
    description,
    category,
    language,
    price,
    duration,
    lectures,
    outcome,
    rating,
    students,
  } = req.body;

  try {
    const newCourse = await Courses.create({
      instructorId,
      title,
      description,
      category,
      language,
      price,
      duration,
      lectures,
      outcome,
      rating,
      students,
    });
    res.status(201).json(newCourse);
  } catch (error) {
    console.log(error);
  }
};

export const ViewCourse = async (req, res) => {
  try {
    const courses = await Courses.findAll({
      include: [{ model: Users, as: "instructor", attributes: ["username"] }],
    });
    res.status(200).json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const ViewCourseDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Courses.findByPk(id, {
      include: [{ model: Users, as: "instructor", attributes: ["username"] }],
    });
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ message: "Course not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
