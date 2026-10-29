import React from 'react';
import { SteelSpecGuide } from '../components/SteelSpecGuide';
import { WORKSHOP_DETAILS } from '../data/steelData';
import { ShieldCheck, Award, Layers, CheckCircle2 } from 'lucide-react';

export const SpecsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
            <span>Metallurgy Standards & Profiles</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>KEBS & BS 5950 Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Steel & Aluminum Technical Specifications.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Detailed engineering section dimensions, linear mass ratings (kg/m), moments of inertia, and standard metallurgy codes for structural steel and architectural aluminum stocked and fabricated by Ernex in Nairobi.
          </p>
        </div>

        {/* Quality assurance pillars strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>BS 5950 & Eurocode 3</span>
            </div>
            <p className="text-slate-400">
              All structural frames are engineered to meet British Standard & Eurocode structural design parameters.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
              <Award className="w-4 h-4" />
              <span>Mill Test Certificates</span>
            </div>
            <p className="text-slate-400">
              Every steel heat batch is backed by certified chemical and tensile yield testing documentation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
              <Layers className="w-4 h-4" />
              <span>AWS D1.1 Certified Welds</span>
            </div>
            <p className="text-slate-400">
              Weld procedures and operators are certified for structural full-penetration joint integrity.
            </p>
          </div>
        </div>
      </div>

      {/* Main Steel Spec Guide Component */}
      <SteelSpecGuide />
    </div>
  );
};
