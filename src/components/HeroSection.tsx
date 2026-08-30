import React from 'react';
import { 
  Sparkles, 
  ShieldAlert, 
  TrendingUp, 
  Award, 
  Compass, 
  Calculator, 
  Clock, 
  CheckCircle,
  ExternalLink,
  Flame
} from 'lucide-react';

interface HeroSectionProps {
  setActiveView: (view: 'tree' | 'matrix' | 'calculator' | 'simulator' | 'radar' | 'quiz') => void;
  completedCount: number;
  totalCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  setActiveView,
  completedCount,
  totalCount
}) => {
  const relatedRoadmaps = [
    'Forex Trading',
    'Technical Analysis',
    'Risk Management',
    'Algorithmic Trading'
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-dark-900 via-dark-850 to-dark-900">
      
      {/* Background ambient glow circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-sky-500/5 blur-[90px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Floating Badge & Related Roadmaps Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          
          {/* Related Roadmaps Box (from Roadmap.sh diagram) */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-xl bg-dark-800/80 border border-slate-700/80 backdrop-blur text-xs">
            <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Related Pillars:</span>
            <div className="flex flex-wrap items-center gap-2">
              {relatedRoadmaps.map((name) => (
                <span key={name} className="inline-flex items-center gap-1 text-slate-300 font-medium text-[11px] bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700">
                  <CheckCircle className="w-3 h-3 text-amber-400" />
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Official Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>XAU/USD INSTITUTIONAL BLUEPRINT</span>
          </div>

        </div>

        {/* Hero Title & Description */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Outfit'] leading-[1.15]">
            Gold Forex Prop Trading{' '}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent underline decoration-amber-500/30 underline-offset-8">
              Master Roadmap
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The definitive interactive curriculum for mastering <strong className="text-amber-300 font-semibold">Gold (XAUUSD)</strong>, conquering prop firm evaluations (FTMO, FundedNext, MFF), executing order flow, managing risk, and scaling to <strong className="text-amber-300 font-semibold">$1M+ funded capital</strong>.
          </p>
        </div>

        {/* Quick Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveView('tree')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-dark-900 font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Compass className="w-4 h-4 text-dark-900 stroke-[2.5]" />
            Explore Interactive Tree
          </button>

          <button
            onClick={() => setActiveView('calculator')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-slate-200 border border-slate-700 hover:border-amber-500/50 text-sm font-semibold transition-all shadow-sm"
          >
            <Calculator className="w-4 h-4 text-amber-400" />
            Prop Risk Calculator
          </button>

          <button
            onClick={() => setActiveView('radar')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-slate-200 border border-slate-700 hover:border-sky-500/50 text-sm font-semibold transition-all shadow-sm"
          >
            <Clock className="w-4 h-4 text-sky-400" />
            Session Radar
          </button>

          <button
            onClick={() => setActiveView('quiz')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-amber-300 border border-amber-500/40 hover:border-amber-400 text-sm font-semibold transition-all shadow-sm"
          >
            <Award className="w-4 h-4 text-amber-400" />
            Take Readiness Quiz
          </button>
        </div>

        {/* Interactive Stats Metric Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          
          <div className="p-3.5 rounded-2xl bg-dark-850/80 border border-slate-800 hover:border-amber-500/30 transition-all text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">11</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Core Phases</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-dark-850/80 border border-slate-800 hover:border-amber-500/30 transition-all text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono">24</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Master Hubs</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-dark-850/80 border border-slate-800 hover:border-amber-500/30 transition-all text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono">168+</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Actionable Topics</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-dark-850/80 border border-slate-800 hover:border-amber-500/30 transition-all text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">100%</div>
            <div className="text-xs text-slate-400 font-medium mt-0.5">Free & Open Source</div>
          </div>

        </div>

      </div>
    </section>
  );
};
