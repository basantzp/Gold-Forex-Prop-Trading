import React, { useEffect } from 'react';
import { SubTopic } from '../data/roadmapData';
import { 
  X, 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  Circle, 
  Flame, 
  HelpCircle, 
  Layers, 
  Share2, 
  BookOpen,
  ArrowRight,
  TrendingUp,
  Tag
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface NodeDetailModalProps {
  topic: SubTopic | null;
  sectionTitle: string;
  hubTitle: string;
  onClose: () => void;
  isCompleted: boolean;
  onToggleComplete: (id: string) => void;
}

export const NodeDetailModal: React.FC<NodeDetailModalProps> = ({
  topic,
  sectionTitle,
  hubTitle,
  onClose,
  isCompleted,
  onToggleComplete
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!topic) return null;

  const handleCompleteWithCelebration = () => {
    if (!isCompleted) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#FBBF24', '#10B981', '#38BDF8']
      });
    }
    onToggleComplete(topic.id);
  };

  const difficultyBadgeColors = {
    Beginner: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    Intermediate: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    Advanced: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    Mastery: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop click close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-dark-850 border border-amber-500/40 shadow-2xl shadow-amber-500/10 p-6 sm:p-8 space-y-6 text-slate-100">
        
        {/* Top Breadcrumb & Close */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
              <span>{sectionTitle}</span>
              <span>/</span>
              <span className="text-amber-400 font-mono">{hubTitle}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] tracking-tight">
              {topic.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-dark-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Difficulty Badge & Completion Button */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-dark-800/80 border border-slate-800">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${difficultyBadgeColors[topic.difficulty]}`}>
              {topic.difficulty} Tier
            </span>
          </div>

          <button
            onClick={handleCompleteWithCelebration}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-amber-500 hover:bg-amber-400 text-dark-900 shadow-md shadow-amber-500/20'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                <span>Topic Mastered</span>
              </>
            ) : (
              <>
                <Circle className="w-4 h-4 text-dark-900" />
                <span>Mark as Mastered</span>
              </>
            )}
          </button>
        </div>

        {/* Topic Description Overview */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-amber-400" />
            Core Concept Overview
          </h4>
          <p className="text-sm text-slate-200 leading-relaxed bg-dark-900/60 p-4 rounded-2xl border border-slate-800">
            {topic.description}
          </p>
        </div>

        {/* Gold Specific Insight */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Gold (XAU/USD) Execution Playbook
          </h4>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/30 text-sm text-amber-200/90 leading-relaxed font-medium">
            {topic.goldInsight}
          </div>
        </div>

        {/* Prop Firm Rule & Compliance Alert */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            Prop Firm Risk & Rule Compliance
          </h4>
          <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-sm text-rose-200/90 leading-relaxed font-medium">
            {topic.propRule}
          </div>
        </div>

        {/* Key Takeaway / Formula if available */}
        {topic.formulaOrRule && (
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-sky-400" />
              Mathematical Formula / Institutional Rule
            </h4>
            <div className="p-3.5 rounded-2xl bg-dark-900 border border-sky-500/30 text-xs font-mono text-sky-300 font-bold">
              {topic.formulaOrRule}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Key Rule: {topic.keyTakeaway}</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-dark-800 hover:bg-slate-700 text-xs font-bold text-slate-300 transition-colors"
          >
            Close Guide
          </button>
        </div>

      </div>

    </div>
  );
};
