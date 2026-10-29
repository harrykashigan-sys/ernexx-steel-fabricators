import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, WORKSHOP_DETAILS } from '../data/steelData';
import { ArrowLeft, Clock, Calendar, User, Phone, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BlogPostPageProps {
  onOpenQuote: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onOpenQuote }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];

  return (
    <article className="pt-24 pb-20 bg-[#080B10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Technical Guides</span>
        </Link>

        {/* Post Header */}
        <header className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
            <span>{post.category}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{post.readTime}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{post.date}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.18] font-display">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-slate-400 border-b border-slate-800 pb-6">
            <User className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-white">{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{post.authorRole}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 mb-10 shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* SEO Keywords Block */}
        <div className="mt-10 pt-6 border-t border-slate-800">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
            Related Construction Topics:
          </div>
          <div className="flex flex-wrap gap-2">
            {post.keywords.map((kw, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400/90"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Consultation Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-[#0D1424] border border-amber-500/30 shadow-xl space-y-4">
          <h3 className="text-xl font-bold text-white font-display">
            Have a Structural Steel, Aluminum, or Glazing Project in Mind?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Our certified structural engineers and estimators are available to review your architectural drawings, calculate steel tonnage, and prepare a formal contractor BOQ.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              <span>Request Technical Quotation</span>
            </button>
            <a
              href={`tel:${WORKSHOP_DETAILS.phone.replace(/\s+/g, '')}`}
              className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 font-mono text-xs rounded-lg transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {WORKSHOP_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
