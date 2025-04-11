import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/home";
import CropAdvisor from "./Pages/cropadvisor";
import SoilTesting from "./Pages/SoilTesting";
import SellCrop from "./Pages/SellCrop";
import Equipment from "./Pages/Equipment";
import Weather from "./Pages/Weather";


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crop-advisor" element={<CropAdvisor/>} />
        <Route path="/soil-testing" element={<SoilTesting />} />
        <Route path="/sell-crop" element={<SellCrop/>} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/weather" element={<Weather />} />

        
        
      </Routes>
    </div>
  );
}

export default App;
