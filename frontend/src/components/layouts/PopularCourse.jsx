import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GuestCourseList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const images = [
    // 1
    "https://w0.peakpx.com/wallpaper/668/259/HD-wallpaper-c-logo-white-silk-texture-c-emblem-programming-language-c-silk-background.jpg",
    // 2
    "https://designshack.net/wp-content/uploads/procreate.png",
    // 3
    "https://e0.pxfuel.com/wallpapers/104/615/desktop-wallpaper-swift-programming-development.jpg",
    // 4
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTusj0U5Jm6X0viRkKANQ2YQd4TASDsc6RA&s",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:5001/viewcourse")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the course data!", error);
      });
  }, []);

  const handleCourseClick = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-16 py-12 font-satoshi">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-bold">Popular Courses</h2>
          <p className="text-lg text-gray-600">
            Explore our most popular courses
          </p>
        </div>
        <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
          View More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses
          .slice() // Create a shallow copy to avoid mutating the original array
          .sort((a, b) => (b.rating * b.students) - (a.rating * a.students)) // Sort descending by the product of rating and number of students
          .slice(0, 4) // Limit to top 4 highest weighted courses
          .map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleCourseClick(course.id)}
            >
              <img
                src={images[index % images.length]} // Cycle through images if more courses than images
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                <p className="text-gray-700 text-sm mb-2">
                  {course.instructor.username}
                </p>
                <p className="text-gray-900 font-bold mb-2">${course.price}</p>
                
                <div className="flex items-center gap-2">
                {course.rating}
                  <div className="flex">
                    {[...Array(5)].map((star, i) => (
                      <FaStar
                        key={i}
                        color={i < course.rating ? "#ffc107" : "#e4e5e9"}
                      />
                    ))}
                  </div>
                  
                  <span className="ml-2 text-sm"> ({course.students} students)</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GuestCourseList;
