import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage.jsx';
import DonationCentersPage from './components/DonationCentersPage.jsx';
import HospitalDetailsPage from './components/HospitalDetailsPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import EligibilityPage from './components/EligibilityPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import BloodBanksListPage from './components/BloodBanksListPage.jsx';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';

const hospitals = [
  {
    id: 1,
    name: 'Tikur Ambessa Hospital',
    location: 'Lideta, Addis Ababa',
    rating: 4.8,
    availableBeds: 15,
    maxCapacity: 25,
    image: img1
  },
  {
    id: 2,
    name: 'National Blood Bank Service',
    location: 'Near Gandhi Memorial Hospital, Addis Ababa',
    rating: 4.9,
    availableBeds: 8,
    maxCapacity: 20,
    image: img2
  },
  {
    id: 3,
    name: 'Red Cross',
    location: 'Mexico Square, Addis Ababa',
    rating: 5,
    availableBeds: 12,
    maxCapacity: 18,
    image: img3
  }
];

const eligibilityRequirements = [
  { title: 'Age Requirement', description: 'Must be between 18-65 years old' },
  { title: 'Weight Requirement', description: 'Minimum weight of 50kg (110 lbs)' },
  { title: 'Health Status', description: 'Good general health with no recent illness' },
  { title: 'Time Since Last Donation', description: 'At least 8 weeks since last blood donation' },
  { title: 'Medication Check', description: 'Not taking certain medications that affect donation' },
  { title: 'Lifestyle Factors', description: 'No recent tattoos, piercings, or high-risk activities' }
];

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HomePage />
      </>
    ),
  },
  {
    path: "/donation-centers",
    element: (
      <>
        <Navbar />
        <DonationCentersPage hospitals={hospitals} />
      </>
    ),
  },
  {
    path: "/hospital/:id",
    element: (
      <>
        <Navbar />
        <HospitalDetailsPage hospitals={hospitals} eligibilityRequirements={eligibilityRequirements} />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <LoginPage />
      </>
    ),
  },
  {
    path: "/eligibility",
    element: (
      <>
        <Navbar />
        <EligibilityPage />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <AboutPage hospitals={hospitals} />
      </>
    ),
  },
  {
    path: "/blood-banks",
    element: (
      <>
        <Navbar />
        <BloodBanksListPage />
      </>
    ),
  },
]);

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <RouterProvider router={router} />
    </div>
  );
} 