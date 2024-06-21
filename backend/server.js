import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/Database.js";
import userRoutes from "./routes/UserRoute.js";
import courseRoutes from "./routes/CourseRoute.js";
import cartRoutes from "./routes/CartRoute.js";
import enrollRoutes from "./routes/EnrollRoute.js";

import CartItems from "./models/CartItems.js";
import Carts from "./models/Carts.js";
import Courses from "./models/Courses.js";
import Enrolls from "./models/Enrolls.js";
import Users from "./models/Users.js";

dotenv.config();
const app = express();

await db.authenticate();



app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(userRoutes);
app.use(courseRoutes);
app.use(cartRoutes);
app.use(enrollRoutes);

app.listen(5001, () => console.log("Server Running on port 5001"));
