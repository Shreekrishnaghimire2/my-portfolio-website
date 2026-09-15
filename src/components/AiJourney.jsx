import React, { useState } from 'react';
import { GitCommit, Sparkles, ArrowRight, CheckCircle, ChevronRight, Milestone } from 'lucide-react';
import { AI_JOURNEY_STEPS } from '../data/portfolioData';

export default function AiJourney() {
  const [selectedStep, setSelectedStep] = useState(AI_JOURNEY_STEPS[4]); // Default to Generative AI

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-canvas-subtle/50 border-t border-canvas-border">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-bronze-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border-gold text-bronze-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Milestone className="w-3.5 h-3.5 text-bronze-400" />
            <span>Evolutionary Roadmap</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight">
            My AI Journey
          </h2>
          <p className="mt-3 text-base text-text-secondary leading-relaxed">
            A step-by-step visual progression of how my computer science studies evolved into hands-on AI experiments and automation workflows. The final horizon remains intentionally open.
          </p>
        </div>

        {/* Horizontal Visual Progression Sequence Bar */}
        <div className="w-full mb-12 overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 min-w-max">
            {AI_JOURNEY_STEPS.map((step, index) => {
              const isSelected = selectedStep.id === step.id;
              const isLast = index === AI_JOURNEY_STEPS.length - 1;

              return (
                <React.Fragment key={step.id}>
                  <button
                    onClick={() => setSelectedStep(step)}
                    className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                      isSelected
                        ? 'bg-bronze-500/20 text-bronze-200 border-bronze-400 shadow-md shadow-bronze-500/10 scale-105'
                        : 'bg-canvas-card text-text-secondary border-canvas-border hover:border-canvas-border-light hover:text-text-primary'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isLast
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : isSelected
                        ? 'bg-bronze-400 text-canvas font-bold'
                        : 'bg-canvas-hover text-text-muted'
                    }`}>
                      {isLast ? '?' : step.id}
                    </span>
                    <span className="font-medium whitespace-nowrap">{step.title}</span>
                  </button>

                  {!isLast && (
                    <ChevronRight className="w-3.5 h-3.5 text-text-muted shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Grid: Interactive Step Inspection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Timeline List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {AI_JOURNEY_STEPS.map((step) => {
              const isSelected = selectedStep.id === step.id;
              const isLast = step.id === 8;

              return (
                <div
                  key={step.id}
                  onClick={() => setSelectedStep(step)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                    isSelected
                      ? 'bg-canvas-card border-bronze-400 shadow-lg shadow-black/50 translate-x-1'
                      : 'bg-canvas-card/40 border-canvas-border hover:bg-canvas-card hover:border-canvas-border-light'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-semibold ${
                        isSelected
                          ? 'bg-bronze-500/20 text-bronze-200 border border-bronze-500/50'
                          : 'bg-canvas-hover text-text-muted border border-canvas-border'
                      }`}>
                        {isLast ? '∞' : `0${step.id}`}
                      </div>
                      <div>
                        <h4 className={`text-sm font-semibold font-display ${
                          isSelected ? 'text-bronze-200' : 'text-text-primary'
                        }`}>
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-text-muted">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      isLast
                        ? 'bg-amber-500/10 text-amber-300 border border-amber-500/25'
                        : isSelected
                        ? 'bg-bronze-500/15 text-bronze-300'
                        : 'bg-canvas-hover text-text-muted'
                    }`}>
                      {step.phase}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Step Detail Panel (7 cols) */}
          <div className="lg:col-span-7">
            <div className="h-full p-8 rounded-2xl bg-canvas-card border border-canvas-border-gold shadow-2xl flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
              
              {/* Subtle accent glow in detail card */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-bronze-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-canvas-border">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-bronze-500/10 border border-bronze-500/30 text-bronze-300">
                      Phase: {selectedStep.phase}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-canvas-hover border border-canvas-border text-text-secondary">
                      Status: {selectedStep.status}
                    </span>
                  </div>
                  <span className="text-2xl font-mono text-bronze-400 font-bold">
                    {selectedStep.id === 8 ? '∞' : `Step ${selectedStep.id}`}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary mb-2">
                  {selectedStep.title}
                </h3>
                <h4 className="text-sm font-mono text-bronze-400 mb-6">
                  {selectedStep.subtitle}
                </h4>

                <p className="text-text-secondary text-base leading-relaxed font-light mb-8">
                  {selectedStep.description}
                </p>

                {selectedStep.id === 8 ? (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed">
                    <span className="font-semibold block mb-1">Open Career Philosophy:</span>
                    Rather than limiting myself prematurely to a single niche, I am building strong fundamentals across algorithms, generative tools, and autonomous pipelines—ready to evolve wherever breakthroughs lead.
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-canvas-subtle border border-canvas-border text-xs text-text-secondary">
                    <span className="text-bronze-400 font-mono block mb-1">Key Takeaway & Evolution:</span>
                    Each milestone served as a launchpad for the next—translating theoretical logic into real scripts and automated pipelines.
                  </div>
                )}
              </div>

              <div className="pt-8 mt-8 border-t border-canvas-border flex items-center justify-between text-xs text-text-muted">
                <span>Personal Progression</span>
                <span className="font-mono text-bronze-300">Shreekrishna Ghimire · BSc CSIT</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
