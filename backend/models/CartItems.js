import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Courses from "./Courses.js";
import Carts from "./Carts.js";

const { DataTypes } = Sequelize;

const CartItems = db.define("cart_items", {
  cartId: {
    type: DataTypes.INTEGER,
    references: {
      model: Carts,
      key: "id",
    },
  },
  courseId: {
    type: DataTypes.INTEGER,
    references: {
      model: Courses,
      key: "id",
    },
  },
  addedDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Carts.hasMany(CartItems, { foreignKey: "cartId", as: "items" });
CartItems.belongsTo(Carts, { foreignKey: "cartId", as: "cart" });

Courses.hasMany(CartItems, { foreignKey: "courseId", as: "cartItems" });
CartItems.belongsTo(Courses, { foreignKey: "courseId", as: "course" });

export default CartItems;