import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AiJourney from './components/AiJourney';
import CurrentlyExploring from './components/CurrentlyExploring';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import PortfolioManagerModal from './components/PortfolioManagerModal';
import defaultProjectsData from './data/projects.json';

const STORAGE_KEY = 'shreekrishna_portfolio_projects_v1';

export default function App() {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading projects from localStorage:', e);
    }
    return defaultProjectsData;
  });

  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [selectedCaseStudyProject, setSelectedCaseStudyProject] = useState(null);

  const handleSaveProjects = (newProjects) => {
    setProjects(newProjects);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProjects));
    } catch (e) {
      console.error('Error saving projects to localStorage:', e);
    }
  };

  const handleResetDefaults = () => {
    setProjects(defaultProjectsData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Error clearing localStorage:', e);
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-text-primary font-sans relative selection:bg-bronze-500/25 selection:text-bronze-200">
      
      {/* Top Navbar */}
      <Navbar onOpenManager={() => setIsManagerOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <AiJourney />
        <CurrentlyExploring />
        <Skills />
        <Projects
          projects={projects}
          onSelectProject={(proj) => setSelectedCaseStudyProject(proj)}
          onOpenManager={() => setIsManagerOpen(true)}
        />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenManager={() => setIsManagerOpen(true)} />

      {/* Case Study Modal */}
      {selectedCaseStudyProject && (
        <CaseStudyModal
          project={selectedCaseStudyProject}
          onClose={() => setSelectedCaseStudyProject(null)}
        />
      )}

      {/* Portfolio Manager Modal ($0 Local CMS) */}
      <PortfolioManagerModal
        isOpen={isManagerOpen}
        onClose={() => setIsManagerOpen(false)}
        projects={projects}
        onSaveProjects={handleSaveProjects}
        onResetDefaults={handleResetDefaults}
      />

    </div>
  );
}
