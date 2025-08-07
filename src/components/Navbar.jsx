import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/logo.png';
import { Home, Info, Building2, LogIn, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to login page
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-lg">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="font-bold text-2xl text-gray-800">BloodDonation Near By</span>
        </Link>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 ml-auto">
        <Link to="/" className="text-lg text-gray-700 hover:text-red-600 border-b-2 border-red-600 pb-1 flex items-center">
          <Home className="h-4 w-4 mr-1" />
          Home
        </Link>
        <Link to="/about" className="text-lg text-gray-700 hover:text-red-600 flex items-center">
          <Info className="h-4 w-4 mr-1" />
          About
        </Link>
        <Link to="/donation-centers" className="text-lg text-gray-700 hover:text-red-600 flex items-center">
          <Building2 className="h-4 w-4 mr-1" />
          Donation Centers
        </Link>
        <button 
          onClick={handleLogin}
          className="border border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-50 transition flex items-center"
        >
          <LogIn className="h-4 w-4 mr-1" />
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-red-600 transition"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <div className="flex flex-col space-y-4 p-6">
            <Link 
              to="/" 
              className="text-lg text-gray-700 hover:text-red-600 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-lg text-gray-700 hover:text-red-600 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Info className="h-4 w-4 mr-2" />
              About
            </Link>
            <Link 
              to="/donation-centers" 
              className="text-lg text-gray-700 hover:text-red-600 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <Building2 className="h-4 w-4 mr-2" />
              Donation Centers
            </Link>
            <button 
              onClick={() => {
                handleLogin();
                setIsMenuOpen(false);
              }}
              className="border border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-50 transition flex items-center"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 