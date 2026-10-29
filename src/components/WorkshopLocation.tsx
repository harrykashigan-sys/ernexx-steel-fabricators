import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, MessageSquare, Star, CheckCircle2, Shield, Wrench } from 'lucide-react';
import { TESTIMONIALS, WORKSHOP_DETAILS } from '../data/steelData';

interface WorkshopLocationProps {
  onOpenQuote: () => void;
}

export const WorkshopLocation: React.FC<WorkshopLocationProps> = ({ onOpenQuote }) => {
  const [selectedReviewIdx, setSelectedReviewIdx] = useState<number>(0);

  return (
    <section id="workshop" className="py-20 md:py-28 bg-[#090D14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
            <span>Nairobi Fabrication Hub</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Google Maps Verified Profile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
            Visit Our Nairobi Workshop or Dispatch Our Field Riggers.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Located along the strategic Mombasa Road / Syokimau industrial corridor with direct multi-axle truck access, heavy crane bays, and immediate deployment to construction sites across Kenya.
          </p>
        </div>

        {/* Location & Facility Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Workshop Coordinates & Action Hub (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#0C111C] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {WORKSHOP_DETAILS.name}
                  </h3>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {WORKSHOP_DETAILS.category} · Nairobi, Kenya
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Open · Closes 7:00 PM
                  </span>
                </div>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span className="font-semibold text-slate-300">Direct Workshop Phone:</span>
                  </div>
                  <a
                    href={`tel:${WORKSHOP_DETAILS.phone.replace(/\s+/g, '')}`}
                    className="block text-base font-mono font-bold text-amber-400 hover:underline pt-1"
                  >
                    {WORKSHOP_DETAILS.phone}
                  </a>
                  <span className="text-[11px] text-slate-500">Mombasa Rd Dispatch Hotline</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span className="font-semibold text-slate-300">Plus Code Location:</span>
                  </div>
                  <div className="text-sm font-mono font-bold text-white pt-1">
                    {WORKSHOP_DETAILS.plusCode}
                  </div>
                  <span className="text-[11px] text-slate-500">Coord: -1.3592, 36.9380</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1 sm:col-span-2">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="font-semibold text-slate-300">Operating Schedule:</span>
                  </div>
                  <div className="text-xs text-slate-200 pt-0.5">
                    {WORKSHOP_DETAILS.hours} (Emergency site rigging on call 24/7)
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href={WORKSHOP_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Google Directions</span>
                </a>

                <a
                  href={WORKSHOP_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>

                <button
                  onClick={onOpenQuote}
                  className="py-3 px-4 bg-amber-500 hover:bg-amber-400 text-black rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
                >
                  <span>Book Site Visit</span>
                </button>
              </div>

              {/* Facility machinery list */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-amber-400" />
                  <span>In-House Heavy Industrial Equipment</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {WORKSHOP_DETAILS.facilityHighlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Embedded Google Maps View Card */}
            <div className="bg-[#0C111C] border border-slate-800 rounded-2xl overflow-hidden relative shadow-xl">
              <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-medium">Nairobi Mombasa Road Corridor GPS Anchor</span>
                </div>
                <a
                  href={WORKSHOP_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 flex items-center gap-1 text-[11px]"
                >
                  <span>Open Full Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map embed frame */}
              <div className="relative aspect-[16/8] w-full bg-slate-950 overflow-hidden">
                <iframe
                  title="Ernex Steel and Fabrications Google Maps Location"
                  src="https://maps.google.com/maps?q=-1.3592272,36.9379845&hl=en&z=15&output=embed"
                  className="w-full h-full border-0 filter contrast-125 brightness-90"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Verified Client Testimonials & Case Notes (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0F1523] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <div className="text-xs font-mono text-amber-400 tracking-wider uppercase">
                    Client Endorsements
                  </div>
                  <h4 className="text-base font-bold text-white font-display mt-0.5">
                    Verified Nairobi Engineering Reviews
                  </h4>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Active Testimonial */}
              <div className="space-y-4">
                <blockquote className="text-sm text-slate-200 leading-relaxed italic border-l-2 border-amber-500 pl-4">
                  "{TESTIMONIALS[selectedReviewIdx].quote}"
                </blockquote>

                <div className="pt-2">
                  <div className="font-semibold text-white text-sm">
                    {TESTIMONIALS[selectedReviewIdx].author}
                  </div>
                  <div className="text-xs text-amber-400">
                    {TESTIMONIALS[selectedReviewIdx].role} · {TESTIMONIALS[selectedReviewIdx].company}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    Location: {TESTIMONIALS[selectedReviewIdx].location} · Metric: {TESTIMONIALS[selectedReviewIdx].metric}
                  </div>
                </div>

                {/* Testimonial Nav */}
                <div className="flex gap-2 pt-2">
                  {TESTIMONIALS.map((t, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedReviewIdx(idx)}
                      className={`h-1.5 flex-1 rounded-full transition-all cursor-pointer ${
                        selectedReviewIdx === idx ? 'bg-amber-500' : 'bg-slate-800'
                      }`}
                      aria-label={`Show review ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Standards list */}
              <div className="pt-5 border-t border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Quality Compliance Accreditations
                </div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  {WORKSHOP_DETAILS.standards.map((std, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{std}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
