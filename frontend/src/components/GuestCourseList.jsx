import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const GuestCourseList = () => {
  const [courses, setCourses] = useState([]);

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

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-satoshi">
      <h2 className="text-4xl font-bold mb-16">Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.slice(0, 20).map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src="https://static.toiimg.com/thumb/msid-53891743,width-748,height-499,resizemode=4,imgsize-152022/.jpg"
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-700 mb-2">{course.instructor.username}</p>
              <p className="text-gray-900 font-bold mb-2">${course.price}</p>
              <div className="flex items-center">
                {[...Array(5)].map((star, i) => (
                  <FaStar
                    key={i}
                    color={i < course.rating ? "#ffc107" : "#e4e5e9"}
                  />
                ))}
                <span className="ml-2">{course.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {courses.length > 20 && (
        <div className="text-center mt-6">
          <button className="text-blue-600 hover:underline">See More</button>
        </div>
      )}
    </div>
  );
};

export default GuestCourseList;