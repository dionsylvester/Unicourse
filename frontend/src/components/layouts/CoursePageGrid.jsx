import React from "react";
import CourseCard from "./CourseCard"; 

const CoursesGrid = ({ courses }) => {
  const images = [
    // 1
    "https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg",
    // 2
    "https://e0.pxfuel.com/wallpapers/104/615/desktop-wallpaper-swift-programming-development.jpg",
    // 3
    "https://wallpapercave.com/wp/wp5471395.jpg",
    // 4
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTusj0U5Jm6X0viRkKANQ2YQd4TASDsc6RA&s",
    // 5
    "https://img-c.udemycdn.com/course/750x422/4422780_304c_2.jpg",
    // 6
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvyX6v2zxfI5WjCDSh_1mDzXdCZBu9JWh_g&s",
    // 7
    "https://wallpapers.com/images/hd/canva-background-qz8kedi3hsiz0ok3.jpg",
    // 8
    "https://designshack.net/wp-content/uploads/procreate.png",
    // 9
    "https://media.licdn.com/dms/image/D4D12AQEPH3olal4Xcw/article-cover_image-shrink_720_1280/0/1713456694322?e=2147483647&v=beta&t=VROMn7wH2pZWxpcaJksc-Hd8KXYiTlEQRBtU7mRXtBc",
    // 10
    "https://wallpapercave.com/wp/wp9221756.jpg",
    // 11
    "https://w0.peakpx.com/wallpaper/839/431/HD-wallpaper-premium-machine-learning-and-cyber-mind-domination-digital-brain-artificial-intelligence-big-data-concept.jpg",
    // 12
    "https://img.freepik.com/free-vector/ai-technology-brain-background-vector-digital-transformation-concept_53876-117812.jpg",
    // 13
    "https://wallpapercave.com/wp/wp12194584.jpg",
    // 14
    "https://i.pinimg.com/originals/c2/6a/58/c26a58af112f4cad08629893409f32c5.jpg",
    // 15
    "https://w0.peakpx.com/wallpaper/668/259/HD-wallpaper-c-logo-white-silk-texture-c-emblem-programming-language-c-silk-background.jpg",
    // 16
    "https://wallpapercave.com/wp/wp7041156.png",
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <div key={course.id} className="flex flex-col h-full">
            <CourseCard course={course} image={images[index % images.length]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesGrid;
