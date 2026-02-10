
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Logo: React.FC = () => (
  <div className="flex items-center gap-3 group select-none py-1">
    <style>{`
      @keyframes pop-in-rotate {
        0% { transform: scale(0) rotate(-45deg); opacity: 0; filter: blur(10px); }
        70% { transform: scale(1.2) rotate(5deg); opacity: 1; filter: blur(0px); }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
      }
      @keyframes slide-in-right {
        0% { transform: translateX(-20px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      .animate-logo-pop {
        animation: pop-in-rotate 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
      }
      .animate-text-slide {
        opacity: 0;
        animation: slide-in-right 0.6s ease-out 0.4s forwards;
      }
    `}</style>
    <div className="relative">
        <div className="absolute inset-0 bg-blue-400/30 dark:bg-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
        <img 
        src="https://res.cloudinary.com/dfeway2lo/image/upload/v1770751802/Hex-logo_rdiodp.gif" 
        alt="Hexuno Technologies" 
        className="animate-logo-pop h-10 md:h-12 w-auto object-contain mix-blend-multiply dark:mix-blend-normal dark:bg-white dark:p-1 dark:rounded-lg relative z-10" 
        />
    </div>
    <span className="animate-text-slide font-display text-xl md:text-2xl text-slate-900 dark:text-white tracking-tight">
      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] dark:from-[#38BDF8] dark:to-[#0EA5E9]">Hexuno</span> Technologies
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
