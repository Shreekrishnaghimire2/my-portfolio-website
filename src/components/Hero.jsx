import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin, Terminal, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const exploringPills = ['AI', 'Python', 'Generative AI', 'Automation'];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bronze-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Message (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Top Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-card border border-canvas-border-gold text-bronze-300 text-xs font-mono tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-bronze-400 animate-ping opacity-75" />
              <span className="w-2 h-2 rounded-full bg-bronze-400 -ml-4" />
              <span>{PERSONAL_INFO.identity}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] tracking-tight leading-[1.1] mb-6">
              <span className="block text-text-primary">Learning AI.</span>
              <span className="block gold-gradient-text">Building with technology.</span>
              <span className="block silver-gradient-text">Evolving every day.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed mb-8 font-light">
              {PERSONAL_INFO.heroSupportingText}
            </p>

            {/* Currently Exploring ticker */}
            <div className="w-full mb-8 p-3.5 rounded-xl bg-canvas-card/80 border border-canvas-border flex flex-wrap items-center gap-2.5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-bronze-400 mr-1">
                <Compass className="w-3.5 h-3.5 text-bronze-400" />
                <span>Currently exploring →</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {exploringPills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-canvas-hover border border-canvas-border-gold/50 text-[11px] font-medium text-text-primary"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-bronze-400 text-canvas font-semibold text-sm hover:bg-bronze-300 transition-all duration-300 shadow-lg shadow-bronze-500/20 hover:shadow-bronze-500/30 active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-canvas-card border border-canvas-border hover:border-bronze-500/50 text-text-primary hover:text-bronze-200 font-semibold text-sm transition-all duration-300"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Location & Context */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-canvas-border text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-bronze-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="text-canvas-border">•</span>
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-bronze-400" />
                <span>Open for Collaborative Learning</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Portrait Composition (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[380px]">
              
              {/* Outer decorative ambient luxury frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-bronze-500/30 via-transparent to-amber-400/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-canvas-card border border-canvas-border-gold shadow-2xl">
                
                {/* Subtle top glare line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-bronze-300 to-transparent z-20" />

                <div className="aspect-[4/5] w-full relative overflow-hidden group">
                  <img
                    src="./images/profile.jpg"
                    alt="Shreekrishna Ghimire - BSc CSIT Student and AI Learner"
                    className="w-full h-full object-cover object-center filter grayscale-[20%] contrast-[1.05] brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    onError={(e) => {
                      // Fallback if image path differs
                      if (!e.target.src.includes('profile.jpg.png')) {
                        e.target.src = './images/profile.jpg.png';
                      }
                    }}
                  />
                  {/* Subtle dark vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating identity card at bottom of portrait */}
                <div className="p-4 bg-canvas-subtle/95 border-t border-canvas-border backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-display font-semibold text-sm text-text-primary">
                        {PERSONAL_INFO.name}
                      </h2>
                      <p className="text-[11px] text-bronze-400 font-mono mt-0.5">
                        {PERSONAL_INFO.identity}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-bronze-500/10 border border-bronze-500/25 text-[10px] font-mono text-bronze-300">
                      <Sparkles className="w-3 h-3 text-bronze-400" />
                      <span>Nepal</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-bronze-400/60 rounded-tl pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-bronze-400/60 rounded-br pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
