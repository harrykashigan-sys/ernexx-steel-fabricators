import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { IMAGES, PROJECTS, BLOG_POSTS, WORKSHOP_DETAILS } from '../data/steelData';
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle2, Phone, MessageSquare, Wrench, Layers } from 'lucide-react';

interface HomePageProps {
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote }) => {
  return (
    <div>
      {/* 1. Hero Section with Interactive Hotspots & Live Nairobi Time */}
      <Hero
        onOpenQuote={onOpenQuote}
        onOpenEstimator={() => {
          window.location.href = '/estimator';
        }}
      />

      {/* 2. Marquee Disciplines Overview */}
      <section className="py-20 bg-[#090D14] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
                <span>Fabrication Disciplines</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Nairobi Workshop Operations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
                Structural Steel, Aluminum & Architectural Glazing.
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-2">
                We deliver turnkey engineering from raw mill shapes to on-site crane erection across Kenya.
              </p>
            </div>

            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Discipline 1: Warehouse Structural Framing */}
            <div className="bg-[#0D131F] border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <img
                  src={IMAGES.realWarehouse}
                  alt="Industrial warehouse structural steel erection in Nairobi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[11px] font-mono text-amber-400 border border-slate-800">
                  DISCIPLINE 01
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    Heavy Clear-Span Warehouses & Portal Frames
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Fabricated to BS 5950 & Eurocode 3 standards for manufacturing plants, commercial logistics sheds, and mezzanine decks.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <Link
                    to="/capabilities"
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <span>View Technical Scope</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Discipline 2: Architectural Glazing & Canopies */}
            <div className="bg-[#0D131F] border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <img
                  src={IMAGES.realCanopy}
                  alt="Architectural tinted glass canopy and carport patio in Nairobi villa"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[11px] font-mono text-amber-400 border border-slate-800">
                  DISCIPLINE 02
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    Architectural Glass Canopies & Steel Carports
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Custom cantilever steel rafters with UV-blocking solar tinted tempered laminated glass, continuous EPDM seals, and concealed drainage.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <Link
                    to="/capabilities"
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <span>View Glazing Systems</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Discipline 3: Marine Stainless & Glass Balustrades */}
            <div className="bg-[#0D131F] border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <img
                  src={IMAGES.glassBalustrade}
                  alt="Marine grade stainless steel 316 glass balcony balustrades"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[11px] font-mono text-amber-400 border border-slate-800">
                  DISCIPLINE 03
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    Marine SS316 & Tempered Glass Balustrades
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Corrosion-resistant Grade 316 handrails, heavy-duty glass clamp spigots, and 12mm clear toughened safety glass for balconies and stairs.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <Link
                    to="/capabilities"
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <span>View Balustrade Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Ground Site Progression Slider */}
      <BeforeAfterSlider />

      {/* 4. Ground Project Showcase Teaser */}
      <section className="py-20 bg-[#070A0F] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
                <span>Verified Ground Projects</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Nairobi & East Africa Erection</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
                Real Installations. Precision Tolerances.
              </h2>
              <p className="text-sm sm:text-base text-slate-400 mt-2">
                Inspect actual commercial logistics warehouses, private villa glass canopies, marine-grade stainless balustrades, and custom architectural gates fabricated and erected by Ernexx.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
            >
              <span>View All Ground Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((p) => (
              <div
                key={p.id}
                className="bg-[#0C111C] border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[11px] font-mono text-amber-400 border border-slate-800">
                    {p.categoryLabel}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-slate-400 mb-1">{p.location} · {p.year}</div>
                    <h3 className="text-base font-bold text-white font-display group-hover:text-amber-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-xs">
                    <span className="font-mono text-slate-300">{p.tonnageOrScale}</span>
                    <Link to="/projects" className="text-amber-400 flex items-center gap-1 font-semibold">
                      <span>Inspect</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tonnage Estimator & BOQ Configurator Callout */}
      <section className="py-20 bg-[#090E17] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0D1424] border border-amber-500/30 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                Engineering Material Tonnage Configurator
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display">
                Need to Calculate Steel Tonnage, Dimensions & Shop Lead Time?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Use our dedicated engineering tool to input your floor area, clear-span width, or perimeter run. Calculate exact structural steel tonnage, recommended primary profiles, and generate an itemized Bill of Quantities (BOQ) ready for our engineering team to provide a binding contractor quotation.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/estimator"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>Launch Tonnage Configurator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/specs"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs rounded-lg transition-colors border border-slate-700"
                >
                  <span>View Steel & Aluminum Specs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Recent Engineering Blog Posts */}
      <section className="py-20 bg-[#080B10] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
                <span>Engineering Knowledge Base</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Kenyan Construction Insights</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight font-display">
                Technical Guides for Kenyan Contractors & Architects.
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-[#0C111C] border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[11px] font-mono text-amber-400 border border-slate-800">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-slate-500 mb-1">{post.date} · {post.readTime}</div>
                    <h3 className="text-base font-bold text-white font-display group-hover:text-amber-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                    >
                      <span>Read Technical Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Workshop Hotline & Quick Dispatch Banner */}
      <section className="py-14 bg-[#0A0E17] border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30">
            <div>
              <h3 className="text-xl font-bold text-white font-display">
                Ready to Discuss Your Project with Our Nairobi Workshop?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Call our direct dispatch hotline or visit our Mombasa Road / Syokimau facility.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${WORKSHOP_DETAILS.phone.replace(/\s+/g, '')}`}
                className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {WORKSHOP_DETAILS.phone}</span>
              </a>
              <a
                href={WORKSHOP_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Dispatch</span>
              </a>
              <button
                onClick={onOpenQuote}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-lg transition-colors border border-slate-700 cursor-pointer"
              >
                <span>Request Written RFQ</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
