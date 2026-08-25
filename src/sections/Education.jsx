import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';
import { education } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import TiltCard from '../components/common/TiltCard';

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="07"
          badge="Academic Background"
          title="ACADEMIC"
          highlight="FOUNDATION"
          subtitle="Formal computer science education grounding practical engineering in rigorous computational principles."
        />

        <div className="max-w-4xl mx-auto">
          <TiltCard maxTilt={5}>
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden group">
              {/* Subtle top flare */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {education.degree}
                    </h3>
                    <div className="text-base font-semibold text-purple-300 font-display mt-0.5">
                      {education.institution}
                    </div>
                  </div>
                </div>

                <div className="space-y-1 font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-purple-400 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="pt-6 space-y-4">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {education.description}
                </p>

                <div className="pt-4 space-y-2.5">
                  <div className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>Academic Highlights & Curricular Focus:</span>
                  </div>
                  {education.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
