import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className="p-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-3xl font-bold shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            Mavi
          </Link>
          <div className="text-lg">|</div>
          <Link to="/about" className="text-lg hover:text-gray-300 transition duration-300">
            Hakkımızda
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            to="/cart"
            className="relative hover:text-gray-300 transition duration-300"
          >
            <FaShoppingCart size={28} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 text-sm">
              0
            </span>
          </Link>
          <Link
            to="/profile"
            className="hover:text-gray-300 transition duration-300"
          >
            <FaUserCircle size={28} />
          </Link>
          <Link
            to="/login"
            className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300 text-lg"
          >
            Giriş Yap
          </Link>
        </div>
      </div>
    </div>
  );
}
