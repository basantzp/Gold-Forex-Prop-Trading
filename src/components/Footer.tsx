import React from 'react';
import { 
  TrendingUp, 
  Sparkles, 
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-dark-900 border-t border-slate-800/80 text-slate-400 text-xs py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-dark-900 font-extrabold shadow-md">
                <TrendingUp className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-base text-white tracking-tight font-['Outfit']">
                GOLD FOREX PROP TRADING
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              The complete institutional roadmap for mastering Gold (XAUUSD) forex trading, executing disciplined risk management, passing prop evaluations, and scaling funded allocations.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/basantzp/Gold-Forex-Prop-Trading"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Core Modules
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#intro-forex" className="hover:text-amber-300 transition-colors">Forex Market Basics</a></li>
              <li><a href="#gold-fundamentals" className="hover:text-amber-300 transition-colors">XAUUSD Dynamics</a></li>
              <li><a href="#prop-firm-fundamentals" className="hover:text-amber-300 transition-colors">Prop Evaluation Rules</a></li>
              <li><a href="#technical-analysis" className="hover:text-amber-300 transition-colors">Order Blocks & Liquidity</a></li>
              <li><a href="#risk-management" className="hover:text-amber-300 transition-colors">Position Sizing Formulas</a></li>
              <li><a href="#operations-scaling-advanced" className="hover:text-amber-300 transition-colors">Order Flow & Microstructure</a></li>
            </ul>
          </div>

          {/* Compliance & Risk Notice */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 font-mono">
              Educational Notice
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Trading Forex, Gold (XAUUSD), and CFD contracts involves substantial risk of loss. All roadmaps, tools, and calculators are provided strictly for educational purposes and do not constitute financial advice.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Gold Forex Prop Trading Master Roadmap. Built by{' '}
            <a 
              href="https://github.com/basantzp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline font-semibold"
            >
              Basant
            </a>.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              100% Free & Open Source
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
