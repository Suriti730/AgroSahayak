import React from "react";
import BgImage from "../assets/Bg.jpg";
import { Link } from 'react-router-dom';

const CropAdvisor = () => {
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
            Find the Best Crops for Your Land
          </h1>
          <p className="mb-6 text-lg">
            Get personalized crop recommendations based on your soil, location,
            and recent yield history.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md">
            Start Recommendation →
          </button>
        </div>
      </div>

      {/* Recommendation Form */}
      <div className="py-16 px-6 flex justify-center">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-4xl">
          <h2 className="text-xl font-bold mb-6 text-center">
            Fill in Your Farming Info
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select className="border p-2 rounded-md">
              <option>Uttar Pradesh</option>
            </select>
            <select className="border p-2 rounded-md">
              <option>Select District</option>
            </select>
            <select className="border p-2 rounded-md">
              <option>Clay</option>
            </select>
            <select className="border p-2 rounded-md">
              <option>Wheat</option>
            </select>
            <select className="border p-2 rounded-md">
              <option>Kharif</option>
            </select>
            <select className="border p-2 rounded-md">
              <option>Irrigation Available: Yes</option>
            </select>
          </div>
          <div className="mt-6 text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md">
              Get Recommendations
            </button>
          </div>
        </div>
      </div>

      {/* Top Crop Matches */}
      <div className="px-6 pb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Top Crop Matches for You
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Chickpea",
              tags: ["Loamy Soil", "Rabi"],
              yield: "2.5-3.2 t/acre",
              price: "₹50/kg",
              img: "/src/assets/chickpea.jpg",
            },
            {
              title: "Maize",
              tags: ["Sandy Soil", "Kharif"],
              yield: "3.5-4 t/acre",
              price: "₹18-22/kg",
              img: "/src/assets/maize.jpg",
            },
            {
              title: "Wheat",
              tags: ["Clay Soil", "Rabi"],
              yield: "2.8-3.6 t/acre",
              price: "₹20-25/kg",
              img: "/src/assets/wheat.jpg",
            },
          ].map((crop, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={crop.img} className="h-48 w-full object-cover" alt={crop.title} />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{crop.title}</h3>
                <div className="flex gap-2 text-xs my-2 text-gray-500">
                  {crop.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm">🌾 Yield: {crop.yield}</p>
                <p className="text-sm">💰 Price: {crop.price}</p>
                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                  Get Seeds
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compare Crops */}
      <div className="bg-white py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Compare Crops Side by Side
        </h2>
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-6 shadow">
          <div className="mb-4">
            <p>Select Crops to Compare (2-3)</p>
            <p>Wheat, Rice, Maize, Chickpea</p>
          </div>
          <table className="w-full text-left text-sm border-t border-b border-gray-200">
            <thead>
              <tr>
                <th className="py-2">Criteria</th>
                <th className="py-2">Wheat</th>
                <th className="py-2">Rice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Soil Suitability</td>
                <td>Clay, Loamy</td>
                <td>Clay</td>
              </tr>
              <tr>
                <td className="py-2">Water Requirement</td>
                <td>Medium</td>
                <td>High</td>
              </tr>
              <tr>
                <td className="py-2">Season</td>
                <td>Rabi</td>
                <td>Kharif</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 text-center">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Compare Crops
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Tips from Agri Experts Section */}
      <div className="bg-[#fefdf9] py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Tips from Agri Experts
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            {
              title: "Use Certified Seeds",
              desc: "Always source your seeds from government-approved suppliers for best results.",
            },
            {
              title: "Rotate Crops",
              desc: "Regular crop rotation helps maintain soil health and prevents diseases.",
            },
            {
              title: "Monitor Markets",
              desc: "Keep track of market trends before deciding on your crop selection.",
            },
            {
              title: "Organic Manure",
              desc: "Use organic manure to improve long-term soil fertility naturally.",
            },
          ].map((tip, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-600">{tip.desc}</p>
            </div>
          ))}
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

export default CropAdvisor;

