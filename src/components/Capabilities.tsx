import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers, Ruler, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../data/steelData';

interface CapabilitiesProps {
  onSelectCapability: (category: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectCapability }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'structural' | 'architectural' | 'specialized'>('all');

  return (
    <section id="capabilities" className="py-20 md:py-28 bg-[#090D14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
              <span>Fabrication Disciplines</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Turnkey Nairobi Operations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
              Heavy Structural Engineering & Bespoke Architectural Metalwork.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Every assembly is fabricated under rigid quality controls in our Nairobi workshop, backed by mill test certificates, ultrasonic weld inspections, and factory-baked finishing.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-amber-500 text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Disciplines
            </button>
            <button
              onClick={() => setActiveTab('structural')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                activeTab === 'structural'
                  ? 'bg-amber-500 text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Structural Framing
            </button>
            <button
              onClick={() => setActiveTab('architectural')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                activeTab === 'architectural'
                  ? 'bg-amber-500 text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Architectural & Gates
            </button>
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Heavy Structural Steel & Warehouses (Large 8-col card) */}
          {(activeTab === 'all' || activeTab === 'structural') && (
            <div className="md:col-span-8 bg-[#0D131F] border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col group">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                <img
                  src={IMAGES.structural}
                  alt="Ernexx structural steel warehouse truss construction in Nairobi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = IMAGES.hero;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-[#0D131F]/30 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-amber-400 border border-slate-700">
                  DISCIPLINE 01
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                    Heavy Structural Steel & Clear-Span Warehouse Erection
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Turnkey fabrication and on-site crane erection of wide-span industrial portal frames, manufacturing factory halls, logistics sheds, mezzanine decks, and aircraft hangars throughout Kenya.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5 pt-5 border-t border-slate-800 text-xs">
                    <div>
                      <span className="text-slate-500 block">Span Capability:</span>
                      <span className="font-semibold text-slate-200">Up to 42m Clear Span</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Engineering Code:</span>
                      <span className="font-semibold text-slate-200">BS 5950 / Eurocode 3</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Bolt Specification:</span>
                      <span className="font-semibold text-slate-200">Grade 8.8 & 10.9 HSFG</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Includes mobile crane lifting & site safety coordination</span>
                  <button
                    onClick={() => onSelectCapability('structural')}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect Projects</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Card 2: Custom Laser-Cut Architectural Gates (4-col card) */}
          {(activeTab === 'all' || activeTab === 'architectural') && (
            <div className="md:col-span-4 bg-[#0D131F] border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col group">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={IMAGES.architecturalGate}
                  alt="Modern architectural laser cut entrance gate in Karen Nairobi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = IMAGES.hero;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-amber-400 border border-slate-700">
                  DISCIPLINE 02
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    Architectural Laser-Cut Gates & Entrance Portals
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Statement entrance portals for luxury residences, gated estates, and commercial headquarters. Laser-cut patterns, heavy-gauge RHS frames, and motorized automation systems.
                  </p>

                  <div className="mt-4 space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Bespoke CNC geometric sheet cutting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>Baked electrostatic powder coating</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onSelectCapability('architectural')}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Gate Portfolio</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Card 3: Helical Spiral Staircases & Railings (6-col card) */}
          {(activeTab === 'all' || activeTab === 'architectural') && (
            <div className="md:col-span-6 bg-[#0D131F] border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <img
                  src={IMAGES.staircase}
                  alt="Ernexx helical spiral metal staircase fabrication"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = IMAGES.hero;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-amber-400 border border-slate-700">
                  DISCIPLINE 03
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white font-display mb-2">
                    Helical Spiral Staircases & High-Spec Balustrades
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Architectural curved metal staircases fabricated with monolithic central stringers, floating cantilever timber or stone-clad treads, and flush stainless steel balustrade fittings.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Concealed structural weld joints</span>
                  <span className="font-mono text-amber-400">Zero Dynamic Deflection</span>
                </div>
              </div>
            </div>
          )}

          {/* Card 4: Heavy Water/Fuel Tank Towers & Specialized Silos (6-col card) */}
          {(activeTab === 'all' || activeTab === 'structural') && (
            <div className="md:col-span-6 bg-[#0D131F] border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-black/80 px-3 py-1 rounded text-xs font-mono text-amber-400 border border-slate-800">
                    DISCIPLINE 04
                  </div>
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-2">
                  Heavy Industrial Tank Towers & Elevated Silo Platforms
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Engineered elevated structural steel towers supporting 5,000L to 100,000L reservoirs for agricultural estates, manufacturing factories, housing developments, and institutional facilities.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-slate-800 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-500 block">Wind Load Analysis:</span>
                    <span className="font-semibold text-slate-200">140 km/h Gust Rated</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-500 block">Corrosion Protection:</span>
                    <span className="font-semibold text-slate-200">Hot-Dip Galvanized</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Complete with caged access ladders & platform railings</span>
                <button
                  onClick={() => onSelectCapability('tanks')}
                  className="font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Specs</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
