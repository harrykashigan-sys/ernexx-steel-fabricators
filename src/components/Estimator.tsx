import React, { useState, useMemo } from 'react';
import { Download, Check, MessageSquare, Shield, FileText, ArrowRight, Layers, Ruler, Clock, Scale } from 'lucide-react';
import { WORKSHOP_DETAILS } from '../data/steelData';

interface EstimatorProps {
  onQuoteRequestedWithData?: (summary: string) => void;
}

type ProjectType = 'warehouse' | 'canopy' | 'balustrade' | 'gate' | 'staircase' | 'tank' | 'aluminum';

interface TypeConfig {
  id: ProjectType;
  name: string;
  unit: string;
  min: number;
  max: number;
  defaultVal: number;
  label: string;
  step: number;
  weightFactor: number; // kg per unit
  recommendedProfile: string;
  leadTimeBaseDays: number;
  deflectionLimit: string;
}

const TYPE_CONFIGS: Record<ProjectType, TypeConfig> = {
  warehouse: {
    id: 'warehouse',
    name: 'Clear-Span Industrial Warehouse Portal Frame',
    unit: 'm² Floor Area',
    min: 150,
    max: 5000,
    defaultVal: 650,
    label: 'Total Building Covered Footprint',
    step: 50,
    weightFactor: 32, // ~32kg structural steel per m²
    recommendedProfile: 'UB 254 x 146 x 37 & UC 203 x 203 Columns',
    leadTimeBaseDays: 24,
    deflectionLimit: 'Span / 250 (BS 5950 Compliant)'
  },
  canopy: {
    id: 'canopy',
    name: 'Architectural Tinted Glazing & Steel Canopy',
    unit: 'm² Coverage Area',
    min: 15,
    max: 300,
    defaultVal: 45,
    label: 'Total Patio / Carport Shade Coverage',
    step: 5,
    weightFactor: 28,
    recommendedProfile: 'RHS 150 x 100 x 6.0 Rafters with EPDM Seals',
    leadTimeBaseDays: 12,
    deflectionLimit: 'Span / 360 (Glazing Protection Standard)'
  },
  balustrade: {
    id: 'balustrade',
    name: 'Marine SS316 & Tempered Glass Balustrades',
    unit: 'Linear Meters',
    min: 5,
    max: 150,
    defaultVal: 32,
    label: 'Total Balustrade Perimeter Length',
    step: 1,
    weightFactor: 18,
    recommendedProfile: 'Grade 316 50.8mm Handrail & Heavy Spigots',
    leadTimeBaseDays: 8,
    deflectionLimit: '0.74 kN/m Line Load (KEBS Impact Standard)'
  },
  gate: {
    id: 'gate',
    name: 'Bespoke CNC Laser-Cut Architectural Gate',
    unit: 'Meters Width',
    min: 3,
    max: 12,
    defaultVal: 6.0,
    label: 'Overall Entrance Opening Width',
    step: 0.5,
    weightFactor: 110,
    recommendedProfile: 'SHS 100 x 100 x 5.0 Posts & 8mm Laser Plate',
    leadTimeBaseDays: 10,
    deflectionLimit: 'Zero Lateral Racking at Maximum Cantilever'
  },
  staircase: {
    id: 'staircase',
    name: 'Architectural Helical Spiral Metal Staircase',
    unit: 'Meters Elevation Rise',
    min: 2.4,
    max: 12,
    defaultVal: 3.2,
    label: 'Floor-to-Floor Vertical Height',
    step: 0.2,
    weightFactor: 280,
    recommendedProfile: 'CHS 114.3mm Spine & 16mm Rolled Box Stringers',
    leadTimeBaseDays: 14,
    deflectionLimit: 'High-Rigidity Vibration Damping (< 1.5mm)'
  },
  tank: {
    id: 'tank',
    name: 'Elevated Industrial Water / Fuel Tank Tower',
    unit: 'Liters Reservoir Capacity',
    min: 5000,
    max: 100000,
    defaultVal: 25000,
    label: 'Storage Reservoir Volume',
    step: 5000,
    weightFactor: 0.16,
    recommendedProfile: 'EA 75 x 75 x 8 Lattice & Universal Columns',
    leadTimeBaseDays: 16,
    deflectionLimit: '140 km/h High-Gust Dynamic Wind Shear'
  },
  aluminum: {
    id: 'aluminum',
    name: 'Architectural Aluminum Facades & Louvers',
    unit: 'm² Facade Area',
    min: 20,
    max: 500,
    defaultVal: 80,
    label: 'Total Exterior Facade Coverage',
    step: 10,
    weightFactor: 12,
    recommendedProfile: 'ALUM-CW 120 x 50 Extruded 6063-T6 Sections',
    leadTimeBaseDays: 12,
    deflectionLimit: 'Wind Load Resistance Class C3 (EN 12210)'
  }
};

