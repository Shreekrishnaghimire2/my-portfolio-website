import React from 'react';
import { Compass, BookOpen, Layers, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-canvas-border">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-bronze-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border-gold text-bronze-300 text-xs font-mono uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-bronze-400" />
            <span>Identity & Philosophy</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight">
            {PERSONAL_INFO.aboutHeading}
          </h2>
          <p className="mt-3 text-lg text-bronze-300 font-serif italic">
            "{PERSONAL_INFO.coreMessage}"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-text-secondary leading-relaxed font-light text-base sm:text-lg">
            {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-text-secondary">
                {paragraph}
              </p>
            ))}

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-canvas-card border border-canvas-border hover:border-bronze-500/30 transition-colors">
                <div className="flex items-center gap-2.5 text-text-primary font-semibold text-sm mb-1.5 font-display">
                  <Compass className="w-4 h-4 text-bronze-400" />
                  <span>Flexible Exploration</span>
                </div>
                <p className="text-xs text-text-muted leading-normal">
                  Keeping an open career horizon to follow emerging AI breakthroughs rather than locking into rigid silos early.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-canvas-card border border-canvas-border hover:border-bronze-500/30 transition-colors">
                <div className="flex items-center gap-2.5 text-text-primary font-semibold text-sm mb-1.5 font-display">
                  <Target className="w-4 h-4 text-bronze-400" />
                  <span>Practical Application</span>
                </div>
                <p className="text-xs text-text-muted leading-normal">
                  Reinforcing university computer science curriculum with functional scripts, automations, and LLM utilities.
                </p>
              </div>
            </div>
          </div>

          {/* Core Traits / Mindset (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-canvas-card/90 border border-canvas-border-gold relative shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-canvas-border">
                <h3 className="font-display font-semibold text-base text-text-primary flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-bronze-400" />
                  <span>Core Learning Mindset</span>
                </h3>
                <span className="text-[11px] font-mono text-bronze-400">Values</span>
              </div>

              <div className="space-y-4">
                {PERSONAL_INFO.traits.map((trait, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-md bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-bronze-400 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-bronze-400" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-text-primary font-display group-hover:text-bronze-200 transition-colors">
                        {trait.label}
                      </h4>
                      <p className="text-xs text-text-muted leading-relaxed mt-0.5">
                        {trait.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-canvas-border flex items-center justify-between text-xs text-text-muted">
                <span>Location</span>
                <span className="font-mono text-text-primary">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
