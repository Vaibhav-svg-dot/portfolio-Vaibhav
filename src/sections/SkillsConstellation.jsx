import React, { useState } from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Cpu, 
  Sparkles, 
  Terminal, 
  Layers,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import TiltCard from '../components/common/TiltCard';

export default function SkillsConstellation() {
  const [activeCategoryId, setActiveCategoryId] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Layout className="w-4 h-4" />;
      case 'backend':
        return <Server className="w-4 h-4" />;
      case 'database':
        return <Database className="w-4 h-4" />;
      case 'tools':
        return <Wrench className="w-4 h-4" />;
      case 'core':
        return <Cpu className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const allSkills = skillsData.categories.flatMap((cat) =>
    cat.skills.map((skill) => ({
      name: skill,
      category: cat.name,
      categoryId: cat.id
    }))
  );

  const displayedCategories =
    activeCategoryId === 'all'
      ? skillsData.categories
      : skillsData.categories.filter((cat) => cat.id === activeCategoryId);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="06"
          badge="Technical Competencies"
          title="TECHNOLOGY"
          highlight="CONSTELLATION"
          subtitle="Organized technology ecosystem encompassing full-stack web engineering, database architecture, systems tooling, and algorithmic problem solving."
        />

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
              activeCategoryId === 'all'
                ? 'bg-purple-600/30 text-white border border-purple-500/50 shadow-md shadow-purple-950'
                : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>All Technologies ({allSkills.length})</span>
          </button>

          {skillsData.categories.map((cat) => {
            const isSelected = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-purple-600/30 text-white border border-purple-500/50 shadow-md shadow-purple-950'
                    : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/5'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.name} ({cat.skills.length})</span>
              </button>
            );
          })}
        </div>

        {/* Constellation Grid Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <TiltCard key={category.id} maxTilt={5}>
              <div className="glass-card rounded-3xl p-6 border border-white/10 h-full flex flex-col justify-between relative overflow-hidden group">
                
                {/* Subtle top glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300">
                        {getCategoryIcon(category.id)}
                      </div>
                      <h3 className="text-lg font-bold text-white font-display">
                        {category.name}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-purple-400">
                      {category.skills.length} items
                    </span>
                  </div>

                  {/* Skills Constellation Pills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-1.5 rounded-xl bg-[#090d1c] border border-white/10 hover:border-purple-500/50 hover:bg-purple-950/30 text-xs font-mono text-slate-200 hover:text-white transition-all duration-200 flex items-center gap-2 group/skill cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover/skill:scale-125 transition-transform" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Footer Indicator */}
                <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Stack Domain: Verified</span>
                  <span className="text-purple-400">● Core Capability</span>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
