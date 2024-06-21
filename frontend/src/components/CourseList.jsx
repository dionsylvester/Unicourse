import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5001/viewcourse");
        setCourses(response.data);
      } catch (err) {
        setError("Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl space-y-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded shadow-md cursor-pointer"
            onClick={() => navigate(`/course/${course.id}`)}
          >
            <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-700 mb-2">Price: ${course.price}</p>
            <p className="text-gray-500">Rating: {course.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
