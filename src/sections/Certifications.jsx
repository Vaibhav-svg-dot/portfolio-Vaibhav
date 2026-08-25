import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck, Database, Globe, Cpu } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import TiltCard from '../components/common/TiltCard';
import CyberBadge from '../components/common/CyberBadge';

export default function Certifications() {
  const [modalCert, setModalCert] = useState(null);

  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-6 h-6 text-purple-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      default:
        return <Award className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="05"
          badge="Verified Credentials"
          title="PROFESSIONAL"
          highlight="CERTIFICATIONS"
          subtitle="Accredited certifications validating relational database mastery, modern web development capabilities, and Internet of Things architectures."
        />

        {/* 3D Tilt Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <TiltCard key={cert.id} maxTilt={7}>
              <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 h-full flex flex-col justify-between relative overflow-hidden group">
                
                {/* Top Border Flare */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent group-hover:via-cyan-400/70 transition-all duration-500" />
                
                <div>
                  {/* Top Row: Icon & Year Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-400 transition-all">
                      {getCertIcon(cert.icon)}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-purple-400" />
                      {cert.year}
                    </span>
                  </div>

                  {/* Issuer & Title */}
                  <div className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-1">
                    {cert.issuer}
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-4 group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Covered Skills */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Core Competencies:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-xs text-slate-300 font-mono"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setModalCert(cert)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-purple-600/25 border border-white/10 hover:border-purple-500/40 text-xs font-mono text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all group/btn"
                  >
                    <span>View Certificate Details</span>
                    <ExternalLink className="w-3.5 h-3.5 text-purple-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

        {/* Certificate Modal Dialog */}
        {modalCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-lg rounded-3xl bg-[#0a0e1c] border border-purple-500/40 p-6 sm:p-8 shadow-2xl shadow-purple-950/80">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-950 border border-purple-500/30">
                    <ShieldCheck className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-display">
                      {modalCert.title}
                    </h4>
                    <div className="text-xs font-mono text-purple-400">Issued by {modalCert.issuer} ({modalCert.year})</div>
                  </div>
                </div>
                <button
                  onClick={() => setModalCert(null)}
                  className="text-slate-400 hover:text-white font-mono text-sm px-2 py-1 bg-white/5 rounded-lg border border-white/10"
                >
                  ESC ✕
                </button>
              </div>

              <div className="space-y-4 text-sm text-slate-300 mb-6">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase">Verification & Credential Status:</div>
                  <div className="text-sm font-medium text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Completed & Verified — {modalCert.year}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase">Curriculum Domains:</div>
                  <ul className="space-y-1.5">
                    {modalCert.topics.map((t, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={modalCert.link}
                  onClick={(e) => modalCert.link === '#' && e.preventDefault()}
                  className="flex-1 py-2.5 rounded-xl cyber-btn-primary text-center text-xs font-mono font-semibold"
                >
                  {modalCert.link === '#' ? 'Verified Certificate Record' : 'Open Certificate Link'}
                </a>
                <button
                  onClick={() => setModalCert(null)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
