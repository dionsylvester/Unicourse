import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import profilePicture from "../../assets/profile.jpg";
import Logo from "./Logo";

const UserNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded.userId);
      } catch (err) {
        setError("Failed to decode token.");
        console.error("Error decoding token:", err);
      }
    } else {
      setError("No token found.");
    }
  }, []);

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

  const navigateToCart = () => {
    navigate(`/cart/${userId}`);
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
              to="/aboutus"
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
              to="/contactus"
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
                Student
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1 z-20">
                  <Link
                    to="/instructor"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Become an Instructor
                  </Link>
                </div>
              )}
            </div>
            <button
              onClick={navigateToCart}
              className="text-gray-800 hover:text-gray-600 w-6 h-6 cursor-pointer"
            >
              <FaShoppingCart />
            </button>
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
                    to="/myprofile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/mycourses"
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
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              onClick={navigateToCart}
            >
              <FaShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {[
            "home",
            "about",
            "courses",
            "contact",
            "profile",
            "my-courses",
          ].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {item.charAt(0).toUpperCase() + item.replace("-", " ").slice(1)}
            </Link>
          ))}
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
