import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaGlobe, FaBook } from 'react-icons/fa';

const GuestInfo = () => {
  // Generate random numbers for the statistics
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const students = randomNumber(10000, 100000);
  const instructors = randomNumber(100, 1000);
  const languages = randomNumber(10, 50);
  const courses = randomNumber(100, 1000);

  const formatNumber = (number) => {
    if (number >= 1000) {
      return (number / 1000).toFixed(0) + 'K+';
    }
    return number;
  };

  return (
    <div className="bg-gray-100 py-12 px-12 font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <FaUserGraduate className="text-5xl text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold mb-1">{formatNumber(students)}</h3>
            <p className="text-gray-700 text-sm">Students</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <FaChalkboardTeacher className="text-5xl text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold mb-1">{formatNumber(instructors)}</h3>
            <p className="text-gray-700 text-sm">Instructors</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <FaGlobe className="text-5xl text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold mb-1">{formatNumber(languages)}</h3>
            <p className="text-gray-700 text-sm">Languages</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <FaBook className="text-5xl text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold mb-1">{formatNumber(courses)}</h3>
            <p className="text-gray-700 text-sm">Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestInfo;
