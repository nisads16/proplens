export type Household = {
  citizenship: string;
  monthlyIncome: number;
  cashSavings: number;
  cpfOa: number;
  monthlyDebt: number;
  monthlyExpenses: number;
  riskTolerance: string;
  targetMonths: number;
};

export type CurrentProperty = {
  address: string;
  propertyType: string;
  town: string;
  floorAreaSqm: number;
  purchasePrice: number;
  purchaseYear: number;
  outstandingLoan: number;
  cpfUsed: number;
  cpfAccruedInterest: number;
  estimatedValue: number;
  monthlyRental: number;
  remainingLease: number;
};

export type TargetPurchase = {
  propertyType: string;
  targetPrice: number;
  buyerStampDuty: number;
  additionalBuyerStampDuty: number;
  legalFees: number;
  renovationBudget: number;
  mortgageRate: number;
  loanTenureYears: number;
};

export type Assumptions = {
  valuationConfidence: number;
  marketGrowthRate: number;
  sellingCostsRate: number;
  emergencyMonths: number;
};

export type PropertyDecision = {
  id?: string;
  client_name: string;
  objective: string;
  status: "draft" | "ready" | "archived";
  household: Household;
  current_property: CurrentProperty;
  target_purchase: TargetPurchase;
  assumptions: Assumptions;
  analysis?: Analysis;
  timeline?: TimelineItem[];
  checklist?: ChecklistItem[];
  report?: DecisionReport;
  created_at?: string;
  updated_at?: string;
};

export type Scenario = {
  name: string;
  score: number;
  className: string;
  cashAfterMove: number;
  monthlyPayment: number;
  upfrontCashNeed: number;
  strengths: string[];
  risks: string[];
};

export type Analysis = {
  valuationLow: number;
  valuationHigh: number;
  appreciation: number;
  appreciationCagr: number;
  grossRentalYield: number;
  estimatedSellingCosts: number;
  cpfRefund: number;
  netSaleProceeds: number;
  maxLoanByTdsr: number;
  maximumBudget: number;
  prudentBudget: number;
  comfortableBudget: number;
  buyerStampDuty: number;
  minimumCashDownpayment: number;
  cpfOrCashDownpayment: number;
  totalAcquisitionCost: number;
  monthlyMortgage: number;
  stressPayments: { rate: number; payment: number; tdsrUsage: number }[];
  readinessScore: number;
  recommendation: string;
  recommendationClass: string;
  confidence: "High" | "Medium" | "Low";
  scenarios: Scenario[];
  comparables: Comparable[];
};

export type Comparable = {
  project: string;
  address: string;
  town: string;
  type: string;
  sizeSqm: number;
  price: number;
  psf: number;
  date: string;
  distanceKm: number;
  priceDifference: number;
  similarity: number;
};

export type TimelineItem = {
  title: string;
  month: number;
  durationWeeks: number;
  owner: string;
  cashflow: number;
  risk: "Low" | "Medium" | "High";
};

export type ChecklistItem = {
  label: string;
  done: boolean;
};

export type DecisionReport = {
  headline: string;
  summary: string;
  nextActions: string[];
  assumptions: string[];
  caveats: string[];
};

const DEFAULT_HOUSEHOLD: Household = {
  citizenship: "Singapore Citizen household",
  monthlyIncome: 14500,
  cashSavings: 168000,
  cpfOa: 182000,
  monthlyDebt: 850,
  monthlyExpenses: 5600,
  riskTolerance: "Balanced",
  targetMonths: 9,
};

const DEFAULT_PROPERTY: CurrentProperty = {
  address: "Tampines Street 81, Singapore",
  propertyType: "HDB 4-room",
  town: "Tampines",
  floorAreaSqm: 93,
  purchasePrice: 455000,
  purchaseYear: 2016,
  outstandingLoan: 218000,
  cpfUsed: 148000,
  cpfAccruedInterest: 28000,
  estimatedValue: 690000,
  monthlyRental: 3300,
  remainingLease: 70,
};

