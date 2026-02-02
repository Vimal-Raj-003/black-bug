
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Logo: React.FC = () => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-700 rounded-lg flex items-center justify-center text-white font-display font-bold text-xl">
      H
    </div>
    <span className="font-display font-bold text-2xl text-gray-900 dark:text-white tracking-wide hidden sm:block">
      Hexuno
    </span>
  </div>
);

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick, className = '', type = "button" }) => (
  <button 
    type={type}
    onClick={onClick}
    className={`bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/50 flex items-center justify-center ${className}`}
  >
    {children}
  </button>
);

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary font-bold' : 'text-gray-600 dark:text-gray-300'}`}
    >
      {children}
    </Link>
  );
};

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
