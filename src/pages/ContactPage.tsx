import React, { useState } from 'react';
import { WORKSHOP_DETAILS } from '../data/steelData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation, Upload, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Heavy Structural Steel / Warehouse');
  const [location, setLocation] = useState('Nairobi Area');
  const [notes, setNotes] = useState('');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(`${file.name} (${(file.size / 1024).toFixed(0)} KB)`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedRef = `ESF-CONTACT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setIsSubmitting(false);
      setSubmittedRef(generatedRef);
    }, 600);
  };

  return (
    <div className="pt-24 pb-20 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
            <span>Contact & Field Dispatch</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Nairobi Industrial Base</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Contact Ernexx Steel Fabricators.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Reach our chief structural steel estimators, book an on-site technical inspection, or dispatch our crane rigging crew anywhere across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form & Blueprint Upload (7 cols) */}
          <div className="lg:col-span-7 bg-[#0C111C] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {submittedRef ? (
              <div className="text-center py-10 space-y-5 animate-in zoom-in-95">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                    Inquiry Confirmed & Dispatched
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display mt-1">
                    Thank You, {fullName}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto">
                    Your request has been routed to our Mombasa Road workshop desk. We will review your project parameters and respond within 4 business hours.
                  </p>
                </div>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-left space-y-1.5 text-slate-300 max-w-md mx-auto">
                  <div className="flex justify-between border-b border-slate-800 pb-1.5 text-slate-400">
                    <span>DISPATCH TICKET:</span>
                    <span className="text-amber-400 font-bold">{submittedRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Direct Phone:</span>
                    <span>{phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discipline:</span>
                    <span className="text-white">{projectType}</span>
                  </div>
                  {uploadedFile && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Drawing Attached:</span>
                      <span>{uploadedFile}</span>
                    </div>
                  )}
                </div>

                <div className="pt-3 flex flex-wrap justify-center gap-3">
                  <a
                    href={WORKSHOP_DETAILS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmittedRef(null);
                      setFullName('');
                      setPhone('');
                      setNotes('');
                      setUploadedFile(null);
                    }}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Submit Technical RFQ or Site Survey Request
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Please provide your contact information and structural requirements.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Architect Sarah Otieno"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">
                        Company / Contractor (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rift Valley Builders"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0780 610648 or +254..."
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@firm.co.ke"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 font-medium mb-1">
                        Project Scope *
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500 cursor-pointer"
                      >
                        <option value="Heavy Structural Steel / Warehouse">Heavy Structural Steel / Warehouse</option>
                        <option value="Architectural Tinted Glazing & Steel Canopy">Architectural Glazing & Steel Canopy</option>
                        <option value="Marine SS316 & Tempered Glass Balustrades">Marine SS316 & Glass Balustrades</option>
                        <option value="Bespoke CNC Laser-Cut Architectural Gate">Laser-Cut Architectural Gate</option>
                        <option value="Helical Spiral Metal Staircase">Helical Spiral Metal Staircase</option>
                        <option value="Elevated Water/Fuel Tank Tower">Elevated Water/Fuel Tank Tower</option>
                        <option value="Architectural Aluminum Facades & Louvers">Architectural Aluminum & Louvers</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-1">
                        Site Location in Kenya *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Syokimau / Karen / Athi River"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  {/* Blueprint Upload Simulation */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Attach Architectural Blueprints / Drawings (Optional)
                    </label>
                    <div className="relative border border-dashed border-slate-800 hover:border-slate-700 bg-slate-900/50 rounded-xl p-4 text-center cursor-pointer transition-colors">
                      <input
                        type="file"
                        accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg,.zip"
                        onChange={handleFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      <div className="flex items-center justify-center gap-2 text-slate-400">
                        <Upload className="w-4 h-4 text-amber-400" />
                        <span>{uploadedFile ? uploadedFile : 'Click to select PDF, CAD (.dwg/.dxf), or site sketches'}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Project Specifications & Scope Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify spans, desired heights, steel or aluminum preference, target completion dates..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 text-xs"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Technical Request...</span>
                    ) : (
                      <>
                        <span>Submit Project Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Direct workshop review by Ernexx certified structural engineers.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Physical Location & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0C111C] border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl space-y-6">
              <div>
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Nairobi Workshop
                </div>
                <h3 className="text-xl font-bold text-white font-display mt-0.5">
                  {WORKSHOP_DETAILS.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Mombasa Road / Syokimau Industrial Corridor
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span className="font-semibold text-slate-300">Dispatch Hotline:</span>
                  </div>
                  <a
                    href={`tel:${WORKSHOP_DETAILS.phone.replace(/\s+/g, '')}`}
                    className="block text-base font-mono font-bold text-amber-400 hover:underline pt-1"
                  >
                    {WORKSHOP_DETAILS.phone}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    <span className="font-semibold text-slate-300">Plus Code GPS Anchor:</span>
                  </div>
                  <div className="font-mono text-sm font-bold text-white pt-1">
                    {WORKSHOP_DETAILS.plusCode}
                  </div>
                  <span className="text-[11px] text-slate-500 block">Coord: -1.3592, 36.9380</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span className="font-semibold text-slate-300">Working Hours:</span>
                  </div>
                  <div className="text-slate-200 pt-0.5">
                    {WORKSHOP_DETAILS.hours}
                  </div>
                  <span className="text-[11px] text-emerald-400 block">Emergency rigging team on call 24/7</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={WORKSHOP_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Google Directions</span>
                </a>

                <a
                  href={WORKSHOP_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950 aspect-[16/9]">
              <iframe
                title="Ernexx Steel Fabricators Google Maps"
                src="https://maps.google.com/maps?q=-1.3592272,36.9379845&hl=en&z=15&output=embed"
                className="w-full h-full border-0 filter contrast-125 brightness-90"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
