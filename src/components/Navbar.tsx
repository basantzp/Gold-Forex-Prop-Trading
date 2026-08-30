import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Layers, 
  Calculator, 
  Clock, 
  ShieldCheck, 
  HelpCircle, 
  Search, 
  CheckCircle2, 
  Download, 
  Menu, 
  X,
  TrendingUp
} from 'lucide-react';

interface NavbarProps {
  activeView: 'tree' | 'matrix' | 'calculator' | 'simulator' | 'radar' | 'quiz';
  setActiveView: (view: 'tree' | 'matrix' | 'calculator' | 'simulator' | 'radar' | 'quiz') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  completedCount: number;
  totalCount: number;
  onOpenExport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  searchQuery,
  setSearchQuery,
  completedCount,
  totalCount,
  onOpenExport
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTimeUtc, setCurrentTimeUtc] = useState('');
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const mins = String(now.getUTCMinutes()).padStart(2, '0');
      const secs = String(now.getUTCSeconds()).padStart(2, '0');
      setCurrentTimeUtc(`${hours}:${mins}:${secs} UTC`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'tree', label: 'Roadmap Tree', icon: Compass },
    { id: 'matrix', label: 'Master Guide', icon: Layers },
    { id: 'calculator', label: 'Risk Calculator', icon: Calculator },
    { id: 'radar', label: 'Session Radar', icon: Clock },
    { id: 'simulator', label: 'Prop Simulator', icon: ShieldCheck },
    { id: 'quiz', label: 'Readiness Test', icon: HelpCircle },
  ] as const;

  return (
    <header className="sticky top-0 z-40 w-full bg-dark-900/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => setActiveView('tree')}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 shadow-lg shadow-amber-500/20 border border-amber-300/40">
              <TrendingUp className="w-5 h-5 text-dark-900 font-bold stroke-[2.5]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-dark-900 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent font-['Outfit']">
                  GOLD FOREX
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono font-semibold border border-amber-500/30">
                  PROP
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium hidden sm:block tracking-wider uppercase">
                XAU/USD Master Blueprint
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xs relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 168+ Gold & Prop topics..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-dark-850 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/40 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                ×
              </button>
            )}
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-sm shadow-amber-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60 border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Widgets */}
          <div className="flex items-center gap-2.5">
            
            {/* UTC Clock Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-850 border border-slate-800 text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{currentTimeUtc || 'UTC'}</span>
            </div>

            {/* Progress Badge */}
            <button
              onClick={onOpenExport}
              title="View & Export Progress"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-dark-850 border border-amber-500/30 hover:border-amber-500 text-xs font-medium text-amber-300 transition-all hover:bg-amber-500/10 group"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>{completedCount}/{totalCount}</span>
              <span className="text-[10px] px-1 py-0.2 rounded bg-amber-400/20 text-amber-200 font-bold">
                {progressPercent}%
              </span>
            </button>

            {/* Export / Share Button */}
            <button
              onClick={onOpenExport}
              title="Download Certificate & Export"
              className="p-1.5 rounded-lg bg-dark-850 border border-slate-700 text-slate-300 hover:text-amber-300 hover:border-amber-500/50 transition-colors"
            >
              <Download className="w-4 h-4" />
            </button>

            {/* GitHub Link */}
            <a
              href="https://github.com/basantzp/Gold-Forex-Prop-Trading"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-dark-850 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors flex items-center gap-1"
              aria-label="GitHub Repository"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span className="hidden xl:inline text-xs font-semibold">Star</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg bg-dark-850 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Search & Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-dark-850 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveView(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold ${
                      isActive
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-dark-850 text-slate-300 border border-slate-800'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
