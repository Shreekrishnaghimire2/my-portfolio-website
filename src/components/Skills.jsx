import React from 'react';
import { Cpu, Terminal, Sparkles, Wrench, Code2, Bot, GitBranch, CheckCircle } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

const statusBadgeStyles = {
  'Currently Focused': 'bg-bronze-500/20 text-bronze-200 border-bronze-500/40',
  'Building': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  'Exploring': 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  'Learning': 'bg-blue-500/10 text-blue-300 border-blue-500/30',
};

const categoryIcons = {
  'Programming': Code2,
  'AI & Automation': Bot,
  'Tools & Environment': Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-canvas-subtle/40 border-t border-canvas-border">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-bronze-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border-gold text-bronze-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-bronze-400" />
            <span>Honest Competencies</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight">
            Technical Foundations & Tools
          </h2>
          <p className="mt-3 text-base text-text-secondary leading-relaxed font-light">
            An authentic inventory of languages, AI tooling, and workflows I actively use and study. No exaggerated percentage bars—just transparent stages of mastery and daily application.
          </p>
        </div>

        {/* 3-Column Luxury Skill Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, gIdx) => {
            const Icon = categoryIcons[group.category] || Terminal;

            return (
              <div
                key={gIdx}
                className="p-7 rounded-2xl bg-canvas-card border border-canvas-border hover:border-canvas-border-gold transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Group Header */}
                  <div className="flex items-center gap-3 pb-5 mb-5 border-b border-canvas-border">
                    <div className="w-10 h-10 rounded-xl bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center text-bronze-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-text-primary">
                        {group.category}
                      </h3>
                      <p className="text-[11px] text-text-muted">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3.5">
                    {group.skills.map((skill, sIdx) => {
                      const badgeClass = statusBadgeStyles[skill.status] || 'bg-canvas-hover text-text-muted border-canvas-border';

                      return (
                        <div
                          key={sIdx}
                          className="p-3.5 rounded-xl bg-canvas-subtle/80 border border-canvas-border hover:border-canvas-border-light transition-colors group"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <span className="font-display font-medium text-sm text-text-primary group-hover:text-bronze-200 transition-colors">
                                {skill.name}
                              </span>
                              {skill.level && (
                                <span className="text-[10px] font-mono text-text-muted bg-canvas-card px-1.5 py-0.2 rounded border border-canvas-border">
                                  {skill.level}
                                </span>
                              )}
                            </div>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${badgeClass}`}>
                              {skill.status}
                            </span>
                          </div>
                          <p className="text-[11px] text-text-muted leading-normal">
                            {skill.notes}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Group Footer */}
                <div className="pt-6 mt-6 border-t border-canvas-border flex items-center justify-between text-[11px] text-text-muted font-mono">
                  <span>Category {gIdx + 1} of 3</span>
                  <span className="text-bronze-400">Authentic Assessment</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency Note */}
        <div className="mt-12 p-4 rounded-xl bg-canvas-card/60 border border-canvas-border flex items-center justify-between flex-wrap gap-4 text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-bronze-400" />
            <span>Honest Evaluation Philosophy: Skills reflect actual code written and tested in BSc CSIT studies and personal exploration.</span>
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="text-bronze-300">● Currently Focused</span>
            <span className="text-emerald-300">● Building</span>
            <span className="text-amber-300">● Exploring</span>
            <span className="text-blue-300">● Learning</span>
          </div>
        </div>

      </div>
    </section>
  );
}
