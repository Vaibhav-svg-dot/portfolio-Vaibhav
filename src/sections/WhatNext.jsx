import React from 'react';
import { Compass, Sparkles, Rocket, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { futureFocus } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import TiltCard from '../components/common/TiltCard';

export default function WhatNext() {
  const getPillarIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'learning':
        return <Compass className="w-5 h-5 text-purple-400" />;
      case 'building':
        return <Rocket className="w-5 h-5 text-blue-400" />;
      case 'experimenting':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'improving':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="what-next" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="08"
          badge="Forward Horizon"
          title="WHAT I'M"
          highlight="BUILDING NEXT"
          subtitle="A forward-looking technical roadmap centered on continuous learning, scalable architectures, and advanced engineering practices."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {futureFocus.map((item, idx) => (
            <TiltCard key={idx} maxTilt={6}>
              <div className="glass-card rounded-3xl p-6 border border-white/10 h-full flex flex-col justify-between relative overflow-hidden group">
                {/* Top Border Flare */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent group-hover:via-cyan-400/60 transition-all duration-300" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {getPillarIcon(item.title)}
                  </div>

                  <div className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-1">
                    0{idx + 1} — Focus Area
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-2 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-300 mb-4">
                    {item.tagline}
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Status: Active</span>
                  <span className="text-emerald-400">● In Progress</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
