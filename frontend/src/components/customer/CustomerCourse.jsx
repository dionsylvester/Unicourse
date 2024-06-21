import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CustomerCourse = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded.userId);
    }
  }, []);

  useEffect(() => {
    const fetchEnrollments = async () => {
      if (!userId) {
        setError("User is not logged in");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5001/viewEnroll/${userId}`
        );
        console.log(response.data);
        setEnrollments(response.data);
      } catch (err) {
        setError("Empty. Buy courses first.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchEnrollments();
    }
  }, [userId]);

  const handleCourseClick = (courseId) => {
    navigate(`/courseDetailMyCourse/${courseId}`);
  };

  const navigateToMyCourse = () => {
    navigate('/mycourses')
  }

  return (
    <div className="max-w-7xl mx-auto px-16 py-12 font-satoshi">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-bold">Your Courses</h2>
          <p className="text-lg text-gray-600">
            What do you want to learn today?
          </p>
        </div>
        <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300" onClick={navigateToMyCourse}>
          View More
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {enrollments.slice(0, 3).map((enrollment) => (
            <div
              key={enrollment.id}
              onClick={() => handleCourseClick(enrollment.course.id)}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src="https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg"
                alt={enrollment.course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">
                  {enrollment.course.title}
                </h2>
                <p className="text-gray-700 mb-2">
                  Progress: {enrollment.progress}%
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerCourse;
