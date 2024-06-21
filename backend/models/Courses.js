import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./Users.js";

const { DataTypes } = Sequelize;

const Courses = db.define("courses", {
  instructorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: "id",
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  category: {
    type: DataTypes.STRING,
  },
  language: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  duration: {
    type: DataTypes.FLOAT,
  },
  lectures: {
    type: DataTypes.INTEGER,
  },
  outcome: {
    type: DataTypes.TEXT,
  },
  rating: {
    type: DataTypes.FLOAT,
  },
  students: {
    type: DataTypes.INTEGER,
  },
});

Courses.belongsTo(Users, { foreignKey: "instructorId", as: "instructor" });
Users.hasMany(Courses, { foreignKey: "instructorId", as: "courses" });

export default Courses;