import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, Lightbulb, HelpCircle, Layers, Cpu, Compass } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Window */}
      <div className="relative w-full max-w-4xl bg-canvas-card border border-canvas-border-gold rounded-3xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-canvas-border bg-canvas-subtle/80 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-bronze-500/15 border border-bronze-500/30 text-bronze-300">
              {project.category}
            </span>
            <span className="text-xs font-mono text-text-muted">
              Status: <span className="text-text-primary">{project.status}</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-text-muted hover:text-text-primary hover:bg-canvas-hover transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Title & Headline */}
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-text-primary tracking-tight mb-3">
              {project.name}
            </h2>
            <p className="text-base text-text-secondary leading-relaxed font-light">
              {project.description}
            </p>

            {/* Quick Links & Technologies */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-canvas-border">
              <div className="flex flex-wrap items-center gap-1.5">
                {project.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-canvas-hover border border-canvas-border text-bronze-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-canvas-hover border border-canvas-border text-xs text-text-primary hover:text-bronze-200 hover:border-bronze-500/40 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-bronze-500/20 border border-bronze-500/40 text-xs text-bronze-200 hover:bg-bronze-500/30 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demonstration</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Case Study Detailed Breakdown */}
          {caseStudy ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              
              {/* Overview */}
              {caseStudy.overview && (
                <div className="p-5 rounded-2xl bg-canvas-subtle border border-canvas-border">
                  <div className="flex items-center gap-2 text-bronze-400 font-display font-semibold text-sm mb-2">
                    <Compass className="w-4 h-4" />
                    <span>Overview</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                    {caseStudy.overview}
                  </p>
                </div>
              )}

              {/* Problem */}
              {caseStudy.problem && (
                <div className="p-5 rounded-2xl bg-canvas-subtle border border-canvas-border">
                  <div className="flex items-center gap-2 text-rose-400 font-display font-semibold text-sm mb-2">
                    <HelpCircle className="w-4 h-4" />
                    <span>Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                    {caseStudy.problem}
                  </p>
                </div>
              )}

              {/* Idea */}
              {caseStudy.idea && (
                <div className="p-5 rounded-2xl bg-canvas-subtle border border-canvas-border">
                  <div className="flex items-center gap-2 text-amber-400 font-display font-semibold text-sm mb-2">
                    <Lightbulb className="w-4 h-4" />
                    <span>Idea & Concept</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                    {caseStudy.idea}
                  </p>
                </div>
              )}

              {/* Approach */}
              {caseStudy.approach && (
                <div className="p-5 rounded-2xl bg-canvas-subtle border border-canvas-border">
                  <div className="flex items-center gap-2 text-blue-400 font-display font-semibold text-sm mb-2">
                    <Layers className="w-4 h-4" />
                    <span>Approach</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                    {caseStudy.approach}
                  </p>
                </div>
              )}

              {/* Technologies in Detail */}
              {caseStudy.technologies && (
                <div className="p-5 rounded-2xl bg-canvas-subtle border border-canvas-border">
                  <div className="flex items-center gap-2 text-bronze-300 font-display font-semibold text-sm mb-2">
                    <Cpu className="w-4 h-4" />
                    <span>Technologies Utilized</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-mono">
                    {caseStudy.technologies}
                  </p>
                </div>
              )}

              {/* Result */}
              {caseStudy.result && (
                <div className="p-5 rounded-2xl bg-canvas-subtle border border-canvas-border">
                  <div className="flex items-center gap-2 text-emerald-400 font-display font-semibold text-sm mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Result & Outcome</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                    {caseStudy.result}
                  </p>
                </div>
              )}

              {/* Features List */}
              {caseStudy.features && Array.isArray(caseStudy.features) && (
                <div className="md:col-span-2 p-5 rounded-2xl bg-canvas-subtle border border-canvas-border">
                  <div className="flex items-center gap-2 text-bronze-400 font-display font-semibold text-sm mb-3">
                    <Sparkles className="w-4 h-4" />
                    <span>Key Features & Architecture</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {caseStudy.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-bronze-400 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What I Learned */}
              {caseStudy.whatILearned && (
                <div className="md:col-span-2 p-6 rounded-2xl bg-bronze-500/10 border border-bronze-500/30">
                  <div className="flex items-center gap-2 text-bronze-200 font-display font-semibold text-sm mb-2">
                    <Sparkles className="w-4 h-4 text-bronze-300" />
                    <span>What I Learned (Key Takeaway)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-primary leading-relaxed font-light">
                    {caseStudy.whatILearned}
                  </p>
                </div>
              )}

            </div>
          ) : (
            <div className="p-8 text-center text-text-muted bg-canvas-subtle rounded-2xl border border-canvas-border">
              Detailed case study documentation will be updated as experiments progress.
            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 sm:p-6 border-t border-canvas-border bg-canvas-subtle/80 flex items-center justify-between text-xs text-text-muted shrink-0">
          <span>Personal Case Study · Shreekrishna Ghimire</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-canvas-hover hover:bg-canvas-border text-text-primary transition-colors text-xs font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
