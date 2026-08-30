import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Upload, 
  Award, 
  CheckCircle2, 
  Copy, 
  Check, 
  Share2,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExportProgressModalProps {
  completedIds: string[];
  totalCount: number;
  onImportIds: (ids: string[]) => void;
  onClose: () => void;
}

export const ExportProgressModal: React.FC<ExportProgressModalProps> = ({
  completedIds,
  totalCount,
  onImportIds,
  onClose
}) => {
  const [copied, setCopied] = useState(false);
  const [importJsonText, setImportJsonText] = useState('');
  const [importError, setImportError] = useState('');
  const [traderName, setTraderName] = useState('Funded Gold Trader');

  const progressPct = totalCount > 0 ? Math.round((completedIds.length / totalCount) * 100) : 0;

  const exportData = {
    app: "Gold Forex Prop Trading Master Roadmap",
    version: "1.0",
    date: new Date().toISOString(),
    completedCount: completedIds.length,
    totalCount,
    progressPercentage: progressPct,
    completedTopicIds: completedIds
  };

  const jsonString = JSON.stringify(exportData, null, 2);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gold-forex-prop-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    try {
      setImportError('');
      const parsed = JSON.parse(importJsonText);
      if (Array.isArray(parsed.completedTopicIds)) {
        onImportIds(parsed.completedTopicIds);
        confetti({ particleCount: 70, spread: 60 });
        onClose();
      } else {
        setImportError('Invalid format: completedTopicIds array not found.');
      }
    } catch (e) {
      setImportError('Invalid JSON format. Please paste valid progress JSON.');
    }
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-dark-850 border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-100">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">
              Export Progress & Certificate
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Backup your roadmap progress or generate your completion certificate.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-dark-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Preview Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-dark-900 via-dark-850 to-dark-900 border-2 border-amber-500/40 text-center space-y-3 relative overflow-hidden">
          <div className="absolute top-2 right-2 text-amber-500/20">
            <Award className="w-24 h-24" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-mono text-[10px] font-bold border border-amber-500/30">
            <Sparkles className="w-3 h-3" /> OFFICIAL MASTER ROADMAP BADGE
          </div>

          <h4 className="text-lg font-bold text-amber-300 font-['Outfit']">
            Gold Forex Prop Trading Master
          </h4>

          <div className="text-3xl font-black font-mono text-white">
            {progressPct}% Completed
          </div>

          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            {completedIds.length} of {totalCount} institutional topics mastered on XAU/USD execution, risk management, and prop compliance.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <button
              onClick={handlePrintCertificate}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-900 font-bold text-xs shadow-md"
            >
              Print / Save Certificate
            </button>
          </div>
        </div>

        {/* JSON Backup Export & Import */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Cloud / Local Backup
          </h4>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleDownloadJson}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 transition-colors"
            >
              <Download className="w-4 h-4 text-amber-400" />
              Download JSON File
            </button>

            <button
              onClick={handleCopyJson}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              {copied ? 'Copied JSON!' : 'Copy to Clipboard'}
            </button>
          </div>

          {/* Import section */}
          <div className="space-y-2 pt-2">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Restore / Import Progress
            </label>
            <textarea
              value={importJsonText}
              onChange={(e) => setImportJsonText(e.target.value)}
              placeholder="Paste progress JSON here..."
              rows={3}
              className="w-full p-3 text-xs font-mono rounded-xl bg-dark-900 border border-slate-800 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500"
            />
            {importError && (
              <p className="text-xs text-rose-400 font-medium">{importError}</p>
            )}
            <button
              onClick={handleImport}
              disabled={!importJsonText.trim()}
              className="px-4 py-2 rounded-xl bg-dark-800 hover:bg-dark-750 disabled:opacity-40 border border-slate-700 text-xs font-bold text-amber-300"
            >
              Restore Progress
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
