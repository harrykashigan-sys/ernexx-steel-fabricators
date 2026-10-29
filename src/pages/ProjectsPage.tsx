import React, { useState } from 'react';
import { PROJECTS, TESTIMONIALS } from '../data/steelData';
import { Project } from '../types';
import { Maximize2, MapPin, Calendar, Layers, ShieldCheck, X, ArrowUpRight, Star } from 'lucide-react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface ProjectsPageProps {
  onOpenQuoteWithProject: (projectTitle: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenQuoteWithProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [inspectedProject, setInspectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'architectural', label: 'Architectural Glazing & Gates' },
    { id: 'structural', label: 'Structural Steel & Warehouses' },
    { id: 'staircases', label: 'Helical Staircases' },
    { id: 'tanks', label: 'Tanks & Towers' },
    { id: 'custom', label: 'Ground Rigging & Erection' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
            <span>Ground Installations & Field Erection</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Nairobi & East Africa Track Record</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Verified Projects. Built on the Ground.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Inspect our portfolio of actual commercial logistics warehouses, residential tinted glass canopies, louvered pergolas, and marine stainless steel balustrades across Nairobi, Karen, Lavington, and Syokimau.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setInspectedProject(project)}
              className="bg-[#0C111C] border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col group cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = project.fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C111C] via-transparent to-transparent pointer-events-none" />

                {/* Category tag */}
                <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-amber-400 border border-slate-800">
                  {project.categoryLabel}
                </div>

                {/* Inspect button overlay */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-amber-500 text-black p-2 rounded-lg shadow-lg">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{project.year}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white font-display group-hover:text-amber-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-300 font-semibold">{project.tonnageOrScale}</span>
                  <span className="text-amber-400 group-hover:underline flex items-center gap-1 font-semibold">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Ground Progression Slider */}
        <div className="mt-20">
          <BeforeAfterSlider />
        </div>

        {/* Client Endorsements */}
        <div className="mt-20 p-8 rounded-3xl bg-[#0B101A] border border-slate-800">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
              Field Endorsements
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              What Kenyan Engineers & Architects Say About Our Groundwork
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-2 border-t border-slate-800 text-xs">
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-amber-400 text-[11px]">{t.role} · {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Inspection Lightbox Modal */}
      {inspectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#0C121E] border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase">
                  <span>{inspectedProject.categoryLabel}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{inspectedProject.location}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                  {inspectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setInspectedProject(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Full Large Image View */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                <img
                  src={inspectedProject.image}
                  alt={inspectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <div>
                  <span className="text-slate-500 block">Scale / Scope:</span>
                  <span className="font-mono font-bold text-amber-400">{inspectedProject.tonnageOrScale}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Steel Specification:</span>
                  <span className="font-semibold text-slate-200">{inspectedProject.steelGrade}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Completion Year:</span>
                  <span className="font-mono text-slate-300">{inspectedProject.year}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Client / Sector:</span>
                  <span className="font-semibold text-slate-200">{inspectedProject.client}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Project Engineering Scope</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {inspectedProject.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">Technical Highlights & Standards</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {inspectedProject.highlights.map((hl, i) => (
                    <div
                      key={i}
                      className="p-3 bg-slate-900/40 border border-slate-800/80 rounded-lg text-xs text-slate-300 flex items-center gap-2"
                    >
                      <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="text-xs text-slate-500">
                  Ready to fabricate a similar structure for your project in Kenya?
                </span>
                <button
                  onClick={() => {
                    const title = inspectedProject.title;
                    setInspectedProject(null);
                    onOpenQuoteWithProject(title);
                  }}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Request Quote for Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
