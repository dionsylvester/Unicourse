import Users from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  const { username, email, password, confirmPassword, role } = req.body;

  if (password !== confirmPassword)
    return res
      .status(400)
      .json({ msg: "Password and confirm password is not match!" });

  const hashPassword = await bcrypt.hash(password, await bcrypt.genSalt());

  await Users.create({
    username: username,
    email: email,
    password: hashPassword,
    role: role,
  });

  res.json({ msg: "Register success!" });
};

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).send("Invalid credentials");
    }

    const token = jwt.sign(
      {
        userId: user.id,
        userName: user.username,
        userRole: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    console.error("Login error: ", error);
    res.status(500).send("An error occurred during the login process");
  }
};