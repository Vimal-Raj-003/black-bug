
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo, PrimaryButton, NavLink } from './Shared';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme }) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-surface-light/90 dark:bg-surface-dark/90 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Logo />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors py-2 focus:outline-none">
                Services
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
              <div className="absolute top-full left-0 w-56 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <Link to="/engineering" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-primary dark:hover:text-primary transition-colors">Engineering</Link>
                <Link to="/supplier-quality" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-primary dark:hover:text-primary transition-colors">Supplier Quality</Link>
                <Link to="/sourcing" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-primary dark:hover:text-primary transition-colors">Sourcing</Link>
                <Link to="/costing" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-primary dark:hover:text-primary transition-colors">Costing</Link>
                <Link to="/vave" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-primary dark:hover:text-primary transition-colors">VAVE</Link>
                <Link to="/other" className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-primary dark:hover:text-primary transition-colors">Specialized Offerings</Link>
              </div>
            </div>

            <NavLink to="/case-studies">Case Studies</NavLink>

            <div className="flex items-center gap-4 ml-4">
                <PrimaryButton onClick={() => navigate('/contact')}>Contact Us</PrimaryButton>
                
                <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Toggle Dark Mode"
                >
                    {darkMode ? (
                        <span className="material-symbols-outlined text-xl">light_mode</span>
                    ) : (
                        <span className="material-symbols-outlined text-xl">dark_mode</span>
                    )}
                </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
             <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400"
            >
                {darkMode ? (
                    <span className="material-symbols-outlined text-xl">light_mode</span>
                ) : (
                    <span className="material-symbols-outlined text-xl">dark_mode</span>
                )}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-700 p-4 flex flex-col gap-2 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link to="/" className="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          
          <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Services</div>
          <Link to="/engineering" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 ml-2" onClick={() => setMobileMenuOpen(false)}>Engineering</Link>
          <Link to="/supplier-quality" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 ml-2" onClick={() => setMobileMenuOpen(false)}>Supplier Quality</Link>
          <Link to="/sourcing" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 ml-2" onClick={() => setMobileMenuOpen(false)}>Sourcing</Link>
          <Link to="/costing" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 ml-2" onClick={() => setMobileMenuOpen(false)}>Costing</Link>
          <Link to="/vave" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 ml-2" onClick={() => setMobileMenuOpen(false)}>VAVE</Link>
          
          <Link to="/case-studies" className="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
          
          <div className="pt-2">
            <PrimaryButton onClick={() => { navigate('/contact'); setMobileMenuOpen(false); }} className="w-full">Contact Us</PrimaryButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
