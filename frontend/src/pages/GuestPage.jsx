import React from "react";
import GuestNavbar from "../components/layouts/GuestNavbar";
import GuestBanner from "../components/guest/GuestBanner";
import GuestCourseList from "../components/layouts/PopularCourse";
import GuestInfo from "../components/guest/GuestInfo";
import GuestInstructor from "../components/guest/GuestInstructor";
import TrendingCourses from "../components/layouts/TrendingCourse";
import Footer from "../components/layouts/Footer";
import Testimonials from "../components/guest/Testimonials";

const GuestPage = () => {
  return (
    <div>
      <GuestNavbar />
      <GuestBanner />
      <GuestInfo/>
      <GuestCourseList />
      <TrendingCourses/>
      <GuestInstructor/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default GuestPage;
