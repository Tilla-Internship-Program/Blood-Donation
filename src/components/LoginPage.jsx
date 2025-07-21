import React from 'react';
import Loginbg from '../assets/loginbg.jpg'

function LoginPage({ handleLogin }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url(${Loginbg})`
        }}
      ></div>
      <div className="relative max-w-md w-full space-y-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-heart text-red-600 text-3xl mr-2"></i>
              <span className="text-2xl font-bold text-gray-900">BloodDonation Near By</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Enter your phone number to continue</p>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <select className="h-full py-0 pl-3 pr-7 border-none bg-transparent text-gray-500 text-sm focus:ring-2 focus:ring-red-500 rounded-l-lg">
                    <option>+251</option>
                  </select>
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors cursor-pointer !rounded-button whitespace-nowrap"
            >
              Continue with OTP
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              By continuing, you agree to our{' '}
              <a href="#" className="text-red-600 hover:text-red-700 cursor-pointer">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-red-600 hover:text-red-700 cursor-pointer">Privacy Policy</a>
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <i className="fas fa-shield-alt text-green-500 mr-1"></i>
              <span>Secure</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-lock text-green-500 mr-1"></i>
              <span>Encrypted</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-user-shield text-green-500 mr-1"></i>
              <span>Private</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage; 