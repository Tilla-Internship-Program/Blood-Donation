import React, { useEffect, useState } from 'react';

function BloodBanksListPage() {
  const [bloodBanks, setBloodBanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchBloodBanks = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://api-dev-tenaadam.tillahealth.com/api/v1/blood-banks/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(10000) // 10 second timeout
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Handle the actual API response structure
      if (data.status === 'success' && data.result) {
        setBloodBanks(data.result);
      } else if (Array.isArray(data)) {
        setBloodBanks(data);
      } else {
        setBloodBanks([]);
      }
      
      setLoading(false);
    } catch (err) {
      console.error('Error fetching blood banks:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBloodBanks();
  }, []);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    fetchBloodBanks();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blood banks...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-600 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Connection Error</h2>
          <p className="text-gray-600 mb-4">
            Unable to fetch blood banks data. This might be due to:
          </p>
          <ul className="text-left text-gray-600 mb-6 space-y-1">
            <li>• Network connectivity issues</li>
            <li>• API server being temporarily unavailable</li>
            <li>• API endpoint changes</li>
          </ul>
          <button
            onClick={handleRetry}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Retry ({retryCount} attempts)
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Error: {error}
          </p>
        </div>
      </div>
    );
  }

  if (!bloodBanks || bloodBanks.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">🏥</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Blood Banks Found</h2>
          <p className="text-gray-600">No blood banks are currently available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blood Banks</h1>
          <p className="text-gray-600">Find blood banks near you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bloodBanks.map((bank) => (
            <div key={bank.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              {/* Image Section */}
              {bank.documents && bank.documents.length > 0 && (
                <div className="relative h-40 overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={`https://${bank.documents[0].document_path}`}
                    alt={bank.name}
                    className="max-h-36 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">No Image</span>
                  </div>
                </div>
              )}
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{bank.name}</h3>
                
                {/* Description */}
                {bank.description && (
                  <p className="text-gray-600 text-sm mb-3 italic">{bank.description}</p>
                )}
                
                {/* Contact Information */}
                <div className="space-y-2 mb-4">
                  {bank.address && (
                    <div className="flex items-start text-gray-600">
                      <i className="fas fa-map-marker-alt text-red-600 mr-2 mt-1"></i>
                      <span>{bank.address}{bank.city && `, ${bank.city}`}</span>
                    </div>
                  )}
                  
                  {bank.country && (
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-flag text-red-600 mr-2"></i>
                      <span>{bank.country}</span>
                    </div>
                  )}
                  
                  {bank.phone && (
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-phone-alt text-red-600 mr-2"></i>
                      <a href={`tel:${bank.phone}`} className="hover:text-red-600 transition-colors">
                        {bank.phone}
                      </a>
                    </div>
                  )}
                  
                  {bank.website && (
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-globe text-red-600 mr-2"></i>
                      <a 
                        href={bank.website.startsWith('http') ? bank.website : `https://${bank.website}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {bank.website}
                      </a>
                    </div>
                  )}
                  
                  {bank.email && (
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-envelope text-red-600 mr-2"></i>
                      <a href={`mailto:${bank.email}`} className="hover:text-red-600 transition-colors">
                        {bank.email}
                      </a>
                    </div>
                  )}
                </div>
                
                {/* Blood Type Needs */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800 mb-2">Blood Type Needs:</div>
                  {bank.blood_type_needs && bank.blood_type_needs.length > 0 ? (
                    <ul className="space-y-1">
                      {bank.blood_type_needs.map((need) => (
                        <li key={need.id} className={`text-sm ${need.is_critical ? 'text-red-600 font-bold' : 'text-gray-600'}`}>
                          <span className="inline-block w-16">{need.blood_type}:</span>
                          <span>{need.needed_units} units</span>
                          {need.is_critical && <span className="ml-1 text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Critical</span>}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500 italic">No current needs listed</p>
                  )}
                </div>
                
                {/* Location Info */}
                {bank.latitude && bank.longitude && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                      <i className="fas fa-map-pin text-red-600 mr-1"></i>
                      Coordinates: {bank.latitude}, {bank.longitude}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Refresh Button */}
        <div className="mt-8 text-center">
          <button
            onClick={fetchBloodBanks}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Refresh Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default BloodBanksListPage; 