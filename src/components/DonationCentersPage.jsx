import React from 'react';
import { Link } from 'react-router-dom';

function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
  }
  if (hasHalfStar) {
    stars.push(<i key="half" className="fas fa-star-half-alt text-yellow-400"></i>);
  }
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i key={`empty-${i}`} className="far fa-star text-gray-300"></i>);
  }
  return stars;
}

function DonationCentersPage({ hospitals }) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Donation Centers Near You</h1>
          <p className="text-gray-600">Locate nearby hospitals and donation centers to make your contribution</p>
        </div>
        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                <input
                  type="text"
                  placeholder="Enter your location..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
                />
              </div>
            </div>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
              Search Centers
            </button>
          </div>
        </div>
        {/* Hospital Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{hospital.name}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <i className="fas fa-map-marker-alt text-red-600 mr-2"></i>
                  <span className="text-sm">{hospital.location}</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(hospital.rating)}
                  </div>
                  <span className="text-sm text-gray-600">({hospital.rating})</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-green-600">{hospital.availableBeds}</span> beds available
                  </div>
                  <div className="text-sm text-gray-600">
                    Capacity: {hospital.maxCapacity}
                  </div>
                </div>
                <Link
                  to={`/hospital/${hospital.id}`}
                  className="w-full block bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DonationCentersPage; 