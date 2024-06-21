import React from "react";
import InstructorNavbar from "../components/layouts/InstructorNavbar";
import CustomerBanner from "../components/customer/CustomerBanner";
import InstructorButton from "../components/instructor/InstructorButton";
import Anlytic from "../components/instructor/Anlytic";
import Footer from "../components/layouts/Footer";

const TeacherPage = () => {
  return (
    <div>
      <InstructorNavbar />
      <CustomerBanner/>
      <InstructorButton/>
      <Anlytic/>
      <Footer/>
    </div>
  );
};

export default TeacherPage;
