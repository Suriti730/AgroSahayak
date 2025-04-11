import React from "react";
import BgImage from "../assets/Bg.jpg";
import { Link } from 'react-router-dom';

const SoilTesting = () => {
  return (
    <div className="bg-[#fefdf9] text-[#1f1f1f]">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-[500px] flex items-center justify-start px-10"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="absolute inset-0  bg-opacity-40"></div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
          Soil Testing Services
          </h1>
          <p className="mb-6 text-lg">
          Know your soil better for smarter farming decisions.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md">
            Book Test →
          </button>
        </div>
        
      </div>

      {/* Recommendation Form */}
       <div className="bg-white min-h-screen">
      

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Book a Soil Test</h2>
        <form className="bg-gray-100 p-6 rounded-xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" placeholder="Full Name" className="p-3 rounded border w-full" />
            <input type="text" placeholder="Phone Number" className="p-3 rounded border w-full" />
            <select className="p-3 rounded border w-full">
              <option>Select State</option>
              <option>Uttar Pradesh</option>
              <option>Maharashtra</option>
              <option>Tamil Nadu</option>
            </select>
            <select className="p-3 rounded border w-full">
              <option>Select District</option>
              <option>Lucknow</option>
              <option>Pune</option>
              <option>Chennai</option>
            </select>
            <input type="text" placeholder="Village / Area" className="p-3 rounded border w-full col-span-1 md:col-span-2" />
          </div>
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded w-full mt-4">
            Submit Request
          </button>
        </form>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Why Soil Testing?</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Understand soil fertility and nutrient levels</li>
            <li>✅ Get recommendations for fertilizers and crops</li>
            <li>✅ Improve yield and reduce unnecessary costs</li>
            <li>✅ Support sustainable farming practices</li>
          </ul>
        </div>
      </div>
    </div>

      {/* Footer CTA */}
      <div className="bg-green-50 text-center py-12 px-4">
        <h3 className="text-lg font-semibold mb-2">
          Need help choosing the right crop?
        </h3>
        <p className="mb-4 text-sm">
          Our AI assistant can guide you through the process
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
          Talk to our AI Assistant 
        </button>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-medium mb-4">About</h3>
              <ul className="space-y-2">
                <li><Link to="/mission" className="hover:text-white transition-colors">Mission</Link></li>
                <li><Link to="/team" className="hover:text-white transition-colors">Team</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/chat" className="hover:text-white transition-colors">Chat</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                </a>
                <a href="https://twitter.com" className="hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                </a>
                <a href="https://youtube.com" className="hover:text-white transition-colors" aria-label="YouTube">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
            <p>© 2025 AgriSahayak. Built for Farmers, by Farmers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SoilTesting;

