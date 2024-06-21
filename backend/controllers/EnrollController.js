import Enrolls from "../models/Enrolls.js";
import Users from "../models/Users.js";
import Courses from "../models/Courses.js";

export const CreateEnrollment = async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    console.log(`Attempting to find user with ID: ${userId}`);
    const user = await Users.findByPk(userId);
    if (!user) {
      return res.status(404).json({ msg: `User not found with ID: ${userId}` });
    }

    console.log(`Attempting to find course with ID: ${courseId}`);
    const course = await Courses.findByPk(courseId);
    if (!course) {
      return res
        .status(404)
        .json({ msg: `Course not found with ID: ${courseId}` });
    }

    console.log(
      `Creating enrollment for user ID: ${userId} in course ID: ${courseId}`
    );
    const enrollment = await Enrolls.create({
      userId,
      courseId,
      enrollDate: new Date(),
      progress: 0,
    });

    res.status(201).json(enrollment);
  } catch (error) {
    console.error(`Error creating enrollment: ${error.message}`);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const ViewEnrollments = async (req, res) => {
  const { userId } = req.params;

  try {
    const enrollments = await Enrolls.findAll({
      where: { userId },
      include: [
        {
          model: Courses,
          as: "course",
          attributes: ["title", "description", "price"],
        },
      ],
    });

    if (!enrollments.length) {
      return res.status(404).json({ msg: "No enrollments found" });
    }

    res.status(200).json(enrollments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
