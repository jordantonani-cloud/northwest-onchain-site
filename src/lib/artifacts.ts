/**
 * Synthetic data for the onchain-artifact component system (brief §2).
 *
 * EVERYTHING HERE IS FABRICATED FOR ILLUSTRATION. Hash lengths and address
 * shapes are plausible, assets/chains are real, amounts are realistic — but
 * no value references a real client, wallet, key, or transaction. These
 * artifacts are decoration that signals technical fluency; they are never the
 * only way to read a claim and must degrade to a clean static state.
 */

export interface FeedEvent {
  kind: string; // short tag, e.g. "TRANSFER"
  hash: string; // 0x… truncated
  asset: string; // USDC, tokenized fund, etc.
  amount: string; // human-readable, with asset
  time: string; // relative timestamp
}

/** Onchain transaction feed — mirrors Column's scrolling ledger. */
export const FEED_EVENTS: FeedEvent[] = [
  {
    kind: 'Transfer',
    hash: '0x9f4c…a21e',
    asset: 'USDC',
    amount: '1,250,000 USDC',
    time: '8s ago',
  },
  { kind: 'Settle', hash: '0x3b71…ee08', asset: 'USDC', amount: '482,900 USDC', time: '22s ago' },
  {
    kind: 'Vault deposit',
    hash: '0xc028…7d4f',
    asset: 'sDAI',
    amount: '900,000 sDAI',
    time: '54s ago',
  },
  { kind: 'Mint', hash: '0x71aa…1c93', asset: 'tBILL', amount: '2,000,000 tBILL', time: '1m ago' },
  { kind: 'Redeem', hash: '0x55de…b6a2', asset: 'USDC', amount: '315,420 USDC', time: '2m ago' },
  { kind: 'Transfer', hash: '0x0ef3…9aa7', asset: 'PYUSD', amount: '74,000 PYUSD', time: '2m ago' },
  { kind: 'Borrow', hash: '0xa913…4f60', asset: 'USDC', amount: '1,100,000 USDC', time: '3m ago' },
  { kind: 'Settle', hash: '0xb24c…d0f1', asset: 'EURC', amount: '640,000 EURC', time: '4m ago' },
  {
    kind: 'Vault deposit',
    hash: '0x6d8e…32bb',
    asset: 'USDC',
    amount: '5,250,000 USDC',
    time: '5m ago',
  },
  { kind: 'Mint', hash: '0x1c47…8e5a', asset: 'tFUND', amount: '3,400,000 tFUND', time: '6m ago' },
];

/** Settlement-flow card — stablecoin (seconds) vs. greyed wire (days). */
export const SETTLEMENT = {
  onchain: {
    rail: 'Stablecoin · USDC on Base',
    from: 'Treasury · Seattle',
    to: 'Supplier · Singapore',
    amount: '$1,250,000.00',
    status: 'Settled · 4s',
  },
  wire: {
    rail: 'Correspondent wire · SWIFT',
    from: 'Treasury · Seattle',
    to: 'Supplier · Singapore',
    amount: '$1,250,000.00',
    status: 'Pending · 2–4 days',
  },
} as const;

/**
 * Tokenization config artifact (rendered as JSON design-object). Token-typed
 * lines map to the .tok-* classes in ArtifactCode for light syntax color.
 */
export const TOKENIZATION_CONFIG = `{
  "asset_class": "money_market_fund",   // RWA wrapper
  "ticker": "tFUND",
  "chain": "Base",
  "standard": "ERC-20",
  "nav_per_token": 1.00,
  "transfer_restrictions": {
    "kyc_required": true,
    "allowlist": "onchain_registry",
    "jurisdictions": ["US-QP", "non-US"]
  },
  "reserves": {
    "custodian": "qualified_custodian",
    "attestation": "daily",
    "proof_of_reserve": "onchain"
  },
  "redemption": { "window": "T+0", "cutoff_utc": "20:00" }
}`;

/** Vault position artifact — a compact onchain-credit snapshot. */
export const VAULT_POSITION = `// vault: senior-credit-usdc  (synthetic)
position {
  collateral:        12,400,000 USDC
  borrowed:           9,100,000 USDC
  ltv:                       73.4 %
  apy_supply:                 8.2 %
  liquidation_ltv:           85.0 %
  reserves_onchain:          true
}`;

/** Smart-contract excerpt — texture next to an execution claim. */
export const CONTRACT_EXCERPT = `// SettlementEscrow.sol  (excerpt, synthetic)
function settle(bytes32 ref, address payee, uint256 amount)
    external onlyOperator nonReentrant
{
    require(funded[ref] >= amount, "underfunded");
    funded[ref] -= amount;
    USDC.safeTransfer(payee, amount);   // atomic, final
    emit Settled(ref, payee, amount, block.timestamp);
}`;

/** Perps / 24-7 markets snapshot — texture for the "markets never close" claim. */
export const PERPS_SNAPSHOT = `// market: ETH-USD perp  (synthetic, 24/7)
mark_price:          3,142.80 USD
funding_8h:             +0.0091 %
open_interest:      412,900,000 USD
next_funding_in:           01:58:22
status:                 OPEN · always`;

/** POC-scope artifact — milestone → timeline → cost band. */
export const POC_SCOPE = {
  title: 'Stablecoin settlement pilot',
  band: '6 weeks · fixed cost',
  steps: [
    { no: '01', name: 'Survey & metrics defined', wk: 'wk 1' },
    { no: '02', name: 'Costed roadmap + team', wk: 'wk 2' },
    { no: '03', name: 'Sandbox integration', wk: 'wk 3–4' },
    { no: '04', name: 'Measured PoC + handoff', wk: 'wk 5–6' },
  ],
} as const;

/**
 * Named, public, verifiable deployments per proof pillar (Column's "named
 * social proof" mechanic, honestly adapted — these are NOT NWO clients and
 * are never presented as such; they are the institutions already live on
 * each rail, matching the linked "who's already live" articles).
 */
export const LIVE_NAMES: Record<string, string[]> = {
  settlement: ['Visa', 'Stripe', 'PayPal', 'JPMorgan'],
  tokenization: ['BlackRock', 'Franklin Templeton', 'WisdomTree'],
  credit: ['Figure', 'Maple', 'Centrifuge'],
  markets: ['dYdX', 'Hyperliquid', 'Deribit'],
};

/**
 * Homepage stat band — DEFENSIBLE numbers only (brief §2 / Phase 0 §6.3).
 * Market figures are cited to the matching insight article; no NWO metrics
 * are invented here. `value` drives the count-up; `src` cites the source.
 */
export const HOME_STATS = [
  { value: '~$34B', label: 'real-world assets tokenized onchain', src: 'Market, 2025' },
  { value: '$14B+', label: 'active onchain private credit', src: 'Market, 2025' },
  { value: '24/7', label: 'continuous settlement & funding', src: 'Live today' },
  {
    value: '$120B+',
    label: 'onchain volume engineered by our CTO, zero exploits',
    src: 'gTrade, 2022–26',
  },
] as const;
