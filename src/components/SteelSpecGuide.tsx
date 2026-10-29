import React, { useState } from 'react';
import { STEEL_PROFILES } from '../data/steelData';
import { SteelProfile } from '../types';
import { Search, Calculator, Check, Shield, FileText } from 'lucide-react';

export const SteelSpecGuide: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [activeProfile, setActiveProfile] = useState<SteelProfile>(STEEL_PROFILES[0]);
  const [calcLengthMeters, setCalcLengthMeters] = useState<number>(6.0);
  const [calcQuantity, setCalcQuantity] = useState<number>(10);

  const types = [
    { id: 'all', label: 'All Profiles' },
    { id: 'UB', label: 'Universal Beams (UB)' },
    { id: 'RHS', label: 'Box Sections (RHS)' },
    { id: 'SHS', label: 'Square Sections (SHS)' },
    { id: 'CHS', label: 'Pipes & Tubes (CHS)' },
    { id: 'Angle', label: 'Angles (L-Profile)' },
    { id: 'Plate', label: 'Chequered Plates' }
  ];

  const filteredProfiles = selectedType === 'all'
    ? STEEL_PROFILES
    : STEEL_PROFILES.filter(p => p.type === selectedType);

  // Quick weight calculation
  const totalLengthMeters = calcLengthMeters * calcQuantity;
  const calculatedWeightKg = Math.round(totalLengthMeters * activeProfile.weightPerMeterKg);
  const calculatedWeightTons = Number((calculatedWeightKg / 1000).toFixed(2));

  return (
    <section id="standards" className="py-20 md:py-28 bg-[#070A0F] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
            <span>Metallurgy & Section Catalog</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>KEBS & BS 5950 Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
            Structural Steel Profiles & Section Engineering Tables.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Ernexx maintains hot-rolled universal beams, structural hollow sections, and heavy floor plates in mild steel S275 and high-tensile S355. Explore standard section properties and calculate total batch weight.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg mb-8 max-w-fit">
          {types.map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedType(t.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                selectedType === t.id
                  ? 'bg-amber-500 text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Main Grid: Profiles Table & Interactive Profile Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Table (7 cols) */}
          <div className="lg:col-span-7 bg-[#0D121D] border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Select Profile to Inspect
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                {filteredProfiles.length} Profiles Available
              </span>
            </div>

            <div className="divide-y divide-slate-800/80 max-h-[460px] overflow-y-auto">
              {filteredProfiles.map((profile) => {
                const isSelected = activeProfile.id === profile.id;
                return (
                  <div
                    key={profile.id}
                    onClick={() => setActiveProfile(profile)}
                    className={`p-4 transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-amber-500/10 border-l-2 border-amber-500'
                        : 'hover:bg-slate-900/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-white">
                          {profile.code}
                        </span>
                        <span className="text-[11px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                          {profile.type}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {profile.dimensions}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="font-mono font-bold text-amber-400 text-xs sm:text-sm">
                        {profile.weightPerMeterKg} kg/m
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {profile.standard}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Profile Detail & Batch Mass Calculator (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0F1523] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                Active Section Specification
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                {activeProfile.name}
              </h3>
              <div className="text-sm font-mono text-slate-300 mt-0.5">
                {activeProfile.code}
              </div>

              {/* Specs Table */}
              <div className="mt-5 space-y-2.5 text-xs border-y border-slate-800 py-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Dimensions:</span>
                  <span className="text-slate-200 font-semibold">{activeProfile.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Linear Mass:</span>
                  <span className="font-mono font-bold text-amber-400">{activeProfile.weightPerMeterKg} kg / linear meter</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Moment of Inertia:</span>
                  <span className="font-mono text-slate-200">{activeProfile.momentOfInertia}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Standard Norm:</span>
                  <span className="text-slate-200">{activeProfile.standard}</span>
                </div>
              </div>

              {/* Recommended Applications */}
              <div className="mt-4">
                <div className="text-xs font-semibold text-slate-300 mb-1">Structural Role:</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {activeProfile.commonUses}
                </p>
              </div>

              {/* Quick Batch Weight Calculator */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-slate-200 mb-3">
                  <Calculator className="w-4 h-4 text-amber-400" />
                  <span>Batch Weight Calculator</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Piece Length (m):</label>
                    <input
                      type="number"
                      step="0.5"
                      min="0.5"
                      max="24"
                      value={calcLengthMeters}
                      onChange={(e) => setCalcLengthMeters(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 font-mono text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Quantity (pieces):</label>
                    <input
                      type="number"
                      min="1"
                      max="1000"
                      value={calcQuantity}
                      onChange={(e) => setCalcQuantity(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 font-mono text-white text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs flex items-center justify-between">
                  <div>
                    <span className="text-slate-500 block">Total Mass:</span>
                    <span className="font-mono text-base font-bold text-amber-400">
                      {calculatedWeightKg.toLocaleString()} kg
                    </span>
                  </div>
                  <div className="text-right font-mono text-xs text-slate-300">
                    <span>{calculatedWeightTons} Metric Tons</span>
                    <span className="block text-[11px] text-slate-500">({totalLengthMeters}m Total)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
