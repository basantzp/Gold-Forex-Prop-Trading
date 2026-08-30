import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RoadmapTreeView } from './components/RoadmapTreeView';
import { RoadmapMatrixView } from './components/RoadmapMatrixView';
import { PropRiskCalculator } from './components/PropRiskCalculator';
import { PropChallengeSimulator } from './components/PropChallengeSimulator';
import { SessionRadar } from './components/SessionRadar';
import { PropReadinessQuiz } from './components/PropReadinessQuiz';
import { NodeDetailModal } from './components/NodeDetailModal';
import { ExportProgressModal } from './components/ExportProgressModal';
import { Footer } from './components/Footer';
import { 
  ROADMAP_SECTIONS, 
  TOTAL_TOPICS_COUNT, 
  SubTopic 
} from './data/roadmapData';

export function App() {
  const [activeView, setActiveView] = useState<'tree' | 'matrix' | 'calculator' | 'simulator' | 'radar' | 'quiz'>('tree');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Selected topic for Deep-Dive Modal
  const [selectedTopic, setSelectedTopic] = useState<{
    topic: SubTopic;
    sectionTitle: string;
    hubTitle: string;
  } | null>(null);

  // Completed Topics stored in localStorage
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('gold_forex_completed_topics');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [exportModalOpen, setExportModalOpen] = useState<boolean>(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('gold_forex_completed_topics', JSON.stringify(completedTopicIds));
    } catch (e) {
      console.error('Error saving progress to localStorage', e);
    }
  }, [completedTopicIds]);

  const handleToggleComplete = (id: string) => {
    setCompletedTopicIds(prev => 
      prev.includes(id) ? prev.filter(tId => tId !== id) : [...prev, id]
    );
  };

  const handleSelectTopic = (topic: SubTopic, sectionTitle: string, hubTitle: string) => {
    setSelectedTopic({ topic, sectionTitle, hubTitle });
  };

  const handleImportIds = (ids: string[]) => {
    setCompletedTopicIds(ids);
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-900 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Navigation Bar */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        completedCount={completedTopicIds.length}
        totalCount={TOTAL_TOPICS_COUNT}
        onOpenExport={() => setExportModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        
        {/* Show Hero on Tree and Matrix views */}
        {(activeView === 'tree' || activeView === 'matrix') && (
          <HeroSection
            setActiveView={setActiveView}
            completedCount={completedTopicIds.length}
            totalCount={TOTAL_TOPICS_COUNT}
          />
        )}

        {/* View Switcher Routing */}
        {activeView === 'tree' && (
          <RoadmapTreeView
            onSelectTopic={handleSelectTopic}
            completedTopicIds={completedTopicIds}
            onToggleComplete={handleToggleComplete}
            searchQuery={searchQuery}
          />
        )}

        {activeView === 'matrix' && (
          <RoadmapMatrixView
            onSelectTopic={handleSelectTopic}
            completedTopicIds={completedTopicIds}
            onToggleComplete={handleToggleComplete}
          />
        )}

        {activeView === 'calculator' && (
          <PropRiskCalculator />
        )}

        {activeView === 'simulator' && (
          <PropChallengeSimulator />
        )}

        {activeView === 'radar' && (
          <SessionRadar />
        )}

        {activeView === 'quiz' && (
          <PropReadinessQuiz />
        )}

      </main>

      {/* Footer */}
      <Footer />

      {/* Topic Detail Modal */}
      {selectedTopic && (
        <NodeDetailModal
          topic={selectedTopic.topic}
          sectionTitle={selectedTopic.sectionTitle}
          hubTitle={selectedTopic.hubTitle}
          onClose={() => setSelectedTopic(null)}
          isCompleted={completedTopicIds.includes(selectedTopic.topic.id)}
          onToggleComplete={handleToggleComplete}
        />
      )}

      {/* Export & Certificate Modal */}
      {exportModalOpen && (
        <ExportProgressModal
          completedIds={completedTopicIds}
          totalCount={TOTAL_TOPICS_COUNT}
          onImportIds={handleImportIds}
          onClose={() => setExportModalOpen(false)}
        />
      )}

    </div>
  );
}

export default App;
