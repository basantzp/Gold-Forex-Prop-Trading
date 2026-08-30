import json

sections = [
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
            "description": "The opening session of the global trading day (21:00 - 06:00 UTC). Characterized by lower baseline volatility for Gold.",
            "goldInsight": "XAUUSD consolidates in narrow ranges during Sydney. Excellent for marking Asian range highs and lows.",
            "propRule": "Avoid large lot sizing during illiquid Sydney hours due to widened spreads that trigger slippage breaches.",
            "keyTakeaway": "Mark overnight highs and lows to anticipate London session liquidity sweeps.",
            "difficulty": "Beginner"
          },
          {
            "id": "tokyo-session-hours",
            "title": "Tokyo session hours",
            "side": "left",
            "description": "Asian financial center trading window (00:00 - 09:00 UTC). Sets the initial intraday liquidity benchmarks.",
            "goldInsight": "Asian central banks and Japanese institutional flows can create early momentum shifts in XAUUSD.",
            "propRule": "Keep risk under 0.25% if trading the Asian session as fakeouts are frequent before London opens.",
            "keyTakeaway": "The Asian range high/low forms the initial target for London sweep strategies.",
            "difficulty": "Beginner"
          },
          {
            "id": "london-session-hours",
            "title": "London session hours",
            "side": "left",
            "description": "The highest volume European market window (07:00 - 16:00 UTC) accounting for over 35% of daily FX turnover.",
            "goldInsight": "XAUUSD sees its strongest institutional breakout moves between 07:00 and 10:30 UTC.",
            "propRule": "Prime window for prop evaluation execution. Best execution fills and tightest spreads on Gold.",
            "keyTakeaway": "Focus primary daily setups around the London Open (07:00-09:00 UTC).",
            "difficulty": "Beginner"
          },
          {
            "id": "new-york-session-hours",
            "title": "New York session hours",
            "side": "left",
            "description": "North American trading window (12:00 - 21:00 UTC) driven by USD macroeconomic data and Wall Street equity flows.",
            "goldInsight": "Highest daily volatility for Gold occurs during the NY Open and US economic data releases (12:30-14:00 UTC).",
            "propRule": "Check news calendar 15 minutes prior to NY open to prevent news trading violation bans.",
            "keyTakeaway": "NY session either expands London trend or engineers aggressive reversals at key daily levels.",
            "difficulty": "Beginner"
          },
          {
            "id": "session-overlaps",
            "title": "Session overlaps",
            "side": "left",
            "description": "Periods when two major global exchanges trade simultaneously (notably London & New York from 12:00 to 16:00 UTC).",
            "goldInsight": "The London-NY overlap is the Golden Window where Gold prints its most explosive 100-300 pip trends.",
            "propRule": "Maximum profit velocity occurs here; however, enforce strict stop losses to avoid rapid drawdown.",
            "keyTakeaway": "80% of profitable prop traders execute exclusively during the London-NY overlap.",
            "difficulty": "Intermediate"
          },
          {
            "id": "liquidity-variations",
            "title": "Liquidity variations",
            "side": "left",
            "description": "Fluctuations in order book depth across market hours affecting spread width and execution slippage.",
            "goldInsight": "Liquidity drops sharply after 19:00 UTC and between 21:00-22:00 UTC daily rollover.",
            "propRule": "Close intraday positions before market rollover (21:59 UTC) to avoid wide spread stopouts.",
            "keyTakeaway": "Trade only when institutional market makers are actively providing liquidity.",
            "difficulty": "Intermediate"
          },
          {
            "id": "volatility-peaks",
            "title": "Volatility peaks",
            "side: ": "left",
            "description": "High standard deviation expansion phases triggered by high-impact macro catalysts and session openings.",
            "goldInsight": "Gold Average True Range (ATR) can expand from 150 pips to 600+ pips within minutes of FOMC/NFP.",
            "propRule": "Halve position size when ATR is at 90th percentile to protect daily drawdown limits.",
            "keyTakeaway": "Volatility creates opportunity for funded traders only when risk sizing is calibrated dynamically.",
            "difficulty": "Intermediate"
          }
        ],
        "rightTopics": [
          {
            "id": "currency-pairs-structure",
            "title": "Currency pairs structure",
            "side": "right",
            "description": "Base and quote currency quotation structure (e.g. XAU/USD where XAU is base, USD is quote).",
            "goldInsight": "Gold is priced in US Dollars per troy ounce. A quote of 2,500.00 means 1 oz of Gold = $2,500 USD.",
            "propRule": "Ensure your account denomination and pip calculator matches XAUUSD contract specs.",
            "keyTakeaway": "Always analyze the USD Index (DXY) as the inverse quote driver of Gold.",
            "difficulty": "Beginner"
          },
          {
            "id": "major-currency-pairs",
            "title": "Major currency pairs",
            "side": "right",
            "description": "The most heavily traded FX pairs globally (EURUSD, GBPUSD, USDJPY, USDCHF, AUDUSD, USDCAD).",
            "goldInsight": "EURUSD and GBPUSD movements heavily influence dollar liquidity and correlate with Gold direction.",
            "propRule": "Do not stack correlated trades (e.g. Long Gold + Long EURUSD + Short DXY) exceeding total risk budget.",
            "keyTakeaway": "Major pairs provide liquidity clues and sentiment confirmation for precious metals.",
            "difficulty": "Beginner"
          },
          {
            "id": "minor-currency-pairs",
            "title": "Minor currency pairs",
            "side": "right",
            "description": "Cross currency pairs excluding the US Dollar (EURGBP, EURJPY, GBPJPY, AUDNZD).",
            "goldInsight": "JPY crosses reflect risk-on/risk-off sentiment that directly spills into safe haven gold demand.",
            "propRule": "Keep prop firm focus on 1-2 instruments (e.g. XAUUSD exclusively) to avoid analysis paralysis.",
            "keyTakeaway": "Cross pairs reflect sovereign economic strength independent of US Dollar domestic factors.",
            "difficulty": "Beginner"
          },
          {
            "id": "exotic-currency-pairs",
            "title": "Exotic currency pairs",
            "side": "right",
            "description": "Combinations of a major currency with an emerging economy currency (USDZAR, USDTRY, USDMXN).",
            "goldInsight": "South Africa (USDZAR) is a major physical gold producer; mining strikes impact gold supply metrics.",
            "propRule": "Avoid trading exotics in prop firm challenges due to massive spreads and unpredictable slippage.",
            "keyTakeaway": "Exotics carry high carry costs and wide spreads unsuitable for prop evaluation rules.",
            "difficulty": "Intermediate"
          },
          {
            "id": "bid-and-ask-prices",
            "title": "Bid and ask prices",
            "side": "right",
            "description": "The price at which the market will buy (Bid) vs sell (Ask) an asset.",
            "goldInsight": "Long trades open on the Ask and close on the Bid. Short trades open on the Bid and close on the Ask.",
            "propRule": "Always factor Ask price into buy stop loss placement to avoid early stopouts on Gold spikes.",
            "keyTakeaway": "Understanding the spread differential prevents unexpected premature stop hits.",
            "difficulty": "Beginner"
          },
          {
            "id": "spread-definition",
            "title": "Spread definition",
            "side": "right",
            "description": "The difference between the Ask price and Bid price charged by brokers and liquidity providers.",
            "goldInsight": "XAUUSD spreads typically range from 10 to 30 points (10-30 cents) during liquid sessions.",
            "propRule": "Never enter Gold trades during 5 minutes before/after market rollover when spreads widen to $2-$5.",
            "keyTakeaway": "Raw spread ECN accounts are mandatory for prop trading gold scalping strategies.",
            "difficulty": "Beginner"
          },
          {
            "id": "pip-value-calculation",
            "title": "Pip value calculation",
            "side": "right",
            "description": "The monetary value of a single pip/point movement based on traded lot size.",
            "goldInsight": "For XAUUSD: 1 Standard Lot (100 oz) moving $0.10 (1 pip/point) = $10.00 USD. A $1.00 move = $100.00 USD.",
            "propRule": "Memorize the formula: Lot Size x Price Delta x 100 = Profit/Loss to prevent oversized challenge risk.",
            "formulaOrRule": "P&L ($) = Lots × 100 × (Exit Price - Entry Price)",
            "keyTakeaway": "Accurate pip valuation is the prerequisite for flawless prop risk management.",
            "difficulty": "Beginner"
          }
        ]
      },
      {
        "id": "trading-sessions",
        "title": "Trading Sessions",
        "category": "Market Timing",
        "description": "Session dynamics, market overlap periods, liquidity ebbs and flows throughout the 24-hour cycle.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      },
      {
        "id": "market-participants",
        "title": "Market Participants",
        "category": "Market Structure",
        "description": "The institutional hierarchy driving order flow, wholesale liquidity, and retail execution.",
        "color": "#facc15",
        "leftTopics": [
          {
            "id": "market-orders",
            "title": "Market orders",
            "side": "left",
            "description": "Orders executed immediately at the best available current market price.",
            "goldInsight": "Using market orders during fast Gold breakouts often causes 10-30 points of negative slippage.",
            "propRule": "Prefer limit orders at key support/resistance to avoid paying the spread penalty during fast markets.",
            "keyTakeaway": "Market orders cross the spread immediately and execute against resting liquidity.",
            "difficulty": "Beginner"
          },
          {
            "id": "limit-orders",
            "title": "Limit orders",
            "side": "left",
            "description": "Orders to buy below current price or sell above current price, providing resting liquidity.",
            "goldInsight": "Placing Buy Limits at institutional Discount Order Blocks catches precision Gold bounces with zero slippage.",
            "propRule": "Limit orders ensure exact risk entry and prevent chasing impulsive candles in evaluation accounts.",
            "keyTakeaway": "Patience in waiting for limit fills preserves risk-to-reward ratios.",
            "difficulty": "Beginner"
          },
          {
            "id": "stop-orders",
            "title": "Stop orders",
            "side": "left",
            "description": "Orders triggered when price breaks beyond a specific threshold (Buy Stop above, Sell Stop below).",
            "goldInsight": "Used for momentum breakouts above London highs or Asian range extremes on XAUUSD.",
            "propRule": "Ensure your prop firm allows stop orders through news events without penalty.",
            "keyTakeaway": "Stop orders enter momentum automatically but carry slippage risk during extreme volatility.",
            "difficulty": "Beginner"
          },
          {
            "id": "stop-loss-orders",
            "title": "Stop loss orders",
            "side": "left",
            "description": "The non-negotiable risk boundary order designed to limit maximum loss on an open position.",
            "goldInsight": "In Gold, place stop losses beyond structural liquidity invalidation points, never at arbitrary round numbers.",
            "propRule": "MANDATORY: Prop firms will immediately terminate or fail accounts trading without hard stop losses.",
            "formulaOrRule": "Max Risk per trade = 0.5% - 1.0% of Challenge Balance",
            "keyTakeaway": "Your stop loss is the single most valuable insurance policy for your prop career.",
            "difficulty": "Beginner"
          },
          {
            "id": "take-profit-orders",
            "title": "Take profit orders",
            "side": "left",
            "description": "Pre-set orders that automatically close a position once a target price and profit target are reached.",
            "goldInsight": "Set Take Profits at opposing institutional liquidity pools (equal highs, unmitigated supply zones).",
            "propRule": "Locking in fixed 1:2 or 1:3 R:R take profits prevents giving back gains needed for evaluation passing.",
            "keyTakeaway": "Greed kills prop accounts; take profits mechanically at planned technical objectives.",
            "difficulty": "Beginner"
          },
          {
            "id": "trailing-stops",
            "title": "Trailing stops",
            "side": "left",
            "description": "Dynamic stop orders that move in favor of a profitable trade at a predetermined distance.",
            "goldInsight": "Trail stops behind 15-minute market structure swing lows during trending Gold expansions.",
            "propRule": "Trailing stops protect floating profit towards the daily drawdown threshold.",
            "keyTakeaway": "Trails allow participating in runaway Gold trends while locking in realized risk-free gains.",
            "difficulty": "Intermediate"
          },
          {
            "id": "oco-orders",
            "title": "OCO orders",
            "side": "left",
            "description": "One-Cancels-the-Other orders linking two pending orders where the execution of one cancels the other.",
            "goldInsight": "Used during range-bound Gold pre-news sessions to straddle breakouts above resistance/below support.",
            "propRule": "Avoid news straddling if your prop firm prohibits executing within 2 minutes of red-folder news.",
            "keyTakeaway": "OCO orders automate multi-scenario trading plans without manual intervention.",
            "difficulty": "Intermediate"
          }
        ],
        "rightTopics": [
          {
            "id": "retail-traders",
            "title": "Retail traders",
            "side": "right",
            "description": "Individual traders speculating on personal or prop accounts, representing ~5% of market volume.",
            "goldInsight": "Retail herd sentiment (buying at highs, selling at bottoms) creates the liquidity smart money targets.",
            "propRule": "Do not trade like the 95% retail herd that fails prop evaluations by overleveraging.",
            "keyTakeaway": "Learn to identify retail traps and trade alongside institutional order flow.",
            "difficulty": "Beginner"
          },
          {
            "id: ": "commercial-banks",
            "title": "Commercial banks",
            "side": "right",
            "description": "Global Tier-1 institutions (JPMorgan, HSBC, Citi, UBS) managing corporate currency flow and metals trade.",
            "goldInsight": "Commercial banks execute physical bullion hedges that anchor long-term gold baseline support.",
            "propRule": "Understand bank fixing times (London Gold AM Fix 10:30 UTC & PM Fix 15:00 UTC) for volume surges.",
            "keyTakeaway": "Tier-1 banks are the primary wholesale liquidity providers in the FX and gold markets.",
            "difficulty": "Intermediate"
          },
          {
            "id": "central-banks",
            "title": "Central banks",
            "side": "right",
            "description": "Monetary authorities (Federal Reserve, ECB, PBOC, BOJ) controlling interest rates, reserves, and money supply.",
            "goldInsight": "Central banks are the largest net buyers of Gold reserves globally, driving structural multi-year bull runs.",
            "propRule": "Track Central Bank reserve reports (PBOC gold buying streaks) to establish macro directional bias.",
            "keyTakeaway": "Central banks dictate the macro interest rate environment and currency debasement cycle.",
            "difficulty": "Intermediate"
          },
          {
            "id": "hedge-funds",
            "title": "Hedge funds",
            "side": "right",
            "description": "Institutional asset managers executing algorithmic, macro, and momentum speculative strategies.",
            "goldInsight": "CFTC COT (Commitment of Traders) reports reveal speculative hedge fund net long/short Gold positioning.",
            "propRule": "When hedge fund net long positioning reaches historical extremes, watch for sharp corrective flushes.",
            "keyTakeaway": "Hedge funds drive medium-term trend acceleration and volatility momentum.",
            "difficulty": "Intermediate"
          },
          {
            "id": "multinational-corporations",
            "title": "Multinational corporations",
            "side": "right",
            "description": "Corporations exchanging billions in foreign currencies for international business operations and raw materials.",
            "goldInsight": "Tech, jewelry, and semiconductor conglomerates buy physical gold forward contracts regardless of chart patterns.",
            "propRule": "Commercial corporate flows can absorb retail technical levels without warning.",
            "keyTakeaway": "Corporate hedging represents non-speculative structural market flow.",
            "difficulty": "Intermediate"
          },
          {
            "id": "market-makers",
            "title": "Market makers",
            "side": "right",
            "description": "Firms that continuously quote bid and ask prices to provide market liquidity while capturing spreads.",
            "goldInsight": "Market makers engineer liquidity runs into resting stop clusters before pushing Gold in the true direction.",
            "propRule": "Never place stops exactly at obvious equal highs/lows where market maker algorithms sweep liquidity.",
            "keyTakeaway": "Market makers require counterparty volume; your stop loss is their liquidity.",
            "difficulty": "Advanced"
          },
          {
            "id": "liquidity-providers",
            "title": "Liquidity providers",
            "side": "right",
            "description": "Non-bank institutional market makers and prime brokers aggregating order books for prop firms and brokers.",
            "goldInsight": "Prop firm demo bridges simulate LP fills; fast scalping during low liquidity causes simulated slippage.",
            "propRule": "Ensure your prop firm uses reputable Tier-1 liquidity providers with transparent fill latency.",
            "keyTakeaway": "High-quality liquidity providers guarantee tight spreads and minimal execution slippage.",
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
            "description": "The legacy industry standard trading platform built for fast execution, EAs, and custom indicators.",
            "goldInsight": "MT4 lightweight architecture provides millisecond execution speed for XAUUSD day trading.",
            "propRule": "Set up hotkeys and one-click trading with pre-calculated lot size scripts in MT4.",
            "keyTakeaway": "MT4 remains the most widely supported platform across top-tier prop firms.",
            "difficulty": "Beginner"
          },
          {
            "id": "mt5-features",
            "title": "MetaTrader 5 features",
            "side": "left",
            "description": "Next-gen platform offering depth of market (DOM), native 64-bit multi-threading, and advanced pending orders.",
            "goldInsight": "MT5 displays real volume tick distribution and multi-timeframe analysis (21 timeframes vs 9 on MT4).",
            "propRule": "Use MT5 built-in economic calendar and order fill policies to adhere to prop rules.",
            "keyTakeaway": "MT5 provides superior backtesting simulation and order fill precision for Gold strategies.",
            "difficulty": "Beginner"
          },
          {
            "id": "ctrader-platform",
            "title": "cTrader platform",
            "side": "left",
            "description": "Direct Market Access (DMA) platform favored for institutional transparency, advanced charting, and level 2 DOM.",
            "goldInsight": "cTrader allows entering positions directly by dollar risk amount instead of manual lot size math.",
            "propRule": "Take advantage of cTrader QuickTrade risk presets to never violate maximum risk per trade.",
            "keyTakeaway": "cTrader offers the cleanest user interface and best native risk-management controls.",
            "difficulty": "Intermediate"
          },
          {
            "id": "tradingview-integration",
            "title": "TradingView integration",
            "side": "left",
            "description": "Premier web charting platform featuring cloud synchronization, Pine Script, and multi-asset overlay analysis.",
            "goldInsight": "Analyze XAUUSD, DXY, US10Y, and Gold futures (GC1!) side-by-side on split layouts.",
            "propRule": "Do your technical analysis on TradingView and execute on your prop firm terminal to maintain discipline.",
            "keyTakeaway": "TradingView is the golden standard for charting clarity, alerts, and multi-market confluence.",
            "difficulty": "Beginner"
          },
          {
            "id": "mobile-trading-apps",
            "title": "Mobile trading apps",
            "side": "left",
            "description": "iOS and Android trading applications for monitoring positions, modifying stops, and closing trades on the go.",
            "goldInsight": "Mobile apps are ideal for managing trailing stops; avoid opening new Gold setups from a phone.",
            "propRule": "Do not revenge trade on mobile after taking a loss. Keep high-conviction analysis on desktop screens.",
            "keyTakeaway": "Use mobile exclusively for risk monitoring and trade management, not impulsive execution.",
            "difficulty": "Beginner"
          },
          {
            "id": "order-execution-speed",
            "title": "Order execution speed",
            "side": "left",
            "description": "Latency from order dispatch to execution fill on the broker/prop firm server bridge (measured in ms).",
            "goldInsight": "In Gold trading, an extra 200ms latency during high volatility can cost 20-50 pips in slippage.",
            "propRule": "Select prop firm servers located in London (LD4) or New York (NY4) with <20ms latency.",
            "keyTakeaway": "Low execution latency ensures your stop loss and limit entries fill at exact intended prices.",
            "difficulty": "Intermediate"
          },
          {
            "id": "charting-tools",
            "title": "Charting tools",
            "side": "left",
            "description": "Technical drawing suites (Fibonacci retracements, anchor VWAP, volume profile, Gann, pitchforks).",
            "goldInsight": "Fibonacci 61.8% Golden Pocket and Fixed Range Volume Profile Point of Control (POC) reign supreme in XAUUSD.",
            "propRule": "Keep your chart layout clean; max 2-3 high-probability tools to avoid decision fatigue.",
            "keyTakeaway": "Master 2-3 institutional charting tools rather than cluttering charts with lagging indicators.",
            "difficulty": "Beginner"
          }
        ],
        "rightTopics": [
          {
            "id": "leverage-mechanics",
            "title": "Leverage mechanics",
            "side": "right",
            "description": "The use of borrowed broker capital allowing traders to control large contract sizes with small collateral.",
            "goldInsight": "1:100 leverage allows controlling a $250,000 Gold position (1 lot) with only $2,500 in required margin.",
            "propRule": "Prop firms offer 1:30 to 1:100 leverage. Never use maximum leverage; size positions by risk percentage.",
            "formulaOrRule": "Effective Leverage = Total Position Notional ($) / Account Balance ($)",
            "keyTakeaway": "Leverage is a double-edged sword: size by fixed risk (0.5-1%), never by maximum margin capacity.",
            "difficulty": "Beginner"
          },
          {
            "id": "margin-requirements",
            "title": "Margin requirements",
            "side": "right",
            "description": "The minimum collateral held in reserve by the broker to keep open positions active.",
            "goldInsight": "XAUUSD margin requirement at 1:100 leverage is 1% of the contract value (e.g. $2,500 per standard lot).",
            "propRule": "Over-allocating margin leaves zero room for intraday swings, triggering margin warnings.",
            "keyTakeaway": "Maintain at least 80% free margin to avoid risk-desk intervention in prop challenges.",
            "difficulty": "Beginner"
          },
          {
            "id": "free-margin",
            "title": "Free margin",
            "side": "right",
            "description": "Account Equity minus Used Margin. Represents the remaining capital available to open new trades.",
            "goldInsight": "When trading Gold volatility, declining free margin reduces your ability to hedge or scale.",
            "propRule": "If Free Margin drops below 50%, immediately audit open exposure to protect challenge daily limit.",
            "keyTakeaway": "Healthy free margin protects accounts from unexpected stopouts during news spread expansion.",
            "difficulty": "Beginner"
          },
          {
            "id": "margin-call-level",
            "title": "Margin call level",
            "side": "right",
            "description": "The threshold (typically 100% margin level) where broker alerts that losses are eroding collateral.",
            "goldInsight": "A margin call in a prop firm means you have already breached the 5% daily drawdown rule.",
            "propRule": "Prop traders must NEVER get close to a margin call; maximum drawdown is breached long before margin calls.",
            "keyTakeaway": "If you ever receive a margin call, your position sizing strategy has fundamentally failed.",
            "difficulty": "Beginner"
          },
          {
            "id": "stop-out-level",
            "title": "Stop out level",
            "side": "right",
            "description": "The critical margin percentage (e.g. 50% or 30%) where the broker forcefully liquidates positions.",
            "goldInsight": "Forced liquidation on Gold occurs at the worst possible market prices, causing maximum damage.",
            "propRule": "In prop firms, account breach happens at 5-10% drawdown, well before broker auto-stopout.",
            "keyTakeaway": "Hard stop losses prevent ever experiencing the catastrophic liquidation of a broker stop out.",
            "difficulty": "Beginner"
          },
          {
            "id": "position-sizing",
            "title": "Position sizing",
            "side": "right",
            "description": "The scientific calculation of lot sizes based on dollar risk tolerance, stop loss distance, and pip value.",
            "goldInsight": "With a 30-pip ($3.00) stop on a $100,000 account risking 1% ($1,000): Lot Size = $1,000 / (30 x $10) = 3.33 Lots.",
            "propRule": "Calculate position size on EVERY single trade. Never guess or use fixed static lot sizes.",
            "formulaOrRule": "Lot Size = (Account Balance × Risk %) / (Stop Loss in Pips × Pip Value per Lot)",
            "keyTakeaway": "Consistent position sizing is the number one differentiator between funded pros and blown accounts.",
            "difficulty": "Intermediate"
          },
          {
            "id": "lot-size-calculation",
            "title": "Lot size calculation",
            "side": "right",
            "description": "Precise formula translating account balance, stop distance, and instrument point value into lot units.",
            "goldInsight": "Standard Lot = 100 oz ($10/pip). Mini Lot = 10 oz ($1/pip). Micro Lot = 1 oz ($0.10/pip).",
            "propRule": "Use our built-in Gold Prop Position Size Calculator to compute mathematically exact challenge lots.",
            "keyTakeaway": "Scale lots down as stop loss expands to keep absolute dollar risk 100% constant.",
            "difficulty": "Beginner"
          }
        ]
      },
      {
        "id": "trading-platforms",
        "title": "Trading Platforms",
        "category": "Infrastructure",
        "description": "Software ecosystems, execution engines, charting suites, and mobile risk-monitoring tools.",
        "color": "#facc15",
        "leftTopics": [],
        "rightTopics": []
      }
    ]
  }
]

print("Script template ready.")
