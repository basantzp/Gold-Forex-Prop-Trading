import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Play, 
  TrendingUp, 
  Flame,
  Award
} from 'lucide-react';

interface SimulatedTrade {
  tradeNum: number;
  day: number;
  direction: 'Buy' | 'Sell';
  result: 'Win' | 'Loss';
  rrRatio: number;
  dollarRisk: number;
  pnl: number;
  newBalance: number;
  totalDrawdownPct: number;
  dailyDrawdownPct: number;
  passedDailyRule: boolean;
  passedMaxRule: boolean;
}

export const PropChallengeSimulator: React.FC = () => {
  const [startingBalance, setStartingBalance] = useState<number>(100000);
  const [profitTargetPct, setProfitTargetPct] = useState<number>(8); // 8% Phase 1
  const [dailyLossLimitPct, setDailyLossLimitPct] = useState<number>(5); // 5% Daily
  const [maxLossLimitPct, setMaxLossLimitPct] = useState<number>(10); // 10% Max
  const [riskPerTradePct, setRiskPerTradePct] = useState<number>(0.5); // 0.5% per trade
  const [targetRR, setTargetRR] = useState<number>(2.0); // 1:2 R:R
  const [assumedWinRate, setAssumedWinRate] = useState<number>(50); // 50% Win Rate

  const [simulatedTrades, setSimulatedTrades] = useState<SimulatedTrade[]>([]);
  const [simulationStatus, setSimulationStatus] = useState<'idle' | 'running' | 'passed' | 'failed'>('idle');
  const [failureReason, setFailureReason] = useState<string>('');

  const targetProfitDollar = (startingBalance * profitTargetPct) / 100;
  const maxLossDollar = (startingBalance * maxLossLimitPct) / 100;
  const maxDailyLossDollar = (startingBalance * dailyLossLimitPct) / 100;

  const runSimulation = () => {
    setSimulationStatus('running');
    setFailureReason('');

    const trades: SimulatedTrade[] = [];
    let currentBalance = startingBalance;
    let peakBalance = startingBalance;
    let day = 1;
    let tradesToday = 0;
    let dailyStartBalance = startingBalance;
    let hasFailed = false;
    let hasPassed = false;

    // Run up to 40 simulated trades
    for (let i = 1; i <= 40; i++) {
      tradesToday++;
      if (tradesToday > 2) {
        day++;
        tradesToday = 1;
        dailyStartBalance = currentBalance;
      }

      const isWin = Math.random() * 100 < assumedWinRate;
      const dollarRisk = (currentBalance * riskPerTradePct) / 100;
      const pnl = isWin ? dollarRisk * targetRR : -dollarRisk;

      currentBalance += pnl;
      if (currentBalance > peakBalance) peakBalance = currentBalance;

      const totalDrawdownPct = ((startingBalance - currentBalance) / startingBalance) * 100;
      const dailyDrawdownPct = ((dailyStartBalance - currentBalance) / dailyStartBalance) * 100;

      const passedDaily = dailyDrawdownPct < dailyLossLimitPct;
      const passedMax = totalDrawdownPct < maxLossLimitPct;

      trades.push({
        tradeNum: i,
        day,
        direction: Math.random() > 0.5 ? 'Buy' : 'Sell',
        result: isWin ? 'Win' : 'Loss',
        rrRatio: isWin ? targetRR : -1,
        dollarRisk,
        pnl,
        newBalance: currentBalance,
        totalDrawdownPct: Math.max(0, totalDrawdownPct),
        dailyDrawdownPct: Math.max(0, dailyDrawdownPct),
        passedDailyRule: passedDaily,
        passedMaxRule: passedMax
      });

      if (!passedDaily) {
        hasFailed = true;
        setFailureReason(`Violated ${dailyLossLimitPct}% Daily Drawdown rule on Day ${day} (Loss: -$${(dailyStartBalance - currentBalance).toFixed(0)})`);
        break;
      }

      if (!passedMax) {
        hasFailed = true;
        setFailureReason(`Violated ${maxLossLimitPct}% Maximum Total Drawdown rule on Trade #${i} (Balance fell below $${(startingBalance - maxLossDollar).toFixed(0)})`);
        break;
      }

      if (currentBalance >= startingBalance + targetProfitDollar) {
        hasPassed = true;
        break;
      }
    }

    setSimulatedTrades(trades);
    if (hasFailed) setSimulationStatus('failed');
    else if (hasPassed) setSimulationStatus('passed');
    else setSimulationStatus('idle');
  };

  const resetSimulator = () => {
    setSimulatedTrades([]);
    setSimulationStatus('idle');
    setFailureReason('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>PROBABILISTIC CHALLENGE AUDITOR</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">
          Prop Firm Evaluation Simulator
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-2xl">
          Simulate a sequence of Gold trades with randomized probabilistic outcomes to test whether your risk parameters will pass or fail the evaluation.
        </p>
      </div>

      {/* Simulator Config Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="p-4 rounded-2xl bg-dark-850 border border-slate-800 space-y-3">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
            Challenge Target & Rules
          </label>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Profit Target:</span>
              <span className="font-mono font-bold text-emerald-400">{profitTargetPct}% (+${targetProfitDollar.toLocaleString()})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Daily Loss Limit:</span>
              <span className="font-mono font-bold text-rose-400">{dailyLossLimitPct}% (-${maxDailyLossDollar.toLocaleString()})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Max Loss Limit:</span>
              <span className="font-mono font-bold text-rose-400">{maxLossLimitPct}% (-${maxLossDollar.toLocaleString()})</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-dark-850 border border-slate-800 space-y-3">
          <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
            Risk & Expectancy
          </label>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-400">Risk Per Trade:</span>
              <span className="font-mono font-bold text-amber-400">{riskPerTradePct}% (${(startingBalance * riskPerTradePct / 100).toFixed(0)})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Target Risk/Reward:</span>
              <span className="font-mono font-bold text-sky-400">1 : {targetRR.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Expected Win Rate:</span>
              <span className="font-mono font-bold text-slate-200">{assumedWinRate}%</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-dark-850 border border-slate-800 flex flex-col justify-between">
          <div className="text-xs text-slate-400 leading-relaxed">
            Test your statistical survival rate across 40 simulated market trades.
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={runSimulation}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-900 font-extrabold text-xs transition-all shadow-md shadow-amber-500/20"
            >
              <Play className="w-4 h-4 fill-dark-900" />
              Run Simulation
            </button>
            <button
              onClick={resetSimulator}
              className="p-2.5 rounded-xl bg-dark-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Simulation Result Status Banner */}
      {simulationStatus === 'passed' && (
        <div className="p-5 rounded-3xl bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center gap-4 text-emerald-200 shadow-xl shadow-emerald-500/10">
          <Award className="w-10 h-10 text-emerald-400 shrink-0" />
          <div>
            <h4 className="font-bold text-lg text-emerald-300">EVALUATION PASSED! 🎉</h4>
            <p className="text-xs text-emerald-200/90 mt-0.5">
              Congratulations! Your strategy achieved the +{profitTargetPct}% profit target in {simulatedTrades.length} trades with zero drawdown breaches.
            </p>
          </div>
        </div>
      )}

      {simulationStatus === 'failed' && (
        <div className="p-5 rounded-3xl bg-rose-500/20 border-2 border-rose-500/50 flex items-center gap-4 text-rose-200 shadow-xl shadow-rose-500/10">
          <XCircle className="w-10 h-10 text-rose-400 shrink-0" />
          <div>
            <h4 className="font-bold text-lg text-rose-300">EVALUATION FAILED (RULE BREACH)</h4>
            <p className="text-xs text-rose-200/90 mt-0.5">
              {failureReason}
            </p>
          </div>
        </div>
      )}

      {/* Trade Log Table */}
      {simulatedTrades.length > 0 && (
        <div className="p-5 rounded-3xl bg-dark-850 border border-slate-800 space-y-4">
          <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
            Simulated Trade Log ({simulatedTrades.length} Trades)
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 pb-2">
                  <th className="py-2 px-3">#</th>
                  <th className="py-2 px-3">Day</th>
                  <th className="py-2 px-3">Result</th>
                  <th className="py-2 px-3">P&L ($)</th>
                  <th className="py-2 px-3">Balance ($)</th>
                  <th className="py-2 px-3">Daily DD</th>
                  <th className="py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {simulatedTrades.map((t) => (
                  <tr key={t.tradeNum} className="hover:bg-dark-800/50">
                    <td className="py-2 px-3 text-slate-400">{t.tradeNum}</td>
                    <td className="py-2 px-3 text-slate-300">Day {t.day}</td>
                    <td className="py-2 px-3">
                      <span className={`px-2 py-0.5 rounded font-bold ${
                        t.result === 'Win' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                      }`}>
                        {t.result}
                      </span>
                    </td>
                    <td className={`py-2 px-3 font-bold ${t.pnl >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {t.pnl >= 0 ? `+$${t.pnl.toFixed(0)}` : `-$${Math.abs(t.pnl).toFixed(0)}`}
                    </td>
                    <td className="py-2 px-3 font-bold text-slate-100">
                      ${t.newBalance.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </td>
                    <td className="py-2 px-3 text-slate-400">
                      {t.dailyDrawdownPct.toFixed(2)}%
                    </td>
                    <td className="py-2 px-3">
                      {t.passedDailyRule && t.passedMaxRule ? (
                        <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> OK</span>
                      ) : (
                        <span className="text-rose-400 flex items-center gap-1 font-bold"><XCircle className="w-3.5 h-3.5" /> Breach</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
