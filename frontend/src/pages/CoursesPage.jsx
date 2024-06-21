import React, { useEffect, useState } from "react";
import axios from "axios";
import CoursesGrid from "../components/layouts/CoursePageGrid";
import { useNavigate } from "react-router-dom";
import UserNavBar from "../../src/components/layouts/UserNavbar";
import { FaSearch, FaFilter } from 'react-icons/fa';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5001/viewcourse")
      .then((response) => {
        setCourses(response.data); 
      })
      .catch((error) => {
        console.error("There was an error fetching the courses:", error);
      });
  }, []);

  const handleNavigateBack = () => {
    navigate(-1); 
  };

  return (
    <div>
      <UserNavBar/>
      <div className="container mx-auto px-4 py-8">

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Courses Available</h1>
        <div className="relative flex-1 mx-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <button className="p-1 focus:outline-none focus:shadow-outline">
              <FaSearch className="w-6 h-6 text-gray-700"/>
            </button>
          </span>
          <input type="text" name="search" className="py-2 pl-12 pr-12 w-full rounded bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Search Courses" />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button className="p-1 focus:outline-none focus:shadow-outline">
              <FaFilter className="w-6 h-6 text-gray-700"/>
            </button>
          </span>
        </div>
        <button
          onClick={handleNavigateBack}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>

      <CoursesGrid courses={courses} />
      </div>
    </div>
  );
};

export default CoursePage;
