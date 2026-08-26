import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  ArrowUpRight,
  Code2,
  Database,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import TiltCard from '../components/common/TiltCard';
import CyberBadge from '../components/common/CyberBadge';

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="04"
          badge="Featured Engineering Work"
          title="ENGINEERED"
          highlight="PROJECTS"
          subtitle="Real-world software systems built with modern full-stack architectures, relational & document databases, and secure authentication flows."
        />

        {/* Project Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {projects.map((proj) => {
            const isSelected = proj.id === activeProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProjectId(proj.id)}
                className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-purple-600/30 text-white border border-purple-400/60 shadow-lg shadow-purple-950/50'
                    : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/10'
                }`}
              >
                <Code2 className={`w-4 h-4 ${isSelected ? 'text-purple-400' : 'text-slate-500'}`} />
                <span>{proj.title}</span>
              </button>
            );
          })}
        </div>

        {/* Deep Project Showcase Cards */}
        <div className="space-y-16">
          {projects.map((project) => {
            if (project.id !== activeProjectId) return null;

            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

                {/* Top Bar: Timeline & Category */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {project.timeline}
                    </span>
                  </div>

                  {/* Actions / Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.links.github}
                      onClick={(e) => project.links.github === '#' && e.preventDefault()}
                      className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                      title={project.links.github === 'https://github.com/Vaibhav-svg-dot/portfolio-Vaibhav.git' ? 'Repository placeholder' : 'View GitHub'}
                    >
                      <Github className="w-3.5 h-3.5 text-purple-400" />
                      <span>Code Repo</span>
                    </a>
                    <a
                      href={project.links.live}
                      onClick={(e) => project.links.live === 'https://www.linkedin.com/in/vaibhav-gaikwad-42b7583b9?utm_source=share_via&utm_content=profile&utm_medium=member_android' && e.preventDefault()}
                      className="px-3.5 py-1.5 rounded-xl cyber-btn-primary text-xs font-mono text-white flex items-center gap-1.5"
                      title={project.links.live === '#' ? 'Live deployment placeholder' : 'View Live Demo'}
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
                  
                  {/* Left Column: Narrative, Problem, What Built, Contribution */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-base mt-2 leading-relaxed font-light">
                        {project.summary}
                      </p>
                    </div>

                    {/* Problem Statement Card */}
                    <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-amber-400/90 flex items-center gap-1.5">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>The Problem:</span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed font-light">
                        {project.problem}
                      </p>
                    </div>

                    {/* What I Built */}
                    <div className="p-5 rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                        <span>What I Built:</span>
                      </div>
                      <p className="text-sm text-slate-200 leading-relaxed font-light">
                        {project.whatIBuilt}
                      </p>
                    </div>

                    {/* My Contribution */}
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        My Engineering Contribution:
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed font-light bg-white/5 p-4 rounded-xl border border-white/5">
                        {project.myContribution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Features Checklist & Tech Badges & Cyber Mockup */}
                  <div className="lg:col-span-5 space-y-6">
                    
                    {/* Interactive Cyber Mockup Preview Container */}
                    <div className="rounded-2xl bg-[#080b18] border border-purple-500/30 p-4 shadow-xl">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {project.id}.app
                        </span>
                      </div>

                      {/* Mockup Screen Visual */}
                      <div className="rounded-xl bg-gradient-to-br from-[#0e1329] to-[#090c1a] border border-white/5 p-4 min-h-[160px] flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-purple-300 font-display">
                              System Console
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400">● ONLINE</span>
                          </div>
                          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 w-3/4 animate-pulse" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400 mt-4">
                          <div className="p-2 rounded bg-black/40 border border-white/5">
                            <span className="text-slate-300 font-semibold block">Authentication</span>
                            <span>{project.id === 'gym-management' ? 'JWT Tokens' : 'Secure Sessions'}</span>
                          </div>
                          <div className="p-2 rounded bg-black/40 border border-white/5">
                            <span className="text-slate-300 font-semibold block">Database</span>
                            <span>{project.id === 'gym-management' ? 'MongoDB NoSQL' : 'MySQL Relational'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features Checklist */}
                    <div className="p-5 rounded-2xl bg-black/30 border border-white/5 space-y-3">
                      <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Core Features:</span>
                      </div>
                      <div className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Badges */}
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                        Technologies Deployed:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <CyberBadge key={tech} label={tech} variant="purple" size="sm" />
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
