export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "On a $100,000 prop firm evaluation with a 5% maximum daily loss limit ($5,000), how is the daily limit calculated by top firms?",
    options: [
      "Based strictly on closed trade balance at the end of the day",
      "Based on the highest equity or balance at 00:00 server rollover time, including floating drawdown",
      "Based on total deposit amount minus withdrawals only",
      "Based on initial $100,000 starting balance only, regardless of account gains"
    ],
    correctIndex: 1,
    explanation: "Top prop firms calculate the daily loss limit from the starting equity/balance at 00:00 server time. Unrealized floating drawdown counts toward this limit—if floating equity drops -$5,000 at any second, the account breaches instantly.",
    category: "Prop Firm Rules"
  },
  {
    id: 2,
    question: "What is the monetary value of a 1-pip ($0.10 price movement) change on 1.00 Standard Lot of XAU/USD (Gold)?",
    options: [
      "$1.00 USD",
      "$10.00 USD",
      "$50.00 USD",
      "$100.00 USD"
    ],
    correctIndex: 1,
    explanation: "1 Standard Lot of Gold equals 100 troy ounces. A $0.10 price move (1 pip/point) = 100 oz × $0.10 = $10.00 USD. A $1.00 move equals $100.00 USD.",
    category: "Gold Calculations"
  },
  {
    id: 3,
    question: "Which global market session overlap provides the highest liquidity, volume, and volatility expansion for Gold (XAUUSD)?",
    options: [
      "Sydney and Tokyo overlap (00:00 - 06:00 UTC)",
      "Tokyo and London overlap (07:00 - 09:00 UTC)",
      "London and New York overlap (12:00 - 16:00 UTC)",
      "New York and Sydney overlap (21:00 - 22:00 UTC)"
    ],
    correctIndex: 2,
    explanation: "The London and New York session overlap (12:00 - 16:00 UTC) represents the 'Golden Window' accounting for over 60% of total daily forex and metals trading volume.",
    category: "Session Mechanics"
  },
  {
    id: 4,
    question: "You want to enter a Gold trade on a $200,000 prop challenge with a 25-pip stop loss, risking exactly 0.5% ($1,000). What is the exact lot size?",
    options: [
      "1.00 Lots",
      "2.50 Lots",
      "4.00 Lots",
      "8.00 Lots"
    ],
    correctIndex: 2,
    explanation: "Formula: Lot Size = Dollar Risk / (Stop Pips × Pip Value). $1,000 / (25 pips × $10.00/pip) = $1,000 / $250 = 4.00 Standard Lots.",
    category: "Position Sizing"
  },
  {
    id: 5,
    question: "Why should prop evaluation traders avoid holding open Gold positions over the weekend close?",
    options: [
      "Brokers charge excessive weekend account inactivity penalties",
      "Sunday opening geopolitical gaps bypass stop losses, causing instant slippage breaches",
      "Prop firms do not allow trading during weekends under any circumstances",
      "Gold market spreads permanently lock at zero over the weekend"
    ],
    correctIndex: 1,
    explanation: "Over the weekend, geopolitical events can cause Gold to open $30-$80 higher or lower on Sunday night. This gap skips past resting stop losses, executing at the opening market price and breaching drawdown limits.",
    category: "Risk Management"
  },
  {
    id: 6,
    question: "What is the institutional 'Judas Swing' liquidity sweep pattern on Gold during the London Open?",
    options: [
      "A fast move that breaks the 200 EMA without any retracement",
      "A false breakout spike above/below the Asian session range that triggers retail stop orders before reversing aggressively in the true direction",
      "An automated bot error during daylight savings time changes",
      "A three-candle pattern where all wicks are equal size"
    ],
    correctIndex: 1,
    explanation: "The Judas Swing is an engineered fakeout at 07:00-08:00 UTC where market makers push price beyond Asian session extremes to capture resting breakout orders and stop losses before propelling the true daily trend.",
    category: "Technical Analysis"
  },
  {
    id: 7,
    question: "How do US Real Interest Rates (TIPS 10-Year yield) generally correlate with Gold (XAUUSD)?",
    options: [
      "Strong Positive Correlation: Rising real yields make Gold rally higher",
      "Zero Correlation: Real yields only affect equity markets",
      "Strong Inverse Correlation: Falling real yields decrease the opportunity cost of holding bullion, driving Gold into structural bull runs",
      "Random Correlation dependent entirely on cryptocurrency prices"
    ],
    correctIndex: 2,
    explanation: "Gold is a non-yielding asset. When real interest rates (nominal yield minus inflation) drop or turn negative, the opportunity cost of holding physical bullion collapses, sparking massive institutional capital inflows.",
    category: "Macro Fundamentals"
  },
  {
    id: 8,
    question: "If a trader achieves an 8% profit target on a $100,000 evaluation in 2 days, but the firm has a 5-day minimum trading rule, what is the professional protocol?",
    options: [
      "Keep trading full 1% lot sizes to try to double the account to 16%",
      "Place micro-lots (0.01 lots) on the remaining 3 days to safely satisfy the minimum trading days requirement without risking the profit buffer",
      "Request customer support to waive the rule immediately",
      "Leave positions open overnight to simulate continuous activity"
    ],
    correctIndex: 1,
    explanation: "Once the profit target is secured, risking full capital is reckless. Disciplined traders place microscopic 0.01 lot positions for the remaining required days to fulfill the rule with zero threat to the evaluation.",
    category: "Evaluation Strategy"
  },
  {
    id: 9,
    question: "What is the primary indicator of institutional order accumulation visible through Order Flow Footprint charts?",
    options: [
      "Extreme delta imbalances and volume absorption where heavy market selling fails to push price lower",
      "Simple 9-period moving average crossovers",
      "A standard 14-period RSI oscillator reaching 80",
      "Daily pivot point formulas"
    ],
    correctIndex: 0,
    explanation: "Order Flow footprint charts reveal absorption when aggressive market sell orders hit resting passive institutional limit bids (iceberg orders), absorbing the selling without price declining.",
    category: "Advanced Order Flow"
  },
  {
    id: 10,
    question: "After successfully receiving your first $100,000 funded account, what is the first risk adjustment you should implement?",
    options: [
      "Immediately double lot size to 2% to make fast payout money",
      "Reduce risk per trade to 0.25% - 0.50% to build a 2-3% profit cushion before seeking normal gains",
      "Switch strategies from day trading to high-frequency automated bots",
      "Stop trading for 6 months"
    ],
    correctIndex: 1,
    explanation: "A new funded account starts at $0 profit with the maximum daily loss active at starting balance. Reducing risk to 0.25% protects the account while building a 2-3% safety buffer.",
    category: "Funded Scaling"
  }
];
