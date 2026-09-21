import { founder } from "./founder";

export interface SlideData {
  id: string;
  isPitch: boolean;
  title: string;
  subtitle?: string;
  supportingText?: string[];
  source?: string;
  drawer?: string;
  speakerLine?: string;
  componentId: string;
  footerLine?: string;
}

export const deck: SlideData[] = [
  {
    id: "S1",
    isPitch: true,
    title: "Never the Wrong Gift",
    subtitle: "The gift finder that makes givers confident and receivers happy.",
    componentId: "Cover",
    speakerLine: "Welcome. Today I'm presenting Never the Wrong Gift.",
  },
  {
    id: "S2",
    isPitch: false,
    title: "The idea in 10 seconds",
    supportingText: ["One website. Every person. Every occasion. All year."],
    componentId: "Idea",
  },
  {
    id: "S3",
    isPitch: true,
    title: "Gift shopping is stressful.",
    supportingText: ["The products exist. Shoppers just can't decide."],
    source: "Source: Etsy consumer survey, Accenture 2025, Mixbook 2025",
    componentId: "Problem",
  },
  {
    id: "S4",
    isPitch: true,
    title: "Answer 5 questions. Get the perfect gift.",
    drawer: "Phase 1 quiz is rule-based and cheap. A chat assistant comes later if the data earns it.",
    componentId: "Solution",
  },
  {
    id: "S5",
    isPitch: true,
    title: "Christmas is the biggest gifting moment of the year.",
    supportingText: ["Money is moving at record levels. The stress is the opening."],
    source: "Source: NRF 2025, Deloitte Sept 2026, PwC UK",
    drawer: "Shoppers are budget-conscious and value-seeking.",
    componentId: "ChristmasTiming",
  },
  {
    id: "S6",
    isPitch: false,
    title: "Last year's Black Friday weekend was a record.",
    supportingText: ["Small brands are in the game. Shopify's top selling countries included the US and UK."],
    source: "Source: Shopify BFCM 2025 (Dec 2, 2025)",
    drawer: "This is Shopify platform data, not our data. It shows the market is open to new stores. It is not a promise that we will get this result.",
    componentId: "BlackFriday",
  },
  {
    id: "S7",
    isPitch: false,
    title: "Gifting is a huge market.",
    supportingText: ["Wall clocks are a $3.8–5.8B market. Gifting is many times bigger."],
    source: "Source: Mordor Intelligence, Business Research Insights, Spherical Insights",
    componentId: "MarketSize",
  },
  {
    id: "S8",
    isPitch: true,
    title: "12 months of gifting. Not one.",
    supportingText: ["After Christmas, Valentine's Day is already next."],
    source: "Source: NRF 2025/2026",
    componentId: "YearRound",
  },
  {
    id: "S9",
    isPitch: true,
    title: "This is the store.",
    supportingText: ["Shop by person, not by product type."],
    componentId: "StorefrontPreview",
  },
  {
    id: "S10",
    isPitch: false,
    title: "10 products sourced. 6 already strong.",
    supportingText: ["9 of 10 work all year. Only 1 is Christmas-only."],
    componentId: "StartingProducts",
  },
  {
    id: "S11",
    isPitch: false,
    title: "Every product is price-checked.",
    drawer: "Landed cost including shipping is rechecked before any product goes live.",
    componentId: "PriceCheck",
  },
  {
    id: "S12",
    isPitch: false,
    title: "Every order earns about $24 before ads.",
    componentId: "UnitEconomics",
  },
  {
    id: "S13",
    isPitch: false,
    title: "Big players exist. We are the curated one.",
    supportingText: ["The quiz is not our moat. Curation and trust are."],
    componentId: "Competition",
  },
  {
    id: "S14",
    isPitch: true,
    title: "Low-cost team. Local shipping in UK and US.",
    supportingText: ["Why the company sits in the US/UK: shoppers pay in dollars and pounds, and ad accounts stay safe."],
    drawer: "Why: Setting up payment gateways requires a proper entity. The standard fix is a US LLC or UK Ltd with its own bank account. Start this this week.",
    componentId: "Operations",
  },
  {
    id: "S15",
    isPitch: false,
    title: "9 things before we open.",
    drawer: "Estimated 1–3 weeks for company + bank + payments (Estimate). This is the #1 timeline risk.",
    componentId: "SetupRequirements",
  },
  {
    id: "S16",
    isPitch: false,
    title: "Reliable delivery beats a big catalog.",
    drawer: "The US ended its duty-free small-parcel exemption on Aug 29, 2025. Direct China-to-US shipping now often means duties and delays. That is one more reason to use in-region stock. The UK £135 relief still exists for now, but UK VAT rules apply.",
    source: "Source: CJdropshipping, Spocket, Zendrop guidelines",
    componentId: "Shipping",
  },
  {
    id: "S17",
    isPitch: true,
    title: "We recommend $5,000 in marketing.",
    drawer: "Why Q4 is expensive: Meta CPM about $20 typical → $25 Q4 → $50+ Black Friday week. We spend the majority on retargeting and creators first.",
    source: "Source: Meta benchmarks (Sovran, Adamigo, Stackmatix 2026)",
    componentId: "MarketingBudget",
  },
  {
    id: "S18",
    isPitch: false,
    title: "Organic first. Ads second. Retargeting last.",
    supportingText: ["We never spend big on cold ads until we know what works."],
    drawer: "Ad rules (Estimate/best practice): Test 3 hooks × 3 angles, vertical video 15–30s, hook in the first 3 seconds. Every ad points to the quiz → email capture. Kill an ad after about $25 spend with no sale and weak clicks. Raise a winner's budget about 20% every 2–3 days. Only scale when we earn at least $2.10 per $1 of ads. Retargeting from Nov 1: site visitors, add-to-cart, quiz-finishers.",
    componentId: "AdStrategy",
  },
  {
    id: "S19",
    isPitch: true,
    title: "Ads made internally, voiced by the UK/US.",
    source: "Source: Influee, Billo, Payoneer/WorldFirst fee guide",
    componentId: "AdCreation",
  },
  {
    id: "S20",
    isPitch: false,
    title: "From today to Christmas in 5 steps.",
    componentId: "Roadmap",
  },
  {
    id: "S21",
    isPitch: true,
    title: "Year 1 goal: pay for itself, then grow.",
    componentId: "YearRoundPlan",
  },
  {
    id: "S22",
    isPitch: false,
    title: "Risks we already planned for.",
    componentId: "Risks",
  },
  {
    id: "S23",
    isPitch: true,
    title: "Funding lets us do more, faster.",
    componentId: "TheAsk",
  },
  {
    id: "S24",
    isPitch: true,
    title: "6 lines to remember.",
    componentId: "Summary",
  },
  {
    id: "A1",
    isPitch: false,
    title: "Appendix: Sources",
    componentId: "AppendixSources",
  },
  {
    id: "A2",
    isPitch: false,
    title: "Appendix: Assumptions",
    componentId: "AppendixAssumptions",
  },
  {
    id: "A3",
    isPitch: false,
    title: "Appendix: Disclaimer",
    componentId: "AppendixDisclaimer",
  }
];

