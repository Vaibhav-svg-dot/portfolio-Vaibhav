import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Compass,
  Code,
  Terminal,
  ShieldCheck,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import TiltCard from '../components/common/TiltCard';

const HACKER_LINES = [
  '> system.init("vaibhav")',
  '> loading_profile...',
  '> identity: VAIBHAV_GAIKWAD',
  '> role: DIGITAL_EXECUTIVE',
  '> company: CHARISMIGHT',
  '> LMS_PLATFORM -> ONLINE',
  '> PHP::Laravel::boot()',
  '> MySQL.connect() -> OK',
  '> Marine_OneStop -> ACTIVE',
  '> Python::Django::ready()',
  '> Node.js::Express -> READY',
  '> MongoDB.connect() -> OK',
  '> authentication -> VERIFIED',
  '> portfolio.render() -> SUCCESS',
  '> journey.load() -> COMPLETE',
  '> status: AVAILABLE',
];

const BINARY_LINES = [
  '01001001',
  '11010101',
  '10110010',
  '01100110',
  'ACCESS_GRANTED',
  '10101010',
  'SYSTEM_ONLINE',
  '11001001',
  'DATABASE_ACTIVE',
  '00110110',
  'PROJECT_FOUND',
  '01010101',
];

const STACK_LINES = [
  'PHP / LARAVEL',
  'PYTHON / DJANGO',
  'NODE / EXPRESS',
  'MYSQL',
  'MONGODB',
  'JAVASCRIPT',
  'HTML / CSS',
  'FULL_STACK',
  'DIGITAL_OPS',
  'CHARISMIGHT',
];

