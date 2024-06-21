import React from "react";

const GuestInfo = () => {
  // Generate random numbers for the statistics
  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const students = randomNumber(10000, 100000);
  const instructors = randomNumber(100, 1000);
  const languages = randomNumber(10, 50);

  return (
    <div
      className="relative w-full h-auto py-12 font-satoshi bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#005f80] via-[#006b8f] to-[#00719c] opacity-75"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Our Community</h2>
        <div className="flex justify-around flex-wrap gap-8">
          <div className="bg-white bg-opacity-20 shadow-md rounded-lg p-6 w-64">
            <h3 className="text-2xl font-semibold mb-2">
              {students.toLocaleString()}
            </h3>
            <p className="text-lg">Students</p>
          </div>
          <div className="bg-white bg-opacity-20 shadow-md rounded-lg p-6 w-64">
            <h3 className="text-2xl font-semibold mb-2">
              {instructors.toLocaleString()}
            </h3>
            <p className="text-lg">Instructors</p>
          </div>
          <div className="bg-white bg-opacity-20 shadow-md rounded-lg p-6 w-64">
            <h3 className="text-2xl font-semibold mb-2">
              {languages.toLocaleString()}
            </h3>
            <p className="text-lg">Languages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestInfo;
