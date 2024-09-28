import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">

          <div className="text-xl font-semibold">
            İyi Giyinmek Herkesin Hakkı!
          </div>

          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-200">
          © 2024 Mavi Giyim. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
