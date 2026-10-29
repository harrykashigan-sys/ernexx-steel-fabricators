import { Project, SteelProfile, Hotspot, BlogPost, FAQItem, ComparisonPair } from '../types';

export const WORKSHOP_DETAILS = {
  name: 'Ernex Steel and Fabrications',
  tagline: 'Precision Metal Construction & Architectural Aluminum Engineering',
  category: 'Metal Construction Company',
  phone: '0780 610648',
  phoneFormatted: '+254 780 610648',
  email: 'info@ernexsteel.co.ke',
  whatsappUrl: 'https://wa.me/254780610648?text=Hello%20Ernex%20Steel%20and%20Fabrications,%20I%20would%20like%20to%20inquire%20about%20a%20metal%20or%20aluminum%20fabrication%20project.',
  locationShort: 'Nairobi, Kenya',
  plusCode: 'JWRQ+85 Nairobi',
  coordinates: {
    lat: -1.3592272,
    lng: 36.9379845,
  },
  address: 'Mombasa Road Corridor / Syokimau Industrial Zone, Nairobi, Kenya',
  hours: 'Open Mon - Sat: 7:00 AM – 7:00 PM',
  googleMapsUrl: 'https://www.google.com/maps/place/Ernexx+Steel+Fabricators/@-1.3590131,36.938045,17z/data=!4m14!1m7!3m6!1s0x182f0d0245b46fd9:0x95b01eff5e4ed379!2sErnexx+Steel+Fabricators!8m2!3d-1.3592272!4d36.9379845!16s%2Fg%2F11lkgn53zl!3m5!1s0x182f0d0245b46fd9:0x95b01eff5e4ed379!8m2!3d-1.3592272!4d36.9379845!16s%2Fg%2F11lkgn53zl',
  standards: ['KEBS KS 02-104', 'BS 5950 / Eurocode 3', 'AWS D1.1 Certified Welds', 'ISO 9001 Quality Protocols'],
  facilityHighlights: [
    'Heavy 10-Ton Overhead Travelling Crane Bay',
    'High-Precision CNC Fiber Laser Metal Cutting Bed',
    'Heavy-Duty 400T Hydraulic Press Brake & Bending',
    'Specialized Structural Steel & Architectural Aluminum Assembly Bays',
    'Submerged Arc & Multi-Process MIG/TIG Welding Stations',
    'Dedicated Controlled Abrasive Blasting & Powder Coating Booth'
  ]
};

export const IMAGES = {
  hero: '/images/ernex_hero_steel_workshop.jpg',
  realWarehouse: '/images/ernex_real_warehouse.jpg',
  realCanopy: '/images/ernex_real_canopy.jpg',
  pergolaFrame: '/images/ernex_pergola_frame.jpg',
  technician: '/images/ernex_technician_installation.jpg',
  glassBalustrade: '/images/ernex_glass_balustrade.jpg',
  modernPergola: '/images/ernex_modern_pergola.jpg',
  architecturalGate: '/images/ernex_architectural_gate.jpg',
  spiralStaircase: '/images/ernex_spiral_staircase.jpg',
  staircase: '/images/ernex_spiral_staircase.jpg',
  structural: '/images/ernex_structural_frame.jpg',
  canopyPatio: '/images/ernex_glass_canopy_patio.jpg',
  crewInstallation: '/images/ernex_crew_installation.jpg',
  googleMapsPhoto: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SPK48Jlf1JN4bhPcHngPrZjR6CLSxTo0dgwpFsiMJVCoKr0lrZCkeuvaEzHjn_8NnHsA9kJ40wPXHcSmj3xQJM1elXpRlWvnZw69cCwj7nUJ4Xe1NCFM1J91djaYoZzxw4WNw=w1200'
};


