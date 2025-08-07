import React from 'react';
import { Link } from 'react-router-dom';
import About from '../assets/About.jpg'
import { Star, Building2, Heart, Users, Droplets, MapPin, ArrowRight } from 'lucide-react';

function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />);
  }
  if (hasHalfStar) {
    stars.push(<Star key="half" className="h-4 w-4 text-yellow-400 fill-current" />);
  }
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
  }
  return stars;
}

function AboutPage({ hospitals }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-50 to-red-100 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            BloodDonation Near By help you find Hospital near by and connects generous donors with hospitals in need, creating a seamless bridge
            between those who can give and those who desperately need life-saving blood donations.
          </p>
        </div>
      </div>
      {/* Mission Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Blood Donation Matters</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Every two seconds, someone in need requires blood. Whether it's for emergency surgery,
                  cancer treatment, or chronic illness management, blood donations are essential for
                  saving lives and improving health outcomes.
                </p>
                <p>
                  Our platform makes it easier than ever to find donation centers near by, check availability,
                  and schedule appointments. We believe that by removing barriers and simplifying the
                  process, more people will be inspired to become regular blood donors.
                </p>
                <p>
                  Since our founding, we've facilitated thousands of donations and helped save countless
                  lives. Every donation matters, and every donor is a hero in someone's story.
                </p>
              </div>
            </div>
            <div>
              <img
                src={About}
                alt="Blood donation community"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Impact Statistics */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Together, we're making a difference in our communities</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2 flex items-center justify-center">
                <Heart className="h-8 w-8 mr-2" />
                10,000+
              </div>
              <div className="text-gray-600">Lives Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2 flex items-center justify-center">
                <Droplets className="h-8 w-8 mr-2" />
                3,500+
              </div>
              <div className="text-gray-600">Blood Units Collected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2 flex items-center justify-center">
                <Users className="h-8 w-8 mr-2" />
                500+
              </div>
              <div className="text-gray-600">Active Donors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2 flex items-center justify-center">
                <Building2 className="h-8 w-8 mr-2" />
                50+
              </div>
              <div className="text-gray-600">Partner Hospitals</div>
            </div>
          </div>
        </div>
      </div>
      {/* Partner Hospitals */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partner Hospitals</h2>
            <p className="text-xl text-gray-600">Working with leading healthcare institutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hospitals.map((hospital) => (
              <div key={hospital.id} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{hospital.name}</h3>
                <p className="text-gray-600 mb-4 flex items-center justify-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {hospital.location}
                </p>
                <div className="flex items-center justify-center">
                  <div className="flex mr-2">
                    {renderStars(hospital.rating)}
                  </div>
                  <span className="text-sm text-gray-600">({hospital.rating})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="bg-red-600 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Save Lives?</h2>
          <p className="text-xl text-red-100 mb-8">
            Join our community of heroes and make a difference in someone's life today.
          </p>
          <Link
            to="/donation-centers"
            className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer flex items-center mx-auto w-fit"
          >
            <MapPin className="h-5 w-5 mr-2" />
            Find a Donation Center
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage; 