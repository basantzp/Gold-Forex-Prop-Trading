import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Flame, 
  Globe, 
  Activity, 
  Sparkles, 
  CheckCircle, 
  AlertCircle,
  Zap
} from 'lucide-react';

interface MarketSession {
  name: string;
  city: string;
  openUtc: number; // UTC hour
  closeUtc: number; // UTC hour
  color: string;
  goldVolatility: 'Low' | 'Moderate' | 'High' | 'Extreme';
  description: string;
}

export const SessionRadar: React.FC = () => {
  const [currentUtcHour, setCurrentUtcHour] = useState<number>(0);
  const [currentUtcMin, setCurrentUtcMin] = useState<number>(0);
  const [currentUtcSec, setCurrentUtcSec] = useState<number>(0);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentUtcHour(now.getUTCHours());
      setCurrentUtcMin(now.getUTCMinutes());
      setCurrentUtcSec(now.getUTCSeconds());
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const sessions: MarketSession[] = [
    {
      name: 'Sydney Session',
      city: 'Sydney, Australia',
      openUtc: 21,
      closeUtc: 6,
      color: '#38bdf8',
      goldVolatility: 'Low',
      description: 'Overnight consolidation window. Ideal for marking baseline high & low ranges on XAU/USD.'
    },
    {
      name: 'Tokyo Session',
      city: 'Tokyo, Japan',
      openUtc: 0,
      closeUtc: 9,
      color: '#a855f7',
      goldVolatility: 'Moderate',
      description: 'Asian liquidity and PBOC gold reserve updates. Establishes the liquidity benchmarks for London.'
    },
    {
      name: 'London Session',
      city: 'London, United Kingdom',
      openUtc: 7,
      closeUtc: 16,
      color: '#f59e0b',
      goldVolatility: 'High',
      description: 'Accounts for 35%+ of daily volume. Prime window for London Open breakouts and Judas swings.'
    },
    {
      name: 'New York Session',
      city: 'New York, USA',
      openUtc: 12,
      closeUtc: 21,
      color: '#10b981',
      goldVolatility: 'Extreme',
      description: 'Highest daily volatility driven by US CPI/NFP data and Wall Street market open flows.'
    },
  ];

  // Helper to check if a session is currently active
  const isSessionActive = (open: number, close: number, currentHour: number) => {
    if (open < close) {
      return currentHour >= open && currentHour < close;
    } else {
      // Wraps around midnight (e.g. 21 to 6)
      return currentHour >= open || currentHour < close;
    }
  };

  // Check if Golden Window (London & NY Overlap: 12:00 to 16:00 UTC) is active
  const isGoldenWindow = currentUtcHour >= 12 && currentUtcHour < 16;

  const volatilityBadgeColors = {
    Low: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
    Moderate: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    High: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    Extreme: 'bg-rose-500/15 text-rose-300 border-rose-500/40 animate-pulse',
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold mb-2">
          <Globe className="w-3.5 h-3.5" />
          <span>LIVE 24-HOUR INTERMARKET CLOCK</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">
          Global Forex Sessions & Gold Volatility Radar
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-2xl">
          Track active global institutional markets in real-time. Execute Gold trades during peak volume windows while avoiding quiet consolidation chop.
        </p>
      </div>

      {/* Golden Window Banner */}
      <div className={`p-5 rounded-3xl border transition-all ${
        isGoldenWindow
          ? 'bg-gradient-to-r from-amber-500/25 via-amber-400/15 to-amber-600/25 border-amber-500/60 shadow-xl shadow-amber-500/10'
          : 'bg-dark-850 border-slate-800'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
              isGoldenWindow ? 'bg-amber-500 text-dark-900 shadow-lg shadow-amber-500/30 animate-pulse' : 'bg-dark-800 text-slate-400'
            }`}>
              <Flame className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  The Golden Window (London & NY Overlap)
                </h3>
                {isGoldenWindow ? (
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/40 animate-pulse">
                    LIVE NOW
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 font-mono text-xs font-bold border border-slate-700">
                    12:00 - 16:00 UTC
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Over 60% of all daily XAU/USD trading volume executes here. Peak trend velocity and tightest spreads.
              </p>
            </div>
          </div>

          <div className="text-right font-mono">
            <div className="text-xs text-slate-400">Current UTC Clock</div>
            <div className="text-xl sm:text-2xl font-black text-amber-400">
              {String(currentUtcHour).padStart(2, '0')}:{String(currentUtcMin).padStart(2, '0')}:{String(currentUtcSec).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>

      {/* 24-Hour Interactive Timeline Bar */}
      <div className="p-6 rounded-3xl bg-dark-850 border border-slate-800 space-y-4">
        <div className="flex justify-between items-center text-xs text-slate-400 font-semibold uppercase tracking-wider">
          <span>24-Hour UTC Market Cycle</span>
          <span className="text-amber-400 font-mono">Current Hour: {currentUtcHour}:00 UTC</span>
        </div>

        {/* 24-Hour Grid Bar */}
        <div className="grid grid-cols-24 gap-0.5 h-10 rounded-xl overflow-hidden bg-dark-900 p-1 border border-slate-800">
          {Array.from({ length: 24 }).map((_, hour) => {
            const isCurrent = hour === currentUtcHour;
            const isOverlap = hour >= 12 && hour < 16;
            const isLondon = hour >= 7 && hour < 16;
            const isNY = hour >= 12 && hour < 21;
            const isTokyo = hour >= 0 && hour < 9;
            const isSydney = hour >= 21 || hour < 6;

            let bgColor = 'bg-slate-800/40';
            if (isOverlap) bgColor = 'bg-amber-500/80';
            else if (isNY) bgColor = 'bg-emerald-500/60';
            else if (isLondon) bgColor = 'bg-amber-600/60';
            else if (isTokyo) bgColor = 'bg-purple-500/50';
            else if (isSydney) bgColor = 'bg-sky-500/40';

            return (
              <div
                key={hour}
                title={`${hour}:00 UTC ${isOverlap ? '(Golden Overlap)' : ''}`}
                className={`relative flex items-center justify-center text-[9px] font-mono font-bold transition-all rounded-sm ${bgColor} ${
                  isCurrent ? 'ring-2 ring-white scale-110 z-10 shadow-lg' : ''
                }`}
              >
                <span className={isCurrent ? 'text-white' : 'text-slate-300'}>{hour}</span>
                {isCurrent && (
                  <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-sky-500" /> Sydney</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-purple-500" /> Tokyo</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-amber-500" /> London</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-emerald-500" /> New York</span>
            <span className="flex items-center gap-1 font-bold text-amber-400"><span className="w-2.5 h-2.5 rounded bg-amber-400 ring-1 ring-white" /> Golden Overlap</span>
          </div>
        </div>
      </div>

      {/* Session Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sessions.map((session) => {
          const active = isSessionActive(session.openUtc, session.closeUtc, currentUtcHour);
          return (
            <div
              key={session.name}
              className={`p-5 rounded-2xl border transition-all ${
                active 
                  ? 'bg-dark-800 border-amber-500/50 shadow-lg shadow-amber-500/5' 
                  : 'bg-dark-850/80 border-slate-800'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-base text-white">{session.name}</h4>
                    {active && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        OPEN
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400">{session.city}</p>
                </div>

                <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border ${volatilityBadgeColors[session.goldVolatility]}`}>
                  {session.goldVolatility} Volatility
                </span>
              </div>

              <div className="text-xs font-mono text-slate-300 mb-2">
                Hours: <strong className="text-white">{session.openUtc}:00 - {session.closeUtc}:00 UTC</strong>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {session.description}
              </p>
            </div>
          );
        })}
      </div>

    </div>
  );
};
