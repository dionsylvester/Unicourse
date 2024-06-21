import React, { useState } from "react";
import axios from "axios";
import background from "../assets/background.jpg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("jwt", response.data.token);
      navigate("/homepage");
      setError("");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.msg);
      } else if (error.request) {
        setError(
          "No response from the server. Please check your network connection."
        );
      } else {
        setError("Error: " + error.message);
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
              <h3 className="text-3xl font-semibold mb-4">Login</h3>
              <p className="text-base mb-2">Welcome Back! Ready to jump in?</p>
            </div>
          </div>

          <form className="w-full flex flex-col" onSubmit={handleLogin}>
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
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="w-full flex items-center justify-between my-2">
              <div className="flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <p className="text-sm">Remember me</p>
              </div>
              <p className="text-sm font-medium cursor-pointer underline underline-offset-2">
                Forgot Password?
              </p>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-[#060606] rounded-md p-4 mt-6"
            >
              Log in
            </button>
          </form>

          <div className="w-full flex items-center justify-center mt-4">
            <p className="text-sm font-normal text-[#060606]">
              Don't have an account?{" "}
              <span
                className="font-semibold underline underline-offset-2 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Sign up for free
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
