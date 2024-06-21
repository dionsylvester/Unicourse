import React from "react";
import UserNavbar from "../components/layouts/UserNavbar";
import CustomerBanner from "../components/customer/CustomerBanner";
import CustomerCourse from "../components/customer/CustomerCourse";
import Schedule from "../components/customer/Schedule";
import OtherCourse from "../components/customer/OtherCourse";
import Footer from "../components/layouts/Footer"

const UserPage = () => {

  return (
    <>
      <UserNavbar />
      <CustomerBanner/>
      <CustomerCourse/>
      <Schedule/>
      <OtherCourse />
      <Footer/>
    </>
  );
};

export default UserPage;
