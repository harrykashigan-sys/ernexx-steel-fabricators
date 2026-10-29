import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, ShieldCheck, Hammer, Layers, Maximize2, MapPin } from 'lucide-react';
import { HERO_HOTSPOTS, IMAGES, WORKSHOP_DETAILS } from '../data/steelData';
import { Hotspot } from '../types';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenEstimator }) => {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(HERO_HOTSPOTS[0]);
  const [nairobiStatus, setNairobiStatus] = useState<{ isOpen: boolean; text: string }>({
    isOpen: true,
    text: 'Open · Closes 7:00 PM'
  });

  useEffect(() => {
    try {
      const now = new Date();
      // Get current hour and day in Nairobi (UTC+3)
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Nairobi',
        hour: 'numeric',
        hour12: false,
        weekday: 'short'
      });
      const parts = formatter.formatToParts(now);
      const hourPart = parts.find(p => p.type === 'hour');
      const weekdayPart = parts.find(p => p.type === 'weekday');
      const hour = hourPart ? parseInt(hourPart.value, 10) : 14;
      const weekday = weekdayPart ? weekdayPart.value : 'Thu';

      if (weekday === 'Sun') {
        setNairobiStatus({ isOpen: false, text: 'Closed · Opens Mon 7:00 AM' });
      } else if (hour >= 7 && hour < 19) {
        setNairobiStatus({ isOpen: true, text: 'Open Now · Closes 7:00 PM' });
      } else {
        setNairobiStatus({ isOpen: false, text: 'Closed · Opens 7:00 AM' });
      }
    } catch {
      setNairobiStatus({ isOpen: true, text: 'Open Mon - Sat · Closes 7:00 PM' });
    }
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Subtle forge amber gradient glow backdrop */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Subtitle & Nairobi Trust Banner */}
        <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider text-slate-400 font-medium mb-6 uppercase">
          <span className="text-amber-400 font-semibold">Ernex Steel and Fabrications</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Nairobi, Kenya</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-300 font-mono">BS 5950 & Eurocode 3 Standards</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            {nairobiStatus.text}
          </span>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.12] text-balance font-display">
              Heavy Structural Steel & Architectural Metalwork Built for Kenya’s Future.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-xl">
              From high-tonnage industrial warehouse frameworks in Syokimau to precision laser-cut entrance portals and helical staircases in Karen, Ernex delivers verified metallurgy, robotic accuracy, and on-schedule crane erection.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenEstimator}
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm rounded-lg transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Launch Cost Estimator</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-medium text-sm rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Submit Technical RFQ</span>
              </button>

              <a
                href={`tel:${WORKSHOP_DETAILS.phone.replace(/\s+/g, '')}`}
                className="px-4 py-3.5 bg-slate-900/60 hover:bg-slate-800/80 text-amber-400 border border-amber-500/30 font-mono text-xs rounded-lg transition-all flex items-center justify-center gap-2"
                title="Call direct dispatch"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>0780 610648</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>KEBS KS 02-104 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Structural S275 & S355 Stocks</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>JWRQ+85 Nairobi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Marquee Cinematic Interactive Workshop Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl group">
              {/* Image asset with fallback resilience */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={IMAGES.hero}
                  alt="Ernex Steel and Fabrications heavy industrial workshop in Nairobi with welders assembling steel beams"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to secondary asset if network fails
                    const target = e.target as HTMLImageElement;
                    if (target.src !== IMAGES.structural) {
                      target.src = IMAGES.structural;
                    }
                  }}
                />

                {/* Dark gradient overlay scrim for high contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-black/30 to-transparent pointer-events-none" />

                {/* Hotspot interactive pins */}
                {HERO_HOTSPOTS.map((hs) => {
                  const isSelected = activeHotspot?.id === hs.id;
                  return (
                    <div
                      key={hs.id}
                      style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                      <button
                        onClick={() => setActiveHotspot(hs)}
                        className={`relative flex items-center justify-center cursor-pointer transition-transform ${
                          isSelected ? 'scale-125' : 'hover:scale-110'
                        }`}
                        title={hs.title}
                        aria-label={`Inspect ${hs.title}`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'bg-amber-500 border-white text-black font-bold shadow-lg shadow-amber-500/50'
                              : 'bg-black/80 border-amber-400/80 text-amber-300'
                          }`}
                        >
                          <span className="w-2 h-2 rounded-full bg-current"></span>
                        </span>
                      </button>
                    </div>
                  );
                })}

                {/* Top overlay badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#0B0F17]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/80 text-xs text-slate-200">
                  <Hammer className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-semibold text-white">Interactive Workshop Camera</span>
                  <span className="text-slate-500">· Tap pins to inspect</span>
                </div>
              </div>

              {/* Hotspot details bar beneath photo */}
              {activeHotspot && (
                <div className="p-4 sm:p-5 bg-[#0C111A] border-t border-slate-800 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                        <span>INSPECTION SPEC:</span>
                        <span className="text-slate-300 font-semibold">{activeHotspot.spec}</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-semibold text-white">
                        {activeHotspot.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">
                        {activeHotspot.detail}
                      </p>
                    </div>

                    <div className="shrink-0 flex gap-1">
                      {HERO_HOTSPOTS.map((hs, index) => (
                        <button
                          key={hs.id}
                          onClick={() => setActiveHotspot(hs)}
                          className={`w-7 h-7 rounded text-xs font-mono transition-colors ${
                            activeHotspot.id === hs.id
                              ? 'bg-amber-500 text-black font-bold'
                              : 'bg-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4-Column Proof Metric Strip (Full-width below hero split) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums tracking-tight text-amber-400">
              1,250+
            </div>
            <div className="text-xs font-medium text-slate-300 mt-1 uppercase tracking-wider">
              Metric Tons Erected
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Warehouses, frames & bridges
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums tracking-tight">
              15+ Years
            </div>
            <div className="text-xs font-medium text-slate-300 mt-1 uppercase tracking-wider">
              Nairobi Master Artisans
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Certified AWS & KEBS welders
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums tracking-tight text-emerald-400">
              ±0.5 mm
            </div>
            <div className="text-xs font-medium text-slate-300 mt-1 uppercase tracking-wider">
              Laser Cut Tolerances
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              CNC fiber laser cutting bed
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums tracking-tight">
              0780 610648
            </div>
            <div className="text-xs font-medium text-slate-300 mt-1 uppercase tracking-wider">
              Direct Phone Dispatch
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Syokimau / Mombasa Rd base
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