const DEFAULT_TARGET: TargetPurchase = {
  propertyType: "Private condo",
  targetPrice: 1380000,
  buyerStampDuty: 38400,
  additionalBuyerStampDuty: 0,
  legalFees: 3500,
  renovationBudget: 45000,
  mortgageRate: 3.6,
  loanTenureYears: 25,
};

const DEFAULT_ASSUMPTIONS: Assumptions = {
  valuationConfidence: 82,
  marketGrowthRate: 2.5,
  sellingCostsRate: 2.2,
  emergencyMonths: 6,
};

export function createDefaultDecision(): PropertyDecision {
  return {
    client_name: "New household",
    objective: "Assess whether to sell first before buying a next home",
    status: "draft",
    household: { ...DEFAULT_HOUSEHOLD },
    current_property: { ...DEFAULT_PROPERTY },
    target_purchase: { ...DEFAULT_TARGET },
    assumptions: { ...DEFAULT_ASSUMPTIONS },
  };
}

export function normaliseDecision(row: Partial<PropertyDecision>): PropertyDecision {
  return {
    ...createDefaultDecision(),
    ...row,
    household: { ...DEFAULT_HOUSEHOLD, ...(row.household ?? {}) },
    current_property: { ...DEFAULT_PROPERTY, ...(row.current_property ?? {}) },
    target_purchase: { ...DEFAULT_TARGET, ...(row.target_purchase ?? {}) },
    assumptions: { ...DEFAULT_ASSUMPTIONS, ...(row.assumptions ?? {}) },
  };
}

export function analyseDecision(decision: PropertyDecision): {
  analysis: Analysis;
  timeline: TimelineItem[];
  checklist: ChecklistItem[];
  report: DecisionReport;
} {
  const household = decision.household;
  const property = decision.current_property;
  const target = decision.target_purchase;
  const assumptions = decision.assumptions;

  const valuationSpread = Math.max(0.04, (100 - assumptions.valuationConfidence) / 250);
  const valuationLow = property.estimatedValue * (1 - valuationSpread);
  const valuationHigh = property.estimatedValue * (1 + valuationSpread);
  const yearsHeld = Math.max(1, new Date().getFullYear() - property.purchaseYear);
  const appreciation = property.estimatedValue - property.purchasePrice;
  const appreciationCagr =
    (Math.pow(property.estimatedValue / Math.max(1, property.purchasePrice), 1 / yearsHeld) - 1) * 100;
  const grossRentalYield = (property.monthlyRental * 12 * 100) / Math.max(1, property.estimatedValue);
  const estimatedSellingCosts = property.estimatedValue * (assumptions.sellingCostsRate / 100);
  const cpfRefund = property.cpfUsed + property.cpfAccruedInterest;
  const netSaleProceeds = Math.max(
    0,
    property.estimatedValue - property.outstandingLoan - cpfRefund - estimatedSellingCosts,
  );

  const monthlyRate = target.mortgageRate / 100 / 12;
  const months = target.loanTenureYears * 12;
  const maxMonthlyDebtService = Math.max(0, household.monthlyIncome * 0.55 - household.monthlyDebt);
  const maxLoanByTdsr = loanPrincipalFromPayment(maxMonthlyDebtService, monthlyRate, months);
  const ltvLoan = target.targetPrice * 0.75;
  const feasibleLoan = Math.min(maxLoanByTdsr, ltvLoan);
  const monthlyMortgage = mortgagePayment(feasibleLoan, monthlyRate, months);

  const buyerStampDuty = calculateSingaporeBsd(target.targetPrice);
  const minimumCashDownpayment = target.targetPrice * 0.05;
  const cpfOrCashDownpayment = target.targetPrice * 0.2;
  const totalAcquisitionCost =
    minimumCashDownpayment +
    cpfOrCashDownpayment +
    buyerStampDuty +
    target.additionalBuyerStampDuty +
    target.legalFees +
    target.renovationBudget;
  const liquidAfterSale = household.cashSavings + household.cpfOa + netSaleProceeds;
  const emergencyReserve = household.monthlyExpenses * assumptions.emergencyMonths;
  const cashAfterMove = liquidAfterSale - totalAcquisitionCost - emergencyReserve;
  const maximumBudget = Math.min(maxLoanByTdsr / 0.75, liquidAfterSale / 0.25);
  const prudentBudget = Math.min(maximumBudget * 0.9, target.targetPrice);
  const comfortableBudget = Math.min(maximumBudget * 0.82, target.targetPrice * 0.95);

  const stressPayments = [target.mortgageRate, target.mortgageRate + 0.5, target.mortgageRate + 1, target.mortgageRate + 2]
    .map((rate) => {
      const payment = mortgagePayment(feasibleLoan, rate / 100 / 12, months);
      return {
        rate,
        payment,
        tdsrUsage: ((payment + household.monthlyDebt) / Math.max(1, household.monthlyIncome)) * 100,
      };
    });

  const liquidityScore = scoreRange(cashAfterMove, 0, emergencyReserve * 1.5);
  const monthlyScore = scoreRange(maxMonthlyDebtService - monthlyMortgage, 0, household.monthlyIncome * 0.18);
  const valuationScore = assumptions.valuationConfidence;
  const readinessScore = Math.round(liquidityScore * 0.35 + monthlyScore * 0.35 + valuationScore * 0.2 + 76 * 0.1);

  const sellFirstScore = Math.round(readinessScore + (cashAfterMove > 0 ? 6 : -16));
  const buyFirstAbsds = target.targetPrice * 0.2;
  const buyFirstCashAfter = cashAfterMove - buyFirstAbsds;
  const buyFirstScore = Math.round(readinessScore - 14 + (buyFirstCashAfter > 0 ? 0 : -18));
  const holdScore = Math.round(
    62 +
      scoreRange(grossRentalYield, 2, 5) * 0.12 +
      scoreRange(property.remainingLease, 45, 85) * 0.1 -
      (target.targetPrice > comfortableBudget ? 8 : 0),
  );

  const scenarios: Scenario[] = [
    {
      name: "Sell first, then buy",
      score: clamp(sellFirstScore),
      className: sellFirstScore >= 75 ? "Strong" : sellFirstScore >= 60 ? "Viable" : "Conditional",
      cashAfterMove,
      monthlyPayment: monthlyMortgage,
      upfrontCashNeed: totalAcquisitionCost,
      strengths: ["Avoids ABSD exposure for the next purchase", "Converts home equity into a clearer purchase budget"],
      risks: ["Needs temporary housing or careful completion timing", "Replacement price can move while selling"],
    },
    {
      name: "Buy first, then sell",
      score: clamp(buyFirstScore),
      className: buyFirstScore >= 75 ? "Strong" : buyFirstScore >= 60 ? "Viable" : "High risk",
      cashAfterMove: buyFirstCashAfter,
      monthlyPayment: monthlyMortgage,
      upfrontCashNeed: totalAcquisitionCost + buyFirstAbsds,
      strengths: ["Lets the household secure the next home before moving", "Reduces pressure to accept a weak sale offer"],
      risks: ["Material ABSD/cashflow exposure until sale completes", "Higher financing and timeline dependency risk"],
    },
    {
      name: "Hold current home",
      score: clamp(holdScore),
      className: holdScore >= 75 ? "Strong" : holdScore >= 60 ? "Viable" : "Watch",
      cashAfterMove: household.cashSavings + household.cpfOa,
      monthlyPayment: 0,
      upfrontCashNeed: 0,
      strengths: ["Keeps optionality while rental yield remains observable", "Avoids immediate transaction costs"],
      risks: ["Upgrade goal may drift if condo prices rise faster than savings", "Lease decay and policy changes can affect HDB exit value"],
    },
  ];

  const best = [...scenarios].sort((a, b) => b.score - a.score)[0];
  const recommendation =
    best.name === "Sell first, then buy"
      ? "Sell first is currently the cleanest route: it funds the upgrade, avoids ABSD exposure, and keeps the mortgage within a manageable range."
      : best.name === "Buy first, then sell"
        ? "Buying first is possible only if the household accepts higher cashflow risk and has a firm sale contingency plan."
        : "Holding is currently stronger than forcing an upgrade; improve liquidity or lower the target price before committing.";

  const analysis: Analysis = {
    valuationLow,
    valuationHigh,
    appreciation,
    appreciationCagr,
    grossRentalYield,
    estimatedSellingCosts,
    cpfRefund,
    netSaleProceeds,
    maxLoanByTdsr,
    maximumBudget,
    prudentBudget,
    comfortableBudget,
    buyerStampDuty,
    minimumCashDownpayment,
    cpfOrCashDownpayment,
    totalAcquisitionCost,
    monthlyMortgage,
    stressPayments,
    readinessScore: clamp(readinessScore),
    recommendation,
    recommendationClass: best.className,
    confidence: assumptions.valuationConfidence >= 78 && liquidityScore > 45 ? "High" : readinessScore >= 58 ? "Medium" : "Low",
    scenarios,
    comparables: buildComparables(property),
  };

  const timeline = buildTimeline(analysis, household.targetMonths);
  const defaultChecklist = [
    { label: "Confirm HDB valuation range with latest comparable transactions", done: true },
    { label: "Request bank IPA and stress-test at +1% and +2%", done: false },
    { label: "Confirm CPF refund and accrued interest from CPF portal", done: false },
    { label: "Decide sell-first vs buy-first sequence before shortlisting", done: false },
    { label: "Prepare seller documents, photos, and viewing calendar", done: false },
  ];
  const checklist = mergeChecklist(defaultChecklist, decision.checklist ?? []);
  const report = buildReport(decision, analysis);

  return { analysis, timeline, checklist, report };
}

function calculateSingaporeBsd(price: number) {
  const first = Math.min(price, 180000) * 0.01;
  const second = Math.max(0, Math.min(price, 360000) - 180000) * 0.02;
  const third = Math.max(0, Math.min(price, 1000000) - 360000) * 0.03;
  const fourth = Math.max(0, Math.min(price, 1500000) - 1000000) * 0.04;
  const fifth = Math.max(0, Math.min(price, 3000000) - 1500000) * 0.05;
  const sixth = Math.max(0, price - 3000000) * 0.06;
  return first + second + third + fourth + fifth + sixth;
}

function mortgagePayment(principal: number, monthlyRate: number, months: number) {
  if (principal <= 0) return 0;
  if (monthlyRate === 0) return principal / months;
  return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
}

function loanPrincipalFromPayment(payment: number, monthlyRate: number, months: number) {
  if (payment <= 0) return 0;
  if (monthlyRate === 0) return payment * months;
  return (payment * (1 - Math.pow(1 + monthlyRate, -months))) / monthlyRate;
}

function scoreRange(value: number, low: number, high: number) {
  if (high <= low) return 0;
  return clamp(((value - low) / (high - low)) * 100);
}

function clamp(value: number) {
  return Math.max(0, Math.min(100, value));
}

function buildComparables(property: CurrentProperty): Comparable[] {
  const base = property.estimatedValue / Math.max(1, property.floorAreaSqm) / 10.7639;
  const vicinity = inferVicinity(property);

  return [
    toComparable(`${vicinity.street} nearby stack`, `${vicinity.street}, within 300m`, property, 93, property.estimatedValue * 0.98, base * 0.98, "Q2 2026", 0.3, 94),
    toComparable(`${vicinity.town} same flat type`, `${vicinity.town} town, within 700m`, property, 91, property.estimatedValue * 1.03, base * 1.05, "Q2 2026", 0.7, 89),
    toComparable(`${vicinity.town} recent resale`, `${vicinity.town} planning area, within 1.2km`, property, 96, property.estimatedValue * 0.95, base * 0.92, "Q1 2026", 1.2, 84),
  ];
}

