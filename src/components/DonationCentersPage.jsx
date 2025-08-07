import React, { useEffect, useState } from 'react';
import Homebg from '../assets/Homebg.jpg'
import Loginbg from '../assets/loginbg.jpg'
import { Search, MapPin, Phone, Globe, Mail, Flag, RefreshCw, AlertTriangle, Building2, Loader2 } from 'lucide-react';

function DonationCentersPage() {
  const [donationCenters, setDonationCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchDonationCenters = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('https://api-dev-tenaadam.tillahealth.com/api/v1/blood-banks/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(10000),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === 'success' && data.result) {
        setDonationCenters(data.result);
      } else if (Array.isArray(data)) {
        setDonationCenters(data);
      } else {
        setDonationCenters([]);
      }

      setLoading(false);
    } catch (err) {
      console.error('Error fetching donation centers:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonationCenters();
  }, []);

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
    fetchDonationCenters();
  };

  const filteredCenters = donationCenters.filter(center =>
    center.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.address?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.city?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${Homebg})` }}>
        <div className="text-center bg-white/80 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <Loader2 className="animate-spin h-12 w-12 text-red-600 mx-auto mb-4" />
          <p className="text-gray-700 font-medium">Loading donation centers...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${Homebg})` }}>
        <div className="text-center max-w-md mx-auto p-8 bg-white/90 rounded-lg shadow-lg backdrop-blur-sm">
          <AlertTriangle className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Connection Error</h2>
          <p className="text-gray-700 mb-4">Unable to fetch donation centers data. This might be due to:</p>
          <ul className="text-left text-gray-700 mb-6 space-y-1">
            <li>• Network connectivity issues</li>
            <li>• API server being temporarily unavailable</li>
            <li>• API endpoint changes</li>
          </ul>
          <button
            onClick={handleRetry}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center mx-auto"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Retry ({retryCount} attempts)
          </button>
          <p className="text-sm text-gray-600 mt-2">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!donationCenters || donationCenters.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${Homebg})` }}>
        <div className="text-center bg-white/80 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Donation Centers Found</h2>
          <p className="text-gray-700">No donation centers are currently available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-r from-white via-red-50 to-red-100 min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: `url(${Homebg})`
        }}
      ></div>
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 pt-10">Find Donation Centers Near You</h1>
          <p className="text-gray-600">Locate nearby hospitals and donation centers to make your contribution</p>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Enter your location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
                />
              </div>
            </div>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors cursor-pointer flex items-center">
              <Search className="h-4 w-4 mr-2" />
              Search Centers
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCenters.map((center) => (
            <div
              key={center.id}
              className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 overflow-hidden"
            >
              {/* Image Section */}
              {center.documents && center.documents.length > 0 ? (
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                    src={`https://${center.documents[0].document_path}`}
                    alt={center.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <Building2 className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
              ) : (
                <div className="relative h-52 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-red-400" />
                </div>
              )}

              <div className="p-6 relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{center.name}</h3>

                {center.description && (
                  <p className="text-gray-600 text-sm mb-3 italic">{center.description}</p>
                )}

                <div className="space-y-2 mb-4 text-gray-700">
                  {center.address && (
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{center.address}{center.city && `, ${center.city}`}</span>
                    </div>
                  )}

                  {center.country && (
                    <div className="flex items-center">
                      <Flag className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">{center.country}</span>
                    </div>
                  )}

                  {center.phone && (
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                      <a href={`tel:${center.phone}`} className="hover:text-red-600 transition text-sm">
                        {center.phone}
                      </a>
                    </div>
                  )}

                  {center.website && (
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                      <a
                        href={center.website.startsWith('http') ? center.website : `https://${center.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-600 hover:text-blue-800 transition text-sm"
                      >
                        {center.website}
                      </a>
                    </div>
                  )}

                  {center.email && (
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                      <a href={`mailto:${center.email}`} className="hover:text-red-600 transition text-sm">
                        {center.email}
                      </a>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800 mb-2">Blood Type Needs:</div>
                  {center.blood_type_needs && center.blood_type_needs.length > 0 ? (
                    <ul className="space-y-1">
                      {center.blood_type_needs.map((need) => (
                        <li
                          key={need.id}
                          className={`text-sm ${need.is_critical ? 'text-red-600 font-bold' : 'text-gray-600'}`}
                        >
                          <span className="inline-block w-16">{need.blood_type}:</span>
                          <span>{need.needed_units} units</span>
                          {need.is_critical && (
                            <span className="ml-1 text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Critical</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 italic">No current needs listed</p>
                  )}
                </div>

                {center.latitude && center.longitude && (
                  <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500">
                    <MapPin className="h-3 w-3 text-red-600 mr-1 inline" />
                    Coordinates: {center.latitude}, {center.longitude}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center relative">
          <button
            onClick={fetchDonationCenters}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors shadow-lg flex items-center mx-auto"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default DonationCentersPage;