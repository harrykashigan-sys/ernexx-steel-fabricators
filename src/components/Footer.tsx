import React from 'react';
import { Link } from 'react-router-dom';
import { WORKSHOP_DETAILS } from '../data/steelData';
import { MapPin, Phone, Mail, ArrowUpRight, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="bg-[#05080D] border-t border-slate-800/80 text-slate-400 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <Link
              to="/"
              className="text-lg font-bold text-white tracking-wider flex items-center gap-2 font-display"
            >
              <span className="w-2 h-5 bg-amber-500 rounded-xs"></span>
              <span>ERNEX STEEL</span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Premier metal construction, structural steel warehouse engineering, architectural glazing canopies, laser-cut gates, aluminum facade systems, and bespoke staircases fabricated in Nairobi, Kenya.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              Plus Code: {WORKSHOP_DETAILS.plusCode} · Mon - Sat 7:00 AM - 7:00 PM
            </div>
            <div className="pt-1 flex gap-3">
              <a
                href={WORKSHOP_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Dispatch</span>
              </a>
            </div>
          </div>

          {/* Quick Pages (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Explore Pages
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="hover:text-amber-400 transition-colors">
                  Capabilities & Systems
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-amber-400 transition-colors">
                  Ground Projects Gallery
                </Link>
              </li>
              <li>
                <Link to="/estimator" className="hover:text-amber-400 transition-colors">
                  Material Tonnage Configurator
                </Link>
              </li>
              <li>
                <Link to="/specs" className="hover:text-amber-400 transition-colors">
                  Steel & Aluminum Specs
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical Hub (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Technical & Support
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/workshop" className="hover:text-amber-400 transition-colors">
                  Nairobi Workshop & GPS
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-amber-400 transition-colors">
                  Engineering Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Contact & Directions
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Request Technical BOQ
                </button>
              </li>
            </ul>
          </div>

          {/* Workshop & Contact (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Nairobi Workshop Dispatch
            </div>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${WORKSHOP_DETAILS.phone.replace(/\s+/g, '')}`} className="hover:text-white font-mono">
                  {WORKSHOP_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{WORKSHOP_DETAILS.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={WORKSHOP_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-xs font-medium"
              >
                <span>View Google Business Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Quiet copyright bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {WORKSHOP_DETAILS.name}. All rights reserved. Nairobi, Kenya.
          </div>
          <div className="flex items-center gap-4">
            <span>Fabricated to BS 5950 & Eurocode 3 standards</span>
            <span>·</span>
            <span>KEBS KS 02-104 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
