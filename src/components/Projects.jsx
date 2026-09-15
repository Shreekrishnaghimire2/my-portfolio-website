import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  BookOpen,
  Sparkles,
  Filter,
  Layers,
  ArrowRight,
  Star
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECT_CATEGORIES } from '../data/portfolioData';

const categoryBadgeStyles = {
  AI: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  Automation: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
  Web: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
  Experiment: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
  Client: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
  Learning: 'bg-bronze-500/15 text-bronze-300 border-bronze-500/30'
};

export default function Projects({
  projects,
  onSelectProject,
  onOpenManager
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category?.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="py-24 relative overflow-hidden border-t border-canvas-border">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-bronze-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas-card border border-canvas-border-gold text-bronze-300 text-xs font-mono uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-bronze-400" />
              <span>Experimental Portfolio</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary tracking-tight">
              Things I've Built While Learning
            </h2>
            <p className="mt-3 text-base text-text-secondary leading-relaxed font-light">
              Projects, scripts, and workflows created to test theoretical concepts and solve practical challenges. Data-driven and modular.
            </p>
          </div>

          {/* Quick Manager Button */}
          <button
            onClick={onOpenManager}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-canvas-card border border-canvas-border hover:border-bronze-500/40 text-xs text-text-secondary hover:text-bronze-200 transition-colors"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-bronze-400" />
            <span>Manage Project Data</span>
          </button>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-1.5 min-w-max">
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 border ${
                    isActive
                      ? 'bg-bronze-500/20 text-bronze-200 border-bronze-400 shadow-sm'
                      : 'bg-canvas-card text-text-secondary border-canvas-border hover:border-canvas-border-light hover:text-text-primary'
                  }`}
                >
                  {cat}
                  {cat !== 'All' && (
                    <span className="ml-1.5 opacity-60 text-[10px] font-mono">
                      ({projects.filter(p => p.category?.toLowerCase() === cat.toLowerCase()).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const categoryBadge = categoryBadgeStyles[project.category] || 'bg-canvas-hover text-text-muted border-canvas-border';

              return (
                <div
                  key={project.id}
                  className="group rounded-2xl bg-canvas-card border border-canvas-border hover:border-canvas-border-gold transition-all duration-300 shadow-xl hover:shadow-black/70 flex flex-col justify-between overflow-hidden relative"
                >
                  {/* Card Media Preview */}
                  {project.image && (
                    <div className="relative aspect-video w-full overflow-hidden bg-canvas-subtle border-b border-canvas-border">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-canvas-card via-canvas-card/30 to-transparent" />
                      
                      {/* Top Badges overlay */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className={`text-[10px] font-mono px-2.5 py-1 rounded-md border backdrop-blur-md ${categoryBadge}`}>
                          {project.category}
                        </span>

                        <div className="flex items-center gap-1.5">
                          {project.featured && (
                            <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                              <Star className="w-3 h-3 fill-amber-300" />
                              <span>Featured</span>
                            </span>
                          )}
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-canvas/80 text-text-secondary border border-canvas-border backdrop-blur-md">
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-bronze-200 transition-colors mb-2">
                        {project.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light mb-6">
                        {project.description}
                      </p>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-6">
                        {project.technologies?.map((tech, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-canvas-subtle border border-canvas-border text-text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="pt-4 border-t border-canvas-border flex items-center justify-between gap-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-bronze-300 hover:text-bronze-200 transition-colors py-1 group/btn"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-canvas-subtle border border-canvas-border text-text-muted hover:text-text-primary hover:border-bronze-500/40 transition-colors"
                            aria-label={`GitHub repository for ${project.name}`}
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveDemoUrl && (
                          <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-bronze-500/15 border border-bronze-500/30 text-bronze-300 hover:text-bronze-100 hover:border-bronze-400 transition-colors"
                            aria-label={`Live demo for ${project.name}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-2xl bg-canvas-card border border-canvas-border">
            <p className="text-text-muted text-sm mb-4">No projects listed under this category yet.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="px-4 py-2 rounded-xl bg-canvas-hover border border-canvas-border text-xs text-text-primary hover:border-bronze-400"
            >
              Show All Projects
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
