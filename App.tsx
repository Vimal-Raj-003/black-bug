
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Sourcing from './pages/Sourcing';
import Engineering from './pages/Engineering';
import Vave from './pages/Vave';
import About from './pages/About';
import Costing from './pages/Costing';
import OtherOfferings from './pages/OtherOfferings';
import CaseStudies from './pages/CaseStudies';
import AiLab from './pages/AiLab';
import SupplierQuality from './pages/SupplierQuality';
import { ScrollToTop } from './components/Shared';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sourcing" element={<Sourcing />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/supplier-quality" element={<SupplierQuality />} />
            <Route path="/vave" element={<Vave />} />
            <Route path="/about" element={<About />} />
            <Route path="/costing" element={<Costing />} />
            <Route path="/other" element={<OtherOfferings />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/ai-lab" element={<AiLab />} />
          </Routes>
        </main>
        <ChatBot />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
