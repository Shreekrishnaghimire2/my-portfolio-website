import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Sparkles, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(null);

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const socialsList = [
    {
      name: 'GitHub',
      handle: 'Shreekrishnaghimire2',
      url: PERSONAL_INFO.socials.github,
      icon: GithubIcon,
      desc: 'Code repositories & learning projects'
    },
    {
      name: 'LinkedIn',
      handle: 'shreekrishna-prabal-ghimire',
      url: PERSONAL_INFO.socials.linkedin,
      icon: LinkedinIcon,
      desc: 'Professional connection & tech updates'
    },
    {
      name: 'Instagram',
      handle: '@prabal_gmry',
      url: PERSONAL_INFO.socials.instagram,
      icon: InstagramIcon,
      desc: 'Personal updates & creative life'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-canvas-border">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-bronze-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border-gold text-bronze-300 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-bronze-400" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-text-primary tracking-tight leading-tight">
            Have an idea?<br />
            <span className="gold-gradient-text">Let's explore what's possible.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-text-secondary leading-relaxed font-light">
            Whether you want to discuss AI research, collaborate on an automation workflow, or share interesting learning resources—my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Email Channel Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-display font-semibold text-sm font-mono text-bronze-400 uppercase tracking-wider mb-2">
              Primary Direct Email Channels
            </h3>

            {PERSONAL_INFO.emails.map((email, idx) => (
              <div
                key={email}
                className="p-5 sm:p-6 rounded-2xl bg-canvas-card border border-canvas-border hover:border-canvas-border-gold transition-all duration-300 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center text-bronze-300 shrink-0 group-hover:text-bronze-200 group-hover:border-bronze-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] font-mono uppercase text-bronze-400 tracking-wider">
                      {idx === 0 ? 'Primary Email' : 'Alternative Email'}
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="font-mono text-sm sm:text-base text-text-primary group-hover:text-bronze-200 transition-colors block truncate"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleCopy(email)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-canvas-subtle border border-canvas-border hover:border-bronze-400 text-xs text-text-secondary hover:text-text-primary transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail === email ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-bronze-500/20 border border-bronze-500/40 text-xs font-semibold text-bronze-200 hover:bg-bronze-500/30 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Mail</span>
                  </a>
                </div>
              </div>
            ))}

            {/* Location & Response Expectation Note */}
            <div className="p-4 rounded-xl bg-canvas-card/60 border border-canvas-border flex items-center gap-3 text-xs text-text-muted mt-6">
              <MapPin className="w-4 h-4 text-bronze-400 shrink-0" />
              <span>
                Based in <strong className="text-text-primary">{PERSONAL_INFO.location}</strong>. Time zone: Nepal Time (NPT, UTC+5:45). Direct emails are typically answered within 24 hours.
              </span>
            </div>
          </div>

          {/* Social Profiles Grid (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display font-semibold text-sm font-mono text-bronze-400 uppercase tracking-wider mb-2">
              Online Profiles & Networks
            </h3>

            {socialsList.map((soc) => {
              const Icon = soc.icon;
              return (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 rounded-2xl bg-canvas-card border border-canvas-border hover:border-bronze-500/40 transition-all duration-300 shadow-lg flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-canvas-subtle border border-canvas-border flex items-center justify-center text-text-secondary group-hover:text-bronze-300 group-hover:border-bronze-500/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-text-primary group-hover:text-bronze-200 transition-colors">
                        {soc.name}
                      </h4>
                      <p className="text-[11px] text-text-muted">
                        {soc.desc}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-bronze-400 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </a>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
