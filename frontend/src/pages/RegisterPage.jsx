import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import background from "../assets/background.jpg";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Password and confirm password do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/register", {
        username,
        email,
        password,
        confirmPassword,
        role: "User",
      });
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.msg);
      } else {
        setMessage("Error registering the user.");
      }
    }
  };

  return (
    <div className="font-satoshi">
      <div className="w-full h-screen flex">
        <div className="relative w-1/2 h-full flex flex-col">
          <div className="absolute top-[20%] left-[10%] flex flex-col">
            <h1 className="text-7xl text-white font-bold my-4 w-10">
              Learn with limitless courses and knowledge
            </h1>
          </div>
          <img
            src={background}
            className="w-full h-full object-cover"
            alt="background"
          />
        </div>

        <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-around">
          <h1 className="text-xl text-[#060606] font-semibold"></h1>

          <div className="w-full flex flex-col max-w-[300px]">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-3xl font-semibold mb-4">Register</h3>
              <p className="text-base mb-2">Join us today! Create an account.</p>
            </div>
          </div>

          <form className="w-full flex flex-col" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              required
            />
            {message && <p className="text-red-500 text-sm mt-2">{message}</p>}
            
            <button
              type="submit"
              className="w-full text-white bg-[#060606] rounded-md p-4 mt-6"
            >
              Register
            </button>
          </form>

          <div className="w-full flex items-center justify-center mt-4">
            <p className="text-sm font-normal text-[#060606]">
              Already have an account?{" "}
              <span
                className="font-semibold underline underline-offset-2 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
