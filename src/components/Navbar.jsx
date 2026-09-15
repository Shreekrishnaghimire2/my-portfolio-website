import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, FolderGit2, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenManager }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'journey', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas/80 backdrop-blur-xl border-b border-canvas-border shadow-2xl shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-400 rounded-lg p-1"
          aria-label="Shreekrishna Ghimire - Home"
        >
          <div className="w-9 h-9 rounded-lg bg-canvas-card border border-canvas-border-gold flex items-center justify-center font-display font-bold text-bronze-300 text-base group-hover:border-bronze-400 transition-colors shadow-inner">
            SG
          </div>
          <div className="flex flex-col">
            <span className="font-display font-semibold text-sm tracking-wide text-text-primary group-hover:text-bronze-200 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-bronze-400 font-mono">
              BSc CSIT · AI Learner
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-canvas-card/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-canvas-border">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-bronze-200 bg-bronze-500/15 border border-bronze-500/30'
                    : 'text-text-secondary hover:text-text-primary hover:bg-canvas-hover'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Project Manager */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={onOpenManager}
            className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-bronze-200 px-3 py-1.5 rounded-lg border border-canvas-border hover:border-bronze-500/40 bg-canvas-card/40 transition-all"
            title="Open Portfolio Manager ($0 Local Architecture)"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-bronze-400" />
            <span>Manager</span>
          </button>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-bronze-500/10 text-bronze-200 border border-bronze-500/40 hover:bg-bronze-500/20 hover:border-bronze-400 transition-all duration-300 shadow-sm hover:shadow-bronze-500/10"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenManager}
            className="p-2 text-text-secondary hover:text-bronze-300 rounded-lg border border-canvas-border bg-canvas-card"
            aria-label="Open Project Manager"
          >
            <FolderGit2 className="w-4 h-4 text-bronze-400" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-secondary hover:text-text-primary rounded-lg border border-canvas-border bg-canvas-card"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-canvas-subtle border border-canvas-border shadow-2xl backdrop-blur-2xl animate-fade-in">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium rounded-xl text-text-secondary hover:text-bronze-200 hover:bg-canvas-hover transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-canvas-border flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenManager();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium rounded-xl border border-canvas-border bg-canvas-card text-text-secondary hover:text-bronze-200"
              >
                <FolderGit2 className="w-4 h-4 text-bronze-400" />
                Portfolio Manager ($0 CMS)
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-xl bg-bronze-500/20 border border-bronze-500/50 text-bronze-100"
              >
                Let's Connect
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
