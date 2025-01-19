import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(`Currency changed to ${currency}`);
      console.log(`Language changed to ${language}`);
    }, 5000); // Delay for 5 seconds

    return () => clearTimeout(timeout); // Cleanup the timeout if the component is unmounted or updated
  }, [currency, language]); // This effect will run when either currency or language changes

  return (
    <div className="container mx-auto p-8 space-y-8">
      <h2 className="text-4xl font-bold text-center text-gray-800">Settings</h2>
      <p className="text-center text-gray-500">
        Customize your preferences and manage your wallet account settings.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-1 p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full mt-1 p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Security</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Enable 2FA</label>
              <button className="w-full mt-1 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Setup Two-Factor Authentication
              </button>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Email Notifications</span>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Push Notifications</span>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Wallet Preferences */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Wallet Preferences</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Currency</label>
              <select
                className="w-full mt-1 p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
                <option>BTC (₿)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Language</label>
              <select
                className="w-full mt-1 p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