const STEEL_GRADES = [
  { id: 's275', name: 'Structural Mild Steel (S275JR)', desc: 'Standard yield strength (275 MPa) for general portal frames & gates' },
  { id: 's355', name: 'High-Tensile Structural Steel (S355JR)', desc: 'High yield strength (355 MPa), recommended for long clear spans' },
  { id: 'ss316', name: 'Marine-Grade Stainless Steel (SS316)', desc: 'Molybdenum-enhanced alloy for maximum coastal & corrosion resistance' },
  { id: 'aluminum6063', name: 'Architectural Aluminum (6063-T6)', desc: 'Lightweight, rust-free alloy for facades, louvers, and curtain walls' }
];

const FINISHES = [
  { id: 'polyurethane', name: '2-Coat Epoxy Marine Polyurethane', desc: 'Heavy chemical, UV, and rainfall barrier coat' },
  { id: 'powder', name: 'Baked Architectural Powder Coating', desc: 'Satin textured architectural finish in RAL palette' },
  { id: 'hotgalv', name: 'Hot-Dip Galvanizing (85µm immersion)', desc: 'Full molten zinc bath for 30+ year zero-rust life' },
  { id: 'primer', name: 'Red Oxide Industrial Shop Primer', desc: 'Base anti-corrosive primer ready for site topcoats' }
];

const LOCATIONS = [
  { id: 'nbo-core', name: 'Nairobi Core (Mombasa Rd / Syokimau / Industrial Area)' },
  { id: 'nbo-metro', name: 'Nairobi Metro (Westlands / Karen / Runda / Kilimani)' },
  { id: 'satellite', name: 'Satellite Hubs (Kiambu / Thika / Machakos / Athi River)' },
  { id: 'upcountry', name: 'Upcountry Kenya (Nakuru / Eldoret / Kisumu / Coast)' }
];

