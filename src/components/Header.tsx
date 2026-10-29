import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { WORKSHOP_DETAILS } from '../data/steelData';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/capabilities', label: 'Capabilities' },
    { to: '/projects', label: 'Projects' },
    { to: '/estimator', label: 'Tonnage Estimator' },
    { to: '/specs', label: 'Steel Specs' },
    { to: '/workshop', label: 'Workshop & Maps' },
    { to: '/blog', label: 'Blog' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B10]/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-[#080B10]/85 backdrop-blur-sm border-b border-white/5 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 lg:gap-8">
          {/* Zone 1: Single text element wordmark */}
          <Link
            to="/"
            className="text-lg md:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2 font-display group"
          >
            <span className="w-2.5 h-6 bg-amber-500 rounded-xs group-hover:scale-y-110 transition-transform"></span>
            <span className="tracking-wider">ERNEXX STEEL</span>
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs xl:text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 ${
                    isActive ? 'text-amber-400 font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${WORKSHOP_DETAILS.phone.replace(/\s+/g, '')}`}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-slate-900 border border-slate-800 text-amber-400 hover:text-amber-300 rounded-md font-mono text-xs transition-colors"
              title="Call Workshop Hotline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0780 610648</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-md transition-all shadow-md shadow-amber-500/20 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-800 pb-3 space-y-1 text-sm bg-[#0C111C] p-4 rounded-xl shadow-2xl">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded transition-colors ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-400 font-semibold'
                      : 'text-slate-300 hover:text-amber-400 hover:bg-slate-900/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <a
                href={`tel:${WORKSHOP_DETAILS.phone.replace(/\s+/g, '')}`}
                className="block text-center w-full py-2 bg-slate-800 text-amber-400 font-mono text-xs rounded border border-slate-700"
              >
                Call: 0780 610648
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
