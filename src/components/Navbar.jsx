import React from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow z-50">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
        <span className="font-bold text-2xl text-gray-800">
          BloodDonation Near By
        </span>
      </div>
      <div className="flex items-center space-x-8 ml-auto">
        <a
          href="/"
          className="text-lg text-gray-700 hover:text-red-600 border-b-2 border-red-600 pb-1"
        >
          Home
        </a>
        <a href="/about" className="text-lg text-gray-700 hover:text-red-600">
          About
        </a>
        <a
          href="/donation-centers"
          className="text-lg text-gray-700 hover:text-red-600"
        >
          Donation Centers
        </a>
        <button
          className="border border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-50 transition ml-4"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