export const Estimator: React.FC<EstimatorProps> = ({ onQuoteRequestedWithData }) => {
  const [selectedType, setSelectedType] = useState<ProjectType>('warehouse');
  const [scaleValue, setScaleValue] = useState<number>(TYPE_CONFIGS.warehouse.defaultVal);
  const [selectedGrade, setSelectedGrade] = useState<string>('s355');
  const [selectedFinish, setSelectedFinish] = useState<string>('polyurethane');
  const [selectedLocation, setSelectedLocation] = useState<string>('nbo-core');
  const [copied, setCopied] = useState<boolean>(false);
  const [showQuotationModal, setShowQuotationModal] = useState<boolean>(false);

  const activeConfig = TYPE_CONFIGS[selectedType];
  const activeGradeObj = STEEL_GRADES.find(g => g.id === selectedGrade) || STEEL_GRADES[0];
  const activeFinishObj = FINISHES.find(f => f.id === selectedFinish) || FINISHES[0];
  const activeLocationObj = LOCATIONS.find(l => l.id === selectedLocation) || LOCATIONS[0];

  const handleTypeChange = (type: ProjectType) => {
    setSelectedType(type);
    setScaleValue(TYPE_CONFIGS[type].defaultVal);
  };

  // Live calculation of engineering parameters (NO money figures)
  const calculations = useMemo(() => {
    const rawMetalWeightKg = Math.round(scaleValue * activeConfig.weightFactor);
    const rawMetalWeightTons = Number((rawMetalWeightKg / 1000).toFixed(2));
    const leadTimeDays = Math.round(activeConfig.leadTimeBaseDays + (rawMetalWeightTons * 0.7));

    // Approximate component breakdown
    const primaryStructuralKg = Math.round(rawMetalWeightKg * 0.65);
    const secondaryPurlinsKg = Math.round(rawMetalWeightKg * 0.25);
    const hardwareFastenersKg = Math.round(rawMetalWeightKg * 0.10);

    return {
      weightKg: rawMetalWeightKg,
      weightTons: rawMetalWeightTons,
      leadTimeDays,
      primaryKg: primaryStructuralKg,
      secondaryKg: secondaryPurlinsKg,
      hardwareKg: hardwareFastenersKg
    };
  }, [scaleValue, activeConfig]);

  const boqSpecificationText = `ERNEXX STEEL FABRICATORS - TECHNICAL BOQ SPECIFICATION
Reference: ESF-SPEC-${Math.floor(1000 + Math.random() * 9000)}
Structure: ${activeConfig.name}
Scope / Dimension: ${scaleValue} ${activeConfig.unit}
Metallurgy Grade: ${activeGradeObj.name}
Surface Finish: ${activeFinishObj.name}
Erection Location: ${activeLocationObj.name}
Recommended Primary Profile: ${activeConfig.recommendedProfile}
Estimated Metal Mass: ${calculations.weightTons} Metric Tons (${calculations.weightKg.toLocaleString()} kg)
Deflection Standard: ${activeConfig.deflectionLimit}
Estimated Workshop Production Time: ${calculations.leadTimeDays} Business Days
Governing Standards: British Standard BS 5950 / Eurocode 3 / KEBS KS 02-104
Contact: Ernex Steel and Fabrications | Nairobi, Kenya | Phone: 0780 610648`;

  const handleCopyBOQ = () => {
    navigator.clipboard.writeText(boqSpecificationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppInquiry = () => {
    const encoded = encodeURIComponent(
      `Hello Ernex Steel and Fabrications,\n\nI generated a project specification on your website:\n- Project: ${activeConfig.name}\n- Scope: ${scaleValue} ${activeConfig.unit}\n- Metallurgy: ${activeGradeObj.name}\n- Finish: ${activeFinishObj.name}\n- Est. Mass: ${calculations.weightTons} Tons\n- Location: ${activeLocationObj.name}\n\nPlease review and provide a formal Contractor Quotation & BOQ.`
    );
    window.open(`https://wa.me/254780610648?text=${encoded}`, '_blank');
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-[#070A0F] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
            <span>Engineering & Metallurgy Configurator</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Material Tonnage & Turnaround Specifier</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
            Calculate Steel Tonnage, Dimensions & Turnaround.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Designed for commercial contractors, architects, structural engineers, and property developers. Configure project scope, steel grade, and finishing systems to generate an engineering Bill of Quantities (BOQ) ready for formal contractor quotation.
          </p>
        </div>

        {/* Configurator Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Controls (7 cols) */}
          <div className="lg:col-span-7 bg-[#0D121D] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-7 shadow-xl">
            {/* 1. Project Type Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
                1. Select Structure or Fabrication Discipline
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(Object.keys(TYPE_CONFIGS) as ProjectType[]).map((tKey) => {
                  const cfg = TYPE_CONFIGS[tKey];
                  const isSelected = selectedType === tKey;
                  return (
                    <button
                      key={tKey}
                      type="button"
                      onClick={() => handleTypeChange(tKey)}
                      className={`p-3 rounded-lg text-left text-xs transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 text-white shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <div className={`font-semibold ${isSelected ? 'text-amber-400' : 'text-slate-300'}`}>
                        {cfg.name.split('/')[0]}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        {cfg.unit}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Scale / Dimension Slider */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  2. {activeConfig.label}
                </label>
                <div className="font-mono text-sm sm:text-base font-bold text-amber-400 bg-slate-900 px-3 py-1 rounded border border-slate-800">
                  {scaleValue.toLocaleString()} {activeConfig.unit}
                </div>
              </div>
              <input
                type="range"
                min={activeConfig.min}
                max={activeConfig.max}
                step={activeConfig.step}
                value={scaleValue}
                onChange={(e) => setScaleValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>Min: {activeConfig.min} {activeConfig.unit}</span>
                <span>Max: {activeConfig.max} {activeConfig.unit}</span>
              </div>
            </div>

            {/* 3. Steel / Metal Grade */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                3. Structural Steel or Aluminum Metallurgy Grade
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {STEEL_GRADES.map((grade) => {
                  const isSelected = selectedGrade === grade.id;
                  return (
                    <button
                      key={grade.id}
                      type="button"
                      onClick={() => setSelectedGrade(grade.id)}
                      className={`p-3 rounded-lg text-left text-xs transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 text-white'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-semibold ${isSelected ? 'text-amber-400' : 'text-slate-200'}`}>
                          {grade.name}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        {grade.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Surface Treatment & Finish */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                4. Anti-Corrosion Protection & Surface Coating
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FINISHES.map((fin) => {
                  const isSelected = selectedFinish === fin.id;
                  return (
                    <button
                      key={fin.id}
                      type="button"
                      onClick={() => setSelectedFinish(fin.id)}
                      className={`p-3 rounded-lg text-left text-xs transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 text-white'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-semibold ${isSelected ? 'text-amber-400' : 'text-slate-200'}`}>
                          {fin.name}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        {fin.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. Site Location / Erection Zone */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                5. Erection Site & Mobile Crane Access Zone
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Column: Calculated Engineering Results & BOQ Spec Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0F1523] border border-amber-500/30 rounded-2xl p-6 sm:p-7 relative overflow-hidden shadow-2xl space-y-6">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Engineering Output
                </div>
                <h3 className="text-lg font-bold text-white font-display mt-0.5">
                  {activeConfig.name}
                </h3>
                <div className="text-xs text-amber-400 mt-1">
                  Scope: {scaleValue} {activeConfig.unit}
                </div>
              </div>

              {/* Primary Engineering Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div>
                  <div className="flex items-center gap-1.5 text-slate-400 mb-0.5">
                    <Scale className="w-3.5 h-3.5 text-amber-400" />
                    <span>Total Metal Mass:</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-white">
                    {calculations.weightTons} Tons
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    ({calculations.weightKg.toLocaleString()} kg)
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-slate-400 mb-0.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Shop & Site Lead Time:</span>
                  </div>
                  <div className="text-xl font-bold font-mono text-amber-400">
                    {calculations.leadTimeDays} Days
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    Business days to handover
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-2.5 text-xs border-y border-slate-800 py-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Primary Profile:</span>
                  <span className="text-slate-200 font-mono font-semibold text-right">{activeConfig.recommendedProfile}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Metallurgy Standard:</span>
                  <span className="text-slate-200 font-semibold">{activeGradeObj.name.split('(')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Deflection Tolerance:</span>
                  <span className="text-slate-200 font-mono text-right">{activeConfig.deflectionLimit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Coating System:</span>
                  <span className="text-slate-200 font-semibold">{activeFinishObj.name.split('(')[0]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Site Delivery:</span>
                  <span className="text-slate-200">{activeLocationObj.name.split('(')[0]}</span>
                </div>
              </div>

              {/* BOQ Structural Mass Breakdown */}
              <div className="space-y-2 text-xs">
                <div className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
                  Estimated BOQ Mass Allocation
                </div>
                <div className="space-y-1.5 font-mono text-[11px]">
                  <div className="flex justify-between text-slate-300">
                    <span>Primary Structural Frames (65%)</span>
                    <span>{calculations.primaryKg.toLocaleString()} kg</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Purlins, Rafters & Ties (25%)</span>
                    <span>{calculations.secondaryKg.toLocaleString()} kg</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Base Plates, Cleats & Bolts (10%)</span>
                    <span>{calculations.hardwareKg.toLocaleString()} kg</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowQuotationModal(true)}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Technical BOQ Specification</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-2.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send Spec to Workshop on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyBOQ}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg text-xs font-mono transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-800"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">BOQ Copied to Clipboard!</span>
                    </>
                  ) : (
                    <span>Copy Technical Specification</span>
                  )}
                </button>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500">
                <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Our structural engineers review your architectural drawings to issue binding contractor quotations.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOQ Specification Sheet Modal */}
      {showQuotationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#0C111C] border border-amber-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="text-xs font-mono text-amber-400 tracking-wider">OFFICIAL PROJECT SPECIFICATION SHEET</div>
                <h3 className="text-xl font-bold text-white font-display mt-0.5">Ernex Steel and Fabrications</h3>
                <div className="text-xs text-slate-400">Mombasa Road Industrial Zone, Nairobi · Tel: 0780 610648</div>
              </div>
              <button
                onClick={() => setShowQuotationModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs space-y-2 text-slate-300">
              <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
                <span>SPECIFICATION REFERENCE:</span>
                <span className="text-amber-400 font-bold">ESF-SPEC-NBO-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between">
                <span>Project Category:</span>
                <span className="text-white font-semibold">{activeConfig.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Scope Dimensions:</span>
                <span>{scaleValue} {activeConfig.unit}</span>
              </div>
              <div className="flex justify-between">
                <span>Recommended Profile:</span>
                <span className="text-amber-400">{activeConfig.recommendedProfile}</span>
              </div>
              <div className="flex justify-between">
                <span>Metallurgy Standard:</span>
                <span>{activeGradeObj.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Surface Protection:</span>
                <span>{activeFinishObj.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery / Erection Hub:</span>
                <span>{activeLocationObj.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Calculated Metal Mass:</span>
                <span>{calculations.weightTons} Metric Tons ({calculations.weightKg.toLocaleString()} kg)</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Workshop Lead Time:</span>
                <span>{calculations.leadTimeDays} Business Days</span>
              </div>
              <div className="flex justify-between">
                <span>Structural Deflection Standard:</span>
                <span>{activeConfig.deflectionLimit}</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-1">
              <p>• All fabrication adheres to British Standard BS 5950 & Eurocode 3 structural steel codes.</p>
              <p>• Mill test certificates provided for all hot-rolled beams and hollow sections.</p>
              <p>• Non-Destructive Testing (NDT) available for critical portal frame connections upon request.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  window.print();
                }}
                className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Print Specification Sheet</span>
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-400 text-black rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit to Workshop via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
