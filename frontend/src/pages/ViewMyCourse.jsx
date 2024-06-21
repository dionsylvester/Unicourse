import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";  // Ensure this import is correct, typically `import jwtDecode from 'jwt-decode';`
import UserNavbar from "../components/layouts/UserNavbar";
import Footer from "../components/layouts/Footer"

const ViewMyCourse = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded.userId);
      } catch (err) {
        setError("Error decoding token. Please log in again.");
        setLoading(false);
      }
    } else {
      setError("User is not logged in.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      const fetchEnrollments = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5001/viewEnroll/${userId}`
          );
          setEnrollments(response.data);
          setLoading(false);
        } catch (err) {
          setError("Failed to fetch enrollments");
          setLoading(false);
        }
      };
      fetchEnrollments();
    }
  }, [userId]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div>
      <UserNavbar/>
      <div className="min-h-screen bg-gray-100 p-4 font-satoshi">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-10 text-center">My Enrolled Courses</h1>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {enrollments.length === 0 ? (
              <p className="text-gray-700 text-center col-span-full">You have no enrollments.</p>
            ) : (
              enrollments.map((enrollment) => (
                <div key={enrollment.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={enrollment.course.image || "https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg"}
                    alt={enrollment.course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2">{enrollment.course.title}</h2>
                    <p className="text-gray-700 mb-2">Enrolled on: {new Date(enrollment.enrollDate).toLocaleDateString()}</p>
                    <p className="text-gray-700 mb-2">Progress: {enrollment.progress}%</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="relative w-screen top-auto bottom-0 ">
        <Footer/>
      </div>
      
    </div>
  );
};

export default ViewMyCourse;
