import React from 'react';
import { Code2, Server, GraduationCap, Cpu, CheckCircle2, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import TiltCard from '../components/common/TiltCard';

export default function About() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-purple-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      default:
        return <Terminal className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="01"
          badge="Professional Profile"
          title="About"
          highlight="Vaibhav"
          subtitle={personalInfo.about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                Bridging Technology & Operational Digital Systems
              </h3>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed font-light">
                {personalInfo.about.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Core Attributes */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Hands-on full-stack development',
                  'Enterprise platform management',
                  'Database-driven web engineering',
                  'Debugging & logical problem solving'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Highlight Metric / Focus Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {personalInfo.about.highlights.map((item, idx) => (
              <TiltCard key={idx} maxTilt={5}>
                <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 shrink-0">
                    {getIcon(item.icon)}
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm font-semibold text-white leading-snug">
                      {item.value}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
