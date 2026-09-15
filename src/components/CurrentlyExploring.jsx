import React from 'react';
import { Sparkles, Brain, Code2, Workflow, Cpu, Layers, ArrowUpRight, Compass } from 'lucide-react';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';

const iconMap = {
  Brain: Brain,
  Sparkles: Sparkles,
  Code2: Code2,
  Workflow: Workflow,
  Cpu: Cpu,
  Layers: Layers,
};

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="py-24 relative overflow-hidden border-t border-canvas-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border-gold text-bronze-300 text-xs font-mono uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-bronze-400" />
              <span>Current Frontiers</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight">
              Currently Exploring
            </h2>
            <p className="mt-3 text-base text-text-secondary leading-relaxed font-light">
              Technologies and domains where I spend my time outside university lectures—building scripts, workflows, and testing modern AI capabilities.
            </p>
          </div>

          <div className="text-xs font-mono text-bronze-400 bg-canvas-card px-3.5 py-2 rounded-xl border border-canvas-border shrink-0">
            Status: <span className="text-text-primary">Continuous Daily Experimentation</span>
          </div>
        </div>

        {/* Dynamic Exploration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENTLY_EXPLORING.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-canvas-card border border-canvas-border hover:border-bronze-500/40 transition-all duration-300 shadow-lg hover:shadow-black/60 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle hover gradient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-bronze-500/5 rounded-full blur-2xl group-hover:bg-bronze-500/10 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Top card header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center text-bronze-300 group-hover:text-bronze-200 group-hover:border-bronze-400 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-canvas-hover border border-canvas-border text-text-muted">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-text-primary group-hover:text-bronze-200 transition-colors">
                    {item.title}
                  </h3>
                  <h4 className="text-xs font-mono text-bronze-400 mt-1 mb-3">
                    {item.tagline}
                  </h4>

                  <p className="text-xs text-text-secondary leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Card footer status */}
                <div className="mt-6 pt-4 border-t border-canvas-border/80 flex items-center justify-between text-[11px]">
                  <span className="text-text-muted">Focus Mode</span>
                  <span className="font-mono text-bronze-300 font-medium">{item.status}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
