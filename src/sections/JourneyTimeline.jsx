import React, { useState, useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  Dumbbell, 
  Briefcase, 
  Anchor, 
  Server, 
  Award, 
  BookOpen, 
  Compass, 
  ArrowRight,
  Sparkles,
  Calendar
} from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import TiltCard from '../components/common/TiltCard';

export default function JourneyTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  const getMilestoneIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Anchor':
        return <Anchor className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const getTargetSection = (step) => {
    switch (step) {
      case '01':
      case '02':
        return 'projects';
      case '03':
      case '04':
      case '05':
        return 'experience';
      case '06':
        return 'certifications';
      case '07':
        return 'education';
      case '08':
        return 'what-next';
      default:
        return 'projects';
    }
  };

  const scrollToTarget = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Track active item during scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPos = window.scrollY + window.innerHeight * 0.45;

      itemRefs.current.forEach((el, index) => {
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset;
          if (scrollPos >= top) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="journey" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="02"
          badge="Interactive Career Path"
          title="MY"
          highlight="JOURNEY"
          subtitle="An interactive digital progression tracing foundational engineering, real-world systems, platform operations, and continuous technical growth."
        />

        {/* Milestone Quick Navigation Rail for fast exploration */}
        <div className="flex items-center justify-center gap-2 mb-16 overflow-x-auto pb-4 max-w-4xl mx-auto scrollbar-none px-2">
          {journeyMilestones.map((m, idx) => (
            <button
              key={m.step}
              onClick={() => {
                const el = itemRefs.current[idx];
                if (el) {
                  const yOffset = -100;
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all shrink-0 flex items-center gap-1.5 ${
                activeStep === idx
                  ? 'bg-purple-600/30 text-purple-200 border border-purple-400/50 shadow-sm shadow-purple-500/30'
                  : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/5'
              }`}
            >
              <span className="font-bold">{m.step}</span>
              <span className="hidden sm:inline text-[11px] opacity-80">{m.title}</span>
            </button>
          ))}
        </div>

        {/* The Vertical Glowing Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-slate-800/80">
            {/* Glowing active scroll progress fill */}
            <div
              className="w-full bg-gradient-to-b from-purple-500 via-indigo-400 to-cyan-400 transition-all duration-300 shadow-[0_0_12px_#a855f7]"
              style={{
                height: `${Math.min(100, ((activeStep + 1) / journeyMilestones.length) * 100)}%`
              }}
            />
          </div>

          {/* Timeline Milestones */}
          <div className="space-y-12 md:space-y-16">
            {journeyMilestones.map((item, index) => {
              const isEven = index % 2 === 0;
              const isPassed = index <= activeStep;
              const isCurrent = index === activeStep;

              return (
                <div
                  key={item.step}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 md:gap-0`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                        isCurrent
                          ? 'bg-purple-600 text-white border-2 border-white shadow-[0_0_20px_#a855f7] scale-110'
                          : isPassed
                          ? 'bg-[#0f1426] text-purple-300 border border-purple-500/50 shadow-md shadow-purple-950'
                          : 'bg-[#070a14] text-slate-500 border border-white/10'
                      }`}
                    >
                      {item.step}
                    </div>
                  </div>

                  {/* Content Card (Left or Right on desktop, indented on mobile) */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                    }`}
                  >
                    <TiltCard maxTilt={5}>
                      <div
                        className={`glass-card p-6 sm:p-7 rounded-3xl border transition-all duration-300 relative overflow-hidden group ${
                          isCurrent
                            ? 'border-purple-500/50 bg-[#0d1224]/90 shadow-xl shadow-purple-950/40'
                            : 'border-white/10 hover:border-purple-500/30'
                        }`}
                      >
                        {/* Top Gradient Flare */}
                        <div
                          className="absolute top-0 inset-x-0 h-[2px] opacity-60"
                          style={{
                            background: `linear-gradient(to right, transparent, ${item.color}, transparent)`
                          }}
                        />

                        {/* Category & Period Tag */}
                        <div
                          className={`flex items-center gap-2 mb-3 ${
                            isEven ? 'md:justify-end' : 'md:justify-start'
                          }`}
                        >
                          <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-purple-300 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                            {item.category}
                          </span>
                          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-slate-500" />
                            {item.period}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="mb-3">
                          <h3 className="text-lg sm:text-xl font-bold text-white font-display flex items-center gap-2 group-hover:text-purple-300 transition-colors">
                            {isEven && <span className="hidden md:inline-block w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />}
                            {item.title}
                            {!isEven && <span className="hidden md:inline-block w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />}
                          </h3>
                          <div className="text-sm font-semibold text-purple-400 font-mono mt-0.5">
                            {item.subtitle}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-sm leading-relaxed font-light mb-5">
                          {item.description}
                        </p>

                        {/* Jump to deep section button */}
                        <div
                          className={`flex items-center ${
                            isEven ? 'md:justify-end' : 'md:justify-start'
                          }`}
                        >
                          <button
                            onClick={() => scrollToTarget(getTargetSection(item.step))}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors group/btn py-1"
                          >
                            <span>Explore section</span>
                            <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </TiltCard>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
