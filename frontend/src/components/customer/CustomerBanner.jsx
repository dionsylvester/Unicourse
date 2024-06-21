import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import booksBackground from "../../assets/book.jpg"

const CustomerBanner = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      const decoded = jwtDecode(token);
      setUserName(decoded.userName);
    }
  }, []);

  return (
    <div
      className="relative bg-cover bg-center text-white p-6 rounded-lg shadow-md text-left font-satoshi"
      style={{ backgroundImage: `url(${booksBackground})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70" />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-2">Welcome, {userName}!</h1>
        <p className="text-lg">
          We're glad to have you here. Explore and enjoy your learning journey!
        </p>
      </div>
    </div>
  );
};

export default CustomerBanner;
