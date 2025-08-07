import React from 'react';
import { CheckCircle, XCircle, AlertTriangle, ArrowRight, MapPin } from 'lucide-react';

function EligibilityPage({ setIsEligible, isEligible, setCurrentPage }) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Blood Donation Eligibility Check</h2>
          <div className="space-y-6">
            <div className="p-4 bg-red-50 rounded-lg flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-700">
                Please answer these questions honestly to determine your eligibility to donate blood.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-gray-700">Are you between 18 and 65 years old?</span>
                  <input type="checkbox" className="w-5 h-5 text-red-600 rounded focus:ring-red-500" />
                </label>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-gray-700">Do you weigh at least 50kg (110 lbs)?</span>
                  <input type="checkbox" className="w-5 h-5 text-red-600 rounded focus:ring-red-500" />
                </label>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-gray-700">Has it been more than 3 months since your last donation?</span>
                  <input type="checkbox" className="w-5 h-5 text-red-600 rounded focus:ring-red-500" />
                </label>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-gray-700">Are you in good general health?</span>
                  <input type="checkbox" className="w-5 h-5 text-red-600 rounded focus:ring-red-500" />
                </label>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-gray-700">Are you free from any current infections or illnesses?</span>
                  <input type="checkbox" className="w-5 h-5 text-red-600 rounded focus:ring-red-500" />
                </label>
              </div>
            </div>
            <button
              onClick={() => {
                const checkboxes = document.querySelectorAll('input[type="checkbox"]');
                const eligible = Array.from(checkboxes).every(checkbox => checkbox.checked);
                setIsEligible(eligible);
              }}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors mt-8 cursor-pointer flex items-center justify-center"
            >
              Check Eligibility
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
            {isEligible !== null && (
              <div className={`mt-6 p-4 rounded-lg ${isEligible ? 'bg-green-50' : 'bg-red-50'}`}>
                <div className="flex items-start">
                  {isEligible ? (
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  )}
                  <p className={isEligible ? 'text-green-700' : 'text-red-700'}>
                    {isEligible
                      ? 'Congratulations! You are eligible to donate blood. Please proceed to find a donation center.'
                      : 'Based on your responses, you may not be eligible to donate blood at this time. Please consult with a healthcare provider for more information.'}
                  </p>
                </div>
                {isEligible && (
                  <button
                    onClick={() => setCurrentPage('donation-centers')}
                    className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors cursor-pointer flex items-center justify-center"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Find a Donation Center
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EligibilityPage; 
