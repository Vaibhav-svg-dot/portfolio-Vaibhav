import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo } from '../../data/portfolioData';

export default function SocialRail() {
  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'email':
      case 'mail':
        return <Mail className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <aside className="fixed left-6 bottom-0 z-40 hidden xl:flex flex-col items-center gap-5">
      <div className="flex flex-col items-center gap-4">
        {contactInfo.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="p-2.5 rounded-xl text-slate-400 hover:text-purple-300 hover:bg-purple-950/40 hover:border-purple-500/40 border border-transparent transition-all duration-200 group"
          >
            <div className="group-hover:scale-110 transition-transform">
              {getIcon(social.name)}
            </div>
          </a>
        ))}
      </div>

      {/* Futuristic Glowing Connecting Rail */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-[1px] h-20 bg-gradient-to-b from-purple-500/50 via-indigo-500/30 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7] animate-pulse" />
      </div>
    </aside>
  );
}
