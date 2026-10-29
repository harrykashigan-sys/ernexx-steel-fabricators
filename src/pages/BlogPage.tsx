import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/steelData';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

export const BlogPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-wider uppercase mb-2">
            <span>Engineering Knowledge Base</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Kenyan Construction & Metallurgy Insights</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            Steel & Aluminum Technical Guides.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            In-depth engineering resources for contractors, quantity surveyors, architects, and developers in Kenya. Covering structural steel warehouse erection, architectural tinted glass canopies, and stainless steel balustrade metallurgy.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-[#0C111C] border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col group shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black/85 px-2.5 py-1 rounded text-[11px] font-mono text-amber-400 border border-slate-800">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{post.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{post.date}</span>
                  </div>

                  <h2 className="text-lg font-bold text-white font-display group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Keywords tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {post.keywords.slice(0, 3).map((kw, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">By {post.author}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
