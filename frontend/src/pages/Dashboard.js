import React from "react";
import "./Dashboard.css"; // Ensure to import the CSS

const Dashboard = () => {
  return (
    <div>
      <header className="bg-white shadow-md p-4 rounded-lg mb-6 flex items-center justify-center">
        {/* Navigation with "My Dashboard" aligned center */}
        <nav className="flex items-center justify-center space-x-6 w-full">
          <a href="/" className="text-lg text-gray-800 hover:underline">My Dashboard</a>
          
          <div className="flex space-x-6 ml-auto">
            <a href="/" className="text-blue-500 hover:underline">Home</a>
            <a href="/account" className="text-blue-500 hover:underline">Account</a>
            <a href="/settings" className="text-blue-500 hover:underline">Settings</a>
            <a href="/logout" className="text-blue-500 hover:underline">Logout</a>
          </div>
        </nav>
      </header>

      <main>
        <div className="glass-container grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Box */}
          <div className="bg-white shadow-md rounded-lg p-4 bg-opacity-75 backdrop-blur-md">
            <h2 className="text-lg font-bold text-gray-700">Landing Page</h2>
            <p className="text-gray-600 mt-2">
              The landing page welcomes users, giving them a brief overview of the platform and its features.
            </p>
            <img src="/images/landing.png" alt="Landing Page" className="landing-image" />
          </div>

          {/* Second Box */}
          <div className="bg-white shadow-md rounded-lg p-4 bg-opacity-75 backdrop-blur-md">
            <h2 className="text-lg font-bold text-gray-700">Login</h2>
            <p className="text-gray-600 mt-2">
              Users can log in if they already have an account to access the dashboard.
            </p>
            <img src="/images/login.png" alt="Login" className="landing-image" />
          </div>

          {/* Third Box */}
          <div className="bg-white shadow-md rounded-lg p-4 bg-opacity-75 backdrop-blur-md">
            <h2 className="text-lg font-bold text-gray-700">Sign Up</h2>
            <p className="text-gray-600 mt-2">
              New users can sign up for an account to get started with the platform.
            </p>
            <img src="/images/signup.png" alt="Sign Up" className="landing-image" />
          </div>

          {/* Fourth Box */}
          <div className="bg-white shadow-md rounded-lg p-4 bg-opacity-75 backdrop-blur-md md:col-span-2">
            <h2 className="text-lg font-bold text-gray-700">Your Dashboard</h2>
            <p className="text-gray-600 mt-2">
              The dashboard displays a variety of sections and quick links to manage your account and settings.
            </p>
            <img src="/images/dashboard.png" alt="Your Dashboard" className="landing-image" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
