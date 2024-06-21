import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import seedrandom from 'seedrandom';

const TrendingCourse = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const images = [
    // 1
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTusj0U5Jm6X0viRkKANQ2YQd4TASDsc6RA&s",
    // 2
    "https://w0.peakpx.com/wallpaper/668/259/HD-wallpaper-c-logo-white-silk-texture-c-emblem-programming-language-c-silk-background.jpg",
    // 3
    "https://wallpapercave.com/wp/wp9221756.jpg",
    // 4
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvyX6v2zxfI5WjCDSh_1mDzXdCZBu9JWh_g&s",
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

  function shuffleArray(array, seed) {
    let rng = seedrandom(seed);
    let currentIndex = array.length, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(rng() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
  <div className="max-w-7xl mx-auto px-16 py-12 font-satoshi">
    <div className="flex justify-between items-center mb-8">
      <div>
        <h2 className="text-4xl font-bold">Course of the Month</h2>
        <p className="text-lg text-gray-600">
          Explore our featured course for this month
        </p>
      </div>
      <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
        View More
      </button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {shuffleArray([...courses], new Date().getFullYear().toString())
        .slice(0, 4) // Assuming you only want to display one course
        .map((course, index) => (
          <div
            key={index}
            onClick={() => handleCourseClick(course.id)}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={images[index % images.length]}
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

export default TrendingCourse;