export const COMPARISON_PAIRS: ComparisonPair[] = [
  {
    id: 'canopy-progression',
    title: 'Architectural Glazing Canopy: Frame Rigging to Finished Installation',
    subtitle: 'From structural RHS hollow-section framing to solar-tinted glass and stainless balcony integration.',
    beforeImage: IMAGES.pergolaFrame,
    afterImage: IMAGES.realCanopy,
    beforeLabel: 'Frame Assembly & Battens',
    afterLabel: 'Completed Glazed Canopy',
    beforeNotes: 'Hollow section rafters jigged, levelled with laser alignment, and prepared with EPDM compression gaskets.',
    afterNotes: '10mm UV-resistant solar tinted tempered safety glass, integrated guttering, and powder-coated steel columns.'
  },
  {
    id: 'warehouse-progression',
    title: 'Clear-Span Industrial Warehouse: Skeleton Erection to Handover',
    subtitle: 'Inspect the structural crane-lifted portal frames versus completed industrial clear span.',
    beforeImage: IMAGES.realWarehouse,
    afterImage: IMAGES.structural,
    beforeLabel: 'Crane Erection & Truss Placement',
    afterLabel: 'Structural Portal Framework',
    beforeNotes: 'S355 structural universal columns and angle roof trusses lifted with mobile telescoping cranes.',
    afterNotes: 'Fully torqued Grade 8.8 structural bolts, sag rods, purlins, and industrial anti-corrosive polyurethane coat.'
  },
  {
    id: 'technician-craft',
    title: 'Site Engineering: Precision Weatherproofing & Final Handover',
    subtitle: 'Candid on-site craftsmanship by certified ESF metal fabricators.',
    beforeImage: IMAGES.technician,
    afterImage: IMAGES.modernPergola,
    beforeLabel: 'On-Site Sealing & Bracket Fixing',
    afterLabel: 'Architectural Louvered Pergola',
    beforeNotes: 'Technician securing weather-tight mechanical flashing, silicone channels, and safety tie-backs.',
    afterNotes: 'Sleek architectural matte carbon finish engineered for high wind resistance and optimal shade.'
  }
];

