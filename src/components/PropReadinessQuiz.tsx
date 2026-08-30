import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/quizData';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  HelpCircle, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const PropReadinessQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentIdx];
  const userSelected = selectedAnswers[currentQ.id];
  const isAnswered = userSelected !== undefined;

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQ.id]: index
    }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsQuizCompleted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#F59E0B', '#10B981', '#38BDF8']
      });
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsQuizCompleted(false);
  };

  // Score calculation
  const score = Object.entries(selectedAnswers).reduce((acc, [qId, ansIdx]) => {
    const question = QUIZ_QUESTIONS.find(q => q.id === Number(qId));
    if (question && question.correctIndex === ansIdx) return acc + 1;
    return acc;
  }, 0);

  const scorePercentage = Math.round((score / QUIZ_QUESTIONS.length) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-2">
          <Award className="w-3.5 h-3.5" />
          <span>INSTITUTIONAL BENCHMARK</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Outfit']">
          Prop Firm Trader Readiness Test
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Test your mastery of Gold pip calculations, daily drawdown rules, London/NY overlaps, and evaluation compliance.
        </p>
      </div>

      {!isQuizCompleted ? (
        <div className="p-6 sm:p-8 rounded-3xl bg-dark-850 border border-slate-800 space-y-6 shadow-2xl">
          
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-400">
              <span>Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}</span>
              <span className="text-amber-400 font-mono">{currentQ.category}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-dark-800 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <h3 className="text-base sm:text-lg font-bold text-slate-100 leading-snug">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((option, idx) => {
              let btnStyle = "bg-dark-800 hover:bg-slate-750 text-slate-200 border-slate-700";

              if (isAnswered) {
                if (idx === currentQ.correctIndex) {
                  btnStyle = "bg-emerald-500/20 text-emerald-300 border-emerald-500 font-bold";
                } else if (idx === userSelected) {
                  btnStyle = "bg-rose-500/20 text-rose-300 border-rose-500";
                } else {
                  btnStyle = "bg-dark-900/40 text-slate-500 border-slate-800";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-2xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <span>{option}</span>
                  {isAnswered && idx === currentQ.correctIndex && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && idx === userSelected && idx !== currentQ.correctIndex && (
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {showExplanation && (
            <div className="p-4 rounded-2xl bg-dark-900/90 border border-slate-800 space-y-2 animate-in fade-in">
              <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Institutional Explanation
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-900 font-extrabold text-xs transition-all shadow-md shadow-amber-500/20"
              >
                <span>{currentIdx === QUIZ_QUESTIONS.length - 1 ? 'View Final Results' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Quiz Complete Score Card */
        <div className="p-8 rounded-3xl bg-dark-850 border border-amber-500/40 space-y-6 text-center shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-dark-900 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30">
            <Award className="w-8 h-8 stroke-[2.5]" />
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-white font-['Outfit']">
              Test Completed!
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Here is your official evaluation readiness assessment
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 max-w-sm mx-auto space-y-2">
            <div className="text-4xl font-extrabold font-mono text-amber-400">
              {score} / {QUIZ_QUESTIONS.length}
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              {scorePercentage}% Readiness Score
            </div>
            <div className="text-xs text-emerald-400 font-medium pt-2 border-t border-slate-800">
              {scorePercentage >= 80 
                ? '🏆 Elite Readiness: You understand prop rules & XAUUSD risk mechanics!' 
                : '⚠️ Review Required: Review daily loss rules and pip calculations before buying a challenge.'}
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-dark-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Retake Assessment
          </button>
        </div>
      )}

    </div>
  );
};
