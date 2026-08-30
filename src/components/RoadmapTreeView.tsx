import React, { useState, useMemo } from 'react';
import { 
  ROADMAP_SECTIONS, 
  RoadmapSection, 
  HubNode, 
  SubTopic 
} from '../data/roadmapData';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Sparkles,
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';

interface RoadmapTreeViewProps {
  onSelectTopic: (topic: SubTopic, sectionTitle: string, hubTitle: string) => void;
  completedTopicIds: string[];
  onToggleComplete: (id: string) => void;
  searchQuery: string;
}

export const RoadmapTreeView: React.FC<RoadmapTreeViewProps> = ({
  onSelectTopic,
  completedTopicIds,
  onToggleComplete,
  searchQuery
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const toggleSectionCollapse = (sectionId: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleZoom = (delta: number) => {
    setZoomLevel(prev => Math.min(Math.max(0.6, prev + delta), 1.4));
  };

  const resetZoom = () => setZoomLevel(1);

  // Filter sections based on search query
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return ROADMAP_SECTIONS;
    const query = searchQuery.toLowerCase();

    return ROADMAP_SECTIONS.map(section => {
      const filteredHubs = section.hubs.map(hub => {
        const leftMatches = hub.leftTopics.filter(t => 
          t.title.toLowerCase().includes(query) || 
          t.description.toLowerCase().includes(query) ||
          t.goldInsight.toLowerCase().includes(query)
        );
        const rightMatches = hub.rightTopics.filter(t => 
          t.title.toLowerCase().includes(query) || 
          t.description.toLowerCase().includes(query) ||
          t.goldInsight.toLowerCase().includes(query)
        );
        const hubMatches = hub.title.toLowerCase().includes(query) || hub.category.toLowerCase().includes(query);

        if (hubMatches || leftMatches.length > 0 || rightMatches.length > 0) {
          return {
            ...hub,
            leftTopics: leftMatches.length > 0 ? leftMatches : (hubMatches ? hub.leftTopics : []),
            rightTopics: rightMatches.length > 0 ? rightMatches : (hubMatches ? hub.rightTopics : [])
          };
        }
        return null;
      }).filter(Boolean) as HubNode[];

      if (filteredHubs.length > 0 || section.title.toLowerCase().includes(query)) {
        return {
          ...section,
          hubs: filteredHubs.length > 0 ? filteredHubs : section.hubs
        };
      }
      return null;
    }).filter(Boolean) as RoadmapSection[];
  }, [searchQuery]);

  return (
    <div className="relative w-full min-h-screen bg-[#0a0d14] text-slate-100 py-8 px-2 sm:px-4 lg:px-8 select-none">
      
      {/* Floating Toolbar for Controls */}
      <div className="sticky top-20 z-30 flex items-center justify-between max-w-6xl mx-auto px-4 py-2 mb-6 rounded-2xl bg-dark-850/90 backdrop-blur-md border border-slate-800 shadow-xl">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Interactive Tree
          </span>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            (Click any node for deep-dive playbook)
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => handleZoom(-0.1)}
            className="p-1.5 rounded-lg bg-dark-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono text-slate-300 w-12 text-center">
            {Math.round(zoomLevel * 100)}%
          </span>
          <button
            onClick={() => handleZoom(0.1)}
            className="p-1.5 rounded-lg bg-dark-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={resetZoom}
            className="p-1.5 rounded-lg bg-dark-800 hover:bg-slate-700 text-slate-300 transition-colors ml-1"
            title="Reset Zoom"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Roadmap Canvas Container */}
      <div 
        className="w-full max-w-6xl mx-auto transition-transform duration-200 origin-top"
        style={{ transform: `scale(${zoomLevel})` }}
      >
        {filteredSections.map((section, secIdx) => {
          const isCollapsed = collapsedSections[section.id];
          return (
            <div key={section.id} className="relative mb-16">
              
              {/* Section Header Marker */}
              <div className="flex flex-col items-center justify-center my-8 text-center relative z-20">
                <button
                  onClick={() => toggleSectionCollapse(section.id)}
                  className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-dark-800/95 border border-amber-500/40 hover:border-amber-400 shadow-lg shadow-amber-500/10 text-amber-300 font-extrabold text-sm sm:text-base font-['Outfit'] tracking-wide transition-all hover:scale-105"
                >
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-dark-900 text-xs font-black flex items-center justify-center">
                    {section.phase}
                  </span>
                  <span>{section.title}</span>
                  {isCollapsed ? (
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-amber-300" />
                  ) : (
                    <ChevronUp className="w-4 h-4 text-slate-400 group-hover:text-amber-300" />
                  )}
                </button>
                <p className="text-xs text-slate-400 max-w-lg mt-2 font-medium px-4">
                  {section.description}
                </p>
              </div>

              {/* Section Body */}
              {!isCollapsed && (
                <div className="relative">
                  
                  {/* Central Vertical Spine connecting line */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 via-amber-400 to-sky-500 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.5)] z-0" />

                  {/* Hubs within this section */}
                  <div className="space-y-16 relative z-10 py-4">
                    {section.hubs.map((hub) => {
                      const hasLeft = hub.leftTopics.length > 0;
                      const hasRight = hub.rightTopics.length > 0;

                      return (
                        <div key={hub.id} className="relative flex flex-col items-center">
                          
                          {/* Center Yellow Main Hub Card (matching diagram) */}
                          <div className="relative z-20 my-4">
                            <div className="px-6 py-2.5 rounded-xl bg-[#FFFF00] text-black font-extrabold text-sm sm:text-base border-2 border-black shadow-[0_4px_16px_rgba(255,255,0,0.35)] text-center tracking-wide min-w-[200px] sm:min-w-[260px] cursor-default">
                              {hub.title}
                            </div>
                            <div className="text-[10px] text-center font-bold uppercase tracking-wider text-slate-400 mt-1">
                              {hub.category}
                            </div>
                          </div>

                          {/* Left & Right Branch Grid */}
                          {(hasLeft || hasRight) && (
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start mt-2">
                              
                              {/* Left Branch Column */}
                              <div className="flex flex-col items-end space-y-3">
                                {hub.leftTopics.map((topic) => {
                                  const isCompleted = completedTopicIds.includes(topic.id);
                                  return (
                                    <div
                                      key={topic.id}
                                      className="w-full max-w-xs sm:max-w-sm group relative flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#FDE68A] hover:bg-[#FCD34D] text-black border-2 border-black shadow-md transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                                      onClick={() => onSelectTopic(topic, section.title, hub.title)}
                                    >
                                      <div className="flex items-center gap-2.5 pr-2">
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            onToggleComplete(topic.id);
                                          }}
                                          className="text-black/80 hover:text-black"
                                          title={isCompleted ? "Mark Incomplete" : "Mark Completed"}
                                        >
                                          {isCompleted ? (
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 fill-emerald-200" />
                                          ) : (
                                            <Circle className="w-4 h-4 text-black/50 hover:text-black" />
                                          )}
                                        </button>
                                        <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 leading-snug">
                                          {topic.title}
                                        </span>
                                      </div>

                                      <div className="flex items-center gap-1">
                                        <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-black/10 text-black/80">
                                          {topic.difficulty.slice(0, 3)}
                                        </span>
                                        <ArrowRight className="w-3.5 h-3.5 text-black/60 group-hover:translate-x-0.5 transition-transform" />
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>

                              {/* Right Branch Column */}
                              <div className="flex flex-col items-start space-y-3">
                                {hub.rightTopics.map((topic) => {
                                  const isCompleted = completedTopicIds.includes(topic.id);
                                  return (
                                    <div
                                      key={topic.id}
                                      className="w-full max-w-xs sm:max-w-sm group relative flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#FDE68A] hover:bg-[#FCD34D] text-black border-2 border-black shadow-md transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer"
                                      onClick={() => onSelectTopic(topic, section.title, hub.title)}
                                    >
                                      <div className="flex items-center gap-2.5 pr-2">
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            onToggleComplete(topic.id);
                                          }}
                                          className="text-black/80 hover:text-black"
                                          title={isCompleted ? "Mark Incomplete" : "Mark Completed"}
                                        >
                                          {isCompleted ? (
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 fill-emerald-200" />
                                          ) : (
                                            <Circle className="w-4 h-4 text-black/50 hover:text-black" />
                                          )}
                                        </button>
                                        <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 leading-snug">
                                          {topic.title}
                                        </span>
                                      </div>

                                      <div className="flex items-center gap-1">
                                        <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-black/10 text-black/80">
                                          {topic.difficulty.slice(0, 3)}
                                        </span>
                                        <ArrowRight className="w-3.5 h-3.5 text-black/60 group-hover:translate-x-0.5 transition-transform" />
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>

                            </div>
                          )}

                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
};
