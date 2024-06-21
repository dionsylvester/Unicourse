import React from "react";
import LoginPage from "./pages/LoginPage";
import GuestPage from "./pages/GuestPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import CreateCoursePage from "./pages/CreateCoursePage";
import ViewCartPage from "./pages/ViewCartPage";
import ViewMyCourse from "./pages/ViewMyCourse";
import TeacherPage from "./pages/TeacherPage";
import CourseDetailMyCourse from "./pages/CourseDetailMyCourse";
import CoursesPage from "./pages/CoursesPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MyProfile from "./pages/MyProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/homepage" element={<UserPage />} />
        <Route path="/createcourse" element={<CreateCoursePage />} />
        <Route path="/course/:id" element={<CourseDetailPage />} />
        <Route path="/cart/:id" element={<ViewCartPage />} />
        <Route path="/mycourses" element={<ViewMyCourse />} /> 
        <Route path="/instructor" element={<TeacherPage/>} />
        <Route path="/courseDetailMyCourse/:id" element={<CourseDetailMyCourse/>} />
        <Route path="/courses" element={<CoursesPage/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/myprofile" element={<MyProfile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;