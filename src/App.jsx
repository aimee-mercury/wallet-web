import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Transactions from './components/Transactions';
import Budget from './components/Budget';
import Report from './components/Reports';
import { WalletProvider } from './context/WalletContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Settings from './components/settings';

const App = () => {
  return (
    <WalletProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          {/* Navbar */}
          <nav className="bg-gradient-to-r from-blue-600 to-purple-500 text-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="text-3xl font-extrabold">WalletApp</Link>
              <ul className="flex space-x-8">
                <li>
                  <Link to="/" className="text-lg hover:text-yellow-300 transition">Home</Link>
                </li>
                <li>
                  <Link to="/transactions" className="text-lg hover:text-yellow-300 transition">Transactions</Link>
                </li>
                <li>
                  <Link to="/budget" className="text-lg hover:text-yellow-300 transition">Budget</Link>
                </li>
                <li>
                  <Link to="/report" className="text-lg hover:text-yellow-300 transition">Reports</Link>
                </li>
                <li>
                  <Link to="/settings" className="text-lg hover:text-yellow-300 transition">Settings</Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Routes for different pages */}
          <div className="container mx-auto p-6 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/report" element={<Report />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>

          {/* Footer */}
          <footer className="bg-gradient-to-r from-purple-500 to-blue-600 text-white py-6">
            <div className="container mx-auto text-center">
              <p className="text-sm">&copy; 2025 WalletApp. All Rights Reserved.</p>
              <div className="space-x-4 mt-2">
                <a href="#" className="hover:text-yellow-300">Privacy Policy</a>
                <a href="#" className="hover:text-yellow-300">Terms & Conditions</a>
                <a href="#" className="hover:text-yellow-300">Contact Us</a>
              </div>
            </div>
          </footer>
        </div>
      </Router>
      <ToastContainer />
    </WalletProvider>
  );
};

// Home Page Component
const Home = () => {
  return (
    <div className="text-center space-y-12 py-16">
      <h1 className="text-5xl font-extrabold text-gray-800">Welcome to WalletApp!</h1>
      <p className="text-2xl text-gray-600">The ultimate tool to manage your finances effortlessly.</p>
      <div className="flex justify-center space-x-6">
        <Link 
          to="/transactions" 
          className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition">
          Track Transactions
        </Link>
        <Link 
          to="/budget" 
          className="bg-green-600 text-white py-3 px-8 rounded-md hover:bg-green-700 transition">
          Set Your Budget
        </Link>
      </div>

      {/* Features Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose WalletApp?</h2>
        <p className="text-lg text-gray-600 mt-4">Explore features designed to simplify your financial management.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <Feature 
            title="Track Expenses Easily"
            description="Categorize and monitor every transaction with detailed records." 
          />
          <Feature 
            title="Generate Reports"
            description="Analyze spending habits with visual graphs and detailed summaries." 
          />
          <Feature 
            title="Budget Management"
            description="Set monthly limits and monitor progress to meet your goals." 
          />
          <Feature 
            title="Multi-Account Support"
            description="Manage all your accounts in one place seamlessly." 
          />
          <Feature 
            title="Secure and Private"
            description="Your data is encrypted and fully secured." 
          />
          <Feature 
            title="Customizable Alerts"
            description="Get reminders for upcoming bills and spending limits." 
          />
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-100 py-12 mt-16">
        <h2 className="text-3xl font-bold text-gray-800">Take Control of Your Finances Today</h2>
        <p className="text-lg text-gray-600 mt-4">Join thousands of users who trust WalletApp to manage their finances.</p>
        <div className="flex justify-center space-x-6 mt-8">
          <Link 
            to="/transactions" 
            className="bg-green-500 text-gray-800 py-3 px-8 rounded-md hover:bg-green-700 transition">
            Get Started
          </Link>
          <Link 
            to="/report" 
            className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 transition">
            View Reports
          </Link>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
      <h3 className="text-2xl font-bold text-blue-600">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default App;
