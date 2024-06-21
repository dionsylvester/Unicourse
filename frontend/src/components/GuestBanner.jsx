import React from "react";
import { useNavigate } from "react-router-dom";

const GuestBanner = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <div
      className="relative w-full h-[96vh] bg-cover bg-center font-satoshi"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-7xl font-bold mb-4">Discover Any Course Here</h1>
        <p className="text-xl mb-8">
          Explore a variety of courses to enhance your skills and knowledge.
        </p>
        <button
          className="bg-transparent hover:bg-[#00719c] text-white font-bold py-3 px-16 rounded-full border border-white transition duration-300"
          onClick={handleNavigate}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GuestBanner;