export const products = [
  { id: 1, name: "Wooden Watch Holder", cost: "$9–17", price: "$34.99", margin: "about 65%", verdict: "Strong pick", person: "The Sentimental One (engrave), Impossible to Shop For" },
  { id: 2, name: "Wooden Phone Docking", cost: "$29–37", price: "$74.99", margin: "about 55%", verdict: "Verify cost first", person: "The Desk-Decorator" },
  { id: 3, name: "Cell phone / desk organizer", cost: "$15–25", price: "$44.99", margin: "about 55%", verdict: "Solid", person: "The Desk-Decorator" },
  { id: 4, name: "Touch sensor bird lamp", cost: "$15", price: "$36.99", margin: "about 60%", verdict: "Strong pick", person: "The Homebody" },
  { id: 5, name: "Wooden key tray / organizer", cost: "$21", price: "$44.99", margin: "about 53%", verdict: "Solid", person: "The Host / new home" },
  { id: 6, name: "Cozy Cottage Book Stand & Lamp", cost: "$32–33", price: "$69.99", margin: "about 53%", verdict: "Strong pick (hero image)", person: "The Homebody (\"wow\" item)" },
  { id: 7, name: "Wood Key Holder (wall)", cost: "$21–25", price: "$49.99", margin: "about 54%", verdict: "Overlaps #5: pick one", person: "The Host" },
  { id: 8, name: "Christmas Angel Porcelain Candle Holder", cost: "$15", price: "$32.99", margin: "about 55%", verdict: "Seasonal only", person: "The Sentimental One" },
  { id: 9, name: "Lotus-shaped Candle Holder", cost: "$9", price: "$27.99", margin: "about 68%", verdict: "Solid (add-on)", person: "The Homebody" },
  { id: 10, name: "3PCS Flameless Candles + Remote", cost: "$28–?", price: "$54.99", margin: "pending", verdict: "Solid, verify", person: "The Homebody / gift set" },
];
