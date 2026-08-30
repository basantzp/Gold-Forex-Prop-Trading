export interface SubTopic {
  id: string;
  title: string;
  side: 'left' | 'right';
  description: string;
  goldInsight: string;
  propRule: string;
  keyTakeaway: string;
  formulaOrRule?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mastery';
}

export interface HubNode {
  id: string;
  title: string;
  category: string;
  description: string;
  color: string;
  leftTopics: SubTopic[];
  rightTopics: SubTopic[];
}

export interface RoadmapSection {
  id: string;
  title: string;
  phase: number;
  description: string;
  hubs: HubNode[];
}

export const ROADMAP_SECTIONS: RoadmapSection[] = [
  {
    "id": "intro-forex",
    "title": "Introduction to Forex",
    "phase": 1,
    "description": "Foundational currency mechanics, 24-hour trading session cycles, institutional participants, order types, and leverage foundations.",
    "hubs": [
      {
        "id": "forex-market-basics",
        "title": "Forex Market Basics",
        "category": "Foundations",
        "description": "Core concepts of currency pair quoting, pricing conventions, spread calculation, and pip valuation.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "sydney-session-hours",
            "title": "Sydney session hours",
            "side": "left",
            "description": "Opening window of global trading day (21:00 - 06:00 UTC).",
            "goldInsight": "XAUUSD consolidates in narrow ranges during Sydney; marks the baseline Asian range.",
            "propRule": "Avoid large lot sizing during illiquid Sydney hours due to widened broker spreads.",
            "keyTakeaway": "Mark overnight highs/lows for London sweeps.",
            "difficulty": "Beginner"
          },
          {
            "id": "tokyo-session-hours",
            "title": "Tokyo session hours",
            "side": "left",
            "description": "Asian financial center trading window (00:00 - 09:00 UTC).",
            "goldInsight": "Asian central banks and institutional flows create early range benchmarks.",
            "propRule": "Keep risk under 0.25% if trading Asian session due to pre-London fakeouts.",
            "keyTakeaway": "Asian range highs/lows form primary London targets.",
            "difficulty": "Beginner"
          },
          {
            "id": "london-session-hours",
            "title": "London session hours",
            "side": "left",
            "description": "Highest volume European market window (07:00 - 16:00 UTC).",
            "goldInsight": "XAUUSD sees its strongest institutional expansion moves between 07:00 and 10:30 UTC.",
            "propRule": "Prime window for prop evaluation execution; tightest spreads on Gold.",
            "keyTakeaway": "Focus primary daily setups around the London Open.",
            "difficulty": "Beginner"
          },
          {
            "id": "new-york-session-hours",
            "title": "New York session hours",
            "side": "left",
            "description": "North American window (12:00 - 21:00 UTC) driven by USD data releases.",
            "goldInsight": "Highest volatility for Gold occurs during NY Open and US data releases (12:30-14:00 UTC).",
            "propRule": "Check news calendar 15 minutes prior to NY open to prevent news trading violations.",
            "keyTakeaway": "NY session expands London trend or engineers aggressive daily reversals.",
            "difficulty": "Beginner"
          },
          {
            "id": "session-overlaps",
            "title": "Session overlaps",
            "side": "left",
            "description": "London & New York overlap from 12:00 to 16:00 UTC.",
            "goldInsight": "The Golden Window where Gold prints its most explosive 100-300 pip trends.",
            "propRule": "Maximum profit velocity; enforce strict stop losses to avoid rapid drawdown.",
            "keyTakeaway": "80% of profitable prop traders execute during the London-NY overlap.",
            "difficulty": "Intermediate"
          },
          {
            "id": "liquidity-variations",
            "title": "Liquidity variations",
            "side": "left",
            "description": "Fluctuations in order book depth across market hours.",
            "goldInsight": "Liquidity drops sharply after 19:00 UTC and during 21:00-22:00 UTC rollover.",
            "propRule": "Close intraday positions before market rollover to avoid wide spread stopouts.",
            "keyTakeaway": "Trade only when institutional market makers are actively providing liquidity.",
            "difficulty": "Intermediate"
          },
          {
            "id": "volatility-peaks",
            "title": "Volatility peaks",
            "side": "left",
            "description": "Expansion phases triggered by macro catalysts and session opens.",
            "goldInsight": "Gold ATR can expand from 150 pips to 600+ pips within minutes of FOMC/NFP.",
            "propRule": "Halve position size when ATR is at 90th percentile to protect daily limits.",
            "keyTakeaway": "Volatility creates opportunity only when position sizing is calibrated.",
            "difficulty": "Intermediate"
          }
        ],
        "rightTopics": [
          {
            "id": "currency-pairs-structure",
            "title": "Currency pairs structure",
            "side": "right",
            "description": "Base and quote currency quotation structure (XAU/USD).",
            "goldInsight": "Gold is priced in USD per troy ounce ($2,500.00 = 1 oz Gold).",
            "propRule": "Ensure your account pip calculator matches XAUUSD contract specs.",
            "keyTakeaway": "Analyze USD Index (DXY) as the inverse quote driver of Gold.",
            "difficulty": "Beginner"
          },
          {
            "id": "major-currency-pairs",
            "title": "Major currency pairs",
            "side": "right",
            "description": "Most heavily traded pairs globally (EURUSD, GBPUSD, USDJPY).",
            "goldInsight": "EURUSD movements correlate strongly with precious metals liquidity.",
            "propRule": "Do not stack correlated trades exceeding your total daily risk budget.",
            "keyTakeaway": "Major pairs provide macro sentiment confirmation for Gold.",
            "difficulty": "Beginner"
          },
          {
            "id": "minor-currency-pairs",
            "title": "Minor currency pairs",
            "side": "right",
            "description": "Cross currency pairs excluding the US Dollar.",
            "goldInsight": "JPY crosses reflect risk-on/risk-off sentiment that spills into gold demand.",
            "propRule": "Keep prop firm focus on 1-2 instruments (e.g. XAUUSD exclusively).",
            "keyTakeaway": "Cross pairs reflect sovereign economic strength independent of USD.",
            "difficulty": "Beginner"
          },
          {
            "id": "exotic-currency-pairs",
            "title": "Exotic currency pairs",
            "side": "right",
            "description": "Major currency paired with emerging economy currency.",
            "goldInsight": "South Africa (USDZAR) is a major physical producer affecting supply metrics.",
            "propRule": "Avoid trading exotics in prop evaluations due to huge spreads and slippage.",
            "keyTakeaway": "Exotics carry high carry costs unsuitable for prop rules.",
            "difficulty": "Intermediate"
          },
          {
            "id": "bid-and-ask-prices",
            "title": "Bid and ask prices",
            "side": "right",
            "description": "Price at which market will buy (Bid) vs sell (Ask).",
            "goldInsight": "Longs open on Ask and close on Bid; shorts open on Bid and close on Ask.",
            "propRule": "Factor Ask spread into buy stop loss placement to avoid early wicks.",
            "keyTakeaway": "Understanding the spread differential prevents premature stop hits.",
            "difficulty": "Beginner"
          },
          {
            "id": "spread-definition",
            "title": "Spread definition",
            "side": "right",
            "description": "Difference between Ask and Bid charged by brokers.",
            "goldInsight": "XAUUSD spreads range 12-25 points during liquid sessions, widening during news.",
            "propRule": "Never enter Gold trades during 5 minutes before/after rollover.",
            "keyTakeaway": "Raw spread ECN accounts are mandatory for prop scalping.",
            "difficulty": "Beginner"
          },
          {
            "id": "pip-value-calculation",
            "title": "Pip value calculation",
            "side": "right",
            "description": "Monetary value of single pip/point movement.",
            "goldInsight": "1 Standard Lot (100 oz) moving $0.10 (1 pip) = $10.00 USD.",
            "propRule": "Formula: Lots x 100 x (Exit - Entry) = P&L ($). Memorize before trading.",
            "formulaOrRule": "P&L = Lots \u00d7 100 \u00d7 (Exit Price - Entry Price)",
            "keyTakeaway": "Accurate pip valuation is the prerequisite for flawless risk control.",
            "difficulty": "Beginner"
          }
        ]
      },
      {
        "id": "trading-sessions",
        "title": "Trading Sessions",
        "category": "Market Timing",
        "description": "Session dynamics and market overlap liquidity throughout the 24-hour cycle.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "market-participants",
        "title": "Market Participants",
        "category": "Market Structure",
        "description": "Institutional hierarchy driving order flow, wholesale liquidity, and retail execution.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "market-orders",
            "title": "Market orders",
            "side": "left",
            "description": "Executed immediately at best available current market price.",
            "goldInsight": "Market orders during fast Gold breakouts often suffer 10-30 points slippage.",
            "propRule": "Prefer limit orders at key support/resistance to eliminate spread penalty.",
            "keyTakeaway": "Crosses spread immediately against resting liquidity.",
            "difficulty": "Beginner"
          },
          {
            "id": "limit-orders",
            "title": "Limit orders",
            "side": "left",
            "description": "Orders to buy below current price or sell above current price.",
            "goldInsight": "Placing Buy Limits at institutional Discount Order Blocks catches zero-slippage bounces.",
            "propRule": "Limit orders ensure exact risk entry and prevent chasing candles.",
            "keyTakeaway": "Patience in waiting for limit fills preserves risk-to-reward.",
            "difficulty": "Beginner"
          },
          {
            "id": "stop-orders",
            "title": "Stop orders",
            "side": "left",
            "description": "Triggered when price breaks beyond a specific threshold.",
            "goldInsight": "Used for momentum breakouts above London highs or Asian range extremes.",
            "propRule": "Ensure prop firm allows stop orders through news events.",
            "keyTakeaway": "Enters momentum automatically but carries slippage risk.",
            "difficulty": "Beginner"
          },
          {
            "id": "stop-loss-orders",
            "title": "Stop loss orders",
            "side": "left",
            "description": "Non-negotiable risk boundary order limiting maximum loss.",
            "goldInsight": "Place stop losses beyond structural liquidity points, never at round numbers.",
            "propRule": "MANDATORY: Prop firms terminate accounts trading without hard stop losses.",
            "formulaOrRule": "Max Risk = 0.5% - 1.0% of Balance",
            "keyTakeaway": "Your stop loss is the single most valuable insurance policy.",
            "difficulty": "Beginner"
          },
          {
            "id": "take-profit-orders",
            "title": "Take profit orders",
            "side": "left",
            "description": "Pre-set orders closing positions once target price is reached.",
            "goldInsight": "Set TPs at opposing liquidity pools (equal highs, unmitigated supply).",
            "propRule": "Locking in fixed 1:2 or 1:3 R:R prevents giving back evaluation gains.",
            "keyTakeaway": "Take profits mechanically at planned technical objectives.",
            "difficulty": "Beginner"
          },
          {
            "id": "trailing-stops",
            "title": "Trailing stops",
            "side": "left",
            "description": "Dynamic stop orders tracking favorable price movement.",
            "goldInsight": "Trail stops behind 15-minute swing lows during trending Gold moves.",
            "propRule": "Trailing stops protect floating profit towards daily drawdown limits.",
            "keyTakeaway": "Participate in runaway trends while locking in risk-free gains.",
            "difficulty": "Intermediate"
          },
          {
            "id": "oco-orders",
            "title": "OCO orders",
            "side": "left",
            "description": "One-Cancels-the-Other linked pending orders.",
            "goldInsight": "Used during range consolidation to straddle breakouts above/below boundaries.",
            "propRule": "Avoid news straddling if firm prohibits trading red-folder news.",
            "keyTakeaway": "Automates multi-scenario trading plans without manual intervention.",
            "difficulty": "Intermediate"
          }
        ],
        "rightTopics": [
          {
            "id": "retail-traders",
            "title": "Retail traders",
            "side": "right",
            "description": "Individual traders speculating on personal or prop accounts (~5% volume).",
            "goldInsight": "Retail herd sentiment creates the liquidity smart money targets.",
            "propRule": "Do not trade like the 95% retail herd that fails prop evaluations.",
            "keyTakeaway": "Trade alongside institutional order flow rather than retail emotion.",
            "difficulty": "Beginner"
          },
          {
            "id": "commercial-banks",
            "title": "Commercial banks",
            "side": "right",
            "description": "Tier-1 institutions (JPMorgan, HSBC, UBS) managing bullion flow.",
            "goldInsight": "Commercial banks execute physical bullion hedges anchoring long-term support.",
            "propRule": "Understand bank fixing times (London Gold AM 10:30 & PM 15:00 UTC).",
            "keyTakeaway": "Tier-1 banks are the primary wholesale liquidity providers.",
            "difficulty": "Intermediate"
          },
          {
            "id": "central-banks",
            "title": "Central banks",
            "side": "right",
            "description": "Monetary authorities controlling interest rates, reserves, and money supply.",
            "goldInsight": "Central banks are net buyers of physical Gold, driving structural multi-year bull runs.",
            "propRule": "Track Central Bank reserve reports (PBOC gold buying streaks).",
            "keyTakeaway": "Central banks dictate interest rate cycles and currency debasement.",
            "difficulty": "Intermediate"
          },
          {
            "id": "hedge-funds",
            "title": "Hedge funds",
            "side": "right",
            "description": "Institutional asset managers executing algorithmic and macro momentum.",
            "goldInsight": "CFTC COT reports reveal speculative hedge fund net long/short positioning.",
            "propRule": "When hedge fund net long positioning hits historical extremes, watch for sharp flushes.",
            "keyTakeaway": "Hedge funds drive medium-term trend acceleration.",
            "difficulty": "Intermediate"
          },
          {
            "id": "multinational-corporations",
            "title": "Multinational corporations",
            "side": "right",
            "description": "Corporations exchanging currencies for global trade and raw materials.",
            "goldInsight": "Tech and jewelry conglomerates buy physical forward contracts regardless of patterns.",
            "propRule": "Commercial corporate flows can absorb technical levels without warning.",
            "keyTakeaway": "Corporate hedging represents non-speculative structural market flow.",
            "difficulty": "Intermediate"
          },
          {
            "id": "market-makers",
            "title": "Market makers",
            "side": "right",
            "description": "Firms quoting bid/ask prices to capture spreads and provide liquidity.",
            "goldInsight": "Market makers engineer liquidity runs into stop clusters before true moves.",
            "propRule": "Never place stops at obvious equal highs/lows where algorithms sweep.",
            "keyTakeaway": "Market makers require volume; your stop loss is their liquidity.",
            "difficulty": "Advanced"
          },
          {
            "id": "liquidity-providers",
            "title": "Liquidity providers",
            "side": "right",
            "description": "Prime brokers and non-bank market makers aggregating order books.",
            "goldInsight": "Prop demo bridges simulate LP fills; fast scalping during low liquidity causes slippage.",
            "propRule": "Ensure prop firm uses reputable Tier-1 liquidity providers.",
            "keyTakeaway": "Quality liquidity providers guarantee tight spreads and clean fills.",
            "difficulty": "Advanced"
          }
        ]
      },
      {
        "id": "order-types",
        "title": "Order Types",
        "category": "Execution",
        "description": "Execution mechanics, pending order types, stop loss safeguards, and automated exits.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "leverage-and-margin",
        "title": "Leverage and Margin",
        "category": "Capital Mechanics",
        "description": "Purchasing power amplification, margin requirements, free margin buffers, and liquidation prevention.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "mt4-interface",
            "title": "MetaTrader 4 interface",
            "side": "left",
            "description": "Legacy standard platform built for fast execution and custom indicators.",
            "goldInsight": "MT4 lightweight architecture provides millisecond execution for Gold scalping.",
            "propRule": "Set up hotkeys and one-click trading with lot size scripts in MT4.",
            "keyTakeaway": "MT4 is widely supported across top-tier prop firms.",
            "difficulty": "Beginner"
          },
          {
            "id": "mt5-features",
            "title": "MetaTrader 5 features",
            "side": "left",
            "description": "Next-gen platform with DOM, native 64-bit speed, and 21 timeframes.",
            "goldInsight": "MT5 displays real volume tick distribution and multi-timeframe analysis.",
            "propRule": "Use MT5 built-in economic calendar and order fill policies.",
            "keyTakeaway": "MT5 provides superior backtesting and order fill precision.",
            "difficulty": "Beginner"
          },
          {
            "id": "ctrader-platform",
            "title": "cTrader platform",
            "side": "left",
            "description": "Direct Market Access platform with level 2 DOM and risk presets.",
            "goldInsight": "cTrader allows entering positions directly by dollar risk amount.",
            "propRule": "Take advantage of QuickTrade risk presets to never violate maximum risk.",
            "keyTakeaway": "cTrader offers the cleanest user interface and native risk controls.",
            "difficulty": "Intermediate"
          },
          {
            "id": "tradingview-integration",
            "title": "TradingView integration",
            "side": "left",
            "description": "Premier web charting platform with cloud sync and multi-asset layouts.",
            "goldInsight": "Analyze XAUUSD, DXY, US10Y, and Gold futures (GC1!) side-by-side.",
            "propRule": "Do technical analysis on TradingView and execute on prop terminal.",
            "keyTakeaway": "TradingView is the golden standard for charting clarity.",
            "difficulty": "Beginner"
          },
          {
            "id": "mobile-trading-apps",
            "title": "Mobile trading apps",
            "side": "left",
            "description": "iOS and Android apps for monitoring positions and modifying stops.",
            "goldInsight": "Mobile apps are ideal for managing trailing stops; avoid opening new setups.",
            "propRule": "Do not revenge trade on mobile after taking a loss.",
            "keyTakeaway": "Use mobile exclusively for risk monitoring, not impulsive execution.",
            "difficulty": "Beginner"
          },
          {
            "id": "order-execution-speed",
            "title": "Order execution speed",
            "side": "left",
            "description": "Latency from order dispatch to execution fill (ms).",
            "goldInsight": "An extra 200ms latency during high volatility can cost 20-50 pips slippage.",
            "propRule": "Select prop servers in London (LD4) or New York (NY4) with <20ms latency.",
            "keyTakeaway": "Low latency ensures stop loss and limit entries fill at exact prices.",
            "difficulty": "Intermediate"
          },
          {
            "id": "charting-tools",
            "title": "Charting tools",
            "side": "left",
            "description": "Drawing suites (Fibonacci, VWAP, volume profile, pitchforks).",
            "goldInsight": "Fibonacci 61.8% Golden Pocket and Volume Profile POC reign supreme on Gold.",
            "propRule": "Keep chart layout clean: max 2-3 high-probability tools.",
            "keyTakeaway": "Master 2-3 institutional tools rather than cluttering charts.",
            "difficulty": "Beginner"
          }
        ],
        "rightTopics": [
          {
            "id": "leverage-mechanics",
            "title": "Leverage mechanics",
            "side": "right",
            "description": "Using borrowed broker capital to control larger contract sizes.",
            "goldInsight": "1:100 leverage allows controlling $250k Gold position (1 lot) with $2.5k margin.",
            "propRule": "Never use maximum leverage; size positions by risk percentage (0.5-1%).",
            "formulaOrRule": "Effective Leverage = Notional ($) / Balance ($)",
            "keyTakeaway": "Leverage amplifies returns and losses: size by fixed risk.",
            "difficulty": "Beginner"
          },
          {
            "id": "margin-requirements",
            "title": "Margin requirements",
            "side": "right",
            "description": "Minimum collateral held in reserve to keep positions active.",
            "goldInsight": "XAUUSD margin at 1:100 leverage is 1% of contract value ($2,500/lot).",
            "propRule": "Over-allocating margin leaves zero room for intraday swings.",
            "keyTakeaway": "Maintain at least 80% free margin to avoid risk-desk intervention.",
            "difficulty": "Beginner"
          },
          {
            "id": "free-margin",
            "title": "Free margin",
            "side": "right",
            "description": "Account Equity minus Used Margin available for new trades.",
            "goldInsight": "Declining free margin during volatility restricts scaling and hedging.",
            "propRule": "If Free Margin drops below 50%, audit open exposure immediately.",
            "keyTakeaway": "Healthy free margin protects accounts during news spread expansion.",
            "difficulty": "Beginner"
          },
          {
            "id": "margin-call-level",
            "title": "Margin call level",
            "side": "right",
            "description": "Threshold (100% margin level) where broker alerts collateral erosion.",
            "goldInsight": "A margin call in a prop firm means daily drawdown has already been breached.",
            "propRule": "Prop traders must never get close to margin calls; drawdown limit hits first.",
            "keyTakeaway": "If margin call occurs, position sizing strategy has fundamentally failed.",
            "difficulty": "Beginner"
          },
          {
            "id": "stop-out-level",
            "title": "Stop out level",
            "side": "right",
            "description": "Critical margin percentage (50%/30%) where broker liquidates trades.",
            "goldInsight": "Forced liquidation on Gold occurs at the worst possible market prices.",
            "propRule": "In prop firms, breach happens at 5-10% drawdown, well before broker stopout.",
            "keyTakeaway": "Hard stops prevent catastrophic liquidation of a broker stop out.",
            "difficulty": "Beginner"
          },
          {
            "id": "position-sizing",
            "title": "Position sizing",
            "side": "right",
            "description": "Scientific calculation of lot sizes based on dollar risk tolerance.",
            "goldInsight": "30-pip stop on $100k account risking 1% ($1,000): Lot Size = $1,000 / (30 x $10) = 3.33 Lots.",
            "propRule": "Calculate position size on EVERY single trade; never guess.",
            "formulaOrRule": "Lot Size = (Balance \u00d7 Risk%) / (SL Pips \u00d7 Pip Value)",
            "keyTakeaway": "Consistent position sizing separates funded pros from blown accounts.",
            "difficulty": "Intermediate"
          },
          {
            "id": "lot-size-calculation",
            "title": "Lot size calculation",
            "side": "right",
            "description": "Formula translating account balance, stop distance, and point value.",
            "goldInsight": "Standard Lot = 100 oz ($10/pip). Mini = 10 oz ($1/pip). Micro = 1 oz ($0.10/pip).",
            "propRule": "Use our built-in Gold Prop Position Size Calculator before every trade.",
            "keyTakeaway": "Scale lots down as stop expands to keep dollar risk constant.",
            "difficulty": "Beginner"
          }
        ]
      },
      {
        "id": "trading-platforms",
        "title": "Trading Platforms",
        "category": "Infrastructure",
        "description": "Software ecosystems, execution engines, charting suites, and mobile tools.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      }
    ]
  },
  {
    "id": "gold-fundamentals",
    "title": "Gold Market Fundamentals",
    "phase": 2,
    "description": "XAUUSD macroeconomic drivers, safe haven flows, real interest rate dynamics, central bank buying, and contract specs.",
    "hubs": [
      {
        "id": "gold-as-an-asset",
        "title": "Gold as an Asset",
        "category": "Precious Metals",
        "description": "Physical supply/demand, safe haven characteristics, store of value, and monetary debasement hedge.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "gold-vs-usd",
            "title": "Gold versus US Dollar",
            "side": "left",
            "description": "Inverse correlation between world reserve currency and physical bullion.",
            "goldInsight": "When DXY rallies on hawkish Fed policy, XAUUSD faces heavy selling pressure.",
            "propRule": "Confirm Gold direction with DXY trend alignment before high-risk setups.",
            "keyTakeaway": "Strong Dollar = Headwind; Weak Dollar = Explosive Bullish Gold.",
            "difficulty": "Beginner"
          },
          {
            "id": "pricing-mechanism",
            "title": "Pricing mechanism",
            "side": "left",
            "description": "Interaction of London OTC wholesale fix and COMEX futures pricing.",
            "goldInsight": "Spot Gold priced per troy ounce (31.1035g) based on continuous global transactions.",
            "propRule": "Be aware of price discrepancies between CFD brokers and futures benchmarks.",
            "keyTakeaway": "Wholesale bullion settlement anchors intraday spot market liquidity.",
            "difficulty": "Intermediate"
          },
          {
            "id": "spot-gold-trading",
            "title": "Spot gold trading",
            "side": "left",
            "description": "Over-the-counter spot commodity contracts (XAUUSD).",
            "goldInsight": "Spot gold allows micro-lot sizing (0.01 = 1 oz) for exact prop risk management.",
            "propRule": "Most prop firms trade CFD spot gold feeds; verify overnight swap fees.",
            "keyTakeaway": "Spot trading offers maximum flexibility for intraday challenge risk.",
            "difficulty": "Beginner"
          },
          {
            "id": "gold-futures-contracts",
            "title": "Gold futures contracts",
            "side": "left",
            "description": "Standardized CME/COMEX contracts (GC ticker, 100 troy oz).",
            "goldInsight": "COMEX futures volume and Open Interest dictate breakout legitimacy on spot charts.",
            "propRule": "Futures prop firms enforce strict daily contract limits (e.g. max 5 GC contracts).",
            "keyTakeaway": "Monitor COMEX futures volume bars to confirm institutional conviction.",
            "difficulty": "Intermediate"
          },
          {
            "id": "contract-specifications",
            "title": "Contract specifications",
            "side": "left",
            "description": "Contract size, tick size, minimum lot increments, and swaps.",
            "goldInsight": "1 Standard Lot = 100 troy oz. Minimum price move is $0.01 ($1.00/lot).",
            "propRule": "Know your broker multiplier: standard is 100, but some CFDs use 10 or 1000.",
            "formulaOrRule": "1 Pip on Gold = $0.10 price move = $10.00 on 1.00 Lot",
            "keyTakeaway": "Confirm contract specs in terminal before trading a new prop account.",
            "difficulty": "Beginner"
          },
          {
            "id": "tick-value-gold",
            "title": "Tick value of gold",
            "side": "left",
            "description": "Smallest price movement value in a financial contract.",
            "goldInsight": "0.01 tick = $1.00 per standard lot. A $10.00 move yields $1,000 per lot.",
            "propRule": "A 500-pip Gold flash crash wipes $5,000 on 1 lot; stop discipline is paramount.",
            "keyTakeaway": "High tick value produces rapid gains and severe drawdown risk.",
            "difficulty": "Beginner"
          },
          {
            "id": "spreads-on-gold",
            "title": "Spreads on gold",
            "side": "left",
            "description": "Difference between buy and sell quotes across liquidity regimes.",
            "goldInsight": "Normal spread: 12-25 points ($0.12-$0.25). News spread: 100-300 points ($1-$3).",
            "propRule": "Do not scalp 10-pip targets when spreads are 25 pips; negative expectancy.",
            "keyTakeaway": "Target minimum 30-50 pip moves on Gold so spreads don't erode edge.",
            "difficulty": "Beginner"
          }
        ],
        "rightTopics": [
          {
            "id": "safe-haven-asset",
            "title": "Safe haven asset",
            "side": "right",
            "description": "Asset expected to retain/increase value during market downturns and crises.",
            "goldInsight": "During wars, banking panics, or defaults, global capital flees into XAUUSD.",
            "propRule": "Safe haven breakouts defy resistance; never short a geopolitical panic candle.",
            "keyTakeaway": "Gold is the ultimate global flight-to-safety asset.",
            "difficulty": "Beginner"
          },
          {
            "id": "inflation-hedge",
            "title": "Inflation hedge",
            "side": "right",
            "description": "Protects purchasing power against fiat devaluation and runaway CPI.",
            "goldInsight": "Sustained CPI/PPI inflation spikes increase long-term demand for bullion.",
            "propRule": "Analyze whether inflation is accompanied by rising or falling real yields.",
            "keyTakeaway": "Gold tracks global money supply (M2) expansion over multi-year cycles.",
            "difficulty": "Intermediate"
          },
          {
            "id": "currency-correlation",
            "title": "Currency correlation",
            "side": "right",
            "description": "Statistical relationships with sovereign currencies (DXY, AUD, JPY, CHF).",
            "goldInsight": "AUDUSD and XAUUSD share positive correlation (Australia is #2 miner).",
            "propRule": "Check 30-day rolling correlation before executing correlated cross positions.",
            "keyTakeaway": "Cross-currency correlations provide leading divergence signals for Gold.",
            "difficulty": "Intermediate"
          },
          {
            "id": "store-of-value",
            "title": "Store of value",
            "side": "right",
            "description": "Asset that can be saved and exchanged without purchasing power loss.",
            "goldInsight": "Unlike fiat suffering inflation decay, 1 oz Gold maintains real purchasing power.",
            "propRule": "Store of value status makes Gold less prone to permanent trend collapse.",
            "keyTakeaway": "Institutional floor anchored by universal recognition as pristine collateral.",
            "difficulty": "Beginner"
          },
          {
            "id": "physical-gold-demand",
            "title": "Physical gold demand",
            "side": "right",
            "description": "Fabrication, coins/bars, ETF holdings (GLD), and institutional vaults.",
            "goldInsight": "Physical premium spikes on Shanghai Gold Exchange signal Eastern accumulation.",
            "propRule": "Monitor physical ETF inflows/outflows for weekly macro momentum.",
            "keyTakeaway": "Physical demand establishes structural bottoms during deep corrections.",
            "difficulty": "Intermediate"
          },
          {
            "id": "industrial-demand",
            "title": "Industrial demand",
            "side": "right",
            "description": "Consumption in electronics, aerospace, nanotechnology, and medicine.",
            "goldInsight": "Industrial use accounts for 8-10% of annual consumption, creating baseline demand.",
            "propRule": "Industrial demand reflects global manufacturing and semiconductor health.",
            "keyTakeaway": "Industrial utility provides a solid physical price floor.",
            "difficulty": "Intermediate"
          },
          {
            "id": "jewelry-demand",
            "title": "Jewelry demand",
            "side": "right",
            "description": "Consumer demand from India (Diwali/weddings) and China (Lunar New Year).",
            "goldInsight": "Q4 and Q1 seasonality shows bullish strength in XAUUSD due to festivals.",
            "propRule": "Incorporate seasonal jewelry cycles into monthly swing trading roadmaps.",
            "keyTakeaway": "Cultural accumulation in India & China drives recurring seasonal tailwinds.",
            "difficulty": "Intermediate"
          }
        ]
      },
      {
        "id": "xauusd-dynamics",
        "title": "XAUUSD Dynamics",
        "category": "Market Behavior",
        "description": "Intraday price delivery characteristics, tick structure, and spread anomalies.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "macroeconomic-factors",
        "title": "Macroeconomic Factors",
        "category": "Macro Economics",
        "description": "US Dollar index drivers, real yield curves, bond yields, and inflation releases.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "fed-decisions",
            "title": "Federal Reserve decisions",
            "side": "left",
            "description": "FOMC benchmark rate decisions, Dot Plot projections, and press conferences.",
            "goldInsight": "Fed rate cuts are intensely bullish for Gold (lowers holding cost).",
            "propRule": "Prop firms prohibit trading near FOMC. Close positions before 18:00 UTC FOMC.",
            "keyTakeaway": "The Fed is the single most powerful macro catalyst for Gold trends.",
            "difficulty": "Intermediate"
          },
          {
            "id": "interest-rate-hikes",
            "title": "Interest rate hikes",
            "side": "left",
            "description": "Tightening cycles increasing bond yields, creating headwind for Gold.",
            "goldInsight": "Aggressive rate hikes strengthen USD and yields, suppressing Gold.",
            "propRule": "During hiking cycles, favor short momentum setups at technical supply zones.",
            "keyTakeaway": "Interest rate expectations move Gold weeks before decisions occur.",
            "difficulty": "Intermediate"
          },
          {
            "id": "quantitative-easing",
            "title": "Quantitative easing programs",
            "side": "left",
            "description": "Central bank balance sheet expansion and liquidity injections.",
            "goldInsight": "QE devalues paper currencies and has historically triggered parabolic Gold runs.",
            "propRule": "QE announcements present high-probability multi-week swing opportunities.",
            "keyTakeaway": "Liquidity expansion is the rocket fuel for precious metals inflation.",
            "difficulty": "Advanced"
          },
          {
            "id": "monetary-policy-statements",
            "title": "Monetary policy statements",
            "side": "left",
            "description": "Official releases detailing economic outlook and inflation targets.",
            "goldInsight": "Dovish language ('rate cuts imminent') sends Gold soaring instantly.",
            "propRule": "Wait 15 minutes post-statement for initial algorithmic fakeouts to clear.",
            "keyTakeaway": "Analyze tone (Hawkish vs Dovish) to establish institutional conviction.",
            "difficulty": "Intermediate"
          },
          {
            "id": "central-bank-gold-reserves",
            "title": "Central bank gold reserves",
            "side": "left",
            "description": "Sovereign accumulation of physical gold bullion to de-dollarize.",
            "goldInsight": "Global central banks bought over 1,000 metric tons annually in recent years.",
            "propRule": "Reserve buying absorbs deep dips, making shorting Gold long-term hazardous.",
            "keyTakeaway": "Sovereign de-dollarization creates a generational structural bull market.",
            "difficulty": "Intermediate"
          },
          {
            "id": "geopolitical-tensions",
            "title": "Geopolitical tensions",
            "side": "left",
            "description": "Military conflicts, maritime trade disruptions, and international disputes.",
            "goldInsight": "Geopolitical flare-ups trigger massive weekend price gaps on Gold ($50-$100).",
            "propRule": "NEVER hold unhedged Gold positions over weekends on prop accounts.",
            "keyTakeaway": "Geopolitical risk premiums drive sudden parabolic spikes.",
            "difficulty": "Intermediate"
          },
          {
            "id": "global-economic-crises",
            "title": "Global economic crises",
            "side": "left",
            "description": "Banking failures, sovereign debt defaults, and stagflationary shocks.",
            "goldInsight": "Gold outperforms all asset classes during stagflation.",
            "propRule": "During crises, reduce risk to 0.25% to withstand heightened volatility.",
            "keyTakeaway": "Gold is the premier crisis alpha asset for institutional portfolios.",
            "difficulty": "Intermediate"
          }
        ],
        "rightTopics": [
          {
            "id": "dxy-influence",
            "title": "US Dollar Index influence",
            "side": "right",
            "description": "Weighted average of US Dollar against a basket of 6 major currencies.",
            "goldInsight": "DXY breakout above resistance corresponds to rapid breakdown in XAUUSD 80% of time.",
            "propRule": "Keep DXY on second monitor to verify dollar strength before buying Gold.",
            "formulaOrRule": "Inverse Correlation: Gold \u2191 when DXY \u2193",
            "keyTakeaway": "Never trade XAUUSD in a vacuum; DXY is your master trend compass.",
            "difficulty": "Intermediate"
          },
          {
            "id": "real-interest-rates",
            "title": "Real interest rates",
            "side": "right",
            "description": "Nominal interest rates minus expected inflation.",
            "goldInsight": "Real yields have highest statistical correlation with Gold. Negative yields = Mega Bullish.",
            "propRule": "When US 10-Year TIPS real yield is falling, look for Gold long breakouts.",
            "formulaOrRule": "Real Yield = Nominal 10Y Yield - Breakeven Inflation",
            "keyTakeaway": "Real rates dictate fundamental cost of holding gold vs yield-bearing bonds.",
            "difficulty": "Advanced"
          },
          {
            "id": "treasury-yields-impact",
            "title": "Treasury yields impact",
            "side": "right",
            "description": "Return on US government debt obligations (2Y, 10Y, 30Y).",
            "goldInsight": "Rising 10Y yields make cash attractive, pulling capital out of Gold short term.",
            "propRule": "Look for divergences: Yields rising but Gold refusing to drop = hidden bull strength.",
            "keyTakeaway": "Monitor US10Y chart alongside XAUUSD to spot institutional rotation.",
            "difficulty": "Intermediate"
          },
          {
            "id": "inflation-data-releases",
            "title": "Inflation data releases",
            "side": "right",
            "description": "Monthly economic indicators measuring consumer (CPI) and producer (PPI) prices.",
            "goldInsight": "Higher CPI causes initial Gold dump (fearing rate hikes) followed by rally.",
            "propRule": "Do not trade first 60 seconds of CPI; wait for 5-minute confirmation candle.",
            "keyTakeaway": "Differentiate between algorithmic knee-jerk and true multi-hour trend.",
            "difficulty": "Intermediate"
          },
          {
            "id": "employment-reports",
            "title": "Employment reports",
            "side": "right",
            "description": "US Non-Farm Payrolls (NFP), Unemployment Rate, and Hourly Earnings.",
            "goldInsight": "NFP is most volatile recurring event for Gold, moving 150-300 pips in 3 minutes.",
            "propRule": "Close or protect positions 10 minutes prior to NFP. Evaluations blow here.",
            "keyTakeaway": "NFP resets the labor market narrative for the Federal Reserve.",
            "difficulty": "Intermediate"
          },
          {
            "id": "gross-domestic-product",
            "title": "Gross domestic product",
            "side": "right",
            "description": "Quarterly measurement of monetary value of all finished goods/services.",
            "goldInsight": "Weak GDP prints trigger recession fears, lowering yields and boosting safe haven bids.",
            "propRule": "Track GDP revisions to gauge underlying economic deceleration.",
            "keyTakeaway": "Economic slowdown signals future monetary easing, aiding metals.",
            "difficulty": "Intermediate"
          },
          {
            "id": "retail-sales-data",
            "title": "Retail sales data",
            "side": "right",
            "description": "Monthly report tracking consumer spending (~70% of US economic activity).",
            "goldInsight": "Strong retail sales support USD and create temporary pullbacks in Gold.",
            "propRule": "Retail Sales releases at 13:30 UTC create clean London/NY breakout setups.",
            "keyTakeaway": "Consumer resilience gauges whether economy withstands higher rates.",
            "difficulty": "Intermediate"
          }
        ]
      },
      {
        "id": "central-bank-policies",
        "title": "Central Bank Policies",
        "category": "Monetary Governance",
        "description": "Interest rate cycles, quantitative easing/tightening, and reserve management.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      }
    ]
  },
  {
    "id": "prop-firm-fundamentals",
    "title": "Prop Firm Fundamentals",
    "phase": 3,
    "description": "Proprietary trading firm business models, evaluation criteria, rule compliance, drawdown mechanics, and firm selection.",
    "hubs": [
      {
        "id": "prop-firm-business-model",
        "title": "Prop Firm Business Model",
        "category": "Industry Architecture",
        "description": "How prop firms monetize, structure funded accounts, split profits, and protect their liquidity pools.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "one-step-evaluation",
            "title": "One step evaluation",
            "side": "left",
            "description": "Single-phase assessment with 10% target and strict trailing drawdown.",
            "goldInsight": "Trailing drawdown moves up with highest high-water mark; requires extreme patience.",
            "propRule": "Watch trailing drawdown lock-ins; allowable loss shrinks as profits rise.",
            "keyTakeaway": "Fastest route to funding, but trailing drawdown mechanics are strict.",
            "difficulty": "Intermediate"
          },
          {
            "id": "two-step-evaluation",
            "title": "Two step evaluation",
            "side": "left",
            "description": "Standard challenge: Phase 1 (8-10%) + Phase 2 (5%) with static balance drawdown.",
            "goldInsight": "Static drawdown gives maximum breathing room during Gold pullbacks.",
            "propRule": "Risk 0.5% in Phase 1 (16R to pass) and 0.25% in Phase 2 for safety.",
            "keyTakeaway": "Highest statistical pass rate for disciplined Gold traders.",
            "difficulty": "Intermediate"
          },
          {
            "id": "instant-funding-accounts",
            "title": "Instant funding accounts",
            "side": "left",
            "description": "Accounts bypassing evaluation for higher fee, but with tight drawdown (3-6%).",
            "goldInsight": "Micro-size all positions (max 0.25% risk) to survive initial volatility.",
            "propRule": "Trading 1 lot on Gold can breach instant funding on one bad trade.",
            "keyTakeaway": "Saves time but requires master-level risk management from day one.",
            "difficulty": "Intermediate"
          },
          {
            "id": "free-trials",
            "title": "Free trials",
            "side": "left",
            "description": "Practice challenges offered to test server latency and dashboard tools.",
            "goldInsight": "Run 14-day free trial on Gold to measure execution slippage during London/NY.",
            "propRule": "Treat free trials with exact same discipline as a $100k live challenge.",
            "keyTakeaway": "Builds execution muscle memory and dashboard familiarity.",
            "difficulty": "Beginner"
          },
          {
            "id": "cash-contests",
            "title": "Cash contests",
            "side": "left",
            "description": "Monthly competitive trading tournaments with cash prizes and accounts.",
            "goldInsight": "Contests promote gambling over-leveraging; keep separate from evaluation strategy.",
            "propRule": "Do not confuse contest style with prop evaluation risk rules.",
            "keyTakeaway": "Great for zero-risk skill benchmarking without risking capital.",
            "difficulty": "Beginner"
          },
          {
            "id": "scaling-evaluations",
            "title": "Scaling evaluations",
            "side": "left",
            "description": "Challenges designed with built-in benchmarks to grow funding to $2M+.",
            "goldInsight": "Compound small, high-probability Gold trades to hit quarterly 10% targets.",
            "propRule": "Focus on consistency rather than home runs to qualify for scaling.",
            "keyTakeaway": "Scaling rewards low drawdown consistency over profit speed.",
            "difficulty": "Advanced"
          },
          {
            "id": "high-frequency-rules",
            "title": "High frequency rules",
            "side": "left",
            "description": "Regulations concerning automated HFT bots and sub-second tick scalping.",
            "goldInsight": "Passing with HFT bots often leads to strict payout consistency audits.",
            "propRule": "Avoid HFT pass-services. Firms enforce manual consistency on funded stages.",
            "keyTakeaway": "Clean price-action trading is the only sustainable prop career path.",
            "difficulty": "Advanced"
          }
        ],
        "rightTopics": [
          {
            "id": "evaluation-model-concept",
            "title": "Evaluation model concept",
            "side": "right",
            "description": "Simulated test environment where traders prove risk management and edge.",
            "goldInsight": "Prop firms test risk control, not speed. Aim to pass in 20-30 days.",
            "propRule": "Evaluation is a risk compliance audit. Capital preservation is priority #1.",
            "keyTakeaway": "Slow and steady execution wins funding every time.",
            "difficulty": "Beginner"
          },
          {
            "id": "funded-account-structure",
            "title": "Funded account structure",
            "side": "right",
            "description": "Live or simulated live tier where traders execute and receive real profit splits.",
            "goldInsight": "Once funded, immediately cut risk in half (0.25%-0.5%) to build buffer.",
            "propRule": "Protecting funded account buffer is 10x more important than rapid profits.",
            "keyTakeaway": "Buffer defense prevents losing hard-won funded status.",
            "difficulty": "Intermediate"
          },
          {
            "id": "profit-split-arrangements",
            "title": "Profit split arrangements",
            "side": "right",
            "description": "Percentage split of net gains paid to trader (80% to 95%).",
            "goldInsight": "$200k account making 4% ($8,000) monthly with 85% split yields $6,800.",
            "propRule": "Request payouts bi-weekly or monthly; never leave profits unwithdrawn.",
            "formulaOrRule": "Trader Payout = Net Profit \u00d7 Profit Split %",
            "keyTakeaway": "80-90% splits allow lucrative careers without personal capital risk.",
            "difficulty": "Beginner"
          },
          {
            "id": "risk-management-rules",
            "title": "Risk management rules",
            "side": "right",
            "description": "Contractual limits on daily loss, max loss, lot sizing, and news trading.",
            "goldInsight": "90% of failed Gold evaluations are caused by breaking the 5% daily limit.",
            "propRule": "Set hard daily stop at 2% in terminal to prevent hitting 5% firm limit.",
            "keyTakeaway": "Zero tolerance for rule violations: one breach forfeits account.",
            "difficulty": "Beginner"
          },
          {
            "id": "firm-sustainability",
            "title": "Firm sustainability",
            "side": "right",
            "description": "Operational solvency, track record, liquidity backing, and payout history.",
            "goldInsight": "Select firms with 3+ years of verifiable payouts and Tier-1 liquidity.",
            "propRule": "Do not buy from unverified new firms offering unrealistic 100% splits.",
            "keyTakeaway": "Diversify across 2-3 established prop firms to eliminate counterparty risk.",
            "difficulty": "Intermediate"
          },
          {
            "id": "scaling-plans",
            "title": "Scaling plans",
            "side": "right",
            "description": "Roadmap increasing account balance by 25-50% every 3-4 months.",
            "goldInsight": "$100k account scaling by 25% every 3 months reaches $244k in 1 year, $1M in 3 years.",
            "propRule": "Target steady 2-3% monthly gains on Gold to unlock scaling.",
            "keyTakeaway": "Compounding through scaling plans produces life-changing capital.",
            "difficulty": "Intermediate"
          },
          {
            "id": "payout-methods",
            "title": "Payout methods",
            "side": "right",
            "description": "Channels for receiving profit splits (Crypto USDT, Bank Wire, Rise, Deel).",
            "goldInsight": "Crypto (USDT TRC20/ERC20) and Rise settle in under 24 hours.",
            "propRule": "Ensure KYC identity verification is completed before purchasing challenge.",
            "keyTakeaway": "Choose firms supporting fast, low-fee payout infrastructure.",
            "difficulty": "Beginner"
          }
        ]
      },
      {
        "id": "evaluation-types",
        "title": "Evaluation Types",
        "category": "Challenge Models",
        "description": "Single-phase, two-phase, instant funding, and scaling challenge formats.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "rule-compliance",
        "title": "Rule Compliance",
        "category": "Risk Mandates",
        "description": "Daily drawdown calculations, trailing drawdowns, consistency rules, news restrictions, and weekend exposure.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "evaluation-fees",
            "title": "Evaluation fees",
            "side": "left",
            "description": "One-time registration cost (typically refundable with first payout).",
            "goldInsight": "$100k account costs ~$500, offering 200:1 capital efficiency.",
            "propRule": "Treat fee as business operational expense, never gamble emergency funds.",
            "keyTakeaway": "Refundable fees on first payout make passing effectively free capital.",
            "difficulty": "Beginner"
          },
          {
            "id": "profit-split-percentages",
            "title": "Profit split percentages",
            "side": "left",
            "description": "Comparison of payout splits across major firms (80% up to 95%).",
            "goldInsight": "85% split on steady Gold swing trades provides hedge-fund level income.",
            "propRule": "Verify whether splits scale automatically or require specific ROI thresholds.",
            "keyTakeaway": "Compare total payout track record over headline split numbers.",
            "difficulty": "Beginner"
          },
          {
            "id": "payout-processing-time",
            "title": "Payout processing time",
            "side": "left",
            "description": "Turnaround window from payout request to capital arrival.",
            "goldInsight": "Top-tier firms process Gold profit payouts within 8 to 48 hours.",
            "propRule": "Review payout policies: some require 14-day or 30-day initial holding.",
            "keyTakeaway": "Fast payouts are the ultimate proof of a solvent prop firm.",
            "difficulty": "Beginner"
          },
          {
            "id": "customer-support-quality",
            "title": "Customer support quality",
            "side": "left",
            "description": "24/7 live chat availability, ticket speed, and discord community.",
            "goldInsight": "If an execution bug or server freeze happens on XAUUSD, rapid support is vital.",
            "propRule": "Test live chat response times during market hours before funding.",
            "keyTakeaway": "Responsive support protects you against technical slippage disputes.",
            "difficulty": "Beginner"
          },
          {
            "id": "platform-reliability",
            "title": "Platform reliability",
            "side": "left",
            "description": "Server uptime, data feed integrity, minimal freezes, and low latency.",
            "goldInsight": "Unreliable servers freeze during US CPI/NFP, leaving trades unmanaged.",
            "propRule": "Avoid firms that suffer frequent platform outages during London/NY.",
            "keyTakeaway": "Server stability is prerequisite for consistent execution.",
            "difficulty": "Intermediate"
          },
          {
            "id": "trustpilot-reviews",
            "title": "Trustpilot reviews",
            "side": "left",
            "description": "Public reviews regarding payout honoring and rule transparency.",
            "goldInsight": "Filter reviews for complaints regarding denied payouts or slippage breaches.",
            "propRule": "Only trade with firms maintaining 4.5+ star rating with thousands of reviews.",
            "keyTakeaway": "Trader consensus exposes predatory firms with hidden clauses.",
            "difficulty": "Beginner"
          },
          {
            "id": "hidden-rule-clauses",
            "title": "Hidden rule clauses",
            "side": "left",
            "description": "Fine print restrictions (lot consistency, IP address rules, 30s minimums).",
            "goldInsight": "Some firms enforce max profit caps (no single trade >30% of total profit).",
            "propRule": "Read full Terms of Service; ensure Gold style complies with duration rules.",
            "keyTakeaway": "Always know the exact rules before placing trade number one.",
            "difficulty": "Intermediate"
          }
        ],
        "rightTopics": [
          {
            "id": "trading-consistency-rules",
            "title": "Trading consistency rules",
            "side": "right",
            "description": "Mandates requiring even distribution of profits across multiple trades.",
            "goldInsight": "No single trade may account for >30-40% of total target profit.",
            "propRule": "Take 15-25 steady 0.5%-1.5% trades on Gold rather than one 8% gamble.",
            "keyTakeaway": "Consistency rules enforce edge and eliminate gamblers.",
            "difficulty": "Intermediate"
          },
          {
            "id": "minimum-trading-days",
            "title": "Minimum trading days",
            "side": "right",
            "description": "Minimum active trading days required to complete evaluation (3-5 days).",
            "goldInsight": "If you reach target in 2 days on 5-day rule, open micro 0.01 lots to fulfill days.",
            "propRule": "Never risk real capital just to fulfill remaining required trading days.",
            "keyTakeaway": "Use micro-lots safely to fulfill days once profit target is secured.",
            "difficulty": "Beginner"
          },
          {
            "id": "maximum-overall-drawdown",
            "title": "Maximum overall drawdown",
            "side": "right",
            "description": "Maximum cumulative loss allowed from starting balance (8-10%).",
            "goldInsight": "On $100k account with 10% max loss ($10k), 10 consecutive 1% losses breaches.",
            "propRule": "If you lose 3% total drawdown, reduce risk per trade to 0.5% or 0.25%.",
            "formulaOrRule": "Max DD Limit = Initial Balance \u00d7 (1 - Max DD %)",
            "keyTakeaway": "Max drawdown is hard boundary; protect with dynamic lot scaling.",
            "difficulty": "Beginner"
          },
          {
            "id": "daily-drawdown-limits",
            "title": "Daily drawdown limits",
            "side": "right",
            "description": "Maximum loss allowed in single trading day (4-5% of starting equity).",
            "goldInsight": "Floating unrealized drawdown counts toward daily limit (-$5k floating breaches).",
            "propRule": "Daily Drawdown is #1 killer of evaluations. Never risk >1.5% daily.",
            "keyTakeaway": "Keep a 50% personal safety buffer below the firm's daily limit.",
            "difficulty": "Beginner"
          },
          {
            "id": "lot-size-restrictions",
            "title": "Lot size restrictions",
            "side": "right",
            "description": "Caps on total open lot exposure allowed simultaneously (e.g. max 20 lots).",
            "goldInsight": "Opening multiple scale-in positions can inadvertently exceed lot ceiling.",
            "propRule": "Check instrument lot matrix to ensure total open exposure stays compliant.",
            "keyTakeaway": "Adhere to lot limits to prevent automated risk desk closures.",
            "difficulty": "Intermediate"
          },
          {
            "id": "news-trading-policies",
            "title": "News trading policies",
            "side": "right",
            "description": "Rules restricting opening/closing trades within 2-5 min of red news.",
            "goldInsight": "Trading Gold through US CPI/NFP carries extreme slippage breaching accounts.",
            "propRule": "Cancel pending orders 5 minutes prior to release if restrictions apply.",
            "keyTakeaway": "Respect blackout windows to avoid profit deductions.",
            "difficulty": "Intermediate"
          },
          {
            "id": "weekend-holding-rules",
            "title": "Weekend holding rules",
            "side": "right",
            "description": "Regulations dictating whether open trades may be kept active across Friday close.",
            "goldInsight": "Sunday opening gaps on Gold ($30-$80) bypass stop losses and breach accounts.",
            "propRule": "Close all open Gold positions every Friday by 20:00 UTC.",
            "keyTakeaway": "Weekend gap risk is unmanageable; sleep in cash over weekends.",
            "difficulty": "Beginner"
          }
        ]
      },
      {
        "id": "prop-firm-comparison",
        "title": "Prop Firm Comparison",
        "category": "Firm Benchmarking",
        "description": "Evaluating fee structures, payout speeds, broker liquidity, and hidden clauses.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      }
    ]
  },
  {
    "id": "technical-analysis",
    "title": "Technical Analysis",
    "phase": 4,
    "description": "Price action charting, institutional market structure, supply & demand order blocks, candlestick signatures, and technical indicators.",
    "hubs": [
      {
        "id": "chart-types",
        "title": "Chart Types",
        "category": "Visualization",
        "description": "Candlestick, line, bar, Heiken Ashi, Renko, and volume profile visualization techniques.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "horizontal-levels",
            "title": "Horizontal levels",
            "side": "left",
            "description": "Static support/resistance levels from historical swing points.",
            "goldInsight": "Gold respects horizontal key levels with extreme precision due to resting orders.",
            "propRule": "Enter at major key levels with tight 20-30 pip stops for 1:3+ R:R.",
            "keyTakeaway": "Horizontal levels are the timeless backbone of price action.",
            "difficulty": "Beginner"
          },
          {
            "id": "dynamic-levels",
            "title": "Dynamic levels",
            "side": "left",
            "description": "Moving support/resistance from 50/200 EMAs and VWAP.",
            "goldInsight": "20/50 EMA on 15m/1h chart provide high-probability pullback entries.",
            "propRule": "Use dynamic EMAs as trailing stop guidelines during momentum moves.",
            "keyTakeaway": "Dynamic levels adapt to market volatility for trend continuation.",
            "difficulty": "Beginner"
          },
          {
            "id": "psychological-numbers",
            "title": "Psychological numbers",
            "side": "left",
            "description": "Major round numbers (.00 or .50) where human psychology clusters orders.",
            "goldInsight": "$2,400.00, $2,450.00, $2,500.00 act as natural magnets and reversal zones on Gold.",
            "propRule": "Anticipate fakeouts and stop sweeps around major $50/$100 round numbers.",
            "keyTakeaway": "Algorithms place massive liquidity pools at round psychological figures.",
            "difficulty": "Beginner"
          },
          {
            "id": "round-numbers",
            "title": "Round numbers",
            "side": "left",
            "description": "Sub-level milestones ($2,410, $2,420) establishing intraday ranges.",
            "goldInsight": "Intraday scalpers utilize $10 increments to scale out partial profits.",
            "propRule": "Never place stops exactly at round numbers; place 15-20 pips beyond.",
            "keyTakeaway": "Round numbers serve as natural intraday profit-taking targets.",
            "difficulty": "Beginner"
          },
          {
            "id": "previous-highs",
            "title": "Previous highs",
            "side": "left",
            "description": "Prior Day High (PDH), Prior Week High (PWH) containing buy stops.",
            "goldInsight": "London/NY open algorithms frequently sweep PDH before reversing lower.",
            "propRule": "Look for the 'Sweep and Reject' pattern above Previous Highs for short entries.",
            "keyTakeaway": "Previous highs are primary liquidity magnets where retail buy stops reside.",
            "difficulty": "Intermediate"
          },
          {
            "id": "previous-lows",
            "title": "Previous lows",
            "side": "left",
            "description": "Prior Day Low (PDL), Prior Week Low (PWL) containing sell stops.",
            "goldInsight": "Sweeps of Asian Session Low during London Open present prime buy setups.",
            "propRule": "Wait for a strong 5m close back inside the range to confirm liquidity grab.",
            "keyTakeaway": "Previous lows provide the liquidity fuel smart money needs to accumulate longs.",
            "difficulty": "Intermediate"
          },
          {
            "id": "order-blocks",
            "title": "Order blocks",
            "side": "left",
            "description": "Last opposing candle before displacement where institutional orders accumulated.",
            "goldInsight": "A bullish order block on 15m/1h created during London is highest probability buy zone.",
            "propRule": "Only trade order blocks that caused clean Break of Structure (BOS) with FVG.",
            "keyTakeaway": "Order blocks pinpoint the footprint of institutional buying and selling.",
            "difficulty": "Advanced"
          }
        ],
        "rightTopics": [
          {
            "id": "line-charts",
            "title": "Line charts",
            "side": "right",
            "description": "Plots closing prices, eliminating wicks to reveal pure structural trend.",
            "goldInsight": "Use line charts on Daily/4H to identify true macro support/resistance pivots.",
            "propRule": "Switch to line charts if candlestick wick volatility causes over-analysis.",
            "keyTakeaway": "Line charts clarify overarching structural direction.",
            "difficulty": "Beginner"
          },
          {
            "id": "bar-charts",
            "title": "Bar charts",
            "side": "right",
            "description": "Open-High-Low-Close (OHLC) highlighting range expansion and close strength.",
            "goldInsight": "Evaluates spread between open and close relative to total range.",
            "propRule": "Bar charts reveal whether buyers or sellers dominated the close of key sessions.",
            "keyTakeaway": "OHLC bars emphasize price velocity and closing dominance.",
            "difficulty": "Beginner"
          },
          {
            "id": "candlestick-charts",
            "title": "Candlestick charts",
            "side": "right",
            "description": "Japanese candlestick method displaying bodies and wicks.",
            "goldInsight": "Wicks on Gold represent rejected liquidity and institutional counter-orders.",
            "propRule": "Master multi-timeframe candlestick analysis (Daily > 4H > 15M > 1M).",
            "keyTakeaway": "Candlesticks provide the richest visual representation of price battles.",
            "difficulty": "Beginner"
          },
          {
            "id": "heiken-ashi-charts",
            "title": "Heiken Ashi charts",
            "side": "right",
            "description": "Averaged calculation filtering market noise to highlight trend momentum.",
            "goldInsight": "Keeps traders holding winning Gold trends without getting shaken out by 1m pullbacks.",
            "propRule": "Do not use for entry prices; switch to raw candlesticks for limit fills.",
            "keyTakeaway": "Excellent tool for riding runaway trends to full targets.",
            "difficulty": "Intermediate"
          },
          {
            "id": "renko-charts",
            "title": "Renko charts",
            "side": "right",
            "description": "Time-independent brick charts constructed based on fixed price moves.",
            "goldInsight": "Renko charts on Gold filter out consolidation chop during low-volume sessions.",
            "propRule": "Renko brick reversals provide clean mechanical signals for rule-based systems.",
            "keyTakeaway": "Eliminates time distortions to focus 100% on price magnitude.",
            "difficulty": "Intermediate"
          },
          {
            "id": "point-and-figure-charts",
            "title": "Point and figure charts",
            "side": "right",
            "description": "Classic method plotting X (up) and O (down) columns to filter noise.",
            "goldInsight": "Identifies major institutional accumulation/distribution phases in physical gold.",
            "propRule": "Useful for establishing multi-month macro price targets.",
            "keyTakeaway": "Provides objective price targets based on consolidation count.",
            "difficulty": "Advanced"
          },
          {
            "id": "volume-charts",
            "title": "Volume charts",
            "side": "right",
            "description": "Displays tick volume and volume-at-price histograms.",
            "goldInsight": "True breakout on XAUUSD must be accompanied by surge in tick volume.",
            "propRule": "Always confirm breakout candles with above-average volume before entering.",
            "keyTakeaway": "Volume validates institutional participation in price moves.",
            "difficulty": "Intermediate"
          }
        ]
      },
      {
        "id": "support-and-resistance",
        "title": "Support and Resistance",
        "category": "Price Levels",
        "description": "Horizontal boundaries, dynamic moving averages, psychological numbers, and order blocks.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "trend-analysis",
        "title": "Trend Analysis",
        "category": "Market Direction",
        "description": "Market structure (HH/HL vs LH/LL), range regimes, trendline channels, and moving averages.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "head-and-shoulders",
            "title": "Head and shoulders",
            "side": "left",
            "description": "Classic reversal pattern breaking neckline after three consecutive peaks.",
            "goldInsight": "Inverse Head and Shoulders at Daily demand triggers multi-day Gold rallies.",
            "propRule": "Wait for neckline retest before entering to minimize stop size.",
            "keyTakeaway": "Signals exhaustion of trend and smart money redistribution.",
            "difficulty": "Intermediate"
          },
          {
            "id": "double-tops",
            "title": "Double tops",
            "side": "left",
            "description": "Bearish reversal forming two peaks indicating buying exhaustion.",
            "goldInsight": "Double tops on Gold are often liquidity traps where 2nd peak sweeps 1st before dumping.",
            "propRule": "Enter on 2nd peak liquidity sweep with stop tight above high.",
            "keyTakeaway": "Represents failure of buyers to push price higher.",
            "difficulty": "Beginner"
          },
          {
            "id": "double-bottoms",
            "title": "Double bottoms",
            "side": "left",
            "description": "Bullish reversal forming two troughs signaling selling absorption.",
            "goldInsight": "Watch for bullish RSI divergence on 2nd bottom to confirm accumulation.",
            "propRule": "Double bottoms at Asian lows provide premier London Open buy setups.",
            "keyTakeaway": "Signals sellers have exhausted momentum and smart money is buying.",
            "difficulty": "Beginner"
          },
          {
            "id": "triple-formations",
            "title": "Triple formations",
            "side": "left",
            "description": "Triple tops/bottoms representing extended range accumulation/distribution.",
            "goldInsight": "Triple tops build massive liquidity above all 3 highs, setting up future short squeeze.",
            "propRule": "Do not blindly short triple tops if higher timeframes are bullish.",
            "keyTakeaway": "The more times a level is touched, the weaker it becomes as resting stops build.",
            "difficulty": "Intermediate"
          },
          {
            "id": "triangle-patterns",
            "title": "Triangle patterns",
            "side": "left",
            "description": "Ascending, descending, and symmetrical triangles showing volatility compression.",
            "goldInsight": "Gold volatility compression in symmetrical triangles precedes 200-400 pip breakouts.",
            "propRule": "Never trade inside apex chop. Wait for confirmed 15m candle close outside.",
            "keyTakeaway": "Compression always leads to violent directional expansion.",
            "difficulty": "Intermediate"
          },
          {
            "id": "wedge-patterns",
            "title": "Wedge patterns",
            "side": "left",
            "description": "Rising and falling wedges where price consolidates within converging lines.",
            "goldInsight": "Falling wedges during Gold pullbacks are high-probability continuation patterns.",
            "propRule": "Enter falling wedge breakout with stop below lowest wedge swing low.",
            "keyTakeaway": "Wedges show momentum deceleration before an impending reversal/breakout.",
            "difficulty": "Intermediate"
          },
          {
            "id": "flag-patterns",
            "title": "Flag patterns",
            "side": "left",
            "description": "Impulsive pole followed by tight counter-trend consolidation channel.",
            "goldInsight": "Bull flags on 15m chart during London/NY overlap are most profitable Gold setups.",
            "propRule": "Measure flag pole length to project exact minimum take profit targets.",
            "keyTakeaway": "Flags offer cleanest risk-to-reward continuation entries.",
            "difficulty": "Beginner"
          }
        ],
        "rightTopics": [
          {
            "id": "uptrend-structure",
            "title": "Uptrend structure",
            "side": "right",
            "description": "Sequence of Higher Highs (HH) and Higher Lows (HL) indicating buyer control.",
            "goldInsight": "In a Gold 1h uptrend, buy exclusively at Discount levels (below 50% equilibrium).",
            "propRule": "Never counter-trend short a strong daily HH/HL Gold trend on prop accounts.",
            "keyTakeaway": "Trade with structural trend until confirmed Break of Structure occurs.",
            "difficulty": "Beginner"
          },
          {
            "id": "downtrend-structure",
            "title": "Downtrend structure",
            "side": "right",
            "description": "Sequence of Lower Lows (LL) and Lower Highs (LH) indicating seller dominance.",
            "goldInsight": "In a downtrend, sell at Premium supply zones when price retests previous swing lows.",
            "propRule": "Place stop loss safely above the most recent Lower High structure point.",
            "keyTakeaway": "Downtrends require selling rallies rather than trying to pick bottoms.",
            "difficulty": "Beginner"
          },
          {
            "id": "range-bound-markets",
            "title": "Range bound markets",
            "side": "right",
            "description": "Consolidation zones oscillating between defined support and resistance.",
            "goldInsight": "Asian session Gold is typically range-bound (80% of days). Fade extremes.",
            "propRule": "Reduce lot size by 50% during range regimes due to false breakouts.",
            "keyTakeaway": "Identify market regime before selecting your strategy playbook.",
            "difficulty": "Beginner"
          },
          {
            "id": "trend-lines",
            "title": "Trend lines",
            "side": "right",
            "description": "Sloping lines connecting at least 3 swing points establishing dynamic barriers.",
            "goldInsight": "Retail trendlines on Gold are manipulated; smart money sweeps liquidity before reversing.",
            "propRule": "Do not buy on 3rd touch; wait for fakeout sweep and re-acceptance.",
            "keyTakeaway": "Trendlines visualize retail liquidity pools where stops cluster.",
            "difficulty": "Beginner"
          },
          {
            "id": "channel-patterns",
            "title": "Channel patterns",
            "side": "right",
            "description": "Ascending, descending, and horizontal price corridors contained by parallel lines.",
            "goldInsight": "Ascending channels in Gold often end with aggressive downside breaks when liquidity dries.",
            "propRule": "Target opposite channel boundaries for conservative 1:2 R:R targets.",
            "keyTakeaway": "Channels provide clear dynamic boundaries for swing trade execution.",
            "difficulty": "Beginner"
          },
          {
            "id": "moving-averages",
            "title": "Moving averages",
            "side": "right",
            "description": "Trend-following indicators calculating average price (SMA 200, EMA 50, EMA 20).",
            "goldInsight": "200 EMA on 4h chart separates institutional bull regimes from bear regimes.",
            "propRule": "Only take longs when Gold is trading above 50 and 200 EMA on 1h chart.",
            "keyTakeaway": "Moving averages keep you on the right side of institutional flow.",
            "difficulty": "Beginner"
          },
          {
            "id": "trend-confirmation",
            "title": "Trend confirmation",
            "side": "right",
            "description": "Multi-timeframe alignment requiring 4h, 1h, and 15m to agree.",
            "goldInsight": "When 4H, 1H, and 15M trends align on Gold, win rates exceed 70% with 1:3 R:R.",
            "propRule": "MANDATORY: Never trade unless at least 2 higher timeframes confirm bias.",
            "keyTakeaway": "Multi-timeframe alignment is the ultimate filter against low-probability chop.",
            "difficulty": "Intermediate"
          }
        ]
      },
      {
        "id": "chart-patterns",
        "title": "Chart Patterns",
        "category": "Formations",
        "description": "Classic geometry including Head and Shoulders, Double/Triple tops, Wedges, Triangles, and Flags.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "candlestick-patterns",
        "title": "Candlestick Patterns",
        "category": "Price Signatures",
        "description": "Pin bars, engulfing bars, inside bars, Morning/Evening stars, Doji variations, and Harami setups.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "rsi-indicator",
            "title": "Relative Strength Index",
            "side": "left",
            "description": "Momentum oscillator measuring speed and magnitude of price changes.",
            "goldInsight": "Look for RSI Bullish/Bearish Divergence at major Gold 4H support/resistance.",
            "propRule": "Do not sell Gold purely because RSI > 70; RSI can stay overbought for weeks.",
            "keyTakeaway": "RSI divergence reveals weakening institutional momentum before reversals.",
            "difficulty": "Beginner"
          },
          {
            "id": "macd-indicator",
            "title": "Moving Average Convergence",
            "side": "left",
            "description": "Trend-following momentum indicator displaying EMA relationships.",
            "goldInsight": "MACD histogram tick reversals on 1h Gold signal exhaustion of pullbacks.",
            "propRule": "Use MACD zero-line crosses to confirm higher-timeframe trend shifts.",
            "keyTakeaway": "MACD captures both trend direction and momentum acceleration.",
            "difficulty": "Beginner"
          },
          {
            "id": "atr-indicator",
            "title": "Average True Range",
            "side": "left",
            "description": "Volatility indicator measuring average price range over periods (default 14).",
            "goldInsight": "Use 1.5x 14-period ATR to set dynamic stop loss buffer on XAUUSD.",
            "propRule": "Base stop loss distance on current ATR, not a fixed static pip number.",
            "formulaOrRule": "Stop Loss Distance = ATR(14) \u00d7 1.5",
            "keyTakeaway": "ATR ensures your stop accommodates current market volatility.",
            "difficulty": "Intermediate"
          },
          {
            "id": "bollinger-bands",
            "title": "Bollinger Bands",
            "side": "left",
            "description": "Volatility envelopes set at 2 standard deviations around 20 SMA.",
            "goldInsight": "The 'Bollinger Squeeze' on 15m Gold signals imminent multi-dollar expansion.",
            "propRule": "During ranging markets, fade outer bands; during strong trends, ride outer band.",
            "keyTakeaway": "Band contraction precedes violent expansion; expansion confirms trend.",
            "difficulty": "Beginner"
          },
          {
            "id": "fibonacci-retracements",
            "title": "Fibonacci retracements",
            "side": "left",
            "description": "Horizontal percentage levels (38.2%, 50%, 61.8%, 78.6%) marking pullback zones.",
            "goldInsight": "61.8%-78.6% 'Golden Pocket' combined with 15m Order Block is the holy grail entry.",
            "propRule": "Anchor Fibonacci from absolute swing low to swing high of impulse leg.",
            "keyTakeaway": "Fibonacci Golden Pocket aligns algorithms and psychology at key levels.",
            "difficulty": "Intermediate"
          },
          {
            "id": "volume-profile",
            "title": "Volume profile",
            "side": "left",
            "description": "Horizontal histogram showing trading volume traded at specific price levels.",
            "goldInsight": "Point of Control (POC) and Value Area High/Low act as major support/resistance.",
            "propRule": "Trading back into Value Area from outside has 80% probability of reaching POC.",
            "keyTakeaway": "Volume profile shows WHERE real business was transacted.",
            "difficulty": "Advanced"
          },
          {
            "id": "stochastic-oscillator",
            "title": "Stochastic oscillator",
            "side": "left",
            "description": "Momentum indicator comparing closing price to price range (%K & %D).",
            "goldInsight": "Stochastic crossovers below 20 in an uptrend provide high-precision timing.",
            "propRule": "Only take oversold signals in uptrends, and overbought signals in downtrends.",
            "keyTakeaway": "Stochastic acts as a precise timing trigger when higher bias is set.",
            "difficulty": "Beginner"
          }
        ],
        "rightTopics": [
          {
            "id": "pin-bars",
            "title": "Pin bars",
            "side": "right",
            "description": "Candle with long wick (at least 2/3 total length) and small body showing rejection.",
            "goldInsight": "A bullish pin bar at Asian session low sweeping liquidity is a prime buy signal.",
            "propRule": "Wait for pin bar candle to fully close before entering.",
            "keyTakeaway": "Pin bars prove market aggressively rejected higher or lower prices.",
            "difficulty": "Beginner"
          },
          {
            "id": "engulfing-patterns",
            "title": "Engulfing patterns",
            "side": "right",
            "description": "Two-candle pattern where second body completely envelops prior candle body.",
            "goldInsight": "Bullish engulfing on 15m/1h Gold at support signifies aggressive institutional buys.",
            "propRule": "Enter on close of engulfing candle with stop below pattern low.",
            "keyTakeaway": "Engulfing candles demonstrate an overwhelming shift in market control.",
            "difficulty": "Beginner"
          },
          {
            "id": "inside-bars",
            "title": "Inside bars",
            "side": "right",
            "description": "Candle whose entire high-to-low range is enclosed within previous mother candle.",
            "goldInsight": "Inside bars on Gold represent energy buildup before continuation surge.",
            "propRule": "Place pending stop orders above mother high and below mother low.",
            "keyTakeaway": "Inside bars represent pause and consolidation before next wave.",
            "difficulty": "Beginner"
          },
          {
            "id": "morning-star",
            "title": "Morning star",
            "side": "right",
            "description": "Three-candle bullish bottom reversal: strong bear, small star, strong bull.",
            "goldInsight": "Morning stars at daily support levels indicate decisive selling exhaustion on Gold.",
            "propRule": "Third candle must close past 50% midpoint of first bearish candle.",
            "keyTakeaway": "High-probability reversal pattern confirming bottom formation.",
            "difficulty": "Intermediate"
          },
          {
            "id": "evening-star",
            "title": "Evening star",
            "side": "right",
            "description": "Three-candle bearish top reversal: strong bull, small star, strong bear.",
            "goldInsight": "Evening stars at session highs confirm distribution and smart money liquidation.",
            "propRule": "Provides clear invalidation: stop placed 5-10 pips above star high.",
            "keyTakeaway": "Visual confirmation that buyers lost control at key resistance.",
            "difficulty": "Intermediate"
          },
          {
            "id": "doji-variations",
            "title": "Doji variations",
            "side": "right",
            "description": "Candlesticks where open and close are virtually equal (Dragonfly, Gravestone).",
            "goldInsight": "Gravestone Doji at Gold highs shows sellers pushed back higher bids aggressively.",
            "propRule": "Doji alone is not entry signal; require confirmation from next candle close.",
            "keyTakeaway": "Dojis represent equilibrium; wait for the victor candle to emerge.",
            "difficulty": "Beginner"
          },
          {
            "id": "harami-patterns",
            "title": "Harami patterns",
            "side": "right",
            "description": "Two-candle pattern where small candle is contained within large previous body.",
            "goldInsight": "Harami on Gold indicates sudden loss of trend velocity, warning against chasing.",
            "propRule": "Tighten trailing stops on open positions when counter Harami appears.",
            "keyTakeaway": "Early warning signal that current momentum has stalled.",
            "difficulty": "Intermediate"
          }
        ]
      },
      {
        "id": "technical-indicators",
        "title": "Technical Indicators",
        "category": "Quantitative Tools",
        "description": "Oscillators, moving average systems, ATR bounds, Bollinger bands, and volume profiling.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      }
    ]
  },
  {
    "id": "fundamental-analysis",
    "title": "Fundamental Analysis",
    "phase": 5,
    "description": "Macro calendar navigation, high-impact US economic releases, geopolitical crisis mapping, and intermarket analysis.",
    "hubs": [
      {
        "id": "economic-calendar",
        "title": "Economic Calendar",
        "category": "News Infrastructure",
        "description": "Calendar tools, news impact grading (Red/Orange/Yellow), time zones, and deviation analysis.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "non-farm-payrolls",
            "title": "Non Farm Payrolls",
            "side": "left",
            "description": "Number of paid US workers added/lost in previous month (excluding farm).",
            "goldInsight": "Miss on NFP (>50k below forecast) weakens USD and sends Gold surging 100-250 pips.",
            "propRule": "Do not trade NFP live on evaluation accounts; slippage breaches daily limits.",
            "keyTakeaway": "NFP is apex US labor indicator driving interest rate expectations.",
            "difficulty": "Intermediate"
          },
          {
            "id": "cpi-report",
            "title": "Consumer Price Index",
            "side": "left",
            "description": "Headline and core inflation measurement tracked by Federal Reserve.",
            "goldInsight": "Lower-than-expected CPI accelerates Fed rate cut bets, propelling Gold momentum.",
            "propRule": "Check news calendar daily at 06:00 UTC so CPI times are permanently noted.",
            "keyTakeaway": "CPI trajectory makes it #1 recurring catalyst for multi-week trends.",
            "difficulty": "Intermediate"
          },
          {
            "id": "ppi-report",
            "title": "Producer Price Index",
            "side": "left",
            "description": "Leading wholesale inflation metric measuring prices received by producers.",
            "goldInsight": "PPI is leading indicator for CPI; surprises create strong intraday USD rallies.",
            "propRule": "PPI releases often create clean 15m breakout continuation setups into NY open.",
            "keyTakeaway": "Wholesale inflation feeds directly into consumer inflation pipelines.",
            "difficulty": "Intermediate"
          },
          {
            "id": "fomc-meetings",
            "title": "Federal Open Committee",
            "side": "left",
            "description": "Eight annual meetings announcing interest rates, forecasts, and statements.",
            "goldInsight": "FOMC days feature quiet Asian/London sessions followed by explosive 300+ pip swings.",
            "propRule": "Flatten positions 30 minutes before 18:00 UTC FOMC statements.",
            "keyTakeaway": "FOMC sets the multi-month monetary cycle for global financial markets.",
            "difficulty": "Advanced"
          },
          {
            "id": "retail-sales-release",
            "title": "Retail Sales release",
            "side": "left",
            "description": "Monthly report tracking consumer spending receipts across US retail.",
            "goldInsight": "Resilient retail sales bolster USD and create temporary sharp pullbacks in Gold.",
            "propRule": "Target pullback entries into order blocks after initial retail sales moves.",
            "keyTakeaway": "Measures consumer resilience and domestic economic stamina.",
            "difficulty": "Intermediate"
          },
          {
            "id": "unemployment-claims",
            "title": "Unemployment claims",
            "side": "left",
            "description": "Weekly data (released Thursdays at 12:30 UTC) tracking jobless filings.",
            "goldInsight": "Rising jobless claims show labor cooling, weakening USD and supporting Gold.",
            "propRule": "Thursday claims often trigger London/NY session trend continuation.",
            "keyTakeaway": "High-frequency weekly heartbeat of US labor market conditions.",
            "difficulty": "Beginner"
          },
          {
            "id": "gdp-reports",
            "title": "Gross Domestic Product",
            "side": "left",
            "description": "Quarterly scorecard of US economic output across all sectors.",
            "goldInsight": "Negative GDP growth prints fuel stagflation narratives, boosting gold allocations.",
            "propRule": "Ensure positions are sized conservatively ahead of 12:30 UTC GDP prints.",
            "keyTakeaway": "Determines whether economy is expanding or contracting into recession.",
            "difficulty": "Intermediate"
          }
        ],
        "rightTopics": [
          {
            "id": "forex-factory-calendar",
            "title": "Forex Factory calendar",
            "side": "right",
            "description": "Industry-standard economic calendar with color-coded impact ratings.",
            "goldInsight": "Filter Forex Factory specifically for USD and CNY red folder events.",
            "propRule": "Mark all Red folder event times on chart vertical lines to avoid surprises.",
            "keyTakeaway": "Essential daily tool for planning session execution windows.",
            "difficulty": "Beginner"
          },
          {
            "id": "investing-dot-com",
            "title": "Investing dot com calendar",
            "side": "right",
            "description": "Global economic calendar with consensus forecasts and historical charts.",
            "goldInsight": "Utilize historical data deviation graphs to analyze prior XAUUSD reactions.",
            "propRule": "Bookmark on second monitor alongside trading terminal.",
            "keyTakeaway": "Provides rich historical context on economic deviations.",
            "difficulty": "Beginner"
          },
          {
            "id": "high-impact-news",
            "title": "High impact news",
            "side": "right",
            "description": "Major catalysts (CPI, NFP, FOMC) capable of 100+ pip moves.",
            "goldInsight": "High impact news creates liquidity for institutions to enter/exit multi-million orders.",
            "propRule": "Most prop breaches occur during high-impact news; treat with caution.",
            "keyTakeaway": "High impact news clears old liquidity and establishes new trends.",
            "difficulty": "Beginner"
          },
          {
            "id": "medium-impact-news",
            "title": "Medium impact news",
            "side": "right",
            "description": "Secondary indicators (Consumer Sentiment, Existing Home Sales).",
            "goldInsight": "Medium news creates 20-40 pip pullbacks, ideal for retesting technical support.",
            "propRule": "Tradeable setups can be executed around medium news if technicals agree.",
            "keyTakeaway": "Provides liquidity injections without extreme slippage.",
            "difficulty": "Beginner"
          },
          {
            "id": "low-impact-news",
            "title": "Low impact news",
            "side": "right",
            "description": "Tertiary data (Treasury budget, trade balance, minor surveys).",
            "goldInsight": "Low impact news rarely shifts Gold price action; maintain technical focus.",
            "propRule": "Safe to execute standard lot sizes through low impact events.",
            "keyTakeaway": "Can be largely filtered out to keep focus on high-impact drivers.",
            "difficulty": "Beginner"
          },
          {
            "id": "event-time-zones",
            "title": "Event time zones",
            "side": "right",
            "description": "Standardizing all economic calendar releases to your local time zone.",
            "goldInsight": "Most US data drops at 08:30 AM EST (12:30/13:30 UTC depending on DST).",
            "propRule": "Ensure platform clock and calendar clock are synchronized.",
            "keyTakeaway": "Precise time sync prevents mistimed entries ahead of releases.",
            "difficulty": "Beginner"
          },
          {
            "id": "data-deviation-impact",
            "title": "Data deviation impact",
            "side": "right",
            "description": "Difference between Actual figure and consensus Forecast expectation.",
            "goldInsight": "The larger the deviation from consensus, the more sustained the Gold impulse.",
            "propRule": "If Actual matches Forecast, price often whips both ways before resuming trend.",
            "keyTakeaway": "Price responds to surprise deviation, not the absolute number.",
            "difficulty": "Intermediate"
          }
        ]
      },
      {
        "id": "key-us-reports",
        "title": "Key US Reports",
        "category": "Macro Reports",
        "description": "Non-Farm Payrolls, CPI, PPI, FOMC decisions, Retail Sales, Jobless Claims, and GDP.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "geopolitical-events",
        "title": "Geopolitical Events",
        "category": "Geopolitics",
        "description": "Armed conflicts, trade tariff wars, election cycles, energy shocks, and debt crises.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "usd-correlation",
            "title": "US Dollar correlation",
            "side": "left",
            "description": "Foundational inverse relationship between US Dollar and Gold pricing.",
            "goldInsight": "When DXY breaks structure down on 1h chart, buy Gold aggressively.",
            "propRule": "Never go long Gold if DXY is breaking out to new weekly highs with volume.",
            "formulaOrRule": "Cross-check: Gold Long requires DXY Short confirmation",
            "keyTakeaway": "DXY is your primary intermarket verification tool for Gold conviction.",
            "difficulty": "Intermediate"
          },
          {
            "id": "treasury-bond-yields",
            "title": "Treasury bond yields",
            "side": "left",
            "description": "Yield curve (US 2Y, 10Y, 30Y) dictating fixed income returns.",
            "goldInsight": "Falling Treasury yields lower opportunity cost of Gold, sparking bullion buying.",
            "propRule": "Watch US10Y chart for reversals that lead Gold turns by 15-30 minutes.",
            "keyTakeaway": "Bond yields reflect real-time interest rate expectations.",
            "difficulty": "Intermediate"
          },
          {
            "id": "silver-price-correlation",
            "title": "Silver price correlation",
            "side": "left",
            "description": "Precious metals sister correlation and Gold/Silver Ratio (GSR).",
            "goldInsight": "When Silver leads Gold to new highs, it confirms broad institutional buying.",
            "propRule": "Use Gold/Silver ratio: if Gold hits new high but Silver lags, watch for fakeout.",
            "keyTakeaway": "Silver provides leading confirmation and beta acceleration for Gold.",
            "difficulty": "Intermediate"
          },
          {
            "id": "oil-market-impact",
            "title": "Oil market impact",
            "side": "left",
            "description": "Crude oil (WTI/Brent) price movements driving inflation expectations.",
            "goldInsight": "Surging oil prices increase inflation expectations, driving capital into Gold.",
            "propRule": "Spikes in Oil during Middle East escalations trigger concurrent surges in XAUUSD.",
            "keyTakeaway": "Energy prices dictate headline inflation trajectories.",
            "difficulty": "Intermediate"
          },
          {
            "id": "stock-market-indices",
            "title": "Stock market indices",
            "side": "left",
            "description": "S&P 500 (SPX) and Nasdaq (NDX) performance reflecting equity risk appetite.",
            "goldInsight": "Severe stock selloffs trigger initial gold selling for margin calls, then massive rallies.",
            "propRule": "Do not panic sell Gold during equity crashes; second wave is aggressive Gold bid.",
            "keyTakeaway": "Equities gauge whether market is in Risk-On or Risk-Off regime.",
            "difficulty": "Intermediate"
          },
          {
            "id": "commodity-index-trends",
            "title": "Commodity index trends",
            "side": "left",
            "description": "Broad commodity benchmarks (BCOM, CRB) tracking raw materials.",
            "goldInsight": "Broad commodity super-cycles pull Gold into multi-year structural bull markets.",
            "propRule": "Align swing trading bias with the broader commodity macro trend.",
            "keyTakeaway": "Commodity strength signals systemic currency debasement.",
            "difficulty": "Intermediate"
          },
          {
            "id": "risk-on-sentiment",
            "title": "Risk on sentiment",
            "side": "left",
            "description": "Market environment where investors embrace higher-risk equities/crypto.",
            "goldInsight": "During extreme Risk-On, Gold consolidates as capital chases high-beta stocks.",
            "propRule": "Switch to tighter scalping targets (20-40 pips) when sentiment is heavily Risk-On.",
            "keyTakeaway": "Recognize sentiment regimes to choose between trend-following or scalping.",
            "difficulty": "Intermediate"
          }
        ],
        "rightTopics": [
          {
            "id": "war-and-conflicts",
            "title": "War and conflicts",
            "side": "right",
            "description": "Military escalations and territorial disputes threatening global stability.",
            "goldInsight": "Outbreak of conflict causes immediate vertical safe-haven flight ($50-$150 surges).",
            "propRule": "Never place naked short limit orders during an active geopolitical escalation.",
            "keyTakeaway": "War creates flight-to-safety liquidity that overrules indicators.",
            "difficulty": "Intermediate"
          },
          {
            "id": "trade-tariffs",
            "title": "Trade tariffs",
            "side": "right",
            "description": "Import tariffs and protectionist policies between major global powers.",
            "goldInsight": "US-China tariff tensions disrupt supply chains and stoke stagflation, boosting gold.",
            "propRule": "Monitor tariff announcements for sudden trade policy volatility spikes.",
            "keyTakeaway": "Trade friction undermines growth and accelerates currency devaluations.",
            "difficulty": "Intermediate"
          },
          {
            "id": "elections-impact",
            "title": "Elections impact",
            "side": "right",
            "description": "Elections altering fiscal, tax, and regulatory policy.",
            "goldInsight": "US Presidential elections bring higher deficit expectations, supporting Gold.",
            "propRule": "Reduce position sizing during election night counting due to huge spreads.",
            "keyTakeaway": "Elections introduce policy uncertainty driving institutional hedging.",
            "difficulty": "Intermediate"
          },
          {
            "id": "energy-crises",
            "title": "Energy crises",
            "side": "right",
            "description": "Pipeline shutdowns and oil embargoes constraining industrial output.",
            "goldInsight": "European energy crises devalue Euro, strengthening USD while boosting gold safe haven.",
            "propRule": "Analyze whether energy shocks cause Dollar strength or broad commodity inflation.",
            "keyTakeaway": "Energy crunches stoke cost-push inflation and reduce confidence.",
            "difficulty": "Intermediate"
          },
          {
            "id": "sanctions-imposition",
            "title": "Sanctions imposition",
            "side": "right",
            "description": "Freezing central bank reserves and exclusion from SWIFT networks.",
            "goldInsight": "Freezing of Russian FX reserves in 2022 catalyzed record central bank gold hoarding.",
            "propRule": "Sanctions permanently increase sovereign demand for physical gold.",
            "keyTakeaway": "Gold is the only tier-1 asset free from counterparty and confiscation risk.",
            "difficulty": "Advanced"
          },
          {
            "id": "supply-chain-issues",
            "title": "Supply chain issues",
            "side": "right",
            "description": "Maritime choke-point disruptions and factory shutdowns.",
            "goldInsight": "Supply delays increase production costs, leading to sticky inflation supporting Gold.",
            "propRule": "Incorporate shipping rate indices into medium-term inflation models.",
            "keyTakeaway": "Bottlenecks create persistent inflationary pressure favorable for metals.",
            "difficulty": "Intermediate"
          },
          {
            "id": "government-debt-crises",
            "title": "Government debt crises",
            "side": "right",
            "description": "Unsustainable debt-to-GDP ratios and sovereign credit downgrades.",
            "goldInsight": "US debt exceeding $35+ Trillion guarantees ongoing monetary debasement.",
            "propRule": "Debt ceiling standoffs and downgrades create multi-week bullish Gold runs.",
            "keyTakeaway": "Sovereign debt spiral backs Gold's perpetual long-term purchasing power.",
            "difficulty": "Advanced"
          }
        ]
      },
      {
        "id": "intermarket-analysis",
        "title": "Intermarket Analysis",
        "category": "Cross-Asset Dynamics",
        "description": "USD index, bond yields, Silver ratio, Crude oil, and sentiment regimes.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      }
    ]
  },
  {
    "id": "risk-management",
    "title": "Risk Management",
    "phase": 6,
    "description": "Capital preservation rules, mathematical position sizing formulas, drawdown defense, and advanced trade management.",
    "hubs": [
      {
        "id": "capital-preservation",
        "title": "Capital Preservation",
        "category": "Defense First",
        "description": "Account survival mandates, per-trade risk limits, daily stopouts, total drawdown buffers, and R:R ratios.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "account-balance-percentage",
            "title": "Account balance percentage",
            "side": "left",
            "description": "Risking fixed percentage (0.5% or 1%) of current equity on every trade.",
            "goldInsight": "Risking 0.5% ($500 on $100k) gives 10 consecutive losses before hitting 5% daily limit.",
            "propRule": "MANDATORY: Never exceed 1.0% risk per trade; 0.5% is the optimal sweet spot.",
            "formulaOrRule": "Dollar Risk = Account Equity \u00d7 0.005",
            "keyTakeaway": "Fixed percentage risk guarantees surviving long losing streaks.",
            "difficulty": "Beginner"
          },
          {
            "id": "stop-loss-pips-calculation",
            "title": "Stop loss pips calculation",
            "side": "left",
            "description": "Measuring exact price distance between entry and structural invalidation.",
            "goldInsight": "On Gold, a stop from $2,420.00 to $2,417.00 is 30 pips ($3.00 movement).",
            "propRule": "Place stops beyond market structure swings, not at arbitrary tight numbers.",
            "formulaOrRule": "Stop Distance (Pips) = |Entry Price - Stop Price| \u00d7 10",
            "keyTakeaway": "Structure dictates stop location; stop location dictates lot size.",
            "difficulty": "Beginner"
          },
          {
            "id": "pip-value-determination",
            "title": "Pip value determination",
            "side": "left",
            "description": "Converting price delta into exact currency value based on lot volume.",
            "goldInsight": "1.00 standard lot = $10.00/pip. 0.10 lot = $1.00/pip. 0.01 lot = $0.10/pip.",
            "propRule": "Verify pip value calculation before entering to avoid oversized risk.",
            "keyTakeaway": "Knowing exact pip dollar value prevents emotional panic during candles.",
            "difficulty": "Beginner"
          },
          {
            "id": "lot-size-formula",
            "title": "Lot size formula",
            "side": "left",
            "description": "Fundamental mathematical equation linking risk capital to stop distance.",
            "goldInsight": "Formula: Lot Size = (Balance * Risk%) / (Stop Pips * Pip Value per Lot).",
            "propRule": "Use our interactive Prop Risk Calculator before placing any live order.",
            "formulaOrRule": "Lots = (Balance \u00d7 Risk%) / (SL Pips \u00d7 $10)",
            "keyTakeaway": "Automate this calculation to eliminate human sizing errors.",
            "difficulty": "Beginner"
          },
          {
            "id": "scaling-in-positions",
            "title": "Scaling in positions",
            "side": "left",
            "description": "Adding lot size to winning trades as price confirms trend structure.",
            "goldInsight": "Add 50% extra size only after first Gold position is moved to breakeven stop.",
            "propRule": "NEVER scale into a losing trade (martingale); #1 cause of blown accounts.",
            "keyTakeaway": "Pyramiding winners creates massive payouts while keeping initial risk locked.",
            "difficulty": "Intermediate"
          },
          {
            "id": "scaling-out-positions",
            "title": "Scaling out positions",
            "side": "left",
            "description": "Closing partial position (50% or 75%) at initial target, letting remainder run.",
            "goldInsight": "Close 50% of Gold trade at 1:2 R:R (50 pips), move stop to BE, let runner ride.",
            "propRule": "Scaling out locks in realized gains counting toward evaluation targets.",
            "keyTakeaway": "Partial closures bank profits and eliminate psychological stress.",
            "difficulty": "Beginner"
          },
          {
            "id": "partial-profit-taking",
            "title": "Partial profit taking",
            "side": "left",
            "description": "Systematic multi-target exit rules (TP1 at 1:1.5, TP2 at 1:3, TP3 at HTF swing).",
            "goldInsight": "Gold makes sharp 100-pip impulses then pulls back 80%; partial TP secures gains.",
            "propRule": "Record partial take profits in journal to calculate true blended expectancy.",
            "keyTakeaway": "Disciplined profit-taking turns paper gains into permanent funded equity.",
            "difficulty": "Beginner"
          }
        ],
        "rightTopics": [
          {
            "id": "account-protection-rules",
            "title": "Account protection rules",
            "side": "right",
            "description": "Personal guardrails implemented to prevent catastrophic drawdown.",
            "goldInsight": "Rule 1: Max 2 trades per day. Rule 2: If 2 losses occur, shut down terminal.",
            "propRule": "Self-imposed hard stop rules prevent tilt-induced breaches 100% of the time.",
            "keyTakeaway": "Rules are the barrier between long-term wealth and repeated failure.",
            "difficulty": "Beginner"
          },
          {
            "id": "risk-per-trade-limit",
            "title": "Risk per trade limit",
            "side": "right",
            "description": "Maximum percentage of total capital risked on a single market trade.",
            "goldInsight": "Evaluation: 0.50% max. Funded account: 0.25% - 0.50% max. Never deviate.",
            "propRule": "Exceeding 1% risk on Gold risks breaching daily 4-5% limits on bad days.",
            "formulaOrRule": "Evaluation: 0.5% | Funded: 0.25% per trade",
            "keyTakeaway": "Low risk gives the statistical runway required for your edge to play out.",
            "difficulty": "Beginner"
          },
          {
            "id": "maximum-daily-risk",
            "title": "Maximum daily risk",
            "side": "right",
            "description": "Hard ceiling on total allowable losses across all trades in 24-hour session.",
            "goldInsight": "Set personal daily loss limit at 1.5% - 2.0% (leaving massive cushion below 5%).",
            "propRule": "If personal daily limit is hit, walk away immediately. Never revenge trade.",
            "keyTakeaway": "Daily circuit breaker prevents one bad session from destroying weeks of work.",
            "difficulty": "Beginner"
          },
          {
            "id": "weekly-loss-limits",
            "title": "Weekly loss limits",
            "side": "right",
            "description": "Cumulative weekly loss ceiling (e.g. 4% max weekly drawdown).",
            "goldInsight": "If Gold market is choppy and you lose 3% in a week, halve size for next week.",
            "propRule": "Weekly loss caps protect your overall 8-10% challenge buffer in hostile markets.",
            "keyTakeaway": "Weekly limits prevent prolonged drawdowns and force strategic review.",
            "difficulty": "Intermediate"
          },
          {
            "id": "total-drawdown-cap",
            "title": "Total drawdown cap",
            "side": "right",
            "description": "Maximum allowable cumulative drawdown before firm terminates account (8-10%).",
            "goldInsight": "On $100k account with 10% max DD, your real operational capital is $10,000.",
            "propRule": "Base your risk percentages on the $10,000 buffer, not the headline $100,000.",
            "formulaOrRule": "Effective Capital = Starting Balance \u00d7 Max Drawdown %",
            "keyTakeaway": "Realizing true capital is the drawdown buffer transforms lot sizing mindset.",
            "difficulty": "Beginner"
          },
          {
            "id": "recovery-factor-goals",
            "title": "Recovery factor goals",
            "side": "right",
            "description": "Ratio of net accumulated profit to maximum drawdown experienced.",
            "goldInsight": "Recovery factor > 3.0 indicates elite risk-adjusted performance on Gold.",
            "propRule": "Keep drawdowns shallow (<3% total DD) during evaluation phases.",
            "formulaOrRule": "Recovery Factor = Net Profit ($) / Max Drawdown ($)",
            "keyTakeaway": "High recovery factors prove institutional sustainability to risk managers.",
            "difficulty": "Intermediate"
          },
          {
            "id": "risk-reward-ratios",
            "title": "Risk reward ratios",
            "side": "right",
            "description": "Ratio of potential profit to potential loss (e.g. 1:2 R:R risking $500 for $1,000).",
            "goldInsight": "With a 1:2 R:R on Gold, you only need a 34% win rate to be profitable.",
            "propRule": "Never take a trade under 1:1.5 R:R. Target 1:2 to 1:3 for evaluations.",
            "formulaOrRule": "Minimum R:R = 1 : 2.0",
            "keyTakeaway": "Asymmetric R:R allows being wrong more than half the time and still passing.",
            "difficulty": "Beginner"
          }
        ]
      },
      {
        "id": "position-sizing",
        "title": "Position Sizing",
        "category": "Mathematical Execution",
        "description": "Pip calculations, dynamic lot scripts, scale-in pyramiding, and scale-out profit taking.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "drawdown-management",
        "title": "Drawdown Management",
        "category": "Psychological Defense",
        "description": "Daily loss buffers, tilt prevention protocols, mandatory breaks, and revenge avoidance.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "breakeven-stops",
            "title": "Breakeven stops movement",
            "side": "left",
            "description": "Moving stop to entry price once trade reaches profit milestone (1:1 R:R).",
            "goldInsight": "Move stop to breakeven after Gold breaks 15m structure in your direction.",
            "propRule": "Breakeven stops create 'free trades' protecting daily drawdown from whipsaws.",
            "keyTakeaway": "Eliminates risk on active positions, freeing mental capital.",
            "difficulty": "Beginner"
          },
          {
            "id": "trailing-stop-techniques",
            "title": "Trailing stop techniques",
            "side": "left",
            "description": "Dynamic stop adjustment tracking behind swing points or moving averages.",
            "goldInsight": "Trail stops 10 pips behind 15m swing low during Gold trend expansions.",
            "propRule": "Trailing stops guarantee capturing 70-80% of runaway momentum moves.",
            "keyTakeaway": "Lets winners run while systematically locking in accrued profits.",
            "difficulty": "Intermediate"
          },
          {
            "id": "scaling-out-winners",
            "title": "Scaling out winners",
            "side": "left",
            "description": "Closing portions of winning trades while leaving runner for extended targets.",
            "goldInsight": "Close 60% at 1:2 R:R, 20% at 1:4 R:R, let remaining 20% ride to HTF order block.",
            "propRule": "Scaling out smooths equity curves and minimizes emotional urges to exit early.",
            "keyTakeaway": "Professional method balancing profit security with maximum upside.",
            "difficulty": "Intermediate"
          },
          {
            "id": "holding-through-sessions",
            "title": "Holding through sessions",
            "side": "left",
            "description": "Managing trades transitioned from London session into New York or overnight.",
            "goldInsight": "If London trend is strong, NY open often offers second entry; hold runners.",
            "propRule": "Close trades before London close (16:00 UTC) unless you have wide BE buffer.",
            "keyTakeaway": "Session transitions bring continuation or reversals; manage stops actively.",
            "difficulty": "Intermediate"
          },
          {
            "id": "overnight-risk-reduction",
            "title": "Overnight risk reduction",
            "side": "left",
            "description": "De-risking positions before low-liquidity rollover window (21:00-00:00 UTC).",
            "goldInsight": "Gold spreads widen 5x to 10x during 21:00-22:00 UTC daily rollover.",
            "propRule": "Flatten day trades or widen stop distance with reduced size before 21:00 UTC.",
            "keyTakeaway": "Rollover spread widening is an avoidable tax catching unwary day traders.",
            "difficulty": "Beginner"
          },
          {
            "id": "weekend-gap-avoidance",
            "title": "Weekend gap avoidance",
            "side": "left",
            "description": "Closing exposure prior to Friday market close to eliminate weekend gap risk.",
            "goldInsight": "Weekend news events cause $20-$80 price gaps on Sunday open.",
            "propRule": "MANDATORY: Close 100% of open Gold positions by Friday 20:00 UTC.",
            "keyTakeaway": "Weekend gaps bypass stops; zero exposure over weekend = zero gap risk.",
            "difficulty": "Beginner"
          },
          {
            "id": "partial-close-execution",
            "title": "Partial close execution",
            "side": "left",
            "description": "Executing fractional lot closures directly in trading terminals.",
            "goldInsight": "In MT4/MT5: Double click order, change volume to close amount, click Close.",
            "propRule": "Practice partial closes in demo so execution is instant during fast volatility.",
            "keyTakeaway": "Master terminal mechanics to execute rapid partial closures during news spikes.",
            "difficulty": "Beginner"
          }
        ],
        "rightTopics": [
          {
            "id": "daily-loss-buffer",
            "title": "Daily loss limit buffer",
            "side": "right",
            "description": "Maintaining personal loss buffer well inside prop firm 5% maximum limit.",
            "goldInsight": "If daily limit is $5k, set personal terminal stop at $2.5k. Never touch red zone.",
            "propRule": "50% safety buffer guarantees slippage or commissions never fail your account.",
            "keyTakeaway": "Keep a permanent 50% safety cushion below firm daily drawdown.",
            "difficulty": "Beginner"
          },
          {
            "id": "tilt-prevention-strategies",
            "title": "Tilt prevention strategies",
            "side": "right",
            "description": "Mechanisms preventing emotional, irrational, and revenge-driven trading.",
            "goldInsight": "Use software risk locks or MT5 auto-disable scripts to lock terminal after 2 losses.",
            "propRule": "Recognize physiological tilt (elevated pulse, anger) and step away immediately.",
            "keyTakeaway": "Emotional tilt is the fastest destroyer of funded accounts.",
            "difficulty": "Intermediate"
          },
          {
            "id": "trading-break-protocols",
            "title": "Trading break protocols",
            "side": "right",
            "description": "Mandatory rest intervals enforced after taking 2 consecutive losses.",
            "goldInsight": "Take 2-hour physical break away from screens after taking a loss to reset dopamine.",
            "propRule": "Take full 48-hour trading break between passing Phase 1 and starting Phase 2.",
            "keyTakeaway": "Rest resets neurochemistry and prevents emotional decision-making.",
            "difficulty": "Beginner"
          },
          {
            "id": "revenge-trading-avoidance",
            "title": "Revenge trading avoidance",
            "side": "right",
            "description": "Eliminating urge to jump back into market to 'win back' lost capital.",
            "goldInsight": "The market owes you nothing. Chasing Gold after a stopout leads to double loss.",
            "propRule": "Accept every loss as standard cost of doing business, like buying store inventory.",
            "keyTakeaway": "Revenge trading is gambling; professional trading is probability execution.",
            "difficulty": "Beginner"
          },
          {
            "id": "loss-recovery-plans",
            "title": "Loss recovery plans",
            "side": "right",
            "description": "Mathematical blueprint for clawing back drawdown over low-risk sessions.",
            "goldInsight": "If down 3% on evaluation, cut risk to 0.25% and target 0.5% gains to rebuild.",
            "propRule": "Never increase lot size to recover losses. Always DECREASE lot size in drawdown.",
            "keyTakeaway": "Slow recovery rebuilds confidence and protects remaining challenge buffer.",
            "difficulty": "Intermediate"
          },
          {
            "id": "consecutive-loss-limits",
            "title": "Consecutive loss limits",
            "side": "right",
            "description": "Setting threshold of 2-3 consecutive losses before halting all trading.",
            "goldInsight": "3 losses risking 0.5% = 1.5% total loss. Halting preserves 8.5% of your buffer.",
            "propRule": "Enforce '3 Strikes and You\\'re Out' rule daily across all prop accounts.",
            "keyTakeaway": "Consecutive loss limits mathematically prevent account annihilation.",
            "difficulty": "Beginner"
          },
          {
            "id": "capital-allocation-strategy",
            "title": "Capital allocation strategy",
            "side": "right",
            "description": "Allocating risk across multiple prop accounts, challenges, and personal capital.",
            "goldInsight": "Diversify across 3 prop firms ($100k each) using trade copiers with 0.33% risk each.",
            "propRule": "Trade copiers allow controlling $300k+ while risking only $1,000 total per trade.",
            "keyTakeaway": "Cross-firm allocation diversifies counterparty risk and maximizes payouts.",
            "difficulty": "Advanced"
          }
        ]
      },
      {
        "id": "trade-management",
        "title": "Trade Management",
        "category": "In-Trade Execution",
        "description": "Breakeven movement, trailing rules, scaling runners, and weekend protection.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      }
    ]
  },
  {
    "id": "trading-strategy",
    "title": "Trading Strategy",
    "phase": 7,
    "description": "Developing a quantified statistical edge, trading styles (scalping, day, swing), Gold-specific playbook setups, and trading plans.",
    "hubs": [
      {
        "id": "strategy-development",
        "title": "Strategy Development",
        "category": "Edge Formulation",
        "description": "Quantifying edge, core methodology rules, precise entry/exit triggers, timeframe hierarchy, and simplicity.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "scalping-strategies",
            "title": "Scalping strategies",
            "side": "left",
            "description": "High-frequency 1m-5m chart execution capturing 10-30 pip thrusts.",
            "goldInsight": "Gold 1m scalping during London open produces 1:2 R:R returns within 3-7 minutes.",
            "propRule": "Ensure prop firm allows fast scalping and no 2-minute duration minimums.",
            "keyTakeaway": "Scalping limits session exposure but requires fast execution.",
            "difficulty": "Intermediate"
          },
          {
            "id": "day-trading-methods",
            "title": "Day trading methods",
            "side": "left",
            "description": "Intraday setups (15m/1h) capturing 40-100 pip trends with zero overnight risk.",
            "goldInsight": "Enter London/NY open, take profit before close, sleep with zero open risk.",
            "propRule": "Day trading eliminates rollover spread spikes and weekend gap risks.",
            "keyTakeaway": "Sweet spot combining high reward potential with pristine risk control.",
            "difficulty": "Beginner"
          },
          {
            "id": "swing-trading-approaches",
            "title": "Swing trading approaches",
            "side": "left",
            "description": "Multi-day positions (4h/Daily) targeting 200-500 pip macro swings.",
            "goldInsight": "Swing trades capture central bank rate cycle expansions and macro trends.",
            "propRule": "Ensure prop account is 'Swing Account' type permitting weekend holding.",
            "keyTakeaway": "Requires patience and wider stops but yields massive returns.",
            "difficulty": "Intermediate"
          },
          {
            "id": "position-trading",
            "title": "Position trading",
            "side": "left",
            "description": "Multi-month trend following based on macro fundamentals and real yields.",
            "goldInsight": "Riding Gold from $2,000 to $2,500+ over 12 months with fractional risk.",
            "propRule": "Not suitable for evaluations, but exceptional for funded compounding.",
            "keyTakeaway": "Captures secular macroeconomic mega-trends of currency debasement.",
            "difficulty": "Advanced"
          },
          {
            "id": "momentum-trading",
            "title": "Momentum trading",
            "side": "left",
            "description": "Buying strong upward breakouts or selling breakdowns with high volume.",
            "goldInsight": "When Gold breaks daily resistance with NY volume, momentum runs 100+ pips.",
            "propRule": "Trail stops tightly; when momentum stalls, exit immediately.",
            "keyTakeaway": "Trades the strongest impulse wave where speed and volume peak.",
            "difficulty": "Intermediate"
          },
          {
            "id": "breakout-trading",
            "title": "Breakout trading",
            "side": "left",
            "description": "Entering as price breaks beyond consolidation boundaries or session extremes.",
            "goldInsight": "London Breakout (breaking Asian range at 07:00 UTC) is top Gold setup.",
            "propRule": "Always wait for candle close outside range to avoid fakeout wicks.",
            "keyTakeaway": "Breakouts signal release of compressed energy into trending auctions.",
            "difficulty": "Beginner"
          },
          {
            "id": "mean-reversion",
            "title": "Mean reversion",
            "side": "left",
            "description": "Fading overextended price moves back toward dynamic mean (20 EMA, VWAP, POC).",
            "goldInsight": "When Gold expands >3 standard deviations from daily VWAP in Asia, fade to VWAP.",
            "propRule": "Only execute mean reversion during quiet sessions; never fade NY open.",
            "keyTakeaway": "Capitalizes on statistical certainty that price returns to equilibrium.",
            "difficulty": "Intermediate"
          }
        ],
        "rightTopics": [
          {
            "id": "edge-identification",
            "title": "Edge identification",
            "side": "right",
            "description": "Verified statistical advantage where (Wins*AvgWin) > (Losses*AvgLoss).",
            "goldInsight": "50% win rate with 1:2 R:R yields 50% net return over 100 trades risking 1%.",
            "propRule": "Never purchase evaluation until edge is proven over 100 documented trades.",
            "formulaOrRule": "Expectancy = (Win% \u00d7 Win Size) - (Loss% \u00d7 Loss Size)",
            "keyTakeaway": "Without quantified edge, trading is negative-expectancy gambling.",
            "difficulty": "Intermediate"
          },
          {
            "id": "core-methodology-rules",
            "title": "Core methodology rules",
            "side": "right",
            "description": "Strict rulebook: Setup Conditions, Entry Trigger, Stop Loss, Exit Strategy.",
            "goldInsight": "Playbook must be so clearly defined that a 10-year-old could identify the setup.",
            "propRule": "Write down 4-step checklist. If any step is missing, DO NOT TRADE.",
            "keyTakeaway": "Eliminates guesswork and emotional discretion from execution.",
            "difficulty": "Beginner"
          },
          {
            "id": "entry-triggers-definition",
            "title": "Entry triggers definition",
            "side": "right",
            "description": "Micro-signature signaling trade execution (15m Order Block + 1m FVG Retest).",
            "goldInsight": "Trigger: Tap 15m OB, print 1m MSS (Market Structure Shift), limit fill on FVG.",
            "propRule": "Executing on exact triggers prevents FOMO and ensures 15-25 pip stops.",
            "keyTakeaway": "Trigger is final green light confirming institutions are entering now.",
            "difficulty": "Intermediate"
          },
          {
            "id": "exit-strategy-planning",
            "title": "Exit strategy planning",
            "side": "right",
            "description": "Pre-determining profit targets, stops, and trailing rules before clicking.",
            "goldInsight": "Plan exit BEFORE entry; once in a trade, emotions cloud judgment.",
            "propRule": "Set hard Take Profit and Stop Loss orders immediately upon fill.",
            "keyTakeaway": "Manage the exit with the same mathematical precision as the entry.",
            "difficulty": "Beginner"
          },
          {
            "id": "timeframe-selection",
            "title": "Timeframe selection",
            "side": "right",
            "description": "3-timeframe hierarchy: Direction (4H), Structure (1H/15M), Execution (5M/1M).",
            "goldInsight": "Master Setup: Daily/4H Trend -> 15M Order Blocks -> 1M Entry Trigger.",
            "propRule": "Never execute on 1m chart without knowing location in 4H narrative.",
            "keyTakeaway": "Multi-timeframe analysis aligns micro entries with macro power.",
            "difficulty": "Beginner"
          },
          {
            "id": "asset-specificity",
            "title": "Asset specificity",
            "side": "right",
            "description": "Mastering the personality, ATR, session schedule, and quirks of XAUUSD.",
            "goldInsight": "Gold has higher ATR and faster sweeps than any forex currency pair.",
            "propRule": "Specializing 100% in XAUUSD creates deep intuitive pattern recognition.",
            "keyTakeaway": "Be a sniper who knows one market intimately rather than multi-pair novice.",
            "difficulty": "Intermediate"
          },
          {
            "id": "simplicity-focus",
            "title": "Simplicity focus",
            "side": "right",
            "description": "Keeping trading systems stripped of redundant lagging indicators.",
            "goldInsight": "Clean price action and volume profile outperform cluttered 10-indicator charts.",
            "propRule": "If system requires >3 rules to confirm entry, it is too complex for prop trading.",
            "keyTakeaway": "Simplicity creates speed, clarity, and unwavering execution under pressure.",
            "difficulty": "Beginner"
          }
        ]
      },
      {
        "id": "trading-styles",
        "title": "Trading Styles",
        "category": "Execution Styles",
        "description": "Scalping, Day Trading, Swing Trading, Position Trading, Momentum, Breakouts, and Mean Reversion.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "gold-specific-strategies",
        "title": "Gold Specific Strategies",
        "category": "XAUUSD Playbook",
        "description": "London Breakout, NY Open Expansion, Asian Range Sweep, S/R Bounces, News Fade, and High/Low Sweeps.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "pre-market-routine",
            "title": "Pre market routine",
            "side": "left",
            "description": "Standardized 30-minute daily preparation ritual before session opens.",
            "goldInsight": "Check Forex Factory, mark Asian High/Low, check DXY, identify 4H/1H zones.",
            "propRule": "Never click buttons immediately. Preparation equals consistency.",
            "keyTakeaway": "The battle is won in pre-market prep before the first candle opens.",
            "difficulty": "Beginner"
          },
          {
            "id": "market-analysis-steps",
            "title": "Market analysis steps",
            "side": "left",
            "description": "Top-down analysis: Macro DXY -> Daily Gold -> 4H Key Levels -> 15m OBs.",
            "goldInsight": "Determine daily bias: seeking London sweeps or NY distribution shorts?",
            "propRule": "Formulate 'If-Then' scenarios to remove emotional reactions.",
            "keyTakeaway": "Structured scenario planning removes impulsive market reactions.",
            "difficulty": "Beginner"
          },
          {
            "id": "execution-checklist",
            "title": "Execution checklist",
            "side": "left",
            "description": "Physical 5-point checklist verified before placing any market order.",
            "goldInsight": "1. Trend aligned? 2. Liquidity swept? 3. OB tapped? 4. Risk set? 5. R:R > 1:2?",
            "propRule": "If all 5 boxes are not checked, taking trade violates prop plan.",
            "keyTakeaway": "A physical checklist transforms trading into an institutional process.",
            "difficulty": "Beginner"
          },
          {
            "id": "post-market-review",
            "title": "Post market review",
            "side": "left",
            "description": "Reviewing trades, logging screenshots, and grading rule adherence.",
            "goldInsight": "Take screenshot of 15m chart with entry/exit; record mistakes in journal.",
            "propRule": "Grade yourself on RULE ADHERENCE, not on whether trade made/lost money.",
            "keyTakeaway": "Daily self-auditing compounds trading skill faster than any course.",
            "difficulty": "Beginner"
          },
          {
            "id": "emergency-procedures",
            "title": "Emergency procedures",
            "side": "left",
            "description": "Contingencies for platform crashes, internet outages, or power cuts.",
            "goldInsight": "Have broker phone saved, mobile app ready with 5G, hard stop set on server.",
            "propRule": "Hard stops on broker server protect you even if PC completely dies.",
            "keyTakeaway": "Prepare for hardware failures so they never cause liquidation.",
            "difficulty": "Beginner"
          },
          {
            "id": "goal-setting-metrics",
            "title": "Goal setting metrics",
            "side": "left",
            "description": "Setting process-oriented goals rather than monetary profit targets.",
            "goldInsight": "Focusing on 'I must make $500 today' causes forced trades and overtrading.",
            "propRule": "Set goals around execution quality: 'I will execute my plan flawlessly.'",
            "keyTakeaway": "Master the process and profits take care of themselves automatically.",
            "difficulty": "Beginner"
          },
          {
            "id": "adaptation-rules",
            "title": "Adaptation rules",
            "side": "left",
            "description": "Rules for adjusting risk when market shifts between trend and chop.",
            "goldInsight": "When Gold daily ATR drops from 300 to 100 pips, scale targets down accordingly.",
            "propRule": "Never force high-volatility breakout setups in tight summer consolidation.",
            "keyTakeaway": "Flexible adaptation to current volatility keeps edge sharp year-round.",
            "difficulty": "Intermediate"
          }
        ],
        "rightTopics": [
          {
            "id": "london-breakout-strategy",
            "title": "London breakout strategy",
            "side": "right",
            "description": "Exploiting London opening surge (07:00-09:00 UTC) breaking Asian range.",
            "goldInsight": "Mark Asian High/Low (00:00-06:00 UTC). Look for London to sweep, reject, and trend.",
            "propRule": "Top setup for evaluations: Risk 0.5%, 25 pip stop, 60 pip target (1:2.4 R:R).",
            "keyTakeaway": "London Open provides primary directional volume of trading day.",
            "difficulty": "Intermediate"
          },
          {
            "id": "new-york-open-setup",
            "title": "New York open setup",
            "side": "right",
            "description": "Trading 12:30-14:30 UTC window where US data meets Wall Street open.",
            "goldInsight": "Look for 'NY Reversal' or 'NY Continuation' off London high/low order blocks.",
            "propRule": "Wait for initial 15m 13:30 UTC US data candle to close before entering.",
            "keyTakeaway": "NY Open provides highest volatility and cleanest trending extensions.",
            "difficulty": "Intermediate"
          },
          {
            "id": "asian-range-breakout",
            "title": "Asian range breakout",
            "side": "right",
            "description": "Capitalizing on breakout momentum after tight overnight consolidation.",
            "goldInsight": "Asian ranges < 80 pips on Gold almost always produce violent 150+ pip daytime runs.",
            "propRule": "Place bracket limit orders or wait for initial fakeout sweep before joining.",
            "keyTakeaway": "Tight Asian ranges store energy that powers daytime expansions.",
            "difficulty": "Beginner"
          },
          {
            "id": "support-resistance-bounce",
            "title": "Support resistance bounce",
            "side": "right",
            "description": "Trading precision bounces off Daily/4H key levels with confirmation.",
            "goldInsight": "When Gold touches Daily demand, drop to 5m chart; enter on bullish engulfing.",
            "propRule": "Tight invalidation: Stop placed 15-20 pips behind horizontal level.",
            "keyTakeaway": "High-probability reversal trading when combined with candlestick triggers.",
            "difficulty": "Beginner"
          },
          {
            "id": "news-fade-strategy",
            "title": "News fade strategy",
            "side": "right",
            "description": "Fading irrational algorithmic spike 15-30m post-news at HTF supply/demand.",
            "goldInsight": "Algorithmic spikes often shoot Gold straight into 4H Order Blocks where smart money dumps.",
            "propRule": "Never enter during initial spike; wait 15-20m for spike to exhaust.",
            "keyTakeaway": "Captures rapid mean-reversion following emotional news spikes.",
            "difficulty": "Advanced"
          },
          {
            "id": "trend-following-pullbacks",
            "title": "Trend following pullbacks",
            "side": "right",
            "description": "Buying pullbacks in established 1h uptrend at 50% or 61.8% Fibonacci.",
            "goldInsight": "In strong trending Gold, pullbacks to 20/50 EMA offer 1:3 R:R continuation.",
            "propRule": "Safest, highest-probability strategy for passing Phase 1 and Phase 2.",
            "keyTakeaway": "Trend following is cornerstone of prop trading profitability.",
            "difficulty": "Beginner"
          },
          {
            "id": "session-high-low-sweep",
            "title": "Session high low sweep",
            "side": "right",
            "description": "Institutional 'Judas Swing': price spikes above session high to grab stops, then dumps.",
            "goldInsight": "Sweeps of session highs on Gold are engineered liquidity events; enter on close back inside.",
            "propRule": "Target opposing session low for massive 1:3 to 1:5 Risk-to-Reward payout.",
            "keyTakeaway": "Trading with smart money liquidity grabs is highest-edge method on XAUUSD.",
            "difficulty": "Intermediate"
          }
        ]
      },
      {
        "id": "trading-plan-creation",
        "title": "Trading Plan Creation",
        "category": "Trading Playbook",
        "description": "Pre-market routines, top-down workflows, checklists, reviews, and SOPs.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      }
    ]
  },
  {
    "id": "backtesting-optimization",
    "title": "Backtesting and Optimization",
    "phase": 8,
    "description": "Manual and automated backtesting, Strategy Tester metrics, Sharpe ratio, trade journaling, and statistical optimization.",
    "hubs": [
      {
        "id": "manual-backtesting",
        "title": "Manual Backtesting",
        "category": "Historical Proof",
        "description": "Chart replay tools, spreadsheet data collection, sample sizes, win-rate computation, and expectancy formulas.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "expert-advisor-creation",
            "title": "Expert Advisor creation",
            "side": "left",
            "description": "Coding automated trading algorithms in MQL4/MQL5/Python for testing.",
            "goldInsight": "Automate risk sizing and partial TP scripts to remove hesitation during volatility.",
            "propRule": "Ensure prop firm permits personal EAs and does not ban automated management.",
            "keyTakeaway": "EAs eliminate human error in lot size calculations and stop enforcement.",
            "difficulty": "Advanced"
          },
          {
            "id": "strategy-tester-usage",
            "title": "Strategy Tester usage",
            "side": "left",
            "description": "Using MT4/MT5 Strategy Tester engines to simulate years of trading in seconds.",
            "goldInsight": "Run Strategy Tester on XAUUSD across 3+ years of 99.9% real tick data.",
            "propRule": "Look for smooth equity curves with max drawdown never exceeding 4% in tests.",
            "keyTakeaway": "Strategy tester reveals long-term mathematical distribution of edge.",
            "difficulty": "Intermediate"
          },
          {
            "id": "historical-tick-data",
            "title": "Historical tick data",
            "side": "left",
            "description": "Importing high-precision tick data with variable spreads and real slippage.",
            "goldInsight": "Standard MT4 backtesting uses fake ticks; real tick data is mandatory for Gold.",
            "propRule": "Backtesting with fixed 10-point spreads grossly overestimates profitability.",
            "keyTakeaway": "Quality tick data ensures backtest results match live prop execution.",
            "difficulty": "Advanced"
          },
          {
            "id": "slippage-simulation",
            "title": "Slippage simulation",
            "side": "left",
            "description": "Factoring in 10-30 points of simulated negative execution slippage.",
            "goldInsight": "Simulating slippage ensures strategy remains profitable during imperfect fills.",
            "propRule": "A strategy that fails with 2 pips of slippage is too fragile for prop rules.",
            "keyTakeaway": "Stress-test strategy against realistic broker execution delays.",
            "difficulty": "Advanced"
          },
          {
            "id": "optimization-parameters",
            "title": "Optimization parameters",
            "side": "left",
            "description": "Systematically testing variable inputs (stop loss, TP multipliers, EMAs).",
            "goldInsight": "Find sweet-spot stop loss for XAUUSD (typically 25-35 pips for intraday 15m).",
            "propRule": "Optimize for lowest maximum drawdown rather than highest gross profit.",
            "keyTakeaway": "Proper optimization identifies the most resilient configuration of your edge.",
            "difficulty": "Advanced"
          },
          {
            "id": "curve-fitting-avoidance",
            "title": "Curve fitting avoidance",
            "side": "left",
            "description": "Preventing over-optimization where strategy is tailored to historical noise.",
            "goldInsight": "Keep strategy rules universal: a system on Gold should generalize well.",
            "propRule": "Over-fitted systems look amazing in backtests but fail within 3 days live.",
            "keyTakeaway": "Simple robust rules generalize to future market conditions far better.",
            "difficulty": "Advanced"
          },
          {
            "id": "walk-forward-analysis",
            "title": "Walk forward analysis",
            "side": "left",
            "description": "Optimizing on in-sample historical data and validating on unseen out-of-sample data.",
            "goldInsight": "Test on 2021-2023, optimize, test blind on 2024-2026 to verify true predictive edge.",
            "propRule": "Out-of-sample validation proves strategy survives unseen market regimes.",
            "keyTakeaway": "Gold standard in quantitative validation before deploying evaluation capital.",
            "difficulty": "Mastery"
          }
        ],
        "rightTopics": [
          {
            "id": "historical-data-collection",
            "title": "Historical data collection",
            "side": "right",
            "description": "Gathering chart samples of your setup across bull, bear, and chop regimes.",
            "goldInsight": "Collect 100 screenshots of 'London Gold High/Low Sweep' across past 24 months.",
            "propRule": "Knowing setup appeared 85 times with 65% win rate builds unshakable conviction.",
            "keyTakeaway": "Historical data collection turns subjective belief into mathematical certainty.",
            "difficulty": "Beginner"
          },
          {
            "id": "chart-replay-tools",
            "title": "Chart replay tools",
            "side": "right",
            "description": "Using TradingView Bar Replay to practice decision-making candle-by-candle.",
            "goldInsight": "Spend 1 hour every weekend practicing bar replay on XAUUSD London sessions.",
            "propRule": "Bar replay builds 10 years of trading screen time in 6 months of practice.",
            "keyTakeaway": "Trains brain to spot real-time structural shifts without hindsight bias.",
            "difficulty": "Beginner"
          },
          {
            "id": "spreadsheet-recording",
            "title": "Spreadsheet recording",
            "side": "right",
            "description": "Logging backtests: Entry, Exit, SL, TP, R:R, Win/Loss, Drawdown, Session.",
            "goldInsight": "Calculate exact win rate by session (London win rate vs Asian win rate).",
            "propRule": "Spreadsheet metrics reveal if you should stop trading low-win-rate sessions.",
            "keyTakeaway": "Spreadsheets reveal true strengths and eliminate unprofitable habits.",
            "difficulty": "Beginner"
          },
          {
            "id": "visual-sample-collection",
            "title": "Visual sample collection",
            "side": "right",
            "description": "Building digital Playbook of pristine A+ setup screenshot examples.",
            "goldInsight": "Categorize screenshots into 'Perfect Win', 'Break-Even', and 'Valid Loss'.",
            "propRule": "Review your 10 best A+ playbook setups during pre-market routine.",
            "keyTakeaway": "Conditions subconscious mind to recognize high-probability setups instantly.",
            "difficulty": "Beginner"
          },
          {
            "id": "market-condition-testing",
            "title": "Market condition testing",
            "side": "right",
            "description": "Testing strategy performance across trending, ranging, and high-vol regimes.",
            "goldInsight": "Gold behaves differently in rate-hike cycles vs quiet summer consolidation.",
            "propRule": "Ensure strategy survives regime shifts without breaching maximum drawdown.",
            "keyTakeaway": "Robust strategies withstand varying market conditions with controlled DD.",
            "difficulty": "Intermediate"
          },
          {
            "id": "win-rate-calculation",
            "title": "Win rate calculation",
            "side": "right",
            "description": "Percentage of winning trades out of total closed trades.",
            "goldInsight": "Intraday Gold strategies target 45%-60% win rate with 1:2 to 1:3 average R:R.",
            "propRule": "Do not chase unrealistic 90% win rates; they carry catastrophic tail-risk.",
            "formulaOrRule": "Win Rate % = (Wins / Total Trades) \u00d7 100",
            "keyTakeaway": "50% win rate with 1:2 R:R makes you elite in the prop trading industry.",
            "difficulty": "Beginner"
          },
          {
            "id": "expectancy-formula",
            "title": "Expectancy formula",
            "side": "right",
            "description": "Expected average dollar or R-return produced by every trade placed.",
            "goldInsight": "Expectancy = (Win% * Avg Win) - (Loss% * Avg Loss). Positive expectancy guarantees funding.",
            "propRule": "Positive expectancy guarantees that over a 50-trade sample, you hit profit target.",
            "formulaOrRule": "Expectancy (R) = (Win Rate \u00d7 Win Size) - (Loss Rate \u00d7 Loss Size)",
            "keyTakeaway": "Positive mathematical expectancy is the scientific definition of edge.",
            "difficulty": "Intermediate"
          }
        ]
      },
      {
        "id": "automated-backtesting",
        "title": "Automated Backtesting",
        "category": "Quantitative Testing",
        "description": "EAs, Strategy Tester simulation, tick data, slippage modelling, and walk-forward analysis.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "performance-metrics",
        "title": "Performance Metrics",
        "category": "Analytics & Audits",
        "description": "Profit factor, Sharpe ratio, maximum drawdown metrics, average win/loss, and recovery scores.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "trade-logging-software",
            "title": "Trade logging software",
            "side": "left",
            "description": "Automated analytics platforms (TraderSync, TradeZella, Myfxbook) syncing history.",
            "goldInsight": "Connect prop account credentials to auto-sync every Gold execution with metrics.",
            "propRule": "Auto-logging reveals hidden leaks like entering outside planned hours.",
            "keyTakeaway": "Automated journaling provides ruthless feedback on execution discipline.",
            "difficulty": "Beginner"
          },
          {
            "id": "screenshot-documentation",
            "title": "Screenshot documentation",
            "side": "left",
            "description": "Capturing entry and exit chart screenshots with technical markup.",
            "goldInsight": "Document 15m structural context and 1m trigger for every XAUUSD execution.",
            "propRule": "Save screenshots in Notion/TradeZella for weekly performance reviews.",
            "keyTakeaway": "Visual archives reinforce pattern recognition and accountability.",
            "difficulty": "Beginner"
          },
          {
            "id": "emotional-state-tracking",
            "title": "Emotional state tracking",
            "side": "left",
            "description": "Recording mental state (Calm, Anxious, Greedy, Tired, Rushed) before trades.",
            "goldInsight": "Correlate emotional tags with outcomes; 90% of losses occur when tired or rushed.",
            "propRule": "If emotional check reveals stress or fatigue, DO NOT trade Gold that session.",
            "keyTakeaway": "Emotional awareness is first step toward master discipline and tilt immunity.",
            "difficulty": "Intermediate"
          },
          {
            "id": "mistake-categorization",
            "title": "Mistake categorization",
            "side": "left",
            "description": "Tagging errors: FOMO, Chasing, Moving SL, Oversizing, Early Exit, News Error.",
            "goldInsight": "Calculate total dollar cost of mistakes monthly to see how much leaks cost you.",
            "propRule": "Eliminating your #1 most frequent mistake often immediately passes evaluation.",
            "keyTakeaway": "Fixing leaks in your boat is faster than looking for new indicators.",
            "difficulty": "Beginner"
          },
          {
            "id": "setup-tagging-system",
            "title": "Setup tagging system",
            "side": "left",
            "description": "Tagging specific setup names (#LondonSweep, #NYBreakout, #FibGoldenPocket).",
            "goldInsight": "Compare win rate and profit factor of #LondonSweep vs #NYBreakout on XAUUSD.",
            "propRule": "Double down on highest-performing setup and eliminate low-expectancy patterns.",
            "keyTakeaway": "Specializing in your #1 setup accelerates prop funding success.",
            "difficulty": "Intermediate"
          },
          {
            "id": "weekly-performance-review",
            "title": "Weekly performance review",
            "side": "left",
            "description": "Conducting 1-hour weekend audit of closed trades, ROI, drawdown, and rule score.",
            "goldInsight": "Review every Gold trade; ask: 'Did I follow my plan 100%?'",
            "propRule": "Grade week on A to F scale based on execution discipline rather than dollars.",
            "keyTakeaway": "Weekly self-auditing ensures continuous improvement and accountability.",
            "difficulty": "Beginner"
          },
          {
            "id": "monthly-progress-audit",
            "title": "Monthly progress audit",
            "side": "left",
            "description": "Monthly retrospective evaluating payouts, drawdown, and mental stamina.",
            "goldInsight": "Calculate monthly blended profit factor and assess readiness for capital scaling.",
            "propRule": "Use monthly audits to adjust capital allocation across prop firms.",
            "keyTakeaway": "Monthly audits elevate trading from hobby into scalable business.",
            "difficulty": "Intermediate"
          }
        ],
        "rightTopics": [
          {
            "id": "win-loss-ratio",
            "title": "Win loss ratio",
            "side": "right",
            "description": "Ratio of winning trades to losing trades over a given period.",
            "goldInsight": "1:1 Win/Loss ratio (50% win rate) is outstanding when paired with 1:2 R:R on Gold.",
            "propRule": "Never evaluate system on small sample (<30 trades); variance requires 50+.",
            "keyTakeaway": "Win/Loss ratio must always be evaluated alongside average Risk-to-Reward.",
            "difficulty": "Beginner"
          },
          {
            "id": "profit-factor-calculation",
            "title": "Profit factor calculation",
            "side": "right",
            "description": "Total Gross Profit divided by Total Gross Loss (e.g. $15k profit / $7.5k loss = 2.0).",
            "goldInsight": "Profit Factor > 1.8 on Gold intraday represents elite institutional performance.",
            "propRule": "Profit factor < 1.3 in backtests indicates strategy is too fragile for prop rules.",
            "formulaOrRule": "Profit Factor = Gross Profits ($) / Gross Losses ($)",
            "keyTakeaway": "Profit factor is universal metric used by risk managers to evaluate traders.",
            "difficulty": "Beginner"
          },
          {
            "id": "max-drawdown-metric",
            "title": "Maximum drawdown metric",
            "side": "right",
            "description": "Largest peak-to-trough percentage decline in account equity.",
            "goldInsight": "In backtesting, strategy max drawdown must be <4% to safely pass 10% challenge.",
            "propRule": "If historical max DD is 6%, live execution will likely reach 9-10% and breach.",
            "formulaOrRule": "Max DD % = ((Peak - Trough) / Peak) \u00d7 100",
            "keyTakeaway": "Keep historical max drawdown well below half the allowable prop limit.",
            "difficulty": "Beginner"
          },
          {
            "id": "avg-win-size",
            "title": "Average win size",
            "side": "right",
            "description": "Mean dollar or R-value generated across all winning trades.",
            "goldInsight": "Ensure average win on Gold is consistently 1.8x to 2.5x larger than average loss.",
            "propRule": "Cutting winners early shrinks average win size, destroying expectancy.",
            "keyTakeaway": "Letting winners reach predetermined targets protects average win size.",
            "difficulty": "Beginner"
          },
          {
            "id": "avg-loss-size",
            "title": "Average loss size",
            "side": "right",
            "description": "Mean dollar or R-value lost across all losing trades.",
            "goldInsight": "Average loss on Gold should strictly equal -1.0R (e.g. $500 on $100k account).",
            "propRule": "If average loss is >1.2R, you are widening stops or suffering slippage.",
            "keyTakeaway": "Hard stops keep average loss size strictly controlled and predictable.",
            "difficulty": "Beginner"
          },
          {
            "id": "recovery-factor-score",
            "title": "Recovery factor score",
            "side": "right",
            "description": "Net Profit divided by Maximum Drawdown measuring recovery speed.",
            "goldInsight": "Score > 4.0 indicates system bounces back rapidly from losing streaks on Gold.",
            "propRule": "High recovery factor ensures pulling out of drawdown before time limits.",
            "keyTakeaway": "Measures strategy resilience and speed of capital compounding.",
            "difficulty": "Intermediate"
          },
          {
            "id": "sharpe-ratio-usage",
            "title": "Sharpe ratio usage",
            "side": "right",
            "description": "Excess return relative to risk-free rate per unit of return volatility.",
            "goldInsight": "Sharpe ratio > 1.5 indicates smooth, low-volatility equity growth ideal for scaling.",
            "propRule": "Institutional firms allocate largest capital tiers ($1M+) to high Sharpe traders.",
            "formulaOrRule": "Sharpe = (Return - Risk Free) / Std Dev",
            "keyTakeaway": "Premier institutional metric measuring risk-adjusted equity smoothness.",
            "difficulty": "Advanced"
          }
        ]
      },
      {
        "id": "journaling",
        "title": "Journaling",
        "category": "Continuous Auditing",
        "description": "Trade logging software, screenshot databases, emotion tracking, mistake tagging, and weekly progress audits.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      }
    ]
  },
  {
    "id": "psychology-discipline",
    "title": "Psychology and Discipline",
    "phase": 9,
    "description": "Cognitive bias mitigation, emotional resilience, FOMO/greed eradication, elite trader daily routines, and mental warmups.",
    "hubs": [
      {
        "id": "trading-psychology",
        "title": "Trading Psychology",
        "category": "Mindset & Biases",
        "description": "Managing FOMO, controlling greed, eradicating hope in losing trades, building confidence, and stress reduction.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "trading-discipline-habits",
            "title": "Trading discipline habits",
            "side": "left",
            "description": "Automating rule-based behaviors through daily repetition until effortless.",
            "goldInsight": "Execute exact XAUUSD plan regardless of whether last trade won or lost.",
            "propRule": "Discipline is doing what you must do, when you must do it, regardless of mood.",
            "keyTakeaway": "Habitual discipline separates funded professionals from amateur herd.",
            "difficulty": "Beginner"
          },
          {
            "id": "patience-in-waiting",
            "title": "Patience in waiting",
            "side": "left",
            "description": "Ability to sit on hands for hours until price reaches A+ execution zone.",
            "goldInsight": "90% of trading Gold is waiting; 10% is execution. If in mid-range chop, do nothing.",
            "propRule": "Treat patience as an active, profitable position. Cash is a valid position.",
            "keyTakeaway": "Market pays you for waiting for high-probability setups, not clicking.",
            "difficulty": "Beginner"
          },
          {
            "id": "acceptance-of-losses",
            "title": "Acceptance of losses",
            "side": "left",
            "description": "Viewing losses as standard business expenses rather than personal failures.",
            "goldInsight": "Taking a -0.5% loss on valid setup is successful execution of plan.",
            "propRule": "If you cannot accept a loss without feeling anger, position size is too large.",
            "keyTakeaway": "Emotional detachment from trade outcomes unlocks consistent execution.",
            "difficulty": "Beginner"
          },
          {
            "id": "detachment-from-money",
            "title": "Detachment from money",
            "side": "left",
            "description": "Thinking in points, pips, and R-multiples rather than dollar numbers.",
            "goldInsight": "On $200k account, open trade fluctuating +$3,000 causes panic. View R:R instead.",
            "propRule": "Switch terminal display to 'Points' or 'Term Currency' to stay objective.",
            "keyTakeaway": "Detaching from fiat numbers eliminates fear and allows edge to play out.",
            "difficulty": "Intermediate"
          },
          {
            "id": "calmness-under-pressure",
            "title": "Calmness under pressure",
            "side": "left",
            "description": "Maintaining steady heart rate and calm breathing during volatility.",
            "goldInsight": "When Gold surges 100 pips into limit order, execute calmly without panic.",
            "propRule": "Take 3 deep diaphragmatic breaths before clicking buy or sell to center nerves.",
            "keyTakeaway": "Calm minds make rational decisions; agitated minds make mistakes.",
            "difficulty": "Intermediate"
          },
          {
            "id": "focus-maintenance",
            "title": "Focus maintenance",
            "side": "left",
            "description": "Eliminating all external distractions (social media, Discord, phone) during sessions.",
            "goldInsight": "Close Telegram signal groups; other opinions contaminate objective Gold analysis.",
            "propRule": "Trade in isolated workspace with phone on DND during London and NY opens.",
            "keyTakeaway": "Deep uninterrupted focus is required to catch fast institutional shifts.",
            "difficulty": "Beginner"
          },
          {
            "id": "burnout-prevention",
            "title": "Burnout prevention",
            "side": "left",
            "description": "Limiting screen time to 3-4 focused hours daily with unplugged weekends.",
            "goldInsight": "Staring at 1m Gold charts for 10 hours causes cognitive fatigue and bad trades.",
            "propRule": "Set hard rule: finish trading by 16:30 UTC and close computer for the day.",
            "keyTakeaway": "Trading is an intellectual sprint, not an endurance marathon. Rest.",
            "difficulty": "Beginner"
          }
        ],
        "rightTopics": [
          {
            "id": "fear-of-missing-out",
            "title": "Fear of missing out",
            "side": "right",
            "description": "Psychological anxiety of missing a move, leading to impulsive chasing.",
            "goldInsight": "When Gold prints a giant 80-pip candle without you, DO NOT chase. Wait.",
            "propRule": "There will ALWAYS be another trade; markets produce 250+ days every year.",
            "keyTakeaway": "Chasing missed moves is the fastest way to buy top or sell bottom.",
            "difficulty": "Beginner"
          },
          {
            "id": "greed-control-methods",
            "title": "Greed control methods",
            "side": "right",
            "description": "Suppressing desire to make fast fortunes by increasing lot sizes.",
            "goldInsight": "When up 6% on $100k challenge, do not increase lots to finish in 1 day.",
            "propRule": "Greed turns winning evaluation accounts into blown accounts in hours.",
            "keyTakeaway": "Steady compounding beats aggressive greed 100% of the time.",
            "difficulty": "Beginner"
          },
          {
            "id": "hope-in-losing-trades",
            "title": "Hope in losing trades",
            "side": "right",
            "description": "Refusing to cut losing trade and hoping it turns, widening stop loss.",
            "goldInsight": "Never move stop loss further away on Gold. When invalidation hits, exit.",
            "propRule": "MANDATORY: Moving stop loss further away is instant disqualification of edge.",
            "keyTakeaway": "Hope is not a strategy. Cut losses swiftly and protect capital.",
            "difficulty": "Beginner"
          },
          {
            "id": "regret-management",
            "title": "Regret management",
            "side": "right",
            "description": "Overcoming emotional pain of closing early or watching trade run after TP.",
            "goldInsight": "If Gold runs 200 pips after hitting planned 1:2 target, celebrate following plan.",
            "propRule": "Regret for 'leaving money on the table' leads to overtrading.",
            "keyTakeaway": "You only need to harvest your planned slice of the market move.",
            "difficulty": "Intermediate"
          },
          {
            "id": "confidence-building",
            "title": "Confidence building",
            "side": "right",
            "description": "Developing unshakeable self-trust built on backtesting and execution.",
            "goldInsight": "Confidence comes from executing 500+ backtested trades on XAUUSD, not luck.",
            "propRule": "True confidence is knowing mathematical edge will triumph over time.",
            "keyTakeaway": "Confidence is earned through preparation and disciplined execution.",
            "difficulty": "Beginner"
          },
          {
            "id": "mental-resilience",
            "title": "Mental resilience",
            "side": "right",
            "description": "Psychological stamina to bounce back from losing streaks without losing composure.",
            "goldInsight": "Every pro trader experiences 4-5 consecutive losses; resilience keeps plan intact.",
            "propRule": "Treat losing streaks as a test of professional composure and compliance.",
            "keyTakeaway": "Resilience transforms adversity into stepping stones of mastery.",
            "difficulty": "Intermediate"
          },
          {
            "id": "stress-reduction",
            "title": "Stress reduction",
            "side": "right",
            "description": "Practices including exercise, hydration, breathwork, and clean nutrition.",
            "goldInsight": "High cortisol impairs prefrontal cortex, causing panicked decisions on Gold.",
            "propRule": "Exercise for 30 minutes before trading to burn off nervous energy.",
            "keyTakeaway": "Physical wellness is the biological foundation of trading endurance.",
            "difficulty": "Beginner"
          }
        ]
      },
      {
        "id": "emotional-control",
        "title": "Emotional Control",
        "category": "Self-Mastery",
        "description": "Discipline habits, patience protocols, loss acceptance, monetary detachment, and burnout prevention.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "trading-routine",
        "title": "Trading Routine",
        "category": "Daily Protocol",
        "description": "Morning preparation rituals, physical fitness, hydration, workspace ergonomics, mental warmups, and sleep.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "meditation-practices",
            "title": "Meditation practices",
            "side": "left",
            "description": "10-minute mindfulness meditation to strengthen focus and impulse control.",
            "goldInsight": "Meditation trains brain to notice urge to FOMO into Gold without acting on it.",
            "propRule": "Practice 10 minutes box breathing (4s in, 4s hold, 4s out, 4s hold) before charts.",
            "keyTakeaway": "Meditation creates mental gap between emotional impulse and physical action.",
            "difficulty": "Beginner"
          },
          {
            "id": "mindfulness-techniques",
            "title": "Mindfulness techniques",
            "side": "left",
            "description": "Staying grounded in present moment rather than dwelling on past losses.",
            "goldInsight": "Notice shoulder tension when Gold spikes; consciously relax body.",
            "propRule": "Mindful trading ensures execution based on chart reality, not baggage.",
            "keyTakeaway": "Presence of mind prevents past losses from contaminating execution.",
            "difficulty": "Beginner"
          },
          {
            "id": "psychological-triggers",
            "title": "Psychological triggers",
            "side": "left",
            "description": "Identifying internal/external triggers (2 losses, seeing profits, bad sleep).",
            "goldInsight": "Know your personal trigger list so you proactively step away before tilt.",
            "propRule": "Write your 3 biggest emotional triggers on a sticky note on your monitor.",
            "keyTakeaway": "Awareness of triggers makes you immune to their destructive power.",
            "difficulty": "Intermediate"
          },
          {
            "id": "behavioral-correction",
            "title": "Behavioral correction",
            "side": "left",
            "description": "Implementing concrete friction/penalties for breaking rules (24h trading ban).",
            "goldInsight": "If you ever move a stop loss on Gold, penalize yourself with mandatory 48h ban.",
            "propRule": "Enforcing real consequences for rule violations cures behavioral leaks.",
            "keyTakeaway": "Negative reinforcement eliminates bad trading habits permanently.",
            "difficulty": "Intermediate"
          },
          {
            "id": "continuous-learning-mindset",
            "title": "Continuous learning mindset",
            "side": "left",
            "description": "Viewing every session as skill acquisition rather than just money grab.",
            "goldInsight": "Study every Gold move after close: 'What was market trying to do today?'",
            "propRule": "Embrace growth mindset where market feedback is welcomed as lessons.",
            "keyTakeaway": "Continuous learners inevitably surpass traders focused only on fast cash.",
            "difficulty": "Beginner"
          },
          {
            "id": "peer-group-interaction",
            "title": "Peer group interaction",
            "side": "left",
            "description": "Collaborating with disciplined prop traders to share high-conviction analysis.",
            "goldInsight": "Surround yourself with traders who prioritize risk rules above all else.",
            "propRule": "Avoid toxic signal groups encouraging over-leveraging and gambling.",
            "keyTakeaway": "Your circle shapes standards; surround yourself with disciplined winners.",
            "difficulty": "Beginner"
          },
          {
            "id": "mentorship-guidance",
            "title": "Mentorship guidance",
            "side": "left",
            "description": "Learning directly from verifiable funded prop traders who scaled capital.",
            "goldInsight": "A seasoned mentor identifies blind spots and saves years of trial and error.",
            "propRule": "Seek mentorship focused on risk compliance and psychology over get-rich hype.",
            "keyTakeaway": "True mentorship compresses 5-year learning curves into focused months.",
            "difficulty": "Intermediate"
          }
        ],
        "rightTopics": [
          {
            "id": "morning-preparation",
            "title": "Morning preparation",
            "side": "right",
            "description": "Waking 60 minutes before session to hydrate, exercise, review news, and charts.",
            "goldInsight": "Be at desk 30m before London Open (06:30 UTC) with analysis fully marked.",
            "propRule": "Never trade in bed waking 5m before session. Treat as elite athletic discipline.",
            "keyTakeaway": "Structured morning routine establishes calm baseline for execution.",
            "difficulty": "Beginner"
          },
          {
            "id": "physical-exercise-habits",
            "title": "Physical exercise habits",
            "side": "right",
            "description": "Daily training to enhance cognitive stamina, blood flow, and stress resilience.",
            "goldInsight": "Physical fitness increases mental clarity during fast XAUUSD price action.",
            "propRule": "Aim for 30-45 minutes daily exercise to reduce cortisol and improve focus.",
            "keyTakeaway": "Peak physical condition directly supports peak trading performance.",
            "difficulty": "Beginner"
          },
          {
            "id": "nutrition-and-hydration",
            "title": "Nutrition and hydration",
            "side": "right",
            "description": "Eating whole foods, avoiding sugar crashes, and drinking plenty of water.",
            "goldInsight": "Dehydration reduces cognitive reaction time by 20%; keep water at desk.",
            "propRule": "Avoid heavy carbs before trading sessions to prevent brain fog and fatigue.",
            "keyTakeaway": "Clean fuel powers a sharp brain capable of flawless risk execution.",
            "difficulty": "Beginner"
          },
          {
            "id": "workspace-setup",
            "title": "Workspace setup",
            "side": "right",
            "description": "Clean, ergonomic dual-monitor trading environment optimized for speed.",
            "goldInsight": "Screen 1: TradingView 4H/1H/15m charts. Screen 2: Execution terminal and news.",
            "propRule": "A clutter-free physical desk fosters an organized, disciplined mindset.",
            "keyTakeaway": "Your workspace is your office; organize it like an institutional desk.",
            "difficulty": "Beginner"
          },
          {
            "id": "mental-warm-up",
            "title": "Mental warm up",
            "side": "right",
            "description": "Reviewing rules, repeating mantras, and visualizing execution before open.",
            "goldInsight": "Mantra: 'I will only trade A+ setups. Risk 0.5%. Let winners run to targets.'",
            "propRule": "Visualization primes subconscious to execute calmly when volatility surges.",
            "keyTakeaway": "Mental warmups align intentions with trading rules before the open.",
            "difficulty": "Beginner"
          },
          {
            "id": "post-trading-wind-down",
            "title": "Post trading wind down",
            "side": "right",
            "description": "Closing platform, logging trades, stretching, and transitioning out of mode.",
            "goldInsight": "Once session finishes, close terminal completely. Do not stare at charts all day.",
            "propRule": "Clear psychological separation between trading and personal life prevents burnout.",
            "keyTakeaway": "Step away completely to recharge mental battery for tomorrow.",
            "difficulty": "Beginner"
          },
          {
            "id": "sleep-optimization",
            "title": "Sleep optimization",
            "side": "right",
            "description": "Getting 7-9 hours quality sleep for prefrontal cortex functioning and willpower.",
            "goldInsight": "Sleep deprivation reduces risk aversion, making you 3x more likely to overtrade.",
            "propRule": "If you had <5 hours sleep, halve position sizing or take day off entirely.",
            "keyTakeaway": "Quality sleep is non-negotiable for high-stakes risk management.",
            "difficulty": "Beginner"
          }
        ]
      },
      {
        "id": "performance-enhancement",
        "title": "Performance Enhancement",
        "category": "Elite Optimization",
        "description": "Meditation, mindfulness, cognitive behavioral correction, growth mindset, and mentorship.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      }
    ]
  },
  {
    "id": "evaluation-execution",
    "title": "Evaluation Execution",
    "phase": 10,
    "description": "Passing Phase 1 challenges, mastering Phase 2 verification, funded account risk management, and scaling operations.",
    "hubs": [
      {
        "id": "preparation-phase",
        "title": "Preparation Phase",
        "category": "Phase 0 Pre-Flight",
        "description": "Broker selection, platform configuration, indicator setup, hotkey binds, redundancy plans, and schedule clearing.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "rule-memorization",
            "title": "Rule memorization",
            "side": "left",
            "description": "Committing challenge rules (Daily Loss, Max Loss, Target, Days) to memory.",
            "goldInsight": "Know exact dollar loss thresholds before trade #1: '$100k account = $5k daily limit.'",
            "propRule": "Write all rule numbers on sticky note on monitor bezel.",
            "keyTakeaway": "Zero ambiguity on rules prevents accidental breaches.",
            "difficulty": "Beginner"
          },
          {
            "id": "risk-parameter-adherence",
            "title": "Risk parameter adherence",
            "side": "left",
            "description": "Enforcing non-negotiable 0.5% risk per trade on every challenge execution.",
            "goldInsight": "At 0.5% risk, you have 20 trades before hitting 10% maximum total drawdown.",
            "propRule": "Never increase risk to 2% because of confidence. Every trade has variance.",
            "keyTakeaway": "Adhering to strict risk parameters guarantees surviving evaluation.",
            "difficulty": "Beginner"
          },
          {
            "id": "lot-size-control",
            "title": "Lot size control",
            "side": "left",
            "description": "Double-checking every lot size in order window before clicking buy/sell.",
            "goldInsight": "Accidentally entering 10.0 lots instead of 1.00 wipes $2,000 on 20-pip flicker.",
            "propRule": "Use one-click risk scripts calculating lots automatically based on SL.",
            "keyTakeaway": "Verify lot size on every single order entry to eliminate fat-finger errors.",
            "difficulty": "Beginner"
          },
          {
            "id": "trading-frequency-management",
            "title": "Trading frequency management",
            "side": "left",
            "description": "Limiting yourself to 1-2 high-conviction trades daily rather than 10-15 random.",
            "goldInsight": "Top Gold traders take only 3-7 pristine trades weekly to pass evaluations.",
            "propRule": "Quality over quantity. Fewer trades dramatically lowers spread costs.",
            "keyTakeaway": "Sniper execution consistently outperforms machine-gun overtrading.",
            "difficulty": "Beginner"
          },
          {
            "id": "avoiding-overtrading",
            "title": "Avoiding overtrading",
            "side": "left",
            "description": "Closing terminal after hitting daily profit target or maximum daily loss.",
            "goldInsight": "If you make 2.5% on Gold in London, CLOSE TERMINAL. Do not risk it in NY.",
            "propRule": "Protect gains. Many reach profit targets and lose it all the same day.",
            "keyTakeaway": "Knowing when to stop trading is as important as knowing when to enter.",
            "difficulty": "Beginner"
          },
          {
            "id": "patience-with-setups",
            "title": "Patience with setups",
            "side": "left",
            "description": "Waiting for price to reach designated supply/demand zone rather than jumping.",
            "goldInsight": "If Gold does not reach planned 15m Order Block, let it go. Do not chase.",
            "propRule": "Patience ensures optimal risk-to-reward entries with protected structural stops.",
            "keyTakeaway": "Let market come to you. Never compromise on entry location.",
            "difficulty": "Beginner"
          },
          {
            "id": "stress-monitoring",
            "title": "Stress monitoring",
            "side": "left",
            "description": "Monitoring heart rate, breathing, and anxiety levels during active trades.",
            "goldInsight": "If open Gold trade causes severe anxiety, position size is too large. Cut size.",
            "propRule": "Trading with peace of mind ensures objective management and timely exits.",
            "keyTakeaway": "Low emotional stress is hallmark of professional position sizing.",
            "difficulty": "Beginner"
          }
        ],
        "rightTopics": [
          {
            "id": "broker-selection-review",
            "title": "Broker selection review",
            "side": "right",
            "description": "Selecting prop firms with raw spreads, transparent slippage, and Tier-1 bridges.",
            "goldInsight": "Verify that Gold spreads remain under 20 points during London and NY sessions.",
            "propRule": "Choose firms with established reputations and verifiable payout histories.",
            "keyTakeaway": "High-quality broker infrastructure ensures technical edge translates to profits.",
            "difficulty": "Beginner"
          },
          {
            "id": "platform-configuration",
            "title": "Platform configuration",
            "side": "right",
            "description": "Setting up templates, candle countdown timers, and hotkeys in terminals.",
            "goldInsight": "Add candle close countdown timer to avoid entering ahead of 15m close.",
            "propRule": "Organize workspace for rapid, error-free order placement and stop adjustment.",
            "keyTakeaway": "Clean, customized platform setup removes friction from daily workflow.",
            "difficulty": "Beginner"
          },
          {
            "id": "indicator-setup",
            "title": "Indicator setup",
            "side": "right",
            "description": "Applying essentials: Session Timelines, Daily VWAP, 50/200 EMAs, ATR(14).",
            "goldInsight": "Color-code Asian (blue), London (orange), NY (green) ranges on Gold chart.",
            "propRule": "Keep charts clean; indicators should confirm, not confuse analysis.",
            "keyTakeaway": "Essential session indicators highlight structural levels at a glance.",
            "difficulty": "Beginner"
          },
          {
            "id": "hotkey-configuration",
            "title": "Hotkey configuration",
            "side": "right",
            "description": "Configuring hotkeys for instant BE stop movement, 50% partials, and full exits.",
            "goldInsight": "Set 'Ctrl+B' to move stop to BE, 'Ctrl+C' to close 50% of active Gold position.",
            "propRule": "Hotkeys allow sub-second reaction times during fast news volatility.",
            "keyTakeaway": "Automate repetitive order management actions with keyboard shortcuts.",
            "difficulty": "Intermediate"
          },
          {
            "id": "internet-backup-plan",
            "title": "Internet backup plan",
            "side": "right",
            "description": "Having 5G mobile hotspot tethering ready in case home fiber fails.",
            "goldInsight": "If home WiFi disconnects with active Gold trade, mobile hotspot reconnects in 10s.",
            "propRule": "Always maintain secondary internet connection ready to activate.",
            "keyTakeaway": "Hardware redundancy protects against unexpected disconnection losses.",
            "difficulty": "Beginner"
          },
          {
            "id": "power-backup-plan",
            "title": "Power backup plan",
            "side": "right",
            "description": "Using UPS or laptop battery to maintain power during electricity cuts.",
            "goldInsight": "Laptop with 4+ hours battery ensures continuous trading during blackouts.",
            "propRule": "Ensure trading laptop is fully charged before session open.",
            "keyTakeaway": "Power backup eliminates risk of being locked out of active positions.",
            "difficulty": "Beginner"
          },
          {
            "id": "schedule-clearing",
            "title": "Schedule clearing",
            "side": "right",
            "description": "Clearing personal appointments during designated 2-3 hour trading window.",
            "goldInsight": "Focus 100% attention on London Open (07:00-10:00 UTC) with zero interruptions.",
            "propRule": "Do not trade while multitasking; trading requires complete cognitive presence.",
            "keyTakeaway": "Protect trading window as sacred, uninterrupted professional time.",
            "difficulty": "Beginner"
          }
        ]
      },
      {
        "id": "challenge-phase",
        "title": "Challenge Phase",
        "category": "Phase 1 Execution",
        "description": "Hitting the 8-10% profit target with strict adherence to risk parameters, lot control, and frequency management.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "verification-phase",
        "title": "Verification Phase",
        "category": "Phase 2 Validation",
        "description": "Securing 5% Phase 2 target with calm consistency, edge adherence, zero rule breaks, and final stretch focus.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "psychology-shift-handling",
            "title": "Psychology shift handling",
            "side": "left",
            "description": "Adapting to psychological pressure of managing live funded capital.",
            "goldInsight": "Once funded, fear of losing account causes hesitation. Trust the process.",
            "propRule": "Do not change strategy once funded. Execute exact plan that earned funding.",
            "keyTakeaway": "Trust the proven process that earned your funded account.",
            "difficulty": "Intermediate"
          },
          {
            "id": "risk-reduction-strategies",
            "title": "Risk reduction strategies",
            "side": "left",
            "description": "Reducing risk from 0.5% to 0.25% on new funded account until buffer builds.",
            "goldInsight": "On $100k funded account, risk 0.25% ($250) on Gold until reaching +$3k buffer.",
            "propRule": "Building 3% buffer first ensures never breaching starting daily limit.",
            "keyTakeaway": "Conservative start on funded accounts builds permanent safety cushion.",
            "difficulty": "Beginner"
          },
          {
            "id": "profit-withdrawal-planning",
            "title": "Profit withdrawal planning",
            "side": "left",
            "description": "Setting scheduled bi-weekly or monthly withdrawal routines to take profits.",
            "goldInsight": "Request payout on first eligible day. Receiving first $5k payout transforms belief.",
            "propRule": "Withdraw at least 50% of profits; reinvest remainder into new evaluations.",
            "keyTakeaway": "Taking real withdrawals makes trading success tangible and rewarding.",
            "difficulty": "Beginner"
          },
          {
            "id": "scaling-plan-execution",
            "title": "Scaling plan execution",
            "side": "left",
            "description": "Achieving 10% 3-month profit targets required for 25% capital scaling.",
            "goldInsight": "$200k scaling by 25% reaches $250k, $312k, $390k, reaching $1M+ in 24 months.",
            "propRule": "Focus on steady 3% monthly gains on Gold to unlock million-dollar scaling.",
            "keyTakeaway": "Scaling plans are ultimate vehicle for multi-million capital management.",
            "difficulty": "Advanced"
          },
          {
            "id": "account-preservation",
            "title": "Account preservation",
            "side": "left",
            "description": "Prioritizing account longevity over quick gains: account lasting 2 years pays fortunes.",
            "goldInsight": "Protecting funded account is job #1. Never risk account for single trade.",
            "propRule": "Treat funded accounts like precious assets; protect drawdowns at all costs.",
            "keyTakeaway": "Account preservation is foundation of long-term wealth generation.",
            "difficulty": "Beginner"
          },
          {
            "id": "professional-demeanor",
            "title": "Professional demeanor",
            "side": "left",
            "description": "Approaching trading with serious discipline of hedge fund portfolio manager.",
            "goldInsight": "Log trades, track metrics, manage risk, and refine edge with professional rigor.",
            "propRule": "Eliminate amateur gambling: no revenge trading, no oversizing, no impulses.",
            "keyTakeaway": "Act like an institutional professional and market will reward you like one.",
            "difficulty": "Beginner"
          },
          {
            "id": "long-term-vision",
            "title": "Long term vision",
            "side": "left",
            "description": "Building multi-year career focused on capital management and wealth building.",
            "goldInsight": "Trading Gold for prop firms is a marathon skill paying dividends for life.",
            "propRule": "Think in 3-5 year timelines: compound skills, build multiple accounts, create wealth.",
            "keyTakeaway": "Long-term vision keeps you grounded through short-term fluctuations.",
            "difficulty": "Intermediate"
          }
        ],
        "rightTopics": [
          {
            "id": "consistency-maintenance",
            "title": "Consistency maintenance",
            "side": "right",
            "description": "Maintaining exact same risk sizing and setup criteria in Phase 2 as Phase 1.",
            "goldInsight": "Phase 2 target is lower (only 5%); resist urge to increase lot size.",
            "propRule": "Maintain 0.5% risk. At 5% target, you only need 10R to complete verification.",
            "keyTakeaway": "Consistency in Phase 2 locks in the funding earned in Phase 1.",
            "difficulty": "Beginner"
          },
          {
            "id": "calm-execution",
            "title": "Calm execution",
            "side": "right",
            "description": "Executing Phase 2 trades with relaxed confidence and zero urgency.",
            "goldInsight": "Most firms have no time limits; take 30-60 days to pass calmly if needed.",
            "propRule": "Time is on your side. Wait patiently for pristine A+ Gold setups.",
            "keyTakeaway": "Trading without time pressure allows being ultra-selective with entries.",
            "difficulty": "Beginner"
          },
          {
            "id": "adherence-to-edge",
            "title": "Adherence to edge",
            "side": "right",
            "description": "Sticking strictly to proven Gold playbook setups and refusing to experiment.",
            "goldInsight": "Execute #1 setup (e.g. London High/Low Sweep) exclusively throughout Phase 2.",
            "propRule": "Phase 2 is not time to test new indicators; stick to what you know.",
            "keyTakeaway": "Disciplined adherence to primary edge ensures seamless verification.",
            "difficulty": "Beginner"
          },
          {
            "id": "avoiding-rule-breaks",
            "title": "Avoiding rule breaks",
            "side": "right",
            "description": "Double-checking daily drawdown, weekend holding, and news rules daily.",
            "goldInsight": "Do not let careless rule violation forfeit all Phase 1 & 2 progress.",
            "propRule": "Review firm rule checklist every morning before opening charts.",
            "keyTakeaway": "Vigilant rule compliance protects the funding you worked hard to achieve.",
            "difficulty": "Beginner"
          },
          {
            "id": "documenting-trades",
            "title": "Documenting trades",
            "side": "right",
            "description": "Logging every Phase 2 trade with screenshots, entry rationale, and notes.",
            "goldInsight": "Phase 2 journal provides blueprint to review during future drawdowns.",
            "propRule": "Keep journaling standards high; documentation reinforces discipline.",
            "keyTakeaway": "Trade documentation is foundation of continuous professional development.",
            "difficulty": "Beginner"
          },
          {
            "id": "final-stretch-focus",
            "title": "Final stretch focus",
            "side": "right",
            "description": "Maintaining discipline when within 1% of final target (e.g. at 4.2% of 5.0%).",
            "goldInsight": "When at +4.5%, reduce risk to 0.25% to gently cross finish line safely.",
            "propRule": "Never gamble on final 0.5% to pass. Settle it with disciplined micro-risk.",
            "keyTakeaway": "Finish strong with measured, conservative sizing on final stretch.",
            "difficulty": "Beginner"
          },
          {
            "id": "payout-goal-mindset",
            "title": "Payout goal mindset",
            "side": "right",
            "description": "Visualizing ultimate goal: regular, substantial profit split payouts.",
            "goldInsight": "Passing challenge is just ticket to game; real success is monthly payouts.",
            "propRule": "Focus on building sustainable payout habits rather than viewing funding as end.",
            "keyTakeaway": "Payout mindset keeps you focused on long-term capital compounding.",
            "difficulty": "Intermediate"
          }
        ]
      },
      {
        "id": "funded-phase",
        "title": "Funded Phase",
        "category": "Live Capital Management",
        "description": "Managing funded accounts, risk reduction buffers, withdrawal routines, scaling milestones, and operations.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      }
    ]
  },
  {
    "id": "operations-scaling-advanced",
    "title": "Operations, Scaling & Advanced Concepts",
    "phase": 11,
    "description": "Scaling to $1M+ funding, multi-account trade copying, tax & legal entity structuring, institutional order flow, and algo automation.",
    "hubs": [
      {
        "id": "account-scaling",
        "title": "Account Scaling",
        "category": "Capital Expansion",
        "description": "Growth milestones, profit target achievements, capital increase requests, risk adjustments, and compounding.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "crypto-withdrawal-methods",
            "title": "Crypto withdrawal methods",
            "side": "left",
            "description": "Receiving profit splits in USDT/USDC for instant settlement and minimal fees.",
            "goldInsight": "Crypto withdrawals settle within 2-24 hours into hardware wallets (Ledger).",
            "propRule": "Verify wallet address carefully; send test transaction for new addresses.",
            "keyTakeaway": "Crypto payouts provide fast, borderless settlement for global traders.",
            "difficulty": "Beginner"
          },
          {
            "id": "bank-wire-transfers",
            "title": "Bank wire transfers",
            "side": "left",
            "description": "Direct institutional SWIFT / SEPA bank wire payouts for large sums ($10k+).",
            "goldInsight": "Bank wires provide clean official paper trails for tax compliance and proof of income.",
            "propRule": "Ensure bank accepts international commercial wires from prop entities.",
            "keyTakeaway": "SWIFT wires are standard institutional channel for large corporate payouts.",
            "difficulty": "Beginner"
          },
          {
            "id": "tax-documentation",
            "title": "Tax documentation",
            "side": "left",
            "description": "Structuring earnings as independent contractor income (W-8BEN, W-9, 1099).",
            "goldInsight": "Keep records of all invoice payouts, platform fees, hardware, and subscriptions.",
            "propRule": "Prop firm payouts are typically treated as performance consulting income.",
            "keyTakeaway": "Proactive tax recordkeeping maximizes legitimate business deductions.",
            "difficulty": "Intermediate"
          },
          {
            "id": "compliance-verification",
            "title": "Compliance verification",
            "side": "left",
            "description": "Maintaining updated KYC (Know Your Customer) and AML compliance documents.",
            "goldInsight": "Ensure ID and proof of address are renewed and match payout accounts exactly.",
            "propRule": "Never trade from sanctioned jurisdictions or use VPNs triggering fraud alerts.",
            "keyTakeaway": "Flawless compliance verification ensures uninterrupted payout processing.",
            "difficulty": "Beginner"
          },
          {
            "id": "profit-split-receipt",
            "title": "Profit split receipt",
            "side": "left",
            "description": "Generating formal invoices and receipts through Deel, Rise, or firm portals.",
            "goldInsight": "Download and archive official payout invoices for quarterly accounting.",
            "propRule": "Retain all payout statements for tax filing and financial audits.",
            "keyTakeaway": "Formal documentation establishes track record as professional business.",
            "difficulty": "Beginner"
          },
          {
            "id": "reinvestment-strategy",
            "title": "Reinvestment strategy",
            "side": "left",
            "description": "Allocating profit splits into new evaluations, personal capital, and index funds.",
            "goldInsight": "50% living/lifestyle, 25% long-term investments (Gold/SPX), 25% new evaluations.",
            "propRule": "Never reinvest 100% of payouts back into challenges; harvest real wealth.",
            "keyTakeaway": "Strategic reinvestment compounds trading profits into lasting wealth.",
            "difficulty": "Intermediate"
          },
          {
            "id": "emergency-funds-setup",
            "title": "Emergency funds setup",
            "side": "left",
            "description": "Maintaining 6-12 months living expenses in cash to eliminate financial pressure.",
            "goldInsight": "When personal bills are covered by emergency cash, you trade with emotional freedom.",
            "propRule": "Build emergency runway first before relying on prop trading as sole income.",
            "keyTakeaway": "Financial peace of mind is secret weapon for disciplined, stress-free execution.",
            "difficulty": "Beginner"
          }
        ],
        "rightTopics": [
          {
            "id": "growth-milestones",
            "title": "Growth milestones",
            "side": "right",
            "description": "Capital targets: $100k -> $300k -> $500k -> $1M+ across multiple premier firms.",
            "goldInsight": "Stacking accounts across 3 firms generates $15k+ monthly on modest 3% returns.",
            "propRule": "Scale funding across multiple firms to eliminate single-point failure risk.",
            "keyTakeaway": "Systematic scaling compounds earning power without increasing per-trade risk.",
            "difficulty": "Intermediate"
          },
          {
            "id": "profit-target-achievements",
            "title": "Profit target achievements",
            "side": "right",
            "description": "Hitting 8-10% quarterly benchmarks for automatic 25% capital scaling boosts.",
            "goldInsight": "10% quarterly gain on Gold unlocks scaling from $200k to $250k with zero fees.",
            "propRule": "Focus on low-drawdown consistency to meet qualitative scaling standards.",
            "keyTakeaway": "Consistent quarterly profits unlock institutional capital scaling automatically.",
            "difficulty": "Intermediate"
          },
          {
            "id": "capital-increase-requests",
            "title": "Capital increase requests",
            "side": "right",
            "description": "Submitting scaling requests upon reaching required profit milestones.",
            "goldInsight": "Provide trade logs and equity curves showing <3% DD when requesting capital.",
            "propRule": "Firms readily grant capital increases to traders with exemplary risk metrics.",
            "keyTakeaway": "Professional performance metrics make capital increase approvals seamless.",
            "difficulty": "Intermediate"
          },
          {
            "id": "risk-limit-adjustments",
            "title": "Risk limit adjustments",
            "side": "right",
            "description": "Adjusting position sizing and daily loss thresholds on higher capital tiers ($500k+).",
            "goldInsight": "On $500k account, 0.25% risk = $1,250. A 1:2 R:R winner produces $2,500 safely.",
            "propRule": "As balance increases, DECREASE risk percentage to lower stress.",
            "keyTakeaway": "Scaling allows reducing risk % while increasing absolute dollar income.",
            "difficulty": "Intermediate"
          },
          {
            "id": "scaling-strategy-execution",
            "title": "Scaling strategy execution",
            "side": "right",
            "description": "Executing synchronized multi-account trades using low-latency trade copiers.",
            "goldInsight": "Execute on master account; trade copier replicates across 5 accounts in <50ms.",
            "propRule": "Ensure trade copier handles lot size multipliers accurately across account sizes.",
            "keyTakeaway": "Trade copiers manage multi-million portfolios with single-trade simplicity.",
            "difficulty": "Advanced"
          },
          {
            "id": "compounding-profits",
            "title": "Compounding profits",
            "side": "right",
            "description": "Compounding trading gains across expanding capital allocations over years.",
            "goldInsight": "Steady 3% monthly compounding across $500k generates $180k+ annual payouts.",
            "propRule": "Prioritize steady consistency over high-drawdown boom-bust cycles.",
            "keyTakeaway": "Long-term compounding of moderate returns creates extraordinary wealth.",
            "difficulty": "Intermediate"
          },
          {
            "id": "multi-account-management",
            "title": "Multi account management",
            "side": "right",
            "description": "Managing up to $2M+ aggregate capital across FTMO, FundedNext, MFF, Topstep.",
            "goldInsight": "Distribute capital across 3-4 premier firms to protect your professional income.",
            "propRule": "Monitor aggregate exposure to ensure combined risk stays within safe bounds.",
            "keyTakeaway": "Multi-firm diversification protects your trading business from counterparty risk.",
            "difficulty": "Advanced"
          }
        ]
      },
      {
        "id": "payout-processing",
        "title": "Payout Processing",
        "category": "Financial Operations",
        "description": "Crypto withdrawals, SWIFT transfers, tax documentation, compliance, and emergency reserves.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "business-management",
        "title": "Business Management",
        "category": "Enterprise Setup",
        "description": "Treating trading as a business, expense tracking, legal entities (LLC), tax consultation, and planning.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "advanced-course-enrollment",
            "title": "Advanced course enrollment",
            "side": "left",
            "description": "Studying institutional order flow, auction market theory, and microstructure.",
            "goldInsight": "Invest 5% of trading profits into world-class education on market microstructure.",
            "propRule": "Filter educational material strictly for verified institutional concepts.",
            "keyTakeaway": "Continuous skill enhancement keeps edge sharp as market dynamics evolve.",
            "difficulty": "Intermediate"
          },
          {
            "id": "mastermind-participation",
            "title": "Mastermind participation",
            "side": "left",
            "description": "Joining masterminds of 6-figure and 7-figure funded traders to exchange insights.",
            "goldInsight": "Collaborate with top Gold traders to discuss weekly COT and macro themes.",
            "propRule": "Surround yourself with traders operating at higher levels to accelerate growth.",
            "keyTakeaway": "Elite peer groups elevate your standards, accountability, and perspective.",
            "difficulty": "Intermediate"
          },
          {
            "id": "strategy-refinement",
            "title": "Strategy refinement",
            "side": "left",
            "description": "Refining entry triggers, invalidations, and exits based on trade journal data.",
            "goldInsight": "Review quarterly performance data to identify subtle shifts in session patterns.",
            "propRule": "Refine strategy through data-driven tweaks rather than overhauling proven setups.",
            "keyTakeaway": "Small data-backed refinements compound win rate and profit factor.",
            "difficulty": "Intermediate"
          },
          {
            "id": "market-adaptation",
            "title": "Market adaptation",
            "side": "left",
            "description": "Adapting execution as global interest rate regimes shift between cycles.",
            "goldInsight": "Adjust target expectations when Gold shifts from rate cut cycles to tight ranges.",
            "propRule": "Stay flexible: match trading style to prevailing macroeconomic regime.",
            "keyTakeaway": "Market adaptation ensures edge remains profitable across all market cycles.",
            "difficulty": "Advanced"
          },
          {
            "id": "health-maintenance",
            "title": "Health maintenance",
            "side": "left",
            "description": "Prioritizing fitness, strength training, clean nutrition, and restorative sleep.",
            "goldInsight": "A healthy body maintains mental stamina and emotional stability for trading.",
            "propRule": "Treat health as primary business asset; poor health degrades decision quality.",
            "keyTakeaway": "Physical vitality is prerequisite for long-term professional trading success.",
            "difficulty": "Beginner"
          },
          {
            "id": "work-life-balance",
            "title": "Work life balance",
            "side": "left",
            "description": "Cultivating rich relationships, hobbies, and downtime away from charts.",
            "goldInsight": "A fulfilling life outside trading eliminates desperation and allows detachment.",
            "propRule": "Limit trading to designated hours; dedicate evenings/weekends to life.",
            "keyTakeaway": "True success is financial abundance while enjoying a rich, balanced life.",
            "difficulty": "Beginner"
          },
          {
            "id": "legacy-building",
            "title": "Legacy building",
            "side": "left",
            "description": "Translating trading profits into enduring generational wealth and real estate.",
            "goldInsight": "Convert short-term trading profits into physical gold, real estate, and trusts.",
            "propRule": "View trading as the cash-flow engine that funds your broader wealth architecture.",
            "keyTakeaway": "Build lasting wealth that serves your family and community for generations.",
            "difficulty": "Mastery"
          }
        ],
        "rightTopics": [
          {
            "id": "trading-as-a-business",
            "title": "Trading as a business",
            "side": "right",
            "description": "Treating trading with formal discipline, accounting, and corporate operational rigor.",
            "goldInsight": "Track revenue, operational expenses, capital reserves, and ROI with precision.",
            "propRule": "Eliminate amateur gambling; run trading enterprise with institutional discipline.",
            "keyTakeaway": "Treat trading as a serious business and it will pay you like one.",
            "difficulty": "Beginner"
          },
          {
            "id": "expense-tracking",
            "title": "Expense tracking",
            "side": "right",
            "description": "Logging expenses: evaluation fees, data feeds, software, hardware, and office.",
            "goldInsight": "Deduct eligible trading expenses from prop consulting income for tax optimization.",
            "propRule": "Maintain an Excel or QuickBooks ledger of all business expenditures.",
            "keyTakeaway": "Diligent expense tracking maximizes net profitability and simplifies taxes.",
            "difficulty": "Beginner"
          },
          {
            "id": "software-subscription-costs",
            "title": "Software subscription costs",
            "side": "right",
            "description": "Managing software expenses (TradingView, TradeZella, VPS, Tick Data).",
            "goldInsight": "Invest in high-ROI tools that directly improve execution and data analysis.",
            "propRule": "Audit subscriptions annually to eliminate redundant or unused tools.",
            "keyTakeaway": "Strategic software investments provide the tools needed for professional edge.",
            "difficulty": "Beginner"
          },
          {
            "id": "workspace-upgrades",
            "title": "Workspace upgrades",
            "side": "right",
            "description": "Investing in hardware: multi-monitors, ergonomic chairs, desks, UPS backups.",
            "goldInsight": "An ergonomic, high-performance workstation enhances focus and reduces fatigue.",
            "propRule": "Upgrade critical hardware (monitors, PC, backup power) as revenue grows.",
            "keyTakeaway": "Professional workspace creates optimal physical environment for peak performance.",
            "difficulty": "Beginner"
          },
          {
            "id": "legal-entity-formation",
            "title": "Legal entity formation",
            "side": "right",
            "description": "Establishing LLC or corporate entity to hold contracts, protect assets, and optimize taxes.",
            "goldInsight": "Corporate entity separates personal assets and unlocks business deductions.",
            "propRule": "Consult a qualified corporate attorney to select optimal entity structure.",
            "keyTakeaway": "Corporate structuring provides liability protection and substantial tax benefits.",
            "difficulty": "Intermediate"
          },
          {
            "id": "accountant-consultation",
            "title": "Accountant consultation",
            "side": "right",
            "description": "Working with certified CPA specializing in prop firm trader taxation.",
            "goldInsight": "A knowledgeable CPA will structure earnings to minimize tax liability legally.",
            "propRule": "Schedule quarterly consultations to review estimated tax payments.",
            "keyTakeaway": "Professional tax guidance saves thousands and ensures 100% compliance.",
            "difficulty": "Intermediate"
          },
          {
            "id": "financial-planning",
            "title": "Financial planning",
            "side": "right",
            "description": "Creating financial roadmap for wealth preservation, retirement, and investing.",
            "goldInsight": "Channel prop payout cash flow into index funds, physical bullion, and real estate.",
            "propRule": "Never keep 100% of net worth in trading accounts; diversify into hard assets.",
            "keyTakeaway": "Sound financial plan transforms trading profits into permanent independence.",
            "difficulty": "Intermediate"
          }
        ]
      },
      {
        "id": "continuous-improvement",
        "title": "Continuous Improvement",
        "category": "Lifelong Mastery",
        "description": "Advanced education, masterminds, strategy adaptation, wellness, and generational legacy.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "order-flow-analysis",
        "title": "Order Flow Analysis",
        "category": "Institutional Microstructure",
        "description": "Level 2 pricing, Time & Sales tape reading, market depth (DOM), footprints, and stop hunts.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "bid-ask-spread-dynamics",
            "title": "Bid ask spread dynamics",
            "side": "left",
            "description": "How liquidity providers expand and compress spreads across transitions and news.",
            "goldInsight": "Observing spread expansion during quiet periods signals LPs stepping back.",
            "propRule": "Avoid entering when spreads expand beyond strategy's allowable threshold.",
            "keyTakeaway": "Spread dynamics reveal underlying liquidity conditions and LP risk appetite.",
            "difficulty": "Advanced"
          },
          {
            "id": "high-frequency-trading-impact",
            "title": "High frequency trading impact",
            "side": "left",
            "description": "How sub-millisecond HFT algorithms quote, sweep liquidity, and front-run.",
            "goldInsight": "HFT algorithms probe stop clusters above/below Gold ranges to fill block orders.",
            "propRule": "Anticipate algorithmic liquidity sweeps rather than getting trapped by spikes.",
            "keyTakeaway": "Understanding HFT behavior helps trade alongside algorithmic sweeps.",
            "difficulty": "Advanced"
          },
          {
            "id": "dark-pools-awareness",
            "title": "Dark pools awareness",
            "side": "left",
            "description": "Off-exchange crossing networks executing physical gold trades without public tape.",
            "goldInsight": "Dark pool transactions leave hidden accumulation footprints in Open Interest shifts.",
            "propRule": "Track COMEX Open Interest and OTC clearing volumes for positioning clues.",
            "keyTakeaway": "Institutional dark pool flows establish macro accumulation zones.",
            "difficulty": "Mastery"
          },
          {
            "id": "execution-slippage-causes",
            "title": "Execution slippage causes",
            "side": "left",
            "description": "Mechanics of latency, thin order books, and price gaps that cause fills to deviate.",
            "goldInsight": "During US CPI releases, Gold order books thin out, causing 20-50 pips slippage.",
            "propRule": "Use limit orders at structural levels to eliminate negative execution slippage.",
            "keyTakeaway": "Understanding slippage mechanics protects entries during volatile news.",
            "difficulty": "Intermediate"
          },
          {
            "id": "market-maker-behavior",
            "title": "Market maker behavior",
            "side": "left",
            "description": "How market makers balance books, hedge inventory, and engineer liquidity runs.",
            "goldInsight": "Market makers push Gold into retail stop clusters to fill large institutional orders.",
            "propRule": "Place stops where retail herd would place entry to avoid being swept.",
            "keyTakeaway": "Trade with market makers by identifying where retail liquidity is engineered.",
            "difficulty": "Advanced"
          },
          {
            "id": "liquidity-sweeps-mechanics",
            "title": "Liquidity sweeps mechanics",
            "side": "left",
            "description": "Price delivery signature aggressively breaching key high/low for stops, then reversing.",
            "goldInsight": "The 'Sweep and Reject' signature at London Open is most reliable setup on XAUUSD.",
            "propRule": "Wait for 5m candle to sweep level and close back inside before executing.",
            "keyTakeaway": "Liquidity sweeps provide the fuel smart money needs for impulse moves.",
            "difficulty": "Advanced"
          },
          {
            "id": "auction-market-theory",
            "title": "Auction market theory",
            "side": "left",
            "description": "Understanding markets as continuous two-way auction seeking fair value.",
            "goldInsight": "When Gold probes outside Value Area and rejects, it rotates back to POC.",
            "propRule": "Identify whether current price is at fair value or initiating discovery breakout.",
            "keyTakeaway": "Auction Market Theory provides the overarching framework for price delivery.",
            "difficulty": "Mastery"
          }
        ],
        "rightTopics": [
          {
            "id": "level-two-pricing",
            "title": "Level two pricing",
            "side": "right",
            "description": "Depth of Market (DOM) displaying resting limit order quantities across price tiers.",
            "goldInsight": "Large resting bid walls on COMEX Gold futures reveal institutional accumulation.",
            "propRule": "Use DOM order book depth on MT5/cTrader to identify true institutional levels.",
            "keyTakeaway": "Level 2 pricing reveals the resting supply/demand order book.",
            "difficulty": "Advanced"
          },
          {
            "id": "time-and-sales",
            "title": "Time and sales",
            "side": "right",
            "description": "Live tape showing executed transactions: timestamp, price, volume, aggressor side.",
            "goldInsight": "Flurry of large green market orders at support confirms institutional buyers stepping in.",
            "propRule": "Tape reading skills confirm entry triggers with live transaction volume.",
            "keyTakeaway": "Time & Sales shows the real-time truth of executed market transactions.",
            "difficulty": "Advanced"
          },
          {
            "id": "tape-reading-skills",
            "title": "Tape reading skills",
            "side": "right",
            "description": "Interpreting transaction speed, size, and aggressive order flow from tape.",
            "goldInsight": "Tape speed accelerates as price approaches Gold liquidity; slows at exhaustion.",
            "propRule": "Combine tape reading confirmation with higher timeframe technical levels.",
            "keyTakeaway": "Tape reading provides immediate sub-second insight into buyer/seller dominance.",
            "difficulty": "Mastery"
          },
          {
            "id": "market-depth-interpretation",
            "title": "Market depth interpretation",
            "side": "right",
            "description": "Analyzing order book imbalances, liquidity stacking, and spoofing behavior.",
            "goldInsight": "Watch for liquidity absorption: heavy selling on tape with price holding = iceberg buys.",
            "propRule": "Identify iceberg orders where institutions accumulate size stealthily.",
            "keyTakeaway": "Market depth uncovers hidden institutional accumulation and distribution.",
            "difficulty": "Mastery"
          },
          {
            "id": "institutional-footprints",
            "title": "Institutional footprints",
            "side": "right",
            "description": "Footprint (cluster) charts displaying bid/ask volume traded inside each candle.",
            "goldInsight": "Delta imbalances on footprint charts highlight exact prices where buyers overwhelmed.",
            "propRule": "Enter upon confirmed delta divergence at key Gold support and demand zones.",
            "keyTakeaway": "Footprint charts look inside candles to reveal the volume battle at every tick.",
            "difficulty": "Mastery"
          },
          {
            "id": "liquidity-pools-mapping",
            "title": "Liquidity pools mapping",
            "side": "right",
            "description": "Mapping where retail stops cluster (Equal Highs, Equal Lows, Trendlines).",
            "goldInsight": "Mark Buy-Side Liquidity (BSL) above highs and Sell-Side (SSL) below lows on Gold.",
            "propRule": "Target liquidity pools as primary take profits; price magnetically travels there.",
            "keyTakeaway": "Liquidity pools are the fuel tanks powering institutional delivery algorithms.",
            "difficulty": "Advanced"
          },
          {
            "id": "stop-hunts-identification",
            "title": "Stop hunts identification",
            "side": "right",
            "description": "Recognizing liquidity runs engineered to trigger retail stops before true direction.",
            "goldInsight": "When Gold spikes 15 pips above resistance and prints inverted hammer, it is stop hunt.",
            "propRule": "Enter immediately following stop hunt with stop safely beyond the hunt wick.",
            "keyTakeaway": "Turning stop hunts into trade setups is the hallmark of institutional mastery.",
            "difficulty": "Advanced"
          }
        ]
      },
      {
        "id": "market-microstructure",
        "title": "Market Microstructure",
        "category": "Exchange Mechanics",
        "description": "Spread dynamics, HFT algorithms, dark pool liquidity, slippage, and auction theory.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "algorithmic-trading",
        "title": "Algorithmic Trading",
        "category": "Automation & Code",
        "description": "Python for trading, algorithmic bots, API integration, cloud VPS hosting, and automated risk parameters.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "adding-currency-pairs",
            "title": "Adding currency pairs",
            "side": "left",
            "description": "Gradually expanding into major FX pairs (EURUSD, GBPUSD) with non-overlapping trends.",
            "goldInsight": "Add EURUSD for days when Gold is in quiet consolidation, keeping opportunity flow.",
            "propRule": "Master Gold 100% first before expanding to other pairs. Never dilute focus early.",
            "keyTakeaway": "Selective diversification across majors provides steady opportunities.",
            "difficulty": "Intermediate"
          },
          {
            "id": "trading-equity-indices",
            "title": "Trading equity indices",
            "side": "left",
            "description": "Diversifying into US index futures (US30, NAS100, US500) during NY session opens.",
            "goldInsight": "NAS100 and US30 offer explosive volatility during 13:30-16:00 UTC NY equity open.",
            "propRule": "Use separate sizing rules for indices due to different point multipliers.",
            "keyTakeaway": "Equity indices offer high-volatility intraday trending during NY sessions.",
            "difficulty": "Intermediate"
          },
          {
            "id": "commodity-diversification",
            "title": "Commodity diversification",
            "side": "left",
            "description": "Trading related commodities (Silver XAGUSD, Crude Oil WTI, Copper, Platinum).",
            "goldInsight": "Silver often produces larger percentage expansions than Gold during rallies.",
            "propRule": "Be mindful of Silver higher spread-to-ATR ratio; size conservatively.",
            "keyTakeaway": "Commodity diversification capitalizes on broad macro inflation cycles.",
            "difficulty": "Intermediate"
          },
          {
            "id": "crypto-market-inclusion",
            "title": "Crypto market inclusion",
            "side": "left",
            "description": "Trading Bitcoin (BTCUSD) during weekend hours when forex markets are closed.",
            "goldInsight": "BTC exhibits similar safe-haven liquidity and momentum properties to Gold.",
            "propRule": "Ensure prop firm allows weekend crypto trading without restricted leverage.",
            "keyTakeaway": "Crypto provides 24/7 market access and high volatility for price action traders.",
            "difficulty": "Intermediate"
          },
          {
            "id": "correlation-management",
            "title": "Correlation management",
            "side": "left",
            "description": "Managing cross-asset correlations to prevent accidental double-risk exposure.",
            "goldInsight": "Long Gold + Long EURUSD = doubling short USD exposure. Size each at 0.25% risk.",
            "propRule": "Total combined portfolio risk across correlated open positions must be <1.0%.",
            "keyTakeaway": "Rigorous correlation management prevents systemic overexposure to USD.",
            "difficulty": "Advanced"
          },
          {
            "id": "overall-risk-balancing",
            "title": "Overall risk balancing",
            "side": "left",
            "description": "Balancing short-term scalping with higher timeframe swing setups across accounts.",
            "goldInsight": "Allocate 70% risk budget to day trades and 30% to HTF swing runners on Gold.",
            "propRule": "Maintain clear risk buckets to prevent short-term volatility disrupting long plans.",
            "keyTakeaway": "Balanced risk allocation smooths portfolio returns and maximizes efficiency.",
            "difficulty": "Advanced"
          },
          {
            "id": "capital-distribution",
            "title": "Capital distribution",
            "side": "left",
            "description": "Distributing funded capital across multiple asset classes, firms, and personal accounts.",
            "goldInsight": "Manage $500k in prop accounts while building private $100k+ personal capital.",
            "propRule": "Use prop firm payouts to fund personal, unrestricted private brokerage accounts.",
            "keyTakeaway": "Capital distribution is the ultimate endgame: leveraging prop capital for personal wealth.",
            "difficulty": "Mastery"
          }
        ],
        "rightTopics": [
          {
            "id": "python-basics-trading",
            "title": "Python basics for trading",
            "side": "right",
            "description": "Using Python (pandas, numpy, backtrader, MT5 API) to backtest and automate.",
            "goldInsight": "Write Python scripts parsing 10 years of XAUUSD tick data in seconds.",
            "propRule": "Python backtesting eliminates human calculation errors and verifies edge objectively.",
            "keyTakeaway": "Python is universal language of modern quantitative and algorithmic finance.",
            "difficulty": "Intermediate"
          },
          {
            "id": "trading-bot-development",
            "title": "Trading bot development",
            "side": "right",
            "description": "Building custom bots monitoring price action, detecting triggers, and managing risk.",
            "goldInsight": "Deploy bots that automatically move stops to BE and scale out 50% on Gold trades.",
            "propRule": "Ensure bots include hard daily drawdown circuit breakers to prevent violations.",
            "keyTakeaway": "Automated bots execute complex risk rules with emotionless millisecond precision.",
            "difficulty": "Advanced"
          },
          {
            "id": "api-integration-methods",
            "title": "API integration methods",
            "side": "right",
            "description": "Connecting algorithms and dashboards to execution bridges via REST/FIX APIs.",
            "goldInsight": "Utilize MT5 Python API or cTrader Open API for programmatic order dispatch.",
            "propRule": "Ensure API rate limits and reconnect protocols are robust to avoid dropouts.",
            "keyTakeaway": "Direct API connectivity provides institutional-grade execution speed.",
            "difficulty": "Advanced"
          },
          {
            "id": "cloud-hosting-servers",
            "title": "Cloud hosting servers",
            "side": "right",
            "description": "Deploying bots and copiers on dedicated low-latency VPS near broker data centers.",
            "goldInsight": "A London (LD4) or New York (NY4) VPS provides <1ms latency to prop servers.",
            "propRule": "VPS hosting ensures algorithms run 24/5 with 99.99% uptime, immune to power cuts.",
            "keyTakeaway": "Dedicated cloud VPS infrastructure is mandatory for algorithmic execution.",
            "difficulty": "Intermediate"
          },
          {
            "id": "latency-reduction",
            "title": "Latency reduction",
            "side": "right",
            "description": "Optimizing network routing, sockets, and execution code for sub-5ms speeds.",
            "goldInsight": "Minimizing latency ensures limit/stop orders fill ahead of competing retail queues.",
            "propRule": "Test server ping latency regularly in terminal to ensure optimal routing.",
            "keyTakeaway": "Ultra-low latency execution ensures optimal fill prices during fast transitions.",
            "difficulty": "Advanced"
          },
          {
            "id": "automated-risk-controls",
            "title": "Automated risk controls",
            "side": "right",
            "description": "Hard-coded programmatic circuit breakers halting trading if daily DD hits 3.5%.",
            "goldInsight": "Automated risk guardrail makes it mathematically impossible to breach 5% limit.",
            "propRule": "Deploy automated risk managers across all prop accounts for guaranteed compliance.",
            "keyTakeaway": "Automated risk controls protect accounts from emotional lapses and bugs.",
            "difficulty": "Advanced"
          },
          {
            "id": "maintenance-procedures",
            "title": "Maintenance procedures",
            "side": "right",
            "description": "Routine server log audits, API key rotation, tick database updates, and benchmarking.",
            "goldInsight": "Conduct weekly server health checks every weekend for flawless week ahead.",
            "propRule": "Proper maintenance prevents unexpected system failures during live market hours.",
            "keyTakeaway": "Systematic maintenance ensures 100% operational reliability.",
            "difficulty": "Intermediate"
          }
        ]
      },
      {
        "id": "portfolio-diversification",
        "title": "Portfolio Diversification",
        "category": "Multi-Asset Architecture",
        "description": "Adding FX pairs, index futures, commodities, crypto markets, and capital distribution.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      }
    ]
  }
];

export const TOTAL_TOPICS_COUNT = ROADMAP_SECTIONS.reduce((acc, sec) => {
  return acc + sec.hubs.reduce((hAcc, hub) => hAcc + hub.leftTopics.length + hub.rightTopics.length, 0);
}, 0);
