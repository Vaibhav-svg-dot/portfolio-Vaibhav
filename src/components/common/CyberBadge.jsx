import React from 'react';

export default function CyberBadge({ label, variant = 'purple', size = 'sm' }) {
  const styles = {
    purple: 'bg-purple-950/40 text-purple-300 border-purple-500/30 hover:border-purple-400',
    blue: 'bg-blue-950/40 text-blue-300 border-blue-500/30 hover:border-blue-400',
    cyan: 'bg-cyan-950/40 text-cyan-300 border-cyan-500/30 hover:border-cyan-400',
    emerald: 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30 hover:border-emerald-400',
    neutral: 'bg-slate-900/60 text-slate-300 border-slate-700/50 hover:border-slate-500'
  };

  const sizeClasses = {
    xs: 'text-[11px] px-2 py-0.5',
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3.5 py-1.5'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md font-mono border transition-colors duration-200 ${styles[variant] || styles.purple} ${sizeClasses[size] || sizeClasses.sm}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 animate-pulse" />
      {label}
    </span>
  );
}