function FallingCodeColumn({ items, className = '', speed = 'normal', delay = '0s' }) {
  const repeated = useMemo(() => [...items, ...items, ...items], [items]);

  return (
    <div
      className={`hacker-column ${speed} ${className}`}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      {repeated.map((item, index) => (
        <span key={`${item}-${index}`} className="hacker-code-line">
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  const [headlineTyped, setHeadlineTyped] = useState('');
  const [headlineDone, setHeadlineDone] = useState(false);

  const [typedCmd, setTypedCmd] = useState('');
  const [typedOutput, setTypedOutput] = useState('');
  const [terminalIndex, setTerminalIndex] = useState(0);
  const [terminalPhase, setTerminalPhase] = useState('command');

  const terminalCommands = useMemo(
    () => [
      {
        cmd: 'npx vaibhav --stack',
        output:
          '{ backend: ["Python/Django", "PHP/Laravel", "Node.js"], db: "MySQL | MongoDB" }',
      },
      {
        cmd: 'vaibhav whoami',
        output:
          '{ role: "Digital Executive", company: "Charismight", focus: "Digital Platforms" }',
      },
      {
        cmd: 'vaibhav --platforms',
        output:
          '{ lms: "PHP/Laravel/MySQL", marine: "Python/Django" }',
      },
      {
        cmd: 'git status',
        output: 'portfolio: ready_to_build_the_future',
      },
    ],
    []
  );

  const heroPrefix = `${personalInfo.hero.greeting} `;
  const heroFullText = `${heroPrefix}${personalInfo.hero.nameHighlight}`;

  useEffect(() => {
    if (headlineTyped.length < heroFullText.length) {
      const timer = setTimeout(() => {
        setHeadlineTyped(
          heroFullText.slice(0, headlineTyped.length + 1)
        );
      }, 65);

      return () => clearTimeout(timer);
    }

    if (!headlineDone) {
      const timer = setTimeout(() => setHeadlineDone(true), 500);
      return () => clearTimeout(timer);
    }

    return undefined;
  }, [headlineTyped, headlineDone, heroFullText]);

  useEffect(() => {
    const current = terminalCommands[terminalIndex];

    if (terminalPhase === 'command') {
      if (typedCmd.length < current.cmd.length) {
        const timer = setTimeout(() => {
          setTypedCmd(current.cmd.slice(0, typedCmd.length + 1));
        }, 38);

        return () => clearTimeout(timer);
      }

      const timer = setTimeout(() => {
        setTerminalPhase('output');
      }, 450);

      return () => clearTimeout(timer);
    }

    if (terminalPhase === 'output') {
      if (typedOutput.length < current.output.length) {
        const timer = setTimeout(() => {
          setTypedOutput(current.output.slice(0, typedOutput.length + 1));
        }, 20);

        return () => clearTimeout(timer);
      }

      const timer = setTimeout(() => {
        setTypedCmd('');
        setTypedOutput('');
        setTerminalIndex((index) => (index + 1) % terminalCommands.length);
        setTerminalPhase('command');
      }, 1500);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, [
    terminalCommands,
    terminalIndex,
    terminalPhase,
    typedCmd,
    typedOutput,
  ]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  const coreStack = [
    'PHP / Laravel',
    'Python / Django',
    'Node.js',
    'MySQL',
    'MongoDB',
    'React',
  ];

  return (
    <>
      <style>{`
        /* =========================================================
           VAIBHAV HERO - FALLING HACKER CODE
           This CSS is intentionally inside Hero.jsx so you only
           need to replace this one file.
        ========================================================= */

        .hacker-code-layer {
          position: absolute;
          inset: -120px;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
          opacity: 0.92;
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }

        .hacker-code-layer::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at 50% 45%,
              rgba(34, 197, 94, 0.08),
              transparent 45%
            ),
            linear-gradient(
              90deg,
              transparent,
              rgba(34, 197, 94, 0.025),
              transparent
            );
        }

        .hacker-column {
          position: absolute;
          top: -720px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          white-space: nowrap;
          font-family: "Fira Code", "JetBrains Mono", "Courier New", monospace;
          font-size: 12px;
          line-height: 1.55;
          color: rgba(74, 222, 128, 0.98);
          text-shadow:
            0 0 5px rgba(34, 197, 94, 1),
            0 0 14px rgba(34, 197, 94, 0.55);
          animation-name: vaibhavHackerFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }

        .hacker-column.slow {
          animation-duration: 15s;
        }

        .hacker-column.normal {
          animation-duration: 11s;
        }

        .hacker-column.fast {
          animation-duration: 8.5s;
        }

        .hacker-column.one {
          left: 2%;
        }

        .hacker-column.two {
          left: 23%;
          opacity: 0.72;
        }

        .hacker-column.three {
          right: 23%;
          opacity: 0.68;
        }

        .hacker-column.four {
          right: 1%;
          opacity: 0.82;
        }

        .hacker-code-line {
          animation: vaibhavHackerBlink 2.15s steps(2, end) infinite;
        }

        .hacker-code-line:nth-child(2) { animation-delay: 0.12s; }
        .hacker-code-line:nth-child(3) { animation-delay: 0.31s; }
        .hacker-code-line:nth-child(4) { animation-delay: 0.52s; }
        .hacker-code-line:nth-child(5) { animation-delay: 0.74s; }
        .hacker-code-line:nth-child(6) { animation-delay: 0.93s; }
        .hacker-code-line:nth-child(7) { animation-delay: 1.14s; }
        .hacker-code-line:nth-child(8) { animation-delay: 1.35s; }
        .hacker-code-line:nth-child(9) { animation-delay: 1.56s; }

        @keyframes vaibhavHackerFall {
          0% {
            transform: translate3d(0, -80px, 0);
            opacity: 0;
          }

          8% {
            opacity: 0.55;
          }

          35% {
            opacity: 0.82;
          }

          68% {
            opacity: 0.7;
          }

          88% {
            opacity: 0.32;
          }

          100% {
            transform: translate3d(0, 1450px, 0);
            opacity: 0;
          }
        }

        @keyframes vaibhavHackerBlink {
          0%, 100% {
            opacity: 0.55;
          }

          50% {
            opacity: 1;
          }
        }

        .hacker-scan {
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          overflow: hidden;
        }

        .hacker-scan::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -25%;
          height: 25%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(34, 197, 94, 0.20),
            rgba(34, 197, 94, 0.04),
            transparent
          );
          animation: vaibhavScan 4.5s linear infinite;
        }

        @keyframes vaibhavScan {
          from {
            transform: translateY(-20%);
          }

          to {
            transform: translateY(500%);
          }
        }

        .hacker-grid {
          background-image:
            linear-gradient(
              rgba(34, 197, 94, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(34, 197, 94, 0.055) 1px,
              transparent 1px
            );
          background-size: 28px 28px;
        }

        .hacker-terminal {
          box-shadow:
            0 0 0 1px rgba(34, 197, 94, 0.05),
            0 0 35px rgba(34, 197, 94, 0.07);
        }

        .hacker-cursor {
          display: inline-block;
          width: 7px;
          height: 1em;
          margin-left: 3px;
          vertical-align: -2px;
          background: #22c55e;
          box-shadow: 0 0 10px #22c55e;
          animation: vaibhavCursor 0.85s steps(2, end) infinite;
        }

        @keyframes vaibhavCursor {
          0%, 45% { opacity: 1; }
          46%, 100% { opacity: 0; }
        }

        @media (max-width: 768px) {
          .hacker-code-layer {
            inset: -80px;
            opacity: 0.72;
          }

          .hacker-column {
            font-size: 7px;
            gap: 10px;
          }

          .hacker-column.two,
          .hacker-column.three {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hacker-column,
          .hacker-code-line,
          .hacker-scan::before {
            animation: none !important;
          }
        }
      `}</style>

      <section
        id="hero"
        className="relative min-h-[92vh] pt-32 pb-20 md:pb-32 flex flex-col justify-center overflow-hidden"
      >
        {/* Ambient purple/blue light remains subtle so the green code is the
            main futuristic effect. */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* =========================================================
                LEFT SIDE
            ========================================================= */}
            <div className="lg:col-span-7 text-left space-y-6">

              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a120e]/90 border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-sm shadow-emerald-900/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span className="tracking-wide uppercase font-semibold">
                  Digital Executive + Full-Stack Developer
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.1] min-h-[1.15em]">
                  {headlineTyped.length <= heroPrefix.length ? (
                    headlineTyped
                  ) : (
                    <>
                      {headlineTyped.slice(0, heroPrefix.length)}
                      <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-cyan-300 bg-clip-text text-transparent">
                        {headlineTyped.slice(heroPrefix.length)}
                      </span>
                    </>
                  )}

                  {!headlineDone && (
                    <span className="hacker-cursor" />
                  )}
                </h1>

                <p
                  className={`text-xl sm:text-2xl font-semibold text-slate-300 font-display transition-opacity duration-700 ${
                    headlineDone ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {personalInfo.hero.supportingHeadline}
                </p>
              </div>

              <blockquote className="text-base sm:text-lg text-emerald-100/85 font-medium border-l-2 border-emerald-500/50 pl-4 py-1 italic bg-emerald-950/10 rounded-r-lg">
                "{personalInfo.hero.statement}"
              </blockquote>

              <p className="text-slate-400 text-base sm:text-lg max-w-xl font-light leading-relaxed">
                {personalInfo.hero.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => scrollTo('journey')}
                  className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-emerald-600 via-green-600 to-cyan-600 text-white shadow-[0_0_25px_rgba(34,197,94,0.25)] hover:shadow-[0_0_35px_rgba(34,197,94,0.45)] hover:-translate-y-0.5 transition-all flex items-center gap-2.5 group"
                >
                  <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  <span>{personalInfo.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollTo('projects')}
                  className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/[0.03] border border-white/10 text-slate-200 hover:border-emerald-500/40 hover:bg-emerald-950/10 transition-all flex items-center gap-2"
                >
                  <Code className="w-4 h-4 text-emerald-400" />
                  <span>{personalInfo.hero.ctaSecondary}</span>
                </button>

                <button
                  onClick={() => scrollTo('contact')}
                  className="px-5 py-3.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {personalInfo.hero.ctaContact || 'Contact Me'}
                </button>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-mono flex-wrap">
                <span className="text-slate-400 font-semibold">
                  Core Stack:
                </span>

                {coreStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* =======================================================
                  TERMINAL
              ======================================================= */}
              <div className="hacker-terminal rounded-2xl bg-[#050b08]/95 border border-emerald-500/20 shadow-xl p-4 font-mono text-xs text-left max-w-2xl min-h-[118px]">
                <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/10 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <span className="text-[11px] text-slate-400 ml-2">
                      vaibhav@charismight:~
                    </span>
                  </div>

                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SYSTEM ONLINE
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-start gap-2 text-slate-300">
                    <span className="text-emerald-400">$</span>
                    <span className="text-emerald-300 break-all">
                      {typedCmd}
                      {terminalPhase === 'command' && (
                        <span className="hacker-cursor" />
                      )}
                    </span>
                  </div>

                  <div className="text-emerald-400/90 pl-4 min-h-[2.8em] break-words">
                    {typedOutput}
                    {terminalPhase === 'output' && (
                      <span className="hacker-cursor" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================
                RIGHT SIDE / PORTRAIT
            ========================================================= */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <TiltCard
                className="relative w-full max-w-md"
                maxTilt={5}
              >

                {/* Falling code is behind the portrait */}
                <div className="hacker-code-layer">
                  <FallingCodeColumn
                    items={HACKER_LINES}
                    className="one"
                    speed="normal"
                    delay="-4s"
                  />

                  <FallingCodeColumn
                    items={BINARY_LINES}
                    className="two"
                    speed="fast"
                    delay="-2s"
                  />

                  <FallingCodeColumn
                    items={STACK_LINES}
                    className="three"
                    speed="slow"
                    delay="-8s"
                  />

                  <FallingCodeColumn
                    items={HACKER_LINES}
                    className="four"
                    speed="normal"
                    delay="-6s"
                  />
                </div>

                {/* Scanner */}
                <div className="hacker-scan" />

                {/* Subtle green halo - replaces the old rotating purple rings */}
                <div className="absolute -inset-4 rounded-[2rem] bg-emerald-500/5 blur-2xl pointer-events-none" />

                {/* Portrait frame */}
                <div className="relative z-10 rounded-3xl bg-[#060b09]/90 border border-emerald-500/25 p-3 sm:p-4 shadow-2xl overflow-visible backdrop-blur-[2px]">

                  {/* Terminal top bar */}
                  <div className="flex items-center justify-between px-3 py-2 mb-3 rounded-xl bg-black/70 border border-emerald-500/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>

                    <span className="text-[11px] font-mono text-emerald-300/80 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-emerald-400" />
                      vaibhav_gaikwad.sys
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden bg-[#050907] aspect-square flex items-center justify-center group border border-emerald-500/15">

                    <div className="absolute inset-0 hacker-grid opacity-30 pointer-events-none" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(34,197,94,0.16),transparent_50%)] pointer-events-none" />

                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top relative z-10 filter contrast-105 brightness-95 group-hover:scale-[1.04] transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = personalInfo.fallbackImage;
                      }}
                    />

                    {/* Bottom vignette */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050907] via-[#050907]/55 to-transparent z-20 pointer-events-none" />

                    {/* Green scanline over image */}
                    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                      <div className="absolute left-0 right-0 h-[2px] bg-emerald-400/20 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-[scanSweep_4.5s_linear_infinite]" />
                    </div>

                    {/* Live status inside image */}
                    <div className="absolute bottom-3 left-3 right-3 z-30 p-3 rounded-xl bg-[#050b08]/80 backdrop-blur-md border border-emerald-500/15 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-300">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        </div>

                        <div className="text-left">
                          <div className="text-xs font-bold text-white">
                            Digital systems online
                          </div>
                          <div className="text-[10px] text-emerald-300 font-mono">
                            status: available
                          </div>
                        </div>
                      </div>

                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
                    </div>
                  </div>
                </div>

                {/* Floating project badge */}
                <div className="absolute -bottom-3 sm:-bottom-1 right-0 sm:-right-5 z-30 px-4 py-2.5 rounded-2xl bg-[#07100b]/95 backdrop-blur-xl border border-emerald-500/25 shadow-2xl flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399] shrink-0" />

                  <div className="text-left">
                    <div className="text-xs font-bold text-white">
                      Available for projects
                    </div>
                    <div className="text-[10px] text-emerald-300 font-mono">
                      Let's build together →
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="mt-12 flex flex-col items-center justify-center gap-1 cursor-pointer text-slate-600 hover:text-emerald-400 transition-colors"
            onClick={() => scrollTo('about')}
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">
              Scroll Down
            </span>

            <svg
              className="w-3.5 h-3.5 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Local scan animation used by the image overlay. */}
      <style>{`
        @keyframes scanSweep {
          0% { transform: translateY(-60px); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: translateY(520px); opacity: 0; }
        }
      `}</style>
    </>
  );
}