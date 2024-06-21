import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/course/${id}`);
        setCourse(response.data);
      } catch (err) {
        setError("Failed to fetch course details");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded.userId);
    }
  }, []);

  const addToCart = async () => {
    if (!userId) {
      setMessage("User is not logged in");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/createcart", {
        userId,
        courseId: course.id,
      });
      setMessage("Course added to cart successfully!");
    } catch (error) {
      setMessage("Failed to add to cart!");
    }
  };

  const reactTopics = [
    "Session 1: Introduction to React",
    "Session 2: React Components and JSX",
    "Session 3: Managing State in React",
    "Session 4: Lifecycle Methods in Class Components",
    "Session 5: Using React Hooks",
    "Session 6: Routing with React Router",
    "Session 7: Building Forms with React",
    "Session 8: Calling APIs in React",
    "Session 9: Advanced Hooks and State Management",
    "Session 10: Testing React Applications",
    "Session 11: React and TypeScript",
    "Session 12: Performance Optimization in React",
    "Session 13: React Context API",
  ];

  const sessions = Array.from({ length: 13 }, (_, i) => ({
    session: i + 1,
    title: `${reactTopics[i % reactTopics.length]}`
  }));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 font-satoshi">
      <div className="w-full max-w-6xl bg-white p-6 rounded shadow-md flex">
        <div className="w-1/2 pr-6">
          <img
            src={course.imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh54yxRtIBxJCeqK_CYUD10pmxKYRgoZh3GQ&s"} 
            alt={course.title}
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="text-gray-500 mb-2">
            Instructor: {course.instructor.username}
          </p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-2">★</span>
            <p className="text-gray-700">
              {course.rating} ({course.students} students)
            </p>
          </div>
          <p className="text-xl font-bold text-blue-500 mb-4">
            ${course.price}
          </p>
          <div className="flex justify-between mb-4">
            <p className="text-gray-700">Duration: {course.duration} hours</p>
            <p className="text-gray-700">Lectures: {course.lectures}</p>
            <p className="text-gray-700">Students: {course.students}</p>
          </div>
          <p className="text-gray-700 mb-4">{course.description}</p>
          <p className="text-gray-700 font-bold mb-2">Outcomes:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {course.outcome.split(",").map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>
          <div className="mt-28">
            <button
              onClick={addToCart}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 "
            >
              Add to Cart
            </button>{" "}
            <button
              onClick={navigateToHome}
              className="px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100 border border-blue-500"
            >
              Back to Home
            </button>
          </div>

          {message && <p className="mt-2 text-red-500">{message}</p>}
        </div>

        <div className="w-1/2 pl-6">
          <h2 className="text-2xl font-bold mb-4">Sessions</h2>
          <div className="space-y-4">
            {sessions.map((session) => (
              <div
                key={session.session}
                className="p-4 bg-gray-100 rounded-2xl"
              >
                <p className="text-lg font-semibold">{session.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
