import React, { useState } from 'react';
import { FAQS, WORKSHOP_DETAILS } from '../data/steelData';
import { Search, ChevronDown, ChevronUp, HelpCircle, Phone, MessageSquare, ArrowRight } from 'lucide-react';

interface FAQPageProps {
  onOpenQuote: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenQuote }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'Structural', label: 'Structural Steel' },
    { id: 'Architectural & Aluminum', label: 'Architectural & Aluminum' },
    { id: 'Pricing & Process', label: 'Estimates & Milestones' },
    { id: 'Permits & Quality', label: 'Permits & Quality' }
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-[#080B10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Common Engineering & Contract Inquiries.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            Answers regarding structural engineering codes, Kenya Bureau of Standards (KEBS) certifications, lead times, warranties, and site erection across Kenya.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. clear spans, tempered glass, payment terms, delivery)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0D121D] border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 shadow-xl"
          />
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-black font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center text-slate-500 bg-slate-900/40 rounded-2xl border border-slate-800">
              No matching questions found. Contact our engineers directly at 0780 610648.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-[#0E1422] border-amber-500/40 shadow-xl'
                      : 'bg-[#0C111C] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white font-display">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="shrink-0 p-1 rounded-lg bg-slate-900 text-slate-400 mt-1">
                      {isOpen ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-in fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-4">
          <h3 className="text-lg font-bold text-white font-display">
            Have a Specific Engineering Question Not Listed Here?
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Speak directly with our chief structural steel fabricator or send over your architectural blueprints.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${WORKSHOP_DETAILS.phone.replace(/\s+/g, '')}`}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {WORKSHOP_DETAILS.phone}</span>
            </a>
            <a
              href={WORKSHOP_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors border border-slate-700 cursor-pointer"
            >
              <span>Submit RFQ Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
