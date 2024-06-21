import React from "react";

const GuestInstructor = () => {
  return (
    <div
      className="relative w-full h-[60vh] bg-cover bg-center font-satoshi"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-5xl font-bold mb-4">Become an Instructor</h2>
        <p className="text-lg mb-8">
          Join our community of expert instructors and start sharing your
          knowledge with students worldwide.
        </p>
        <button className="bg-transparent hover:bg-white hover:text-[#00719c] text-white font-bold py-2 px-8 rounded-full border border-white transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GuestInstructor;
