import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course, image }) => {
  const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div
      className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 flex flex-col justify-between h-full bg-white rounded-lg shadow-md"
      onClick={handleCourseClick}
    >
      <img
        src={image}
        alt={course.title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-3">{course.description}</p>
        </div>
        <div>
          <div className="flex justify-between items-center mt-2 text-gray-500 text-xs">
            <span>Duration: {course.duration} hours</span>
            <span>Instructor: {course.instructor.username}</span>
          </div>
          <div className="flex justify-end mt-2">
            <span className="text-lg font-bold text-blue-600">
              ${course.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
