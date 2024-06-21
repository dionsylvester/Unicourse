import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./Users.js";
import Courses from "./Courses.js";

const { DataTypes } = Sequelize;

const Enrolls = db.define("enrolls", {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: "id",
    },
    allowNull: false,
  },
  courseId: {
    type: DataTypes.INTEGER,
    references: {
      model: Courses,
      key: "id",
    },
    allowNull: false,
  },
  enrollDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  progress: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

Enrolls.belongsTo(Users, { foreignKey: "userId", as: "user" });
Enrolls.belongsTo(Courses, { foreignKey: "courseId", as: "course" });
Users.hasMany(Enrolls, { foreignKey: "userId", as: "enrollments" });
Courses.hasMany(Enrolls, { foreignKey: "courseId", as: "enrollments" });

export default Enrolls;