import React, { useState } from 'react';
import { 
  Building2, 
  Server, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  Database,
  Cpu
} from 'lucide-react';
import { charismightExperience } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import TiltCard from '../components/common/TiltCard';
import CyberBadge from '../components/common/CyberBadge';

export default function Experience() {
  const [selectedPlatform, setSelectedPlatform] = useState('lms');

  const activePlatform = charismightExperience.platforms.find((p) => p.id === selectedPlatform) || charismightExperience.platforms[0];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="03"
          badge="Professional Experience"
          title="CHARISMIGHT"
          highlight="EXPERIENCE"
          subtitle={charismightExperience.overview}
        />

        {/* Charismight Master Experience Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden mb-12">
          
          {/* Header Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-[1px] shrink-0 shadow-lg shadow-purple-900/30">
                <div className="w-full h-full bg-[#080b18] rounded-[15px] flex items-center justify-center text-purple-400">
                  <Building2 className="w-7 h-7" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {charismightExperience.company}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                    ● {charismightExperience.badge}
                  </span>
                </div>
                <div className="text-base sm:text-lg font-semibold text-purple-300 font-mono mt-1">
                  {charismightExperience.role}
                </div>
              </div>
            </div>

            <div className="text-left md:text-right font-mono text-xs text-slate-400 space-y-1">
              <div>Scope: <span className="text-slate-200">Enterprise Digital & Web Platforms</span></div>
              <div>Status: <span className="text-purple-400 font-semibold">{charismightExperience.period}</span></div>
            </div>
          </div>

          {/* Interactive Dual-Platform Switcher */}
          <div className="mt-8">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Digital Platforms Managed & Operated:</span>
            </div>

            {/* Platform Selection Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {charismightExperience.platforms.map((platform) => {
                const isSelected = platform.id === selectedPlatform;
                return (
                  <button
                    key={platform.id}
                    onClick={() => setSelectedPlatform(platform.id)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                      isSelected
                        ? 'bg-purple-950/30 border-purple-500/60 shadow-lg shadow-purple-950/50'
                        : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white font-display">
                        {platform.name}
                      </h4>
                      <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? 'bg-purple-400 shadow-[0_0_8px_#a855f7]' : 'bg-slate-600'}`} />
                    </div>
                    <div className="text-xs text-slate-400 mb-3">{platform.type}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {platform.stack.map((tech) => (
                        <CyberBadge key={tech} label={tech} size="xs" variant={isSelected ? 'purple' : 'neutral'} />
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Platform Deep-Dive Spotlight Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090d1c] border border-purple-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                {/* Left: Role description & responsibilities */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{activePlatform.status}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white font-display">
                      {activePlatform.name}
                    </h4>
                    <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed font-light">
                      {activePlatform.roleDescription}
                    </p>
                  </div>

                  {/* Core Responsibilities */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono uppercase text-slate-400">Key Operational Responsibilities:</div>
                    {activePlatform.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Technical Stack Matrix */}
                <div className="lg:col-span-5 p-5 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 pb-3 border-b border-white/10">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Technology Ecosystem</span>
                  </div>

                  <div className="space-y-3">
                    {activePlatform.stack.map((tech, idx) => (
                      <div key={tech} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-center gap-2.5">
                          <Cpu className="w-4 h-4 text-purple-400" />
                          <span className="text-sm font-semibold text-white">{tech}</span>
                        </div>
                        <span className="text-xs font-mono text-slate-400">
                          {tech === 'PHP' || tech === 'Laravel' || tech === 'Python' || tech === 'Django' ? 'Core Backend' : 'Relational Storage'}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-slate-400 text-center">
                    Platform Management & Digital Operations
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
