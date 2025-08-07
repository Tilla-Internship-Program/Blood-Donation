import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loginbg from '../assets/loginbg.jpg'
import { Heart, Shield, Lock, UserCheck, Phone, ArrowRight, Eye, EyeOff } from 'lucide-react';

function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setShowOtp(true);
      setIsLoading(false);
      alert('OTP sent to your phone number');
    }, 2000);
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Login successful!');
      navigate('/donation-centers');
    }, 2000);
  };

  const handleBackToPhone = () => {
    setShowOtp(false);
    setOtp('');
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
              <Heart className="h-8 w-8 text-red-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">BloodDonation Near By</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {showOtp ? 'Enter OTP' : 'Welcome Back'}
            </h2>
            <p className="text-gray-600">
              {showOtp ? 'Enter the 6-digit code sent to your phone' : 'Enter your phone number to continue'}
            </p>
          </div>
          
          {!showOtp ? (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSendOtp(); }}>
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
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ) : (
                  <Phone className="h-4 w-4 mr-2" />
                )}
                {isLoading ? 'Sending OTP...' : 'Continue with OTP'}
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleVerifyOtp(); }}>
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                  OTP Code
                </label>
                <div className="relative">
                  <input
                    id="otp"
                    name="otp"
                    type={showPassword ? "text" : "password"}
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={handleBackToPhone}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors cursor-pointer flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  ) : null}
                  {isLoading ? 'Verifying...' : 'Verify OTP'}
                </button>
              </div>
            </form>
          )}
          
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
              <Shield className="h-4 w-4 text-green-500 mr-1" />
              <span>Secure</span>
            </div>
            <div className="flex items-center">
              <Lock className="h-4 w-4 text-green-500 mr-1" />
              <span>Encrypted</span>
            </div>
            <div className="flex items-center">
              <UserCheck className="h-4 w-4 text-green-500 mr-1" />
              <span>Private</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage; 