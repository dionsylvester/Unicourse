import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OtherCourse = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const images = [
    // 1
    "https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg",
    // 2
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvyX6v2zxfI5WjCDSh_1mDzXdCZBu9JWh_g&s",
    // 3
    "https://img-c.udemycdn.com/course/750x422/4422780_304c_2.jpg",
    // 4
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTusj0U5Jm6X0viRkKANQ2YQd4TASDsc6RA&s",
    // 5
    "https://wallpapercave.com/wp/wp12194584.jpg",
    // 6
    "https://img.freepik.com/free-vector/ai-technology-brain-background-vector-digital-transformation-concept_53876-117812.jpg",
    // 7
    "https://wallpapers.com/images/hd/canva-background-qz8kedi3hsiz0ok3.jpg",
    // 8
    "https://designshack.net/wp-content/uploads/procreate.png",
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
          <h2 className="text-4xl font-bold">Recommended For You</h2>
          <p className="text-lg text-gray-600">
            Explore our courses suitable for you
          </p>
        </div>
        <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
          View More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses
          .slice() // Create a shallow copy to avoid mutating the original array
          .sort((a, b) => (b.rating - a.rating)) // Sort descending by the product of rating and number of students
          .slice(0, 8) // Limit to top 4 highest weighted courses
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

export default OtherCourse;
