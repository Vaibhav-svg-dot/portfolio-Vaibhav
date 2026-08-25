import React from 'react';

export default function SectionHeader({
  badge,
  index,
  title,
  highlight,
  subtitle,
  align = 'center'
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      {/* Badge with glowing pill */}
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wider uppercase mb-4 shadow-sm shadow-purple-900/20`}>
        {index && <span className="text-purple-400 font-bold">{index}</span>}
        {index && <span className="text-purple-600">•</span>}
        <span>{badge}</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-display">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-4 text-slate-400 text-base md:text-lg max-w-2xl font-light ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
