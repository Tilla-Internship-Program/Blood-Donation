import React from 'react';
import { useParams } from 'react-router-dom';

function HospitalDetailsPage({ hospitals, eligibilityRequirements }) {
  const { id } = useParams();
  const hospital = hospitals.find(h => String(h.id) === id);
  if (!hospital) return <div>Hospital not found.</div>;
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hospital Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="relative h-64 overflow-hidden">
            <img
              src={hospital.image}
              alt={hospital.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-3xl font-bold mb-2">{hospital.name}</h1>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>{hospital.location}</span>
              </div>
            </div>
          </div>
        </div>
        {/* Key Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-bed text-green-600 text-2xl"></i>
            </div>
            <div className="text-2xl font-bold text-green-600 mb-1">{hospital.availableBeds}</div>
            <div className="text-sm text-gray-600">Available Beds</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-users text-blue-600 text-2xl"></i>
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-1">{hospital.maxCapacity}</div>
            <div className="text-sm text-gray-600">Max Capacity</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-clock text-yellow-600 text-2xl"></i>
            </div>
            <div className="text-2xl font-bold text-yellow-600 mb-1">15 min</div>
            <div className="text-sm text-gray-600">Avg Wait Time</div>
          </div>
        </div>
        {/* Eligibility Requirements */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Donation Eligibility Requirements</h2>
          <p className="text-gray-600 mb-8">
            Please review the following requirements to ensure you're eligible for blood donation:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eligibilityRequirements.map((requirement, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-red-200 transition-colors">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className={`fas ${requirement.icon} text-red-600`}></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{requirement.title}</h3>
                  <p className="text-sm text-gray-600">{requirement.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-red-50 rounded-lg">
            <div className="flex items-start space-x-3">
              <i className="fas fa-info-circle text-red-600 mt-1"></i>
              <div>
                <h3 className="font-semibold text-red-800 mb-2">Important Note</h3>
                <p className="text-sm text-red-700">
                  If you have any medical conditions or concerns, please consult with our medical staff before donating.
                  A brief health screening will be conducted before donation to ensure your safety and the safety of recipients.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
              Book Appointment
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors cursor-pointer !rounded-button whitespace-nowrap">
              Contact Hospital
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalDetailsPage; 