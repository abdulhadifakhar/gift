export const founder = {
  brandName: "Never the Wrong Gift",
  founderName: "{{FOUNDER_TO_FILL}}",
  founderBackground: "{{FOUNDER_TO_FILL}}", // e.g. "Built from a table-clocks store"
  contact: "{{FOUNDER_TO_FILL}}",
  raiseAmount: null as number | null, // null → show "$10,000 (example, to confirm)"
  sheetUrl: "https://docs.google.com/spreadsheets/d/1Gxb9GksWapF7PFe2-bPWiElkL4J1nSlKla9ccVjDqnM/edit?usp=sharing",
  orderByDates: {
    US: null as string | null,
    UK: null as string | null,
  }, // fill after sample tests
  setupStatus: {
    company: "To do",
    bank: "To do",
    gateway: "To do",
    store: "To do",
    suppliers: "To do",
    adAccounts: "To do",
    tax: "To do",
    legalProfit: "To do",
    support: "To do"
  } as Record<string, string>, // e.g. { company: "In progress" }
  ebayEvidence: {} as Record<number, { soldCount: number, dateRange: string, screenshot: string }>, // productId → { soldCount, dateRange, screenshot }
  productPhotos: {} as Record<number, string>, // productId → "/products/x.jpg"
};