export const HERO_HOTSPOTS: Hotspot[] = [
  {
    id: 'hs-1',
    x: 62,
    y: 54,
    title: 'Certified Structural Welds',
    spec: 'AWS D1.1 & BS EN ISO 9606-1 Qualified',
    detail: 'Full-penetration bevel welds on 25mm structural flange plates tested via ultrasonic non-destructive testing (NDT).'
  },
  {
    id: 'hs-2',
    x: 52,
    y: 24,
    title: 'Heavy Overhead Travelling Crane',
    spec: '10-Ton Single Girder Hoist',
    detail: 'Enables rapid, safe handling of heavy 18-meter universal beams and assembled structural portal frames.'
  },
  {
    id: 'hs-3',
    x: 32,
    y: 62,
    title: 'Precision Jigging & Clamping Tables',
    spec: 'Tolerance: ±0.5mm across 6m run',
    detail: 'Modular cast-iron clamping surfaces ensure absolute trueness on architectural gate leaves and truss assemblies.'
  },
  {
    id: 'hs-4',
    x: 88,
    y: 42,
    title: 'High-Tensile S355 Steel Beams',
    spec: 'Yield Strength: 355 MPa Minimum',
    detail: 'Directly sourced structural sections ready for CNC automated drilling, coping, and gusset welding.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-canopy',
    title: 'Architectural Tinted Glazing & Steel Courtyard Canopy',
    category: 'architectural',
    categoryLabel: 'Architectural Glazing & Canopies',
    location: 'Nairobi Villa Estate',
    year: '2025',
    tonnageOrScale: '8.5m x 4.2m Heavy Cantilever',
    steelGrade: 'Structural RHS & Laminated Tinted Glass',
    image: IMAGES.realCanopy,
    fallbackImage: IMAGES.hero,
    description: 'Custom engineered cantilever patio canopy featuring precision hollow-section steel rafters, structural silicone water-channel glazing, concealed guttering, and weather-proof perimeter joints.',
    highlights: ['UV-blocking solar tinted tempered glass', 'Concealed rainwater routing system', 'Electrostatic matte charcoal powder finish'],
    client: 'Private Residence Nairobi'
  },
  {
    id: 'proj-balustrade',
    title: 'Marine SS316 & Tempered Glass Balcony Balustrades',
    category: 'architectural',
    categoryLabel: 'Stainless & Glass Balustrades',
    location: 'Lavington, Nairobi',
    year: '2025',
    tonnageOrScale: '42 Linear Meters',
    steelGrade: 'Grade 316 Polished Stainless Steel',
    image: IMAGES.glassBalustrade,
    fallbackImage: IMAGES.hero,
    description: 'Precision architectural stainless steel balustrade system with 12mm clear toughened safety glass, seamless round handrails, heavy-duty adjustable clamping spigots, and core-drilled chemical anchoring.',
    highlights: ['Zero-weld visible connection hardware', '12mm toughened laminated impact glass', 'Corrosion-proof grade 316 stainless'],
    client: 'Luxury Residential Development'
  },
  {
    id: 'proj-warehouse-nbo',
    title: 'Syokimau Heavy Clear-Span Industrial Warehouse',
    category: 'structural',
    categoryLabel: 'Structural Steel',
    location: 'Syokimau / Mombasa Road, Nairobi',
    year: '2025',
    tonnageOrScale: '96 Metric Tons Structural Steel',
    steelGrade: 'Structural S355JR High-Tensile',
    image: IMAGES.realWarehouse,
    fallbackImage: IMAGES.hero,
    description: 'Turnkey fabrication, mobile crane erection, and roof truss framing for a heavy-duty industrial storage depot with 32m unobstructed clear spans and 12m eaves height.',
    highlights: ['32m clear-span portal frames', 'Heavy universal beam columns', 'Grade 8.8 high-tensile structural bolts'],
    client: 'East Africa Commercial Logistics Ltd'
  },
  {
    id: 'proj-pergola-timber',
    title: 'Under-Construction Pergola Framework & Timber Inlays',
    category: 'custom',
    categoryLabel: 'Site Erection',
    location: 'Nairobi Residential Compound',
    year: '2025',
    tonnageOrScale: 'Courtyard Terrace Coverage',
    steelGrade: 'Heavy Box Hollow Sections & Hardwood Battens',
    image: IMAGES.pergolaFrame,
    fallbackImage: IMAGES.hero,
    description: 'Ground-level installation showing laser-checked steel perimeter beams, integrated electrical wiring conduits, and precision-fitted natural hardwood sunshade slats.',
    highlights: ['Precision mitred corner welds', 'Concealed stainless anchor brackets', 'Weather-treated hardwood battens'],
    client: 'Residential Villa Owner'
  },
  {
    id: 'proj-technician-site',
    title: 'Certified ESF Field Rigging & Glazing Sealing',
    category: 'custom',
    categoryLabel: 'Site Engineering',
    location: 'Nairobi Metro',
    year: '2025',
    tonnageOrScale: 'Multi-Story Rooftop Rigging',
    steelGrade: 'Certified Structural Framing Hardware',
    image: IMAGES.technician,
    fallbackImage: IMAGES.hero,
    description: 'Ernex certified rigging technicians executing mechanical bracket fastening, continuous EPDM gasket sealing, and non-destructive joint verification.',
    highlights: ['Strict OSHA & Kenyan safety compliance', 'High-torque impact driver fastening', 'Continuous leak-proof seals'],
    client: 'General Building Contractor'
  },
  {
    id: 'proj-gate-karen',
    title: 'Karen Estate Laser-Cut Architectural Sliding Gate',
    category: 'architectural',
    categoryLabel: 'Architectural Metal',
    location: 'Karen, Nairobi',
    year: '2025',
    tonnageOrScale: '6.5m Bi-Parting Motorized Gate',
    steelGrade: 'Heavy Mild Steel & CNC Cut Plates',
    image: IMAGES.architecturalGate,
    fallbackImage: IMAGES.hero,
    description: 'Custom CNC laser-cut entrance gate featuring intricate geometric motifs, integrated pass-door, concealed heavy-duty ground track, and Italian automation motor integration.',
    highlights: ['8mm solid steel plate laser fretwork', 'Baked polyurethane matte carbon coat', 'Heavy-duty sealed roller bearings'],
    client: 'Private Luxury Residence'
  },
  {
    id: 'proj-spiral-stair',
    title: 'Westlands Corporate Helical Steel Staircase',
    category: 'staircases',
    categoryLabel: 'Staircases & Railings',
    location: 'Westlands, Nairobi',
    year: '2024',
    tonnageOrScale: '3-Story Helical Spine',
    steelGrade: 'High Yield S275 & Timber Treads',
    image: IMAGES.spiralStaircase,
    fallbackImage: IMAGES.hero,
    description: 'Curved structural metal staircase with monolithic rolled spine, concealed floor anchors, and vertical architectural steel balustrades.',
    highlights: ['16mm rolled box stringer spine', 'Concealed structural weld joints', 'Zero dynamic vibration bounce'],
    client: 'Corporate Headquarters Westlands'
  },
  {
    id: 'proj-tank-athi',
    title: 'Athi River 45,000L Elevated Fuel & Water Tank Tower',
    category: 'tanks',
    categoryLabel: 'Tanks & Towers',
    location: 'Athi River, Machakos/Nairobi',
    year: '2024',
    tonnageOrScale: '18m High Lattice Tower',
    steelGrade: 'Hot-Dip Galvanized S355',
    image: IMAGES.structural,
    fallbackImage: IMAGES.hero,
    description: 'Heavy structural angle lattice tower engineered for extreme dynamic fluid surge and 140 km/h wind gusts, fully hot-dip galvanized for a 30+ year lifespan.',
    highlights: ['Cross-braced structural angle lattice', 'Integrated safety cage ladder', 'Anti-seismic base plates'],
    client: 'Athi Industrial Processing Facility'
  }
];

