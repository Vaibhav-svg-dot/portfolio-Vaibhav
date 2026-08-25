import React from 'react';
import { ArrowUp, Terminal, ShieldCheck, Heart } from 'lucide-react';
import { personalInfo, contactInfo } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#04060d] pt-14 pb-10 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#070a14] rounded-[10px] flex items-center justify-center font-display font-black text-white text-base">
                  V.
                </div>
              </div>
              <span className="font-display font-bold text-lg text-white">{personalInfo.name}</span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed font-light">
              {personalInfo.role} at <span className="text-purple-300 font-medium">Charismight</span>. Focused on creating reliable web applications, managing digital platforms, and continuous engineering growth.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.status}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span>Directory</span>
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {['About', 'Journey', 'Projects', 'Experience', 'Certifications', 'Skills'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-purple-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Platforms */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Digital Platforms</span>
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="text-slate-300 font-medium">Charismight LMS</li>
              <li className="text-xs text-purple-400 font-mono">PHP / Laravel / MySQL</li>
              <li className="text-slate-300 font-medium pt-1">Marine OneStop Solution</li>
              <li className="text-xs text-cyan-400 font-mono">Python / Django</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-slate-400">Crafted with React, Tailwind & Vite</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-950/30 transition-all flex items-center gap-1 group"
              aria-label="Back to top"
            >
              <span className="text-[11px] font-mono group-hover:text-purple-300">TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-purple-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
