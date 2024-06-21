import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./Users.js";

const { DataTypes } = Sequelize;

const Carts = db.define("carts", {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: Users,
      key: "id",
    },
  },
});

Carts.belongsTo(Users, { foreignKey: "userId", as: "user" });
Users.hasMany(Carts, { foreignKey: "userId", as: "carts" });

export default Carts;
