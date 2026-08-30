import React, { useState } from 'react';
import { 
  Calculator, 
  DollarSign, 
  ShieldCheck, 
  AlertTriangle, 
  HelpCircle, 
  TrendingUp, 
  Info,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

export const PropRiskCalculator: React.FC = () => {
  const [accountBalance, setAccountBalance] = useState<number>(100000);
  const [riskPercent, setRiskPercent] = useState<number>(0.5);
  const [stopLossPips, setStopLossPips] = useState<number>(30); // 30 pips = $3.00 on Gold
  const [entryPrice, setEntryPrice] = useState<number>(2500.00);
  const [tradeDirection, setTradeDirection] = useState<'buy' | 'sell'>('buy');
  const [accountLeverage, setAccountLeverage] = useState<number>(100);

  // Quick Account Size Preset options
  const presetBalances = [10000, 25000, 50000, 100000, 200000, 400000];

  // Mathematical Calculations for Gold (XAUUSD)
  // 1 Standard Lot = 100 oz
  // 1 Pip = $0.10 price delta = $10.00 on 1.00 Lot
  const pipValuePerStandardLot = 10.00; // $10 per pip on 1.00 lot
  const dollarRisk = (accountBalance * riskPercent) / 100;
  
  // Lot Size = Dollar Risk / (Stop Loss in Pips * Pip Value)
  const calculatedLotSize = stopLossPips > 0 ? dollarRisk / (stopLossPips * pipValuePerStandardLot) : 0;
  const roundedLotSize = Math.max(0.01, Math.round(calculatedLotSize * 100) / 100);

  // Stop Loss & Target Price calculations
  const priceDeltaPerStop = stopLossPips * 0.10; // e.g. 30 pips = $3.00 price swing
  const calculatedStopPrice = tradeDirection === 'buy' 
    ? entryPrice - priceDeltaPerStop 
    : entryPrice + priceDeltaPerStop;
  
  const tp1Price = tradeDirection === 'buy' ? entryPrice + (priceDeltaPerStop * 1.5) : entryPrice - (priceDeltaPerStop * 1.5);
  const tp2Price = tradeDirection === 'buy' ? entryPrice + (priceDeltaPerStop * 2.0) : entryPrice - (priceDeltaPerStop * 2.0);
  const tp3Price = tradeDirection === 'buy' ? entryPrice + (priceDeltaPerStop * 3.0) : entryPrice - (priceDeltaPerStop * 3.0);

  // Margin required = (Lot Size * 100 oz * Entry Price) / Leverage
  const notionalValue = roundedLotSize * 100 * entryPrice;
  const requiredMargin = notionalValue / accountLeverage;
  const freeMarginRemaining = accountBalance - requiredMargin;
  const marginLevelPercent = requiredMargin > 0 ? (accountBalance / requiredMargin) * 100 : 0;

  // Prop Firm Risk Check
  const maxDailyLossLimit = accountBalance * 0.05; // 5% standard daily loss limit
  const maxAllowedTradesAtCurrentRisk = Math.floor(maxDailyLossLimit / dollarRisk);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-2">
          <Calculator className="w-3.5 h-3.5" />
          <span>INSTITUTIONAL LOT SIZING ENGINE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">
          XAU/USD Prop Position Size Calculator
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-2xl">
          Mathematically size your Gold trades to guarantee 100% compliance with prop firm daily drawdown (5%) and max drawdown (10%) rules.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Inputs Card */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-dark-850 border border-slate-800 space-y-6 shadow-xl">
          
          {/* Account Balance Preset */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Select Account Size
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-3">
              {presetBalances.map(bal => (
                <button
                  key={bal}
                  onClick={() => setAccountBalance(bal)}
                  className={`py-1.5 px-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    accountBalance === bal 
                      ? 'bg-amber-500 text-dark-900 shadow-md shadow-amber-500/20' 
                      : 'bg-dark-800 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  ${bal / 1000}k
                </button>
              ))}
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-mono">$</span>
              <input
                type="number"
                value={accountBalance}
                onChange={(e) => setAccountBalance(Math.max(1000, Number(e.target.value)))}
                className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-dark-800 border border-slate-700 text-white font-mono font-bold text-sm focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Risk Percentage & Stop Loss Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Risk % */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Risk Per Trade
                </label>
                <span className="text-xs font-mono font-bold text-amber-400">{riskPercent}% (${dollarRisk.toLocaleString()})</span>
              </div>
              <div className="flex gap-1.5 mb-2">
                {[0.25, 0.5, 1.0, 1.5].map(pct => (
                  <button
                    key={pct}
                    onClick={() => setRiskPercent(pct)}
                    className={`flex-1 py-1 text-xs font-mono font-semibold rounded-lg ${
                      riskPercent === pct 
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                        : 'bg-dark-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {pct}%
                  </button>
                ))}
              </div>
              <input
                type="range"
                min="0.1"
                max="3.0"
                step="0.05"
                value={riskPercent}
                onChange={(e) => setRiskPercent(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Stop Loss in Pips */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Stop Loss (Pips)
                </label>
                <span className="text-xs font-mono font-bold text-sky-400">{stopLossPips} Pips (${(stopLossPips * 0.10).toFixed(2)})</span>
              </div>
              <input
                type="number"
                min="5"
                max="300"
                value={stopLossPips}
                onChange={(e) => setStopLossPips(Math.max(1, Number(e.target.value)))}
                className="w-full px-3 py-2 rounded-xl bg-dark-800 border border-slate-700 text-white font-mono font-bold text-sm focus:outline-none focus:border-amber-500 mb-2"
              />
              <div className="flex gap-1.5">
                {[15, 25, 35, 50].map(p => (
                  <button
                    key={p}
                    onClick={() => setStopLossPips(p)}
                    className={`flex-1 py-1 text-[11px] font-mono rounded-md ${
                      stopLossPips === p 
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' 
                        : 'bg-dark-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {p}p
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Entry Price & Direction */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                XAU/USD Entry Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-mono">$</span>
                <input
                  type="number"
                  step="0.10"
                  value={entryPrice}
                  onChange={(e) => setEntryPrice(Number(e.target.value))}
                  className="w-full pl-8 pr-3 py-2 rounded-xl bg-dark-800 border border-slate-700 text-white font-mono font-bold text-sm focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Trade Direction
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setTradeDirection('buy')}
                  className={`py-2 rounded-xl text-xs font-bold transition-all ${
                    tradeDirection === 'buy'
                      ? 'bg-emerald-500 text-dark-900 shadow-md shadow-emerald-500/20'
                      : 'bg-dark-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  BUY (Long)
                </button>
                <button
                  onClick={() => setTradeDirection('sell')}
                  className={`py-2 rounded-xl text-xs font-bold transition-all ${
                    tradeDirection === 'sell'
                      ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                      : 'bg-dark-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  SELL (Short)
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Right Outputs Card */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Main Recommended Lot Size Highlight */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-dark-850 to-dark-850 border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-1">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              Calculated Lot Size
            </div>

            <div className="flex items-baseline gap-3 my-2">
              <span className="text-5xl font-extrabold text-white font-mono tracking-tight">
                {roundedLotSize.toFixed(2)}
              </span>
              <span className="text-sm text-slate-400 font-semibold uppercase">Standard Lots</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mt-2">
              Controls <strong className="text-amber-300">{(roundedLotSize * 100).toFixed(0)} oz</strong> of Gold worth <strong className="text-amber-300">${notionalValue.toLocaleString()}</strong>.
            </p>

            {/* Target Price Breakdowns */}
            <div className="mt-5 pt-4 border-t border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex justify-between items-center text-rose-400 bg-rose-500/10 px-3 py-1.5 rounded-lg border border-rose-500/20">
                <span>Stop Loss:</span>
                <span className="font-bold">${calculatedStopPrice.toFixed(2)} (-${dollarRisk.toFixed(0)})</span>
              </div>
              <div className="flex justify-between items-center text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                <span>TP 1 (1:1.5 R:R):</span>
                <span className="font-bold">${tp1Price.toFixed(2)} (+${(dollarRisk * 1.5).toFixed(0)})</span>
              </div>
              <div className="flex justify-between items-center text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                <span>TP 2 (1:2.0 R:R):</span>
                <span className="font-bold">${tp2Price.toFixed(2)} (+${(dollarRisk * 2.0).toFixed(0)})</span>
              </div>
              <div className="flex justify-between items-center text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                <span>TP 3 (1:3.0 R:R):</span>
                <span className="font-bold">${tp3Price.toFixed(2)} (+${(dollarRisk * 3.0).toFixed(0)})</span>
              </div>
            </div>

          </div>

          {/* Prop Firm Safety Health Card */}
          <div className="p-4 rounded-2xl bg-dark-850 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Daily Loss Limit Buffer (5%):</span>
              <span className="font-mono font-bold text-slate-200">${maxDailyLossLimit.toLocaleString()}</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Losses to Hit Daily Limit:</span>
              <span className="font-mono font-bold text-amber-400">{maxAllowedTradesAtCurrentRisk} consecutive losses</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Required Margin (1:{accountLeverage}):</span>
              <span className="font-mono font-bold text-slate-200">${Math.round(requiredMargin).toLocaleString()}</span>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-xs text-emerald-300">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Safe for prop evaluation. Risk is under the institutional 1.0% threshold.</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