export const STEEL_PROFILES: SteelProfile[] = [
  {
    id: 'ub-254',
    name: 'Universal Beam (UB)',
    code: 'UB 254 x 146 x 37',
    type: 'UB',
    dimensions: '256.0mm x 146.4mm x 6.4mm Web',
    weightPerMeterKg: 37.0,
    momentOfInertia: '5,540 cm⁴ (Major Axis)',
    commonUses: 'Primary roof rafters, warehouse columns, bridge girders, heavy load transfer beams',
    standard: 'BS 4-1 / EN 10025-2'
  },
  {
    id: 'ub-203',
    name: 'Universal Beam (UB)',
    code: 'UB 203 x 133 x 30',
    type: 'UB',
    dimensions: '206.8mm x 133.9mm x 6.4mm Web',
    weightPerMeterKg: 30.0,
    momentOfInertia: '2,900 cm⁴ (Major Axis)',
    commonUses: 'Mezzanine joists, secondary roof members, commercial canopy cantilevers',
    standard: 'BS 4-1 / EN 10025-2'
  },
  {
    id: 'rhs-150',
    name: 'Rectangular Hollow Section (RHS)',
    code: 'RHS 150 x 100 x 6.0',
    type: 'RHS',
    dimensions: '150mm x 100mm x 6.0mm Wall',
    weightPerMeterKg: 22.1,
    momentOfInertia: '754 cm⁴',
    commonUses: 'Clean aesthetic architectural columns, carport perimeter beams, heavy portal trusses',
    standard: 'EN 10219 S275J2H'
  },
  {
    id: 'shs-100',
    name: 'Square Hollow Section (SHS)',
    code: 'SHS 100 x 100 x 5.0',
    type: 'SHS',
    dimensions: '100mm x 100mm x 5.0mm Wall',
    weightPerMeterKg: 14.4,
    momentOfInertia: '217 cm⁴',
    commonUses: 'Main entrance gate posts, structural pergola frames, sign gantries, canopy uprights',
    standard: 'EN 10219 S275J2H'
  },
  {
    id: 'chs-114',
    name: 'Circular Hollow Section (CHS / Pipe)',
    code: 'CHS 114.3 x 4.5',
    type: 'CHS',
    dimensions: '114.3mm OD x 4.5mm Wall',
    weightPerMeterKg: 12.2,
    momentOfInertia: '187 cm⁴',
    commonUses: 'Spiral staircase center columns, water tower diagonal bracings, curved architectural trusses',
    standard: 'EN 10210 S355'
  },
  {
    id: 'angle-75',
    name: 'Equal Angle Section (L-Profile)',
    code: 'EA 75 x 75 x 8',
    type: 'Angle',
    dimensions: '75mm x 75mm x 8.0mm Leg',
    weightPerMeterKg: 8.99,
    momentOfInertia: '45.1 cm⁴',
    commonUses: 'Truss webs, bracing struts, purlin cleat attachments, tank tower lattice members',
    standard: 'BS EN 10056-1'
  },
  {
    id: 'alum-curtain',
    name: 'Architectural Aluminum Curtain Wall & Louver',
    code: 'ALUM-CW 120 x 50',
    type: 'RHS',
    dimensions: '120mm x 50mm x 2.5mm Extrusion',
    weightPerMeterKg: 3.4,
    momentOfInertia: '88.5 cm⁴',
    commonUses: 'Commercial structural glazing mullions, sun louver blades, modern facade framing',
    standard: 'BS EN 755-9 6063-T6'
  },
  {
    id: 'plate-cheq',
    name: 'Durbar Chequered Floor Plate',
    code: 'PL-CHQ 6.0mm Base',
    type: 'Plate',
    dimensions: '6.0mm Nominal Base + 1.5mm Tear Pattern',
    weightPerMeterKg: 49.3,
    momentOfInertia: 'High Rigidity Tread',
    commonUses: 'Industrial walkways, stair treads, oil-rig walkways, heavy loading ramp floors',
    standard: 'EN 10025-2 S275'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'Ernex fabricated the entire structural steel framework for our Syokimau logistics hub. Every bolt hole lined up with zero site-modification delays, and erection was finished three weeks ahead of program.',
    author: 'Eng. Francis Mwangi',
    role: 'Lead Structural Consultant',
    company: 'Bowman & Turner Engineering Nairobi',
    location: 'Nairobi, Kenya',
    metric: '3 Weeks Ahead of Program'
  },
  {
    quote: 'Finding fabricators in Nairobi capable of true architectural grade laser-cut gates with concealed hinges and pristine powder coating used to be impossible. Ernex delivered museum-quality craftsmanship.',
    author: 'Sharon Wanjiku',
    role: 'Principal Architect',
    company: 'Atelier Rift Architecture',
    location: 'Karen / Westlands',
    metric: '±0.5mm Precision Tolerances'
  },
  {
    quote: 'When we needed emergency fabrication for a 45,000L industrial storage tank tower in Athi River, Ernex dispatched their certified welders within 4 hours. Absolute masters of heavy metalwork.',
    author: 'Kiprop Kipkemboi',
    role: 'Director of Plant Operations',
    company: 'Savannah Agrochemicals Ltd',
    location: 'Athi River',
    metric: '4-Hour Site Deployment'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'warehouse-steel-framing-cost-factors-kenya',
    title: 'Structural Steel Framing for Warehouses in Kenya: Tonnage, BS 5950 Standards & Erection Timelines',
    excerpt: 'A comprehensive technical guide for commercial developers and structural engineers planning logistics warehouses, manufacturing plants, and clear-span portal frames in Nairobi and across Kenya.',
    category: 'Structural Engineering',
    readTime: '6 min read',
    date: 'October 2026',
    author: 'Ernex Engineering Team',
    authorRole: 'Structural Steel Specialists',
    keywords: ['warehouse construction Kenya', 'structural steel fabricators Nairobi', 'portal frames BS 5950', 'steel tonnage calculation', 'Syokimau logistics'],
    image: IMAGES.realWarehouse,
    content: [
      'In Kenya’s rapidly expanding industrial corridor spanning Mombasa Road, Syokimau, Athi River, and Tatu City, portal frame structural steel construction has become the gold standard for high-bay logistics warehouses and manufacturing facilities.',
      'Unlike conventional masonry or reinforced concrete columns that require interior load-bearing pillars every 6 to 9 meters, engineered structural steel portal frames allow for clear unobstructed spans ranging from 24 meters up to 48 meters. This maximizes cubic storage capacity for high-density pallet racking, heavy gantry cranes, and forklift turning radii.',
      'Key engineering parameters governed by British Standard BS 5950 and Eurocode 3 include calculating dead loads, live roof loads, and localized high-gust wind pressures common in East Africa. Structural steel sections such as Universal Beams (UB) and Universal Columns (UC) in Grade S355 provide significantly higher tensile yield strength, reducing total tonnage and dead weight on foundation pile caps.',
      'At Ernex Steel and Fabrications, every structural member is fabricated inside our Nairobi workshop with computerized sawing, CNC drilling, and automated submerged-arc welding before undergoing rigorous ultrasonic testing (NDT). This ensures that on-site crane erection proceeds without delays or field cutting.'
    ]
  },
  {
    slug: 'architectural-glass-canopies-vs-polycarbonate-nairobi',
    title: 'Architectural Glass Canopies vs. Polycarbonate Pergolas in Nairobi: Durability, Heat Gain & Aesthetics',
    excerpt: 'Comparing structural steel-framed tempered laminated glass canopies against polycarbonate roof systems for residential villas, modern carports, and outdoor patio lounges in Kenya.',
    category: 'Architectural Glazing',
    readTime: '5 min read',
    date: 'October 2026',
    author: 'Architectural Glazing Division',
    authorRole: 'Glazing & Canopy Engineers',
    keywords: ['glass canopy Nairobi', 'carport canopy Kenya', 'tempered laminated glass', 'steel pergola Karen', 'polycarbonate vs glass'],
    image: IMAGES.realCanopy,
    content: [
      'Modern Kenyan architecture in neighborhoods like Karen, Runda, Lavington, and Muthaiga increasingly incorporates outdoor-indoor living spaces. Homeowners and commercial restaurateurs frequently face the choice between tempered solar glass canopies and multiwall polycarbonate sheets for courtyards and carports.',
      'While polycarbonate offers lower initial weight, it is notoriously vulnerable to long-term yellowing, micro-cracking from intense equatorial UV exposure, and loud drumming noise during tropical downpours. By contrast, engineered architectural glass canopies fabricated with dark steel or heavy aluminum box sections provide unmatched clarity and acoustic comfort.',
      'Ernex fabricates structural frames using heavy rectangular hollow sections (RHS) treated with 2-coat epoxy polyurethane or baked electrostatic powder coating. For glazing, we utilize 10mm to 12mm heat-strengthened, solar-tinted laminated safety glass mounted with continuous EPDM compression gaskets and structural silicone channels.',
      'This combination guarantees total water-tightness, stops up to 78% of solar heat gain while preserving daylight, and withstands heavy wind loads without rattling or vibration.'
    ]
  },
  {
    slug: 'stainless-steel-grade-304-vs-316-balustrades-kenya',
    title: 'Grade 304 vs. Grade 316 Stainless Steel Balustrades: Weatherproofing for Modern Kenyan Architecture',
    excerpt: 'How to select the right metallurgy, clamping spigots, and tempered glass thickness for balcony balustrades, commercial staircases, and terrace railings in Kenya.',
    category: 'Metallurgy & Balustrades',
    readTime: '4 min read',
    date: 'October 2026',
    author: 'Metallurgy Department',
    authorRole: 'Corrosion & Welding Specialists',
    keywords: ['stainless steel balustrades Nairobi', 'glass railing Kenya', 'SS304 vs SS316', 'tempered glass balcony', 'staircase handrails Nairobi'],
    image: IMAGES.glassBalustrade,
    content: [
      'When designing balustrades for elevated terraces, staircases, and balconies, safety and corrosion resistance are paramount. In Kenya, atmospheric conditions vary significantly between high-altitude interior regions like Nairobi and coastal zones like Mombasa or Diani.',
      'Grade 304 stainless steel contains 18% chromium and 8% nickel, making it highly suitable for interior stairwells and dry exterior applications. However, in environments with industrial pollutants, swimming pool chlorides, or coastal sea spray, Grade 304 can suffer from unsightly tea-staining and pit corrosion.',
      'Grade 316 stainless steel adds 2% to 3% molybdenum into the alloy, providing superior resistance against pitting and chemical attack. Ernex specifies marine Grade 316 for all exterior glass clamp spigots, base shoes, and handrails to guarantee a pristine mirror or satin finish that lasts decades.',
      'Paired with 12mm clear toughened safety glass with polished arrised edges and core-drilled chemical anchor bolts, our balustrade installations meet both international building codes and Kenya Bureau of Standards (KEBS) impact requirements.'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Structural',
    question: 'What standards and engineering codes do your structural steel frames comply with?',
    answer: 'All our structural steel fabrication and erection adheres strictly to British Standard BS 5950 and Eurocode 3 (EN 1993), as well as Kenya Bureau of Standards (KEBS KS 02-104) specifications. We provide mill test certificates for all steel profiles and ultrasonic Non-Destructive Testing (NDT) reports for critical welded portal joints.'
  },
  {
    id: 'faq-2',
    category: 'Structural',
    question: 'Can you fabricate and erect wide clear-span warehouses without interior columns?',
    answer: 'Yes. We regularly fabricate clear spans up to 42 meters using engineered portal frames with haunched rafters and high-tensile Grade 8.8 and 10.9 structural bolts. This provides completely unobstructed floor space for logistics racking, manufacturing equipment, and forklift operations.'
  },
  {
    id: 'faq-3',
    category: 'Architectural & Aluminum',
    question: 'What types of glass do you use for your architectural patio canopies and carports?',
    answer: 'We exclusively use heat-strengthened, tempered laminated architectural safety glass (typically 10mm to 13.5mm thickness). Options include solar control bronze or grey tint, low-E coatings, or ultra-clear glass. All panels are seated in heavy EPDM rubber gaskets with structural silicone sealant channels to guarantee 100% leak-proof performance.'
  },
  {
    id: 'faq-4',
    category: 'Architectural & Aluminum',
    question: 'Do you work with architectural aluminum as well as steel?',
    answer: 'Yes. We fabricate architectural aluminum systems including structural curtain walls, motorized and fixed louvered sunshades, heavy commercial entrance doors, sliding patio screens, and modern composite facade panels.'
  },
  {
    id: 'faq-5',
    category: 'Pricing & Process',
    question: 'How do you structure your quotations and Bills of Quantities (BOQs)?',
    answer: 'Because every structural project and architectural installation involves unique spans, tonnage, metallurgy, and site logistics, we do not use fixed one-size-fits-all prices. Instead, our senior estimators review your architectural drawings or site measurements to generate an itemized technical BOQ with steel weight, material grades, shop lead time, and installation schedule.'
  },
  {
    id: 'faq-6',
    category: 'Pricing & Process',
    question: 'What are your standard payment and mobilization milestones?',
    answer: 'Our standard contractual milestone structure is: 50% mobilization deposit upon contract signing to procure certified raw materials, 30% upon workshop fabrication completion and inspection, and the final 20% upon site delivery, crane erection, and final handover sign-off.'
  },
  {
    id: 'faq-7',
    category: 'Permits & Quality',
    question: 'Do you deliver and erect outside Nairobi across Kenya?',
    answer: 'Yes. While our primary fabrication workshop and crane yard are located along the Mombasa Road / Syokimau corridor in Nairobi, our certified field rigging crews regularly execute installations in Machakos, Athi River, Kiambu, Naivasha, Nakuru, Eldoret, Kisumu, and the Coast.'
  },
  {
    id: 'faq-8',
    category: 'Permits & Quality',
    question: 'Can you conduct an on-site inspection before fabrication begins?',
    answer: 'Absolutely. We provide on-site technical surveys using laser levels and total stations to verify foundation bolt alignment, finished floor levels, and structural wall tie-backs before cutting any steel or aluminum in our workshop.'
  },
  {
    id: 'faq-9',
    category: 'Permits & Quality',
    question: 'What warranties and guarantees are provided on Ernex steelwork?',
    answer: 'All Ernex heavy structural frameworks carry a 10-year structural integrity guarantee. Architectural powder coatings and hot-dip galvanized finishes include comprehensive anti-corrosion warranties according to the selected coating specification.'
  },
  {
    id: 'faq-10',
    category: 'Architectural & Aluminum',
    question: 'How long does fabrication take for a custom gate, staircase, or canopy?',
    answer: 'Architectural laser-cut gates and patio canopies typically require 10 to 14 business days in the workshop, followed by 1 to 2 days of site installation. Heavy warehouse portal frames vary by tonnage and generally range between 3 to 6 weeks from approved shop drawings.'
  }
];
