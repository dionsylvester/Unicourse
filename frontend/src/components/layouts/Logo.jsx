import React from 'react';
import { FaBook } from 'react-icons/fa';

const Logo = () => {
  return (
    <div className="flex items-center">
      <FaBook className="text-2xl text-blue-600 mr-2" />
      <span className="text-2xl font-bold text-gray-800 font-satoshi">Unicourse</span>
    </div>
  );
};

export default Logo;
