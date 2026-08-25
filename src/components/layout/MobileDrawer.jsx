import React from 'react';
import { X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo } from '../../data/portfolioData';

export default function MobileDrawer({ isOpen, onClose, activeSection }) {
  if (!isOpen) return null;

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'My Journey' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        const yOffset = -70;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-[#0a0d18] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl shadow-purple-950/50">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#070a14] rounded-[7px] flex items-center justify-center font-display font-bold text-sm text-white">
                  V.
                </div>
              </div>
              <span className="font-display font-bold text-sm text-white">Navigation</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nav List */}
          <nav className="mt-6 flex flex-col gap-1.5">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-purple-400/80">0{idx + 1}</span>
                    <span>{item.label}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/10">
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold cyber-btn-primary mb-4"
          >
            <span>Let's Build Something</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <div className="flex items-center justify-center gap-4 text-slate-400">
            <a
              href={contactInfo.socials.find(s => s.name === 'LinkedIn')?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={contactInfo.socials.find(s => s.name === 'GitHub')?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="p-2 rounded-lg bg-white/5 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
