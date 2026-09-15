import React, { useState, useEffect } from 'react';
import {
  X,
  Plus,
  Trash2,
  Edit2,
  Download,
  Upload,
  RotateCcw,
  Check,
  Star,
  FolderGit2,
  ExternalLink,
  Sparkles,
  Info,
  Copy
} from 'lucide-react';
import { PROJECT_CATEGORIES } from '../data/portfolioData';

const emptyProjectTemplate = {
  id: '',
  name: '',
  category: 'AI',
  status: 'Exploring',
  featured: false,
  description: '',
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
  technologies: ['Python', 'AI Tools'],
  githubUrl: 'https://github.com/Shreekrishnaghimire2',
  liveDemoUrl: '',
  caseStudy: {
    overview: '',
    problem: '',
    idea: '',
    approach: '',
    technologies: '',
    features: [''],
    result: '',
    whatILearned: ''
  }
};

export default function PortfolioManagerModal({
  isOpen,
  onClose,
  projects,
  onSaveProjects,
  onResetDefaults
}) {
  const [editingProject, setEditingProject] = useState(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [formData, setFormData] = useState(emptyProjectTemplate);
  const [copiedNotification, setCopiedNotification] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleStartAdd = () => {
    setFormData({
      ...emptyProjectTemplate,
      id: `project-${Date.now()}`
    });
    setIsCreatingNew(true);
    setEditingProject(null);
  };

  const handleStartEdit = (proj) => {
    setFormData({
      ...proj,
      technologies: proj.technologies || [],
      caseStudy: {
        overview: proj.caseStudy?.overview || '',
        problem: proj.caseStudy?.problem || '',
        idea: proj.caseStudy?.idea || '',
        approach: proj.caseStudy?.approach || '',
        technologies: proj.caseStudy?.technologies || '',
        features: proj.caseStudy?.features || [''],
        result: proj.caseStudy?.result || '',
        whatILearned: proj.caseStudy?.whatILearned || ''
      }
    });
    setEditingProject(proj.id);
    setIsCreatingNew(false);
  };

  const handleSaveForm = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const formattedData = {
      ...formData,
      id: formData.id || `project-${Date.now()}`,
      technologies: typeof formData.technologies === 'string'
        ? formData.technologies.split(',').map(t => t.trim()).filter(Boolean)
        : formData.technologies
    };

    let updated;
    if (isCreatingNew) {
      updated = [formattedData, ...projects];
    } else {
      updated = projects.map(p => p.id === editingProject ? formattedData : p);
    }

    onSaveProjects(updated);
    setEditingProject(null);
    setIsCreatingNew(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updated = projects.filter(p => p.id !== id);
      onSaveProjects(updated);
      if (editingProject === id) {
        setEditingProject(null);
      }
    }
  };

  const handleToggleFeatured = (id) => {
    const updated = projects.map(p => {
      if (p.id === id) {
        return { ...p, featured: !p.featured };
      }
      return p;
    });
    onSaveProjects(updated);
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(projects, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'projects.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyJSON = () => {
    const dataStr = JSON.stringify(projects, null, 2);
    navigator.clipboard.writeText(dataStr);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  const handleImportJSON = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const parsed = JSON.parse(evt.target.result);
        if (Array.isArray(parsed)) {
          onSaveProjects(parsed);
          alert('Projects imported successfully!');
        } else {
          alert('Invalid JSON structure. Expected an array of projects.');
        }
      } catch (err) {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-canvas-card border border-canvas-border-gold rounded-3xl shadow-2xl overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-canvas-border bg-canvas-subtle shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center text-bronze-300">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg sm:text-xl text-text-primary flex items-center gap-2">
                <span>Portfolio Project Manager</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-bronze-500/20 text-bronze-200 border border-bronze-500/40">
                  $0 Architecture
                </span>
              </h2>
              <p className="text-xs text-text-muted">
                Add & edit projects in browser localStorage, then export to `src/data/projects.json` for GitHub Pages.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-text-muted hover:text-text-primary hover:bg-canvas-hover transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Workflow Explainer Banner */}
        <div className="p-4 bg-bronze-500/10 border-b border-bronze-500/20 px-6 flex flex-wrap items-center justify-between gap-3 text-xs text-bronze-200 shrink-0">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-bronze-300 shrink-0" />
            <span>
              <strong>Deployment Workflow:</strong> Manager → Export JSON → Replace project data in GitHub → Commit & Push → Automatic GitHub Pages deployment.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJSON}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-bronze-400 text-canvas font-bold text-xs hover:bg-bronze-300 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export projects.json</span>
            </button>

            <button
              onClick={handleCopyJSON}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-canvas-card border border-canvas-border hover:border-bronze-400 text-text-primary text-xs transition-colors"
            >
              {copiedNotification ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedNotification ? 'Copied!' : 'Copy JSON'}</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleStartAdd}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-bronze-500/20 border border-bronze-500/40 text-xs font-semibold text-bronze-200 hover:bg-bronze-500/30 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Project</span>
              </button>

              <label className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-canvas-hover border border-canvas-border text-xs text-text-secondary hover:text-text-primary cursor-pointer transition-colors">
                <Upload className="w-4 h-4" />
                <span>Import JSON</span>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportJSON}
                  className="hidden"
                />
              </label>
            </div>

            <button
              onClick={() => {
                if (window.confirm('Reset all projects to original defaults?')) {
                  onResetDefaults();
                  setEditingProject(null);
                  setIsCreatingNew(false);
                }
              }}
              className="inline-flex items-center gap-1 text-xs text-text-muted hover:text-rose-400 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
          </div>

          {/* Form when Editing or Adding */}
          {(isCreatingNew || editingProject) && (
            <form
              onSubmit={handleSaveForm}
              className="p-6 rounded-2xl bg-canvas-subtle border border-bronze-500/40 space-y-4 animate-fade-in"
            >
              <div className="flex items-center justify-between pb-3 border-b border-canvas-border">
                <h3 className="font-display font-semibold text-base text-bronze-200">
                  {isCreatingNew ? 'Create New Project' : 'Edit Project Details'}
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setIsCreatingNew(false);
                    setEditingProject(null);
                  }}
                  className="text-xs text-text-muted hover:text-text-primary"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1">Project Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-canvas-card border border-canvas-border text-text-primary text-xs focus:outline-none focus:border-bronze-400"
                    placeholder="e.g. AI Workflow Engine"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-canvas-card border border-canvas-border text-text-primary text-xs focus:outline-none focus:border-bronze-400"
                  >
                    {PROJECT_CATEGORIES.filter(c => c !== 'All').map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1">Status Badge</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-canvas-card border border-canvas-border text-text-primary text-xs focus:outline-none focus:border-bronze-400"
                  >
                    <option value="Exploring">Exploring</option>
                    <option value="Learning">Learning</option>
                    <option value="Building">Building</option>
                    <option value="Currently Focused">Currently Focused</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1">Image URL / Local Path</label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-canvas-card border border-canvas-border text-text-primary text-xs focus:outline-none focus:border-bronze-400"
                    placeholder="e.g. https://... or ./images/project.jpg"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1">GitHub URL</label>
                  <input
                    type="url"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-canvas-card border border-canvas-border text-text-primary text-xs focus:outline-none focus:border-bronze-400"
                    placeholder="https://github.com/..."
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1">Live Demo URL (Optional)</label>
                  <input
                    type="url"
                    value={formData.liveDemoUrl}
                    onChange={(e) => setFormData({ ...formData, liveDemoUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-canvas-card border border-canvas-border text-text-primary text-xs focus:outline-none focus:border-bronze-400"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-text-muted mb-1">Technologies (comma separated)</label>
                <input
                  type="text"
                  value={Array.isArray(formData.technologies) ? formData.technologies.join(', ') : formData.technologies}
                  onChange={(e) => setFormData({ ...formData, technologies: e.target.value.split(',').map(s => s.trim()) })}
                  className="w-full px-3 py-2 rounded-xl bg-canvas-card border border-canvas-border text-text-primary text-xs focus:outline-none focus:border-bronze-400"
                  placeholder="Python, Generative AI, n8n Automation"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-text-muted mb-1">Short Description</label>
                <textarea
                  rows="2"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-canvas-card border border-canvas-border text-text-primary text-xs focus:outline-none focus:border-bronze-400"
                  placeholder="Brief summary of the project and its goals..."
                />
              </div>

              {/* Case Study Fields */}
              <div className="pt-3 border-t border-canvas-border space-y-3">
                <span className="text-xs font-display font-semibold text-bronze-300 block">
                  Case Study Fields (Optional)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-text-muted mb-1">Problem</label>
                    <textarea
                      rows="2"
                      value={formData.caseStudy?.problem || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        caseStudy: { ...formData.caseStudy, problem: e.target.value }
                      })}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-canvas-card border border-canvas-border text-text-primary text-xs"
                      placeholder="What was the challenge?"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-text-muted mb-1">Idea / Concept</label>
                    <textarea
                      rows="2"
                      value={formData.caseStudy?.idea || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        caseStudy: { ...formData.caseStudy, idea: e.target.value }
                      })}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-canvas-card border border-canvas-border text-text-primary text-xs"
                      placeholder="What was the core conceptual solution?"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-text-muted mb-1">Approach</label>
                    <textarea
                      rows="2"
                      value={formData.caseStudy?.approach || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        caseStudy: { ...formData.caseStudy, approach: e.target.value }
                      })}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-canvas-card border border-canvas-border text-text-primary text-xs"
                      placeholder="How did you build it step-by-step?"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-text-muted mb-1">What I Learned</label>
                    <textarea
                      rows="2"
                      value={formData.caseStudy?.whatILearned || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        caseStudy: { ...formData.caseStudy, whatILearned: e.target.value }
                      })}
                      className="w-full px-2.5 py-1.5 rounded-lg bg-canvas-card border border-canvas-border text-text-primary text-xs"
                      placeholder="Key takeaways & concepts mastered..."
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-text-secondary">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded border-canvas-border text-bronze-400 focus:ring-bronze-400"
                  />
                  <span>Feature on Hero / Highlights</span>
                </label>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsCreatingNew(false);
                      setEditingProject(null);
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-canvas-hover text-xs text-text-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-1.5 rounded-lg bg-bronze-400 text-canvas font-bold text-xs hover:bg-bronze-300 transition-colors"
                  >
                    Save Project
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Current Projects List */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-text-muted block">
              Manage Existing Projects ({projects.length})
            </span>

            {projects.map((proj) => (
              <div
                key={proj.id}
                className="p-4 rounded-xl bg-canvas-subtle border border-canvas-border flex items-center justify-between gap-4 group hover:border-canvas-border-light transition-colors"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <button
                    onClick={() => handleToggleFeatured(proj.id)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      proj.featured ? 'text-amber-400 bg-amber-400/10' : 'text-text-muted hover:text-amber-400'
                    }`}
                    title={proj.featured ? 'Featured' : 'Mark as Featured'}
                  >
                    <Star className="w-4 h-4 fill-current" />
                  </button>

                  <div className="truncate">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-semibold font-display text-text-primary truncate">
                        {proj.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-canvas-card border border-canvas-border text-bronze-300 shrink-0">
                        {proj.category}
                      </span>
                      <span className="text-[10px] font-mono text-text-muted shrink-0">
                        [{proj.status}]
                      </span>
                    </div>
                    <p className="text-[11px] text-text-muted truncate mt-0.5 max-w-md">
                      {proj.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleStartEdit(proj)}
                    className="p-2 rounded-lg bg-canvas-card border border-canvas-border text-text-secondary hover:text-bronze-200 hover:border-bronze-400 transition-colors"
                    title="Edit project"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleDelete(proj.id)}
                    className="p-2 rounded-lg bg-canvas-card border border-canvas-border text-text-muted hover:text-rose-400 hover:border-rose-400/40 transition-colors"
                    title="Delete project"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 sm:p-5 border-t border-canvas-border bg-canvas-subtle flex items-center justify-between text-xs text-text-muted shrink-0">
          <span>Client-Side Local Storage · Changes persist locally in your browser</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-bronze-500/20 border border-bronze-500/40 text-bronze-200 hover:bg-bronze-500/30 text-xs font-medium"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
