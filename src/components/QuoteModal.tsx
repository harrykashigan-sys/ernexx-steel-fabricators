import React, { useState } from 'react';
import { X, CheckCircle2, Upload, FileText, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { WORKSHOP_DETAILS } from '../data/steelData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProject?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefilledProject = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(prefilledProject || 'Heavy Structural Steel / Warehouse');
  const [location, setLocation] = useState('Nairobi Metro');
  const [notes, setNotes] = useState('');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

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
      const generatedRef = `ESF-RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setIsSubmitting(false);
      setSubmittedRef(generatedRef);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#0C121E] border border-amber-500/30 rounded-2xl max-w-xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedRef ? (
          /* Submission Confirmation Card */
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                RFQ Dispatched to Nairobi Workshop
              </div>
              <h3 className="text-2xl font-bold text-white font-display mt-1">
                Quotation Request Received
              </h3>
              <p className="text-xs text-slate-400 mt-2 max-w-md mx-auto">
                Our senior structural steel estimator is reviewing your project parameters and BOQ notes. A formal technical quote will be dispatched within 4 business hours.
              </p>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-left space-y-1.5 text-slate-300">
              <div className="flex justify-between border-b border-slate-800 pb-1.5 text-slate-400">
                <span>REFERENCE NUMBER:</span>
                <span className="text-amber-400 font-bold">{submittedRef}</span>
              </div>
              <div className="flex justify-between">
                <span>Client:</span>
                <span className="text-white">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span>Direct Contact:</span>
                <span>{phone}</span>
              </div>
              <div className="flex justify-between">
                <span>Project Scope:</span>
                <span className="text-slate-200">{projectType}</span>
              </div>
              {uploadedFile && (
                <div className="flex justify-between text-emerald-400">
                  <span>Attached Blueprint:</span>
                  <span>{uploadedFile}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={WORKSHOP_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Follow Up via WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Body */
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="text-xs font-mono text-amber-400 tracking-wider uppercase">
                Technical Request for Quotation (RFQ)
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-0.5">
                Fabrication & Erection Proposal
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Provide your structural requirements for an itemized quotation, steel tonnage calculation, and timeline projection.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eng. David Kariuki"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Construction Ltd"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
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
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.co.ke"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Fabrication Discipline *
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    <option value="Heavy Structural Steel / Warehouse">Heavy Structural Steel / Warehouse</option>
                    <option value="Architectural Tinted Glazing & Steel Canopy">Architectural Tinted Glazing & Canopy</option>
                    <option value="Marine SS316 & Tempered Glass Balustrades">Marine SS316 & Glass Balustrades</option>
                    <option value="Laser-Cut Architectural Entrance Gate">Laser-Cut Architectural Gate</option>
                    <option value="Helical Spiral Metal Staircase">Helical Spiral Metal Staircase</option>
                    <option value="Elevated Water/Fuel Tank Tower">Elevated Water/Fuel Tank Tower</option>
                    <option value="Custom Industrial Metalwork">Custom Industrial Metalwork</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Erection Site Location in Kenya *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Syokimau / Karen / Athi River"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Drawing / Blueprint file upload simulation */}
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Attach Architectural Drawings / BOQ (Optional)
                </label>
                <div className="relative border border-dashed border-slate-800 hover:border-slate-700 bg-slate-900/50 rounded-lg p-3 text-center cursor-pointer transition-colors">
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
                  Technical Specifications / Dimensions Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Include spans, desired height, steel grade, finish preference, or target completion dates..."
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
                  <span>Processing Engineering Request...</span>
                ) : (
                  <>
                    <span>Submit Request for Quotation</span>
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
    </div>
  );
};
