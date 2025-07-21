import React from 'react';
import Navbar from './Navbar';
import Homebg from '../assets/Homebg.jpg'
import home from '../assets/home.jpg'

function HomePage({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-white via-red-50 to-red-100 min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
         backgroundImage: `url(${Homebg})`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Give Blood,<br />
                <span className="text-red-600">Save Lives</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Every donation can save up to three lives. Join our community of heroes and make a difference in someone's life today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={() => setCurrentPage('donation-centers')}
                  className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Find a Donation Center Near Me
                </button>
                <button
                  onClick={() => setCurrentPage('about')}
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
                >
                  Learn More
                </button>
              </div>
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">10,000+</div>
                  <div className="text-sm text-gray-600">Lives Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Active Donors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Partner Hospitals</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={home}
                alt="Blood donation community"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Why Donate Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Your Donation Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Blood donation is a simple act that can have profound impact on the lives of others
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Save Lives</h3>
              <p className="text-gray-600">
                One donation can save up to three lives and help patients with various medical conditions
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Impact</h3>
              <p className="text-gray-600">
                Join a community of heroes making a difference in their local hospitals and communities
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-red-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safe Process</h3>
              <p className="text-gray-600">
                All donations follow strict safety protocols with professional medical supervision
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage; 