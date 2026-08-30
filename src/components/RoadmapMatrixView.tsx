import React, { useState } from 'react';
import { 
  ROADMAP_SECTIONS, 
  SubTopic 
} from '../data/roadmapData';
import { 
  BookOpen, 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  ShieldAlert, 
  ChevronRight, 
  Search,
  Filter,
  Flame,
  ArrowUpRight
} from 'lucide-react';

interface RoadmapMatrixViewProps {
  onSelectTopic: (topic: SubTopic, sectionTitle: string, hubTitle: string) => void;
  completedTopicIds: string[];
  onToggleComplete: (id: string) => void;
}

export const RoadmapMatrixView: React.FC<RoadmapMatrixViewProps> = ({
  onSelectTopic,
  completedTopicIds,
  onToggleComplete
}) => {
  const [selectedPhase, setSelectedPhase] = useState<number | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [matrixSearch, setMatrixSearch] = useState('');

  const difficultyColors = {
    Beginner: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    Intermediate: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    Advanced: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    Mastery: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
  };

  const filteredSections = ROADMAP_SECTIONS.filter(section => {
    if (selectedPhase !== 'all' && section.phase !== selectedPhase) return false;
    return true;
  }).map(section => {
    const filteredHubs = section.hubs.map(hub => {
      const allTopics = [...hub.leftTopics, ...hub.rightTopics];
      const matchingTopics = allTopics.filter(t => {
        const matchesDiff = selectedDifficulty === 'all' || t.difficulty === selectedDifficulty;
        const matchesSearch = !matrixSearch.trim() || 
          t.title.toLowerCase().includes(matrixSearch.toLowerCase()) ||
          t.description.toLowerCase().includes(matrixSearch.toLowerCase()) ||
          t.goldInsight.toLowerCase().includes(matrixSearch.toLowerCase());
        return matchesDiff && matchesSearch;
      });
      return {
        ...hub,
        topics: matchingTopics
      };
    }).filter(h => h.topics.length > 0);

    return {
      ...section,
      hubs: filteredHubs
    };
  }).filter(s => s.hubs.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header & Filter Controls */}
      <div className="mb-8 space-y-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Gold Forex Masterclass Guide
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Structured modular curriculum covering all 11 phases with deep-dive technical insights.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-dark-850 border border-slate-800">
          
          {/* Phase Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setSelectedPhase('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                selectedPhase === 'all' 
                  ? 'bg-amber-500 text-dark-900 shadow-md shadow-amber-500/20' 
                  : 'bg-dark-800 text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              All Phases
            </button>
            {ROADMAP_SECTIONS.map(sec => (
              <button
                key={sec.id}
                onClick={() => setSelectedPhase(sec.phase)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  selectedPhase === sec.phase 
                    ? 'bg-amber-500 text-dark-900' 
                    : 'bg-dark-800 text-slate-400 hover:text-slate-200 border border-slate-700'
                }`}
                title={sec.title}
              >
                P{sec.phase}
              </button>
            ))}
          </div>

          {/* Difficulty Filter & Search */}
          <div className="flex items-center gap-2">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-dark-800 border border-slate-700 text-xs font-medium text-slate-200 focus:outline-none focus:border-amber-500"
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Mastery">Mastery</option>
            </select>

            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                value={matrixSearch}
                onChange={(e) => setMatrixSearch(e.target.value)}
                placeholder="Filter guide..."
                className="pl-8 pr-3 py-1.5 text-xs rounded-lg bg-dark-800 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Sections and Cards Grid */}
      <div className="space-y-12">
        {filteredSections.map(section => (
          <section key={section.id} className="space-y-6">
            
            {/* Section Banner */}
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-dark-900 font-extrabold text-sm flex items-center justify-center font-mono">
                {section.phase}
              </span>
              <div>
                <h3 className="text-xl font-bold text-white font-['Outfit']">
                  {section.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {section.description}
                </p>
              </div>
            </div>

            {/* Hubs and Topic Cards Grid */}
            <div className="space-y-8">
              {section.hubs.map(hub => (
                <div key={hub.id} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <h4 className="text-sm font-extrabold text-amber-300 uppercase tracking-wider font-mono">
                      {hub.title} <span className="text-slate-500 text-xs normal-case">({hub.category})</span>
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {hub.topics.map(topic => {
                      const isCompleted = completedTopicIds.includes(topic.id);
                      return (
                        <div
                          key={topic.id}
                          onClick={() => onSelectTopic(topic, section.title, hub.title)}
                          className="group p-4 rounded-2xl bg-dark-850/90 border border-slate-800 hover:border-amber-500/50 hover:bg-dark-800 transition-all cursor-pointer flex flex-col justify-between space-y-3 shadow-md hover:shadow-amber-500/5"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between gap-2">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${difficultyColors[topic.difficulty]}`}>
                                {topic.difficulty}
                              </span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onToggleComplete(topic.id);
                                }}
                                className="text-slate-400 hover:text-white"
                                title={isCompleted ? "Mark Incomplete" : "Mark Completed"}
                              >
                                {isCompleted ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                                ) : (
                                  <Circle className="w-4 h-4 text-slate-600 hover:text-slate-400" />
                                )}
                              </button>
                            </div>

                            <h5 className="font-bold text-sm text-slate-100 group-hover:text-amber-300 transition-colors leading-snug">
                              {topic.title}
                            </h5>

                            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                              {topic.description}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                            <span className="text-[11px] text-amber-400/90 font-medium flex items-center gap-1 truncate max-w-[190px]">
                              <Flame className="w-3 h-3 text-amber-400 shrink-0" />
                              {topic.keyTakeaway}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

          </section>
        ))}
      </div>

    </div>
  );
};
