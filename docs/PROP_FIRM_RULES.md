# Proprietary Trading Firm Evaluation Framework

## Risk Management Constraints
- **Max Daily Drawdown**: 4.0% to 5.0% trailing or balance-based.
- **Max Overall Drawdown**: 8.0% to 10.0% static or high-water mark.
- **Profit Target**: Phase 1 (8-10%), Phase 2 (5%).
- **Minimum Trading Days**: 0 to 5 days.

## Automated Circuit Breakers
1. Soft drawdown threshold at $-2.0\%$: Position sizes reduced by 50%.
2. Hard daily limit at $-3.5\%$: Liquidation of all open intraday positions and trade suspension until next session open.
