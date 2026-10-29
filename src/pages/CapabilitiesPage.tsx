import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, WORKSHOP_DETAILS } from '../data/steelData';
import { ShieldCheck, CheckCircle2, ArrowRight, Layers, Ruler, Wrench, FileText } from 'lucide-react';

interface CapabilitiesPageProps {
  onOpenQuote: () => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ onOpenQuote }) => {
  const disciplines = [
    {
      id: 'structural',
      number: '01',
      title: 'Heavy Structural Steel & Clear-Span Warehouses',
      image: IMAGES.realWarehouse,
      subtitle: 'Industrial portal frames, manufacturing factory halls, and mezzanine decks.',
      overview: 'Turnkey structural steel engineering fabricated to British Standard BS 5950 and Eurocode 3. We engineer and erect unobstructed clear spans up to 42 meters using heavy Universal Beams (UB) and Universal Columns (UC) in Grade S355JR high-yield steel, paired with Grade 8.8 and 10.9 structural bolts.',
      specs: [
        { label: 'Span Capability', value: 'Up to 42m clear unobstructed span' },
        { label: 'Steel Grades', value: 'S275JR & S355JR structural sections' },
        { label: 'Welding Standard', value: 'AWS D1.1 & BS EN ISO 9606-1 with NDT inspection' },
        { label: 'Erection Capacity', value: 'Telescopic mobile cranes up to 50 tons' },
      ],
      applications: ['Logistics depots & distribution warehouses', 'Manufacturing plants & agro-processing sheds', 'Heavy commercial mezzanine storage floors', 'Aircraft hangars & vehicle service depots']
    },
    {
      id: 'glazing',
      number: '02',
      title: 'Architectural Glazing, Glass Canopies & Carports',
      image: IMAGES.realCanopy,
      subtitle: 'Engineered steel-framed tinted glass canopies for modern residences and commercial patios.',
      overview: 'Custom architectural outdoor canopies combining heavy rectangular hollow sections (RHS) with 10mm to 13.5mm heat-strengthened solar-tinted laminated tempered glass. Designed with internal EPDM compression gaskets, structural silicone sealant channels, and concealed rainwater guttering.',
      specs: [
        { label: 'Glazing Type', value: '10mm - 13.5mm solar-tinted laminated tempered glass' },
        { label: 'Frame Structure', value: 'Heavy box hollow sections with electrostatic powder coat' },
        { label: 'Weatherproofing', value: 'Continuous EPDM gaskets & neutral silicone channels' },
        { label: 'Heat Rejection', value: 'Up to 78% solar UV & radiant heat reduction' },
      ],
      applications: ['Courtyard patio pergolas & outdoor dining shelters', 'Luxury multi-vehicle residential carports', 'Commercial restaurant entrance canopies', 'Terrace weather-protection enclosures']
    },
    {
      id: 'balustrades',
      number: '03',
      title: 'Marine SS316 & Tempered Glass Balustrades',
      image: IMAGES.glassBalustrade,
      subtitle: 'Frameless and semi-frameless balcony balustrades, pool fencing, and terrace railings.',
      overview: 'Engineered architectural railings fabricated exclusively with marine-grade 316 stainless steel to eliminate tea-staining and corrosion in both Nairobi and coastal conditions. Clamped with heavy-duty mechanical spigots and core-drilled chemical anchoring.',
      specs: [
        { label: 'Alloy Metallurgy', value: 'Grade 316 Marine Stainless Steel (Molybdenum-enhanced)' },
        { label: 'Glass Specification', value: '12mm clear toughened safety glass with arrised edges' },
        { label: 'Impact Load Rating', value: '0.74 kN/m to 1.5 kN/m line load capacity' },
        { label: 'Mounting Hardware', value: 'Core-drilled 316 spigots with chemical anchor resin' },
      ],
      applications: ['Elevated balcony balustrades & roof terraces', 'Luxury interior open stairwell railings', 'Commercial mezzanine safety barriers', 'Swimming pool frameless security surrounds']
    },
    {
      id: 'pergolas',
      number: '04',
      title: 'Modern Louvered Steel Pergolas & Timber Inlays',
      image: IMAGES.pergolaFrame,
      subtitle: 'Custom geometric sunshade pergolas engineered for Nairobi residential villas.',
      overview: 'Fabricated with rigid hollow section perimeter frames and angled aerodynamic metal louvers or treated natural timber battens. Provides balanced solar shading while preserving daylight.',
      specs: [
        { label: 'Section Type', value: '100x100mm & 150x50mm structural hollow sections' },
        { label: 'Finish System', value: 'Baked architectural powder coating (RAL color palette)' },
        { label: 'Wind Tolerance', value: '120 km/h wind shear certified' },
        { label: 'Inlay Options', value: 'Treated hardwood battens or fixed aluminum louvers' },
      ],
      applications: ['Rooftop entertaining terraces', 'Private villa garden courtyards', 'Swimming pool lounge cabanas', 'Hotel outdoor pavilions']
    },
    {
      id: 'gates',
      number: '05',
      title: 'Custom Laser-Cut Architectural Gates & Portals',
      image: IMAGES.architecturalGate,
      subtitle: 'High-security statement gates with CNC laser geometric patterns and automation.',
      overview: 'Precision fabricated sliding, swing, and bi-parting entrance portals combining 6mm to 8mm CNC fiber-laser cut plate designs with heavy-gauge RHS perimeter frames. Fitted with concealed ball-bearing hinges, integrated pedestrian doors, and heavy Italian motor automation.',
      specs: [
        { label: 'Cutting Method', value: 'High-power CNC fiber laser bed (±0.5mm accuracy)' },
        { label: 'Plate Thickness', value: '6mm - 10mm solid steel sheet' },
        { label: 'Automation Prep', value: 'Heavy gear racks, safety photocells & biometric locks' },
        { label: 'Coating', value: 'Sa 2.5 sandblasted & 2-coat epoxy polyurethane' },
      ],
      applications: ['Gated community main security gates', 'Private luxury villa entrance portals', 'Commercial headquarters access gates', 'Perimeter architectural boundary screens']
    },
    {
      id: 'staircases',
      number: '06',
      title: 'Helical & Spiral Steel Staircases',
      image: IMAGES.spiralStaircase,
      subtitle: 'Continuous curved steel stringers with cantilever steps and architectural balustrades.',
      overview: 'Complex architectural staircases engineered with seamless central spines or rolled box-stringers. Built to eliminate dynamic resonance and vibration, pre-assembled in our Nairobi workshop for rapid site bolt-up.',
      specs: [
        { label: 'Stringer Spine', value: '16mm heavy rolled plate or 200mm circular hollow tube' },
        { label: 'Tread Options', value: 'Hardwood cladding, chequered plate, or stone pans' },
        { label: 'Tolerances', value: 'Pre-assembled in shop to ±1.0mm elevation accuracy' },
        { label: 'Deflection', value: '< 1.5mm dynamic bounce under full live load' },
      ],
      applications: ['Multi-story luxury private residences', 'Corporate headquarters reception atriums', 'Commercial showroom focal points', 'Industrial access spiral towers']
    },
    {
      id: 'aluminum',
      number: '07',
      title: 'Architectural Aluminum Systems, Facades & Louvers',
      image: IMAGES.technician,
      subtitle: 'Commercial structural glazing, aluminum curtain walling, and aerofoil sun louvers.',
      overview: 'In addition to heavy steelwork, Ernexx fabricates architectural aluminum systems using 6063-T6 architectural extrusions. Lightweight, corrosion-immune, and thermally efficient for modern commercial building envelopes in Nairobi.',
      specs: [
        { label: 'Extrusion Alloy', value: '6063-T6 Architectural Grade Aluminum' },
        { label: 'Finish Options', value: 'Anodized 25µm or Qualicoat architectural powder coat' },
        { label: 'Glazing Support', value: 'Double-glazed thermal break curtain wall systems' },
        { label: 'Wind Resistance', value: 'Class C3 (EN 12210) certified' },
      ],
      applications: ['Commercial office building curtain walls', 'Motorized & fixed architectural sun louvers', 'Heavy commercial aluminum shopfronts', 'Ventilated metal composite rainscreens']
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
            <span>Capabilities & Technical Disciplines</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Turnkey Engineering</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Precision Metal & Aluminum Construction in Nairobi.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            From heavy industrial warehouse portal frames in Syokimau to architectural glass canopies in Karen and marine-grade stainless balustrades in Lavington, explore our complete fabrication and erection capabilities.
          </p>
          <div className="flex flex-wrap gap-4 pt-6">
            <Link
              to="/estimator"
              className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
            >
              <span>Calculate Steel Tonnage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={onOpenQuote}
              className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
            >
              <span>Request Technical RFQ</span>
            </button>
          </div>
        </div>

        {/* Disciplines Deep-Dive List */}
        <div className="space-y-16">
          {disciplines.map((d) => (
            <div
              key={d.id}
              id={d.id}
              className="bg-[#0C111C] border border-slate-800 rounded-3xl overflow-hidden p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Visual Asset (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-xl group">
                  <img
                    src={d.image}
                    alt={d.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-amber-400 border border-slate-800">
                    DISCIPLINE {d.number}
                  </div>
                </div>
              </div>

              {/* Right Column: In-Depth Engineering Details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                    {d.subtitle}
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-display">
                    {d.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {d.overview}
                  </p>
                </div>

                {/* Technical Specifications Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  {d.specs.map((s, idx) => (
                    <div key={idx}>
                      <span className="text-slate-500 block text-[11px]">{s.label}:</span>
                      <span className="font-semibold text-slate-200">{s.value}</span>
                    </div>
                  ))}
                </div>

                {/* Applications */}
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Primary Construction Applications:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {d.applications.map((app, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenQuote}
                    className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Request Quotation for {d.title.split('&')[0]}</span>
                  </button>
                  <Link
                    to="/projects"
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <span>View Completed Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
