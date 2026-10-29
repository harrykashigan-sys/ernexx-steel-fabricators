export interface Project {
  id: string;
  title: string;
  category: 'structural' | 'architectural' | 'staircases' | 'tanks' | 'custom';
  categoryLabel: string;
  location: string;
  year: string;
  tonnageOrScale: string;
  steelGrade: string;
  image: string;
  fallbackImage: string;
  description: string;
  highlights: string[];
  client: string;
}

export interface SteelProfile {
  id: string;
  name: string;
  code: string;
  type: 'UB' | 'RHS' | 'SHS' | 'CHS' | 'Angle' | 'Plate';
  dimensions: string;
  weightPerMeterKg: number;
  momentOfInertia: string;
  commonUses: string;
  standard: string;
}

export interface QuoteRequest {
  fullName: string;
  companyName?: string;
  phone: string;
  email: string;
  projectType: string;
  siteLocation: string;
  approxDimensions: string;
  estimatedBudget?: string;
  timeline: string;
  notes: string;
  hasDrawings: boolean;
  drawingFileName?: string;
}

export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  spec: string;
  detail: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  keywords: string[];
  image: string;
  content: string[];
}

export interface FAQItem {
  id: string;
  category: 'Structural' | 'Architectural & Aluminum' | 'Pricing & Process' | 'Permits & Quality';
  question: string;
  answer: string;
}

export interface ComparisonPair {
  id: string;
  title: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  beforeNotes: string;
  afterNotes: string;
}

