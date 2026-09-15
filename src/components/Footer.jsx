import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer({ onOpenManager }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-canvas-subtle border-t border-canvas-border relative overflow-hidden">
      {/* Subtle top border gold accent glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-bronze-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand & Identity Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-canvas-card border border-canvas-border-gold flex items-center justify-center font-display font-bold text-bronze-300 text-base">
                SG
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-text-primary">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-[11px] font-mono text-bronze-400 uppercase tracking-wider">
                  {PERSONAL_INFO.identity}
                </p>
              </div>
            </div>

            <p className="text-xs text-text-secondary leading-relaxed font-light max-w-sm">
              "{PERSONAL_INFO.coreMessage}"
            </p>

            <div className="flex items-center gap-2 text-xs text-text-muted">
              <MapPin className="w-3.5 h-3.5 text-bronze-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-bronze-400 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="text-text-secondary hover:text-bronze-200 transition-colors">
                  About & Identity
                </a>
              </li>
              <li>
                <a href="#journey" className="text-text-secondary hover:text-bronze-200 transition-colors">
                  AI Journey & Milestones
                </a>
              </li>
              <li>
                <a href="#skills" className="text-text-secondary hover:text-bronze-200 transition-colors">
                  Skills & Foundations
                </a>
              </li>
              <li>
                <a href="#projects" className="text-text-secondary hover:text-bronze-200 transition-colors">
                  Built Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-text-secondary hover:text-bronze-200 transition-colors">
                  Contact Channels
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Manager Column (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-bronze-400 font-semibold">
              Connect & Manage
            </h4>

            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-canvas-card border border-canvas-border hover:border-bronze-400 text-text-secondary hover:text-text-primary flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-canvas-card border border-canvas-border hover:border-bronze-400 text-text-secondary hover:text-text-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-canvas-card border border-canvas-border hover:border-bronze-400 text-text-secondary hover:text-text-primary flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onOpenManager}
              className="inline-flex items-center gap-2 text-xs text-text-muted hover:text-bronze-300 transition-colors pt-2"
            >
              <span>Portfolio Manager ($0 CMS)</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-6 border-t border-canvas-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, Tailwind & GitHub Pages.</p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-bronze-400">Nepal · 2026</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-canvas-card border border-canvas-border hover:border-bronze-400 text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5"
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
