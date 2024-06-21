import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import profilePicture from "../../assets/profile.jpg";
import Logo from "./Logo";

const UserNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/login");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <nav className="bg-white w-full shadow-md font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="flex-grow flex justify-center space-x-4">
            <Link
              to="/homepage"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/courses"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Courses
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-800 hover:text-gray-600 px-3 py-2 border border-black rounded-md text-sm font-medium flex items-center"
              >
                Instructor
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1 z-20">
                  <Link
                    to="/homepage"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Become an Student
                  </Link>
                </div>
              )}
            </div>
            <FaShoppingCart className="text-gray-800 hover:text-gray-600 w-6 h-6 cursor-pointer" />
            <div className="relative">
              <img
                onClick={toggleProfileDropdown}
                className="h-8 w-8 rounded-full cursor-pointer"
                src={profilePicture}
                alt="Profile"
              />
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1 z-20">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/my-courses"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    My Courses
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/homepage"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/courses"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Courses
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          <Link
            to="/profile"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            My Profile
          </Link>
          <Link
            to="/my-courses"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            My Courses
          </Link>
          <button
            onClick={handleLogout}
            className="bg-gray-800 text-white w-full text-left px-3 py-2 rounded-md text-base font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
