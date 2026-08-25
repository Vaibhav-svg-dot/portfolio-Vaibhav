import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { contactInfo, personalInfo } from '../data/portfolioData';
import SectionHeader from '../components/common/SectionHeader';
import TiltCard from '../components/common/TiltCard';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, loading: false });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true });
    
    // Simulate submission
    setTimeout(() => {
      setFormStatus({ submitted: true, loading: false });
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          index="09"
          badge="Get in Touch"
          title="LET'S BUILD"
          highlight="SOMETHING MEANINGFUL"
          subtitle={contactInfo.subtext}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels & Copy Email */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white font-display mb-2">
                Connect Directly
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                Whether you have a digital initiative, a web project, or wish to explore full-stack development collaboration, feel free to reach out.
              </p>

              {/* Copy Email Box */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 mb-6 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[11px] font-mono uppercase text-slate-400">Email Address</div>
                  <div className="text-sm font-mono font-medium text-purple-300 truncate">
                    {contactInfo.email}
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/30 text-purple-300 transition-all shrink-0 flex items-center gap-1.5 text-xs font-mono"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3">
                {contactInfo.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 flex items-center justify-between text-sm text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-950/60 text-purple-400 group-hover:text-purple-300 transition-colors">
                        {social.name === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                        {social.name === 'GitHub' && <Github className="w-4 h-4" />}
                        {social.name === 'Email' && <Mail className="w-4 h-4" />}
                      </div>
                      <span className="font-semibold">{social.name}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <h3 className="text-xl font-bold text-white font-display mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-400" />
                Send a Message
              </h3>
              <p className="text-slate-400 text-sm font-light mb-6">
                Fill out the transmission form below to send an inquiry directly.
              </p>

              {formStatus.submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">Transmission Received!</h4>
                  <p className="text-xs sm:text-sm text-emerald-300 font-light">
                    Thank you for reaching out. I will respond to your message promptly.
                  </p>
                  <button
                    onClick={() => setFormStatus({ submitted: false, loading: false })}
                    className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono text-white transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500/70 focus:outline-none text-sm text-white font-sans placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500/70 focus:outline-none text-sm text-white font-sans placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Message Content
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Vaibhav, I'd like to discuss a web project..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-purple-500/70 focus:outline-none text-sm text-white font-sans placeholder:text-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="w-full py-3.5 rounded-xl cyber-btn-primary font-mono text-xs font-semibold text-white flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                  >
                    {formStatus.loading ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
