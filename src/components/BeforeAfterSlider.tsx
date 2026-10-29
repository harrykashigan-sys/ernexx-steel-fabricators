import React, { useState, useRef, useCallback } from 'react';
import { Award, ArrowLeftRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { COMPARISON_PAIRS } from '../data/steelData';

export const BeforeAfterSlider: React.FC = () => {
  const [activePairIndex, setActivePairIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePair = COMPARISON_PAIRS[activePairIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(rect.width, x));
    const percentage = (clamped / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-20 bg-[#080B10] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
              <span>Ground Site Progression</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Interactive Inspection Slider</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
              From Raw Steel Erection to Handover.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Drag the interactive divider to inspect actual on-site progression across our residential glass canopies, heavy logistics warehouses, and louvered pergolas in Nairobi.
            </p>
          </div>

          {/* Selector for comparison sets */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start">
            {COMPARISON_PAIRS.map((pair, idx) => (
              <button
                key={pair.id}
                onClick={() => {
                  setActivePairIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activePairIndex === idx
                    ? 'bg-amber-500 text-black font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Inspection 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Image Slider (7 cols) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden select-none border border-slate-700 bg-slate-950 shadow-2xl cursor-ew-resize"
            >
              {/* After Image (Right/Full underlying) */}
              <img
                src={activePair.afterImage}
                alt={activePair.afterLabel}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Before Image (Left/Clipped) */}
              <div
                style={{ width: `${sliderPosition}%` }}
                className="absolute inset-0 overflow-hidden border-r-2 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.5)] z-10"
              >
                <img
                  src={activePair.beforeImage}
                  alt={activePair.beforeLabel}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                />

                {/* Left Label */}
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-slate-300 border border-slate-700">
                  {activePair.beforeLabel.toUpperCase()}
                </div>
              </div>

              {/* Right Label */}
              <div className="absolute top-4 right-4 bg-black/85 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-amber-400 border border-amber-500/50">
                {activePair.afterLabel.toUpperCase()}
              </div>

              {/* Slider Handle Button */}
              <div
                style={{ left: `${sliderPosition}%` }}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-lg shadow-black/80 pointer-events-none transition-transform hover:scale-110"
              >
                <ArrowLeftRight className="w-5 h-5" />
              </div>

              {/* Bottom hint */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-black/75 px-3 py-1 rounded-full text-[11px] font-mono text-slate-300 pointer-events-none">
                ◀ Drag slider to inspect transition ▶
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Criteria Breakdown */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#0C111C] border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-5 shadow-xl">
              <div>
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Ground Case Study
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-display mt-0.5">
                  {activePair.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {activePair.subtitle}
                </p>
              </div>

              {/* Phase 1 Details */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-1.5">
                <div className="font-semibold text-slate-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                  <span>{activePair.beforeLabel}</span>
                </div>
                <p className="text-slate-400 leading-relaxed pl-4">
                  {activePair.beforeNotes}
                </p>
              </div>

              {/* Phase 2 Details */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1.5">
                <div className="font-semibold text-amber-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>{activePair.afterLabel}</span>
                </div>
                <p className="text-slate-300 leading-relaxed pl-4">
                  {activePair.afterNotes}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Verified KEBS & BS 5950 Compliance</span>
                <span className="font-mono text-amber-400">10-Year Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