function toComparable(
  project: string,
  address: string,
  property: CurrentProperty,
  sizeSqm: number,
  price: number,
  psf: number,
  date: string,
  distanceKm: number,
  similarity: number,
): Comparable {
  return {
    project,
    address,
    town: property.town,
    type: property.propertyType,
    sizeSqm,
    price,
    psf,
    date,
    distanceKm,
    priceDifference: price - property.estimatedValue,
    similarity,
  };
}

function inferVicinity(property: CurrentProperty) {
  const address = property.address.trim();
  const street = address ? address.split(",")[0] : `${property.town} vicinity`;
  return {
    street,
    town: property.town || "Selected town",
  };
}

function buildTimeline(analysis: Analysis, targetMonths: number): TimelineItem[] {
  const saleFirst = analysis.scenarios[0].score >= analysis.scenarios[1].score;
  return [
    { title: "Decision confirmation and documents", month: 0, durationWeeks: 2, owner: "Client + advisor", cashflow: 0, risk: "Low" },
    { title: saleFirst ? "Launch sale and collect offers" : "Secure IPA and shortlist next home", month: 1, durationWeeks: 6, owner: "Advisor", cashflow: 0, risk: "Medium" },
    { title: saleFirst ? "Issue OTP and exercise sale" : "Negotiate purchase OTP", month: 3, durationWeeks: 3, owner: "Client", cashflow: saleFirst ? analysis.netSaleProceeds : -analysis.minimumCashDownpayment, risk: "Medium" },
    { title: saleFirst ? "Shortlist and secure condo" : "List current property for sale", month: 4, durationWeeks: 6, owner: "Client + advisor", cashflow: -analysis.minimumCashDownpayment, risk: saleFirst ? "Medium" : "High" },
    { title: "Legal completion and mortgage drawdown", month: Math.max(6, targetMonths - 2), durationWeeks: 8, owner: "Lawyer + bank", cashflow: -analysis.totalAcquisitionCost, risk: "Medium" },
    { title: "Renovation, handover, move", month: Math.max(8, targetMonths), durationWeeks: 6, owner: "Client", cashflow: 0, risk: "Low" },
  ];
}

function buildReport(decision: PropertyDecision, analysis: Analysis): DecisionReport {
  const best = [...analysis.scenarios].sort((a, b) => b.score - a.score)[0];

  return {
    headline: `${decision.client_name}: ${best.className} ${best.name.toLowerCase()} plan`,
    summary: analysis.recommendation,
    nextActions: [
      "Validate the valuation range against the latest HDB resale comparables.",
      "Confirm CPF refund and cash proceeds before making offers.",
      "Obtain bank IPA and keep the +1% interest-rate stress test within comfort.",
    ],
    assumptions: [
      `Current property value uses a ${analysis.confidence.toLowerCase()} confidence range.`,
      `Mortgage model assumes ${decision.target_purchase.mortgageRate}% over ${decision.target_purchase.loanTenureYears} years.`,
      "Calculations are educational estimates, not guaranteed valuation, legal, tax, or loan approval advice.",
    ],
    caveats: [
      "ABSD, BSD, HDB, CPF, MAS and lender rules must be rechecked before commitment.",
      "Market comparables are demo analytical placeholders until licensed transaction feeds are connected.",
    ],
  };
}

function mergeChecklist(defaults: ChecklistItem[], saved: ChecklistItem[]) {
  return defaults.map((item) => saved.find((savedItem) => savedItem.label === item.label) ?? item);
}

export function currency(value: number) {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);
}

export function percent(value: number) {
  return `${(Number.isFinite(value) ? value : 0).toFixed(1)}%`;
}
