import React from 'react';
import { Link } from 'react-router-dom';


const Weather = () => {
  return (
    <div className="bg-white">
      <header className="bg-green-100 py-12 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Track Weather & Secure Your Crops</h1>
          <p className="text-gray-700 text-lg mb-6">Stay ahead with real-time forecasts and government-backed insurance plans.</p>
          <div className="flex gap-4">
            <Link to="/weather">
              <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">View My Weather</button>
            </Link>
            <Link to="/insurance">
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Explore Insurance</button>
            </Link>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img src="/src/assets/BG.jpg" alt="Farmer" className="w-80 md:w-96" />
        </div>
      </header>

      <section className="px-4 md:px-20 py-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Today in Mandya, Karnataka</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-100 p-4 rounded text-center">
            <p className="text-2xl font-bold">32°C</p>
            <p className="text-gray-600">Feels like 35°C</p>
          </div>
          <div className="bg-gray-100 p-4 rounded text-center">
            <p className="text-2xl font-bold">58%</p>
            <p className="text-gray-600">Humidity</p>
          </div>
          <div className="bg-gray-100 p-4 rounded text-center">
            <p className="text-2xl font-bold">12 km/h</p>
            <p className="text-gray-600">Wind Speed</p>
          </div>
          <div className="bg-gray-100 p-4 rounded text-center">
            <p className="text-2xl font-bold">40%</p>
            <p className="text-gray-600">Rain Chance</p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-20 py-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">7-Day Forecast</h2>
        <div className="flex gap-4">
          <div className="bg-blue-100 p-6 rounded">
            <p className="text-lg font-bold">Monday</p>
            <p className="text-sm">29°C / 22°C</p>
            <p className="text-sm">Rain: 65%</p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-20 py-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Weather Alerts</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-red-100 text-red-700 p-4 rounded">⚠️ Heavy rainfall alert in your district</div>
          <div className="bg-green-100 text-green-700 p-4 rounded">✅ Ideal sowing weather for Paddy this week</div>
          <div className="bg-orange-100 text-orange-700 p-4 rounded">🌡 Heatwave warning – use mulch to conserve moisture</div>
        </div>
      </section>

      <section className="px-4 md:px-20 py-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Insurance Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-6 rounded shadow-sm">
            <h3 className="text-lg font-bold mb-2">Pradhan Mantri Fasal Bima Yojana</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>All farmers with KYC eligible</li>
              <li>Covers: Drought, flood, hail, pests</li>
            </ul>
            <p className="mb-4">Premium: ₹300/year for Kharif</p>
            <div className="flex gap-2">
              <button className="bg-green-600 text-white px-4 py-2 rounded">Apply Now</button>
              <button className="border px-4 py-2 rounded">View Details</button>
            </div>
          </div>

          <div className="border p-6 rounded shadow-sm">
            <h3 className="text-lg font-bold mb-2">Bharat AgriSecure</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Individual landowners eligible</li>
              <li>Covers: Crop loss, fire, theft</li>
            </ul>
            <p className="mb-4">Premium: ₹550/year</p>
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Apply Now</button>
              <button className="border px-4 py-2 rounded">View Details</button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-20 py-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Track Your Claim</h2>
        <div className="bg-gray-100 p-6 rounded max-w-lg">
          <label className="block mb-2 font-medium">Aadhaar Number</label>
          <input type="text" placeholder="Enter 12-digit Aadhaar number" className="w-full p-2 rounded border mb-4" />
          <label className="block mb-2 font-medium">Insurance Plan</label>
          <select className="w-full p-2 rounded border mb-4">
            <option>PMFBY</option>
            <option>Bharat AgriSecure</option>
          </select>
          <button className="bg-green-600 text-white w-full py-2 rounded">Track Claim Status</button>
        </div>
      </section>
       {/* CTA */}
            <section className="bg-green-600 py-12">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-white mb-6">Start Smarter Farming Today</h2>
                <Link 
                  to="/signup" 
                  className="inline-block bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
                >
                  Create Free Account
                </Link>
              </div>
            </section>
      
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

export default Weather;
