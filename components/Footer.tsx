
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-[#0f141a] text-white pt-20 pb-10 border-t border-gray-800 font-sans">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-6 pr-4">
          <div className="flex items-center gap-3">
            <div className="text-primary">
               {/* Custom Logo Icon matching the style */}
               <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12C2 12 5 20 12 20C19 20 22 12 22 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M2 12L12 16L22 12" stroke="currentColor" strokeWidth="0" fill="currentColor" opacity="0.2"/>
               </svg>
            </div>
            <span className="text-2xl font-bold font-display tracking-tight text-white">Hexuno</span>
          </div>
          <p className="text-gray-400 text-base leading-relaxed">
            Empowering manufacturing enterprises with precision data, engineering excellence, and strategic sourcing intelligence.
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/engineering" className="hover:text-primary transition-colors">Engineering</Link></li>
            <li><Link to="/supplier-quality" className="hover:text-primary transition-colors">Quality Assurance</Link></li>
            <li><Link to="/costing" className="hover:text-primary transition-colors">Costing Services</Link></li>
            <li><Link to="/sourcing" className="hover:text-primary transition-colors">Global Sourcing</Link></li>
            <li><Link to="/vave" className="hover:text-primary transition-colors">VAVE</Link></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Careers</Link></li>
            <li><Link to="/other" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Connect</h4>
          <ul className="space-y-4 text-gray-400">
            <li>
              <a href="https://www.linkedin.com/company/hexuno-technologies/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                <i className="fab fa-linkedin text-lg"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:sales@hexunotech.com" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">mail</span> sales@hexunotech.com
              </a>
            </li>
            <li>
              <a href="tel:+917200090243" className="hover:text-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">call</span> +91 72000 90243
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">© 2024 Hexuno Technologies. All rights reserved.</p>
        <div className="flex gap-8 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
