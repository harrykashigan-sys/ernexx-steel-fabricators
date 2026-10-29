/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { SpecsPage } from './pages/SpecsPage';
import { WorkshopPage } from './pages/WorkshopPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

function AppContent() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [prefilledProject, setPrefilledProject] = useState('');

  const handleOpenQuote = (projectTitle = '') => {
    setPrefilledProject(projectTitle);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080B10] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black">
      {/* Top Bar Navigation */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      {/* Main Multi-Page Routed Content */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenQuote={() => handleOpenQuote()} />} />
          <Route path="/capabilities" element={<CapabilitiesPage onOpenQuote={() => handleOpenQuote()} />} />
          <Route path="/projects" element={<ProjectsPage onOpenQuoteWithProject={(title) => handleOpenQuote(title)} />} />
          <Route path="/estimator" element={<EstimatorPage onOpenQuote={() => handleOpenQuote()} />} />
          <Route path="/specs" element={<SpecsPage />} />
          <Route path="/workshop" element={<WorkshopPage onOpenQuote={() => handleOpenQuote()} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage onOpenQuote={() => handleOpenQuote()} />} />
          <Route path="/faq" element={<FAQPage onOpenQuote={() => handleOpenQuote()} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage onOpenQuote={() => handleOpenQuote()} />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Request For Quotation (RFQ) Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        prefilledProject={prefilledProject}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
