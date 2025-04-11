import React from 'react';
import { 
  Leaf, 
  Beaker, // Replacing Flask
  ShoppingBag, 
  Tractor,
  Store, 
  Cloud, 
  Droplet,
  Wind
} from "lucide-react";
import { Link } from 'react-router-dom';

const Body = () => {
  const services = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Crop Advisor",
      description: "Get the best crops for your land",
      buttonText: "Try Now",
      buttonLink: "/crop-advisor"
    },
    {
      icon: <Beaker className="h-8 w-8 text-green-600" />,
      title: "Soil Testing",
      description: "Book free door-to-door testing",
      buttonText: "Book Test",
      buttonLink: "/soil-testing"
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-green-600" />,
      title: "Marketplace",
      description: "Buy seeds, fertilizers & tools",
      buttonText: "Shop Now",
      buttonLink: "/marketplace"
    },
    {
      icon: <Tractor className="h-8 w-8 text-green-600" />,
      title: "Equipment Rental",
      description: "Rent tractors & harvesters",
      buttonText: "View Equipment",
      buttonLink: "/equipment"
    },
    {
      icon: <Store className="h-8 w-8 text-green-600" />,
      title: "Sell Your Crop",
      description: "Connect with trusted buyers",
      buttonText: "List Crop",
      buttonLink: "/sell-crop"
    },
    {
      icon: <Cloud className="h-8 w-8 text-green-600" />,
      title: "Weather & Insurance",
      description: "Stay updated and insured",
      buttonText: "View Forecast",
      buttonLink: "/weather"
    }
  ];

  const upcomingEvents = [
    {
      title: "Soil Health Workshop",
      date: "April 15",
      location: "Nagpur",
      type: "workshop"
    },
    {
      title: "Govt Subsidy Camp",
      date: "April 18",
      location: "Patna",
      type: "government"
    },
    {
      title: "Organic Farming Drive",
      date: "April 22",
      location: "Jaipur",
      type: "organic"
    }
  ];

  const governmentSchemes = [
    {
      title: "PM Kisan Nidhi Yojana",
      description: "Direct benefit transfer scheme for farmers",
      link: "/schemes/pm-kisan"
    },
    {
      title: "Soil Card Scheme",
      description: "Get detailed soil health report",
      link: "/schemes/soil-card"
    }
  ];

  const testimonials = [
    {
      quote: "I sold my wheat online easily and got 12% more income!",
      name: "Rajesh Kumar",
      location: "Madhya Pradesh",
      image: "src/assets/farmer1.jpg"
      
    },
    {
      quote: "The soil testing service helped me choose the right crops.",
      name: "Amit Singh",
      location: "Punjab",
      image: "src/assets/farmer1.jpg"
    },
    {
      quote: "Equipment rental saved me huge investment costs!",
      name: "Priya Patel",
      location: "Gujarat",
      image: "src/assets/farmer1.jpg"
    }
  ];

  const weatherData = {
    location: "Bhopal",
    condition: "Sunny",
    temperature: "33°C",
    humidity: "62%",
    wind: "12km/h"
  };

  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">What Can You Do With AgriSahayak?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.buttonLink}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md transition-colors w-full text-center"
                >
                  {service.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weather Widget */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="bg-green-50 rounded-lg p-6">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h3 className="font-medium text-lg">Today in {weatherData.location}</h3>
              <p className="text-gray-600">{weatherData.condition}, {weatherData.temperature}</p>
            </div>
            <div className="flex space-x-8">
              <div className="flex items-center">
                <Droplet className="h-5 w-5 text-green-600 mr-2" />
                <div>
                  <p className="font-medium">Humidity</p>
                  <p>{weatherData.humidity}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Wind className="h-5 w-5 text-green-600 mr-2" />
                <div>
                  <p className="font-medium">Wind</p>
                  <p>{weatherData.wind}</p>
                </div>
              </div>
            </div>
            <Link to="/weather" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors">
              View Weekly Forecast
            </Link>
          </div>
        </div>
      </section>

      {/* Events and Schemes Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {event.date} • {event.location}
                    </p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    event.type === 'workshop' ? 'bg-green-500' : 
                    event.type === 'government' ? 'bg-gray-400' : 'bg-green-200'
                  }`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Government Schemes */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Government Schemes</h2>
            <div className="space-y-4">
              {governmentSchemes.map((scheme, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="font-medium">{scheme.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{scheme.description}</p>
                  <Link to={scheme.link} className="text-green-600 hover:text-green-700 text-sm inline-flex items-center">
                    Learn More &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Hear From Our Farmers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-gray-200 overflow-hidden mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/api/placeholder/64/64";
                    }}
                  />
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Accessibility Tools */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="flex justify-center space-x-6 text-gray-600">
          <button className="flex items-center">
            <span className="mr-2">🔊</span>
            Text-to-Speech
          </button>
          <button className="flex items-center">
            <span className="mr-2">🎤</span>
            Speech Input
          </button>
          <button className="flex items-center">
            <span className="mr-2">🌙</span>
            Dark Mode
          </button>
          <button className="flex items-center">
            <span className="mr-2">🌐</span>
            Multi-Language
          </button>
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
    </>
  );
};

export default Body;