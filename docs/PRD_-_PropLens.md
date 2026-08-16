**Product Requirements Document**

**AI-Powered Property Advisory Platform — Singapore**

**Document status:** Product concept / Development PRD
**Launch market:** Singapore
**Primary platforms:** Responsive web application; mobile web first, native app later
**Primary audiences:** Consumers, homeowners, buyers, property investors, real estate advisors and agencies
**Product category:** PropTech / AI Property Advisory / Financial Decision Support
**Recommended MVP horizon:** 12–16 weeks for a focused first release

**Executive Summary**

The proposed product is an AI-powered property advisory platform that helps Singapore property consumers answer four fundamental questions:

# 1. What is happening in the property market?
# 2. What is my existing property really worth, and what should I do with it?
# 3. What property can I realistically afford?
# 4. How and when should I execute my property plan?

Rather than functioning as another property listing portal, the product functions as a **property decision intelligence layer**.

It combines:

- property-market data;
- transaction comparables;
- household financial information;
- CPF considerations;
- mortgage rules;
- taxes and stamp duties;
- property regulations;
- user goals;
- scenario modelling; and
- conversational AI.

The resulting experience should resemble having a property analyst, financial modeller and planning assistant working alongside the client, while preserving clear boundaries around regulated financial, legal and estate-agency advice.

The central product principle is:

**Do not merely show users properties. Help them understand what property decision makes sense, why it makes sense, what it will cost, what could go wrong, and what they should do next.**

**1. Product Overview**

**1.1 Product Name Suggestions**

**Recommended**

**PropLens AI**

Positioning:

See your property position clearly.

Advantages:

- conveys analysis rather than property search;
- suitable for both consumers and advisors;
- works internationally if expansion occurs;
- lends itself to features such as PropLens Score, PropLens Report and PropLens Timeline.

**Alternatives**

|  |  |
| --- | --- |
| **Name** | **Positioning** |
| HomeWise AI | Friendly consumer property advisor |
| Property Compass | Guides major property decisions |
| HomePath AI | Emphasises planning and timelines |
| PropIntel | More analytical/B2B positioning |
| KeyPlan | Property and financial planning |
| HomeSignal | Market intelligence positioning |
| PropertyOS | Broader future platform positioning |
| NestWise | Family/homebuyer-oriented |
| PropPilot | AI co-pilot for property decisions |
| HomeStrategy AI | Premium advisory positioning |

For the remainder of this PRD, the working name is **PropLens AI**.

**1.2 One-Sentence Description**

**PropLens AI is a Singapore property decision-intelligence platform that combines market data, property valuation, household finances and AI-driven scenario modelling to help consumers decide what to buy, sell, hold or upgrade—and when.**

**1.3 Vision**

To make high-quality property decision support accessible to every Singapore household by turning fragmented property, financial and regulatory information into clear, personalised and actionable decisions.

**1.4 Target Market**

**Initial market**

Singapore residential property.

**Initial property segments**

- HDB resale flats
- HDB BTO/SBF where relevant to affordability planning
- Executive Condominiums
- Private condominiums
- Private apartments

**Later expansion**

- landed residential property;
- new-launch private property;
- investment portfolios;
- commercial property;
- overseas property.

**1.5 Primary Value Proposition**

PropLens answers:

**“Given the market, my property, my finances and my life plans, what should I realistically do next?”**

Existing portals largely answer:

“What properties are available?”

PropLens instead connects:

**Market → Property → Household → Options → Decision → Timeline → Action**

**1.6 Why This Product Matters**

Property decisions in Singapore involve multiple interconnected systems:

- URA/HDB market information;
- bank financing;
- CPF;
- HDB eligibility;
- TDSR;
- MSR;
- LTV limits;
- BSD;
- ABSD;
- SSD;
- property tax;
- legal processes;
- CPF refunds and accrued interest;
- transaction timing;
- sale proceeds;
- renovation;
- temporary housing;
- retirement considerations.

Consumers frequently evaluate these separately.

That creates three problems:

**Information fragmentation:** the answer exists across many websites, calculators, agents, bankers and government portals.

**Calculation fragmentation:** affordability, sale proceeds and purchase costs are often calculated independently even though they affect each other.

**Decision fragmentation:** knowing that a household can technically afford a property does not mean buying it is financially prudent.

PropLens connects these decisions.

**1.7 Problems Solved for Consumers**

- “I don't know whether property prices are actually rising in my segment.”
- “Online valuations give me different numbers.”
- “I don't know how much cash I will have after selling.”
- “I don't understand how CPF refund affects my proceeds.”
- “I don't know my realistic purchasing budget.”
- “I don't know whether I should sell before buying.”
- “I don't know what happens if interest rates increase.”
- “I don't understand ABSD/BSD/SSD implications.”
- “I don't know whether upgrading improves or worsens my financial position.”
- “I have no idea how long the process takes.”
- “Different agents tell me different things.”

**1.8 Problems Solved for Advisors and Agencies**

PropLens helps advisors:

- qualify leads;
- structure discovery conversations;
- collect client information consistently;
- generate client analyses faster;
- quantify recommendations;
- demonstrate alternatives visually;
- create professional reports;
- identify financial constraints earlier;
- monitor client readiness;
- track property opportunities;
- reduce repetitive calculations;
- improve follow-up;
- demonstrate value beyond listing access.

The product should **augment rather than replace professional advisors**.

**2. Target Users and Personas**

**Persona 1 — Existing Homeowner Considering Selling**

**Example:** 43-year-old condo owner.

**Goals**

- understand current value;
- determine profit after sale;
- assess future upside;
- decide whether selling now is sensible.

**Pain points**

- conflicting valuations;
- unclear net proceeds;
- emotional attachment;
- uncertainty about market timing.

**Current behaviour**

- searches PropertyGuru/99.co;
- asks multiple agents;
- checks recent transactions;
- uses spreadsheets/calculators.

**Questions**

- What is my property worth?
- How much will I actually receive?
- Could prices increase further?
- What are nearby units selling for?
- Should I wait another year?

**Emotional concerns**

- fear of selling too cheaply;
- fear of missing the market peak;
- fear of regretting the decision.

**Decision triggers**

- attractive valuation;
- family changes;
- job changes;
- approaching SSD expiry;
- mortgage-rate changes.

**Desired outcome**

A clear **Hold vs Sell** recommendation supported by numbers.

**Persona 2 — Homeowner Considering Upgrading**

**Goals**

- move from HDB to condo or condo to larger property;
- understand upgrade affordability;
- preserve adequate liquidity.

**Pain points**

- uncertain sale proceeds;
- CPF refund complexity;
- ABSD exposure;
- timing risk.

**Key questions**

- How much can I upgrade to?
- Should I buy or sell first?
- How much cash will I need?
- What happens if my existing property takes six months to sell?

**Emotional concerns**

- temporary homelessness;
- bridging-finance risk;
- overextending financially.

**Decision trigger**

Family growth, income increase or significant home equity.

**Desired outcome**

A realistic upgrade plan with financial and timing buffers.

**Persona 3 — First-Time Buyer**

**Goals**

- buy within budget;
- understand HDB versus condo;
- understand CPF and financing.

**Pain points**

- complex terminology;
- difficulty estimating true costs;
- uncertainty about affordability.

**Key questions**

- How much can I afford?
- How much cash do I need?
- HDB or condo?
- Should I wait?

**Emotional concern**

Fear of making a million-dollar mistake.

**Desired outcome**

A recommended property budget and readiness plan.

**Persona 4 — Property Investor**

**Goals**

- maximise risk-adjusted returns;
- identify strong rental demand;
- compare locations.

**Pain points**

- gross yield presented without costs;
- uncertain appreciation;
- ABSD materially changes economics.

**Questions**

- Which areas have stronger yields?
- New launch or resale?
- What is my net yield?
- How sensitive is my return to interest rates?

**Decision triggers**

Price dislocation, rental growth, financing opportunities or new infrastructure.

**Desired outcome**

Risk-adjusted investment scenarios rather than speculative price forecasts.

**Persona 5 — Newly Married Couple / Young Family**

**Goals**

- secure first family home;
- remain near parents/schools/work;
- retain financial flexibility.

**Pain points**

- conflicting preferences;
- childcare costs;
- renovation costs;
- future income uncertainty.

**Questions**

- How much should we spend?
- BTO or resale?
- Can we afford a condo?
- How much emergency cash should remain?

**Emotional concern**

Balancing aspiration against financial security.

**Desired outcome**

A sustainable housing budget linked to life goals.

**Persona 6 — Retiree Rightsizing**

**Goals**

- release housing equity;
- reduce housing costs;
- maintain accessibility;
- preserve retirement funds.

**Pain points**

- CPF implications;
- unfamiliarity with current prices;
- emotional attachment.

**Questions**

- How much cash could rightsizing release?
- Should I move from private property to HDB?
- How will the transaction affect CPF?
- What housing costs will I have afterward?

**Desired outcome**

A retirement-oriented property strategy.

**Persona 7 — Real Estate Advisor**

**Goals**

- qualify clients quickly;
- demonstrate expertise;
- shorten analysis time;
- improve conversion.

**Pain points**

- repetitive calculations;
- scattered client information;
- manually generated presentations;
- leads that are financially unready.

**Questions**

- Is this client transaction-ready?
- What is their true budget?
- Which scenario should I present?
- What is the next best action?

**Desired outcome**

An advisor co-pilot that turns client information into structured recommendations and reports.

**3. Core Use Cases**

**UC1 — “What is happening in the property market now?”**

User selects:

- Singapore overall;
- property type;
- district/town;
- tenure;
- bedroom/flat type;
- price band.

System provides:

- price direction;
- transaction volume;
- rental direction;
- supply;
- demand indicators;
- new launches;
- relevant policies;
- interest-rate context;
- AI interpretation.

Output:

**Facts → interpretation → implications → risks → what to watch.**

**UC2 — “How much is my property worth?”**

Flow:

Address → property identification → property attributes → comparable transactions → valuation model → range → confidence → supporting comparables.

Never present an AVM result as an exact guaranteed sale price.

**UC3 — “Should I sell, hold or upgrade?”**

System combines:

- current value;
- outstanding mortgage;
- CPF refund;
- appreciation;
- remaining lease;
- market outlook;
- household finances;
- replacement-property cost;
- transaction costs.

Output example:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Strategy | Financial fit | Market fit | Risk | Recommendation |
| Hold | 82 | 73 | Low | Strong |
| Sell | 71 | 78 | Medium | Viable |
| Upgrade | 66 | 69 | High | Conditional |

**UC4 — “Can I afford a $1.5M home?”**

System calculates:

- likely loan requirement;
- indicative loan eligibility;
- TDSR/MSR where applicable;
- LTV;
- down payment;
- minimum cash;
- CPF usage;
- BSD;
- ABSD;
- legal fees;
- renovation allowance;
- emergency buffer;
- monthly mortgage.

Result should distinguish:

**Eligible budget** from **comfortable budget**.

**UC5 — “When should I buy?”**

Evaluate:

- financial readiness;
- required savings;
- debt reduction;
- lease/tenancy expiry;
- expected sale;
- major life events;
- market conditions.

Output:

**Ready now / nearly ready / prepare first / currently unsuitable.**

**UC6 — Buying Timeline**

Typical milestones:

Financial assessment → financing approval/HFE → search → shortlist → offer/OTP → valuation/due diligence → exercise → legal process → completion → renovation → move.

**UC7 — Selling Timeline**

Property analysis → pricing strategy → preparation → listing → viewings → negotiation → OTP → exercise → legal completion → mortgage discharge → CPF refund → proceeds.

**UC8 — Sell First vs Buy First**

The simulator compares:

- ABSD implications;
- temporary housing;
- bridging requirements;
- timing pressure;
- price risk;
- cash requirements;
- financing;
- overlap.

**UC9 — Interest-Rate Stress Test**

Calculate monthly mortgage at:

- current assumption;
- +0.5%;
- +1%;
- +2%;
- configurable severe case.

Show impact on:

- mortgage;
- TDSR;
- disposable income;
- affordability score.

**UC10 — “What fits my budget?”**

Property universe filtered by:

- total purchase budget;
- comfortable monthly payment;
- minimum cash reserve;
- location;
- property type;
- tenure;
- bedrooms;
- commute;
- schools;
- investment/own-stay objective.

**4. Functional Requirements**

**A. AI Chat Assistant**

**FR-A1 Natural Language Q&A**

Support property questions in conversational English, with future support for Mandarin, Malay and Tamil.

**FR-A2 Progressive Discovery**

AI should request missing decision-critical information rather than immediately guessing.

**FR-A3 Personalisation**

Responses use:

- household profile;
- property profile;
- financial profile;
- goals;
- risk tolerance;
- preferred locations;
- target timeline.

**FR-A4 Scenario Comparison**

Users can ask:

“Compare selling now versus waiting 18 months.”

System produces a structured comparison.

**FR-A5 Explainability**

Every recommendation must expose:

- assumptions;
- calculations;
- important data;
- uncertainty;
- recommendation drivers.

**FR-A6 Sources**

Market claims display:

- source;
- data period;
- update timestamp;
- link where permissible.

**FR-A7 Memory**

Store—with consent—stable profile information separately from conversational history.

Users must be able to view, edit and delete stored information.

**FR-A8 Guardrails**

The assistant must never claim:

- guaranteed appreciation;
- guaranteed sale price;
- guaranteed mortgage approval;
- guaranteed investment return.

**B. Market Trends Dashboard**

Dashboard dimensions:

**Geography**

- Singapore
- region
- district
- planning area
- HDB town
- project

**Property**

- HDB
- EC
- condo
- apartment
- landed
- tenure
- unit type

**Metrics**

- median/average transaction price;
- PSF;
- price index;
- transaction volume;
- rental PSF;
- estimated yield;
- inventory/supply;
- developer sales;
- pipeline supply.

Each chart requires:

- time period;
- source;
- update date;
- tooltip;
- AI explanation.

**C. Property Valuation Module**

**Inputs**

- address;
- project;
- property type;
- floor area;
- tenure;
- lease commencement;
- floor;
- stack/view where available;
- bedrooms;
- condition;
- renovation;
- purchase date;
- purchase price;
- occupancy;
- rental;
- mortgage balance;
- CPF used.

**Outputs**

**Valuation**

Example:

**Estimated value: S$1.42M–S$1.50M**
Midpoint: S$1.46M
Confidence: 82/100

**Comparables**

Show:

- distance;
- transaction date;
- size;
- floor;
- tenure;
- price;
- PSF;
- similarity score.

**Performance**

Calculate:

- nominal appreciation;
- CAGR;
- equity;
- estimated sale proceeds;
- gross/net rental yield.

**Decision support**

Return:

- hold;
- sell;
- rent;
- refinance/reprice consideration;
- upgrade analysis.

Recommendations must be conditional rather than deterministic.

**D. Financial Readiness Module**

**Inputs**

Household:

- citizenship/residency;
- age;
- employment;
- gross income;
- variable income;
- spouse/co-borrower income.

Assets:

- cash;
- CPF OA;
- investments optionally counted toward liquidity.

Liabilities:

- housing loans;
- car loans;
- personal loans;
- credit obligations;
- other recurring debt.

Property:

- target price;
- property type;
- existing properties;
- ownership percentage.

Expenses:

- living costs;
- childcare;
- insurance;
- recurring commitments.

**Outputs**

**Indicative loan capacity**

Constrained by applicable:

- TDSR;
- MSR;
- LTV;
- tenure;
- age;
- lender assumptions.

**Purchase funding**

Display:

**Cash + CPF + financing → property + taxes + costs + reserve**

**Affordability Score**

0–100.

Dimensions:

- financing eligibility;
- upfront liquidity;
- monthly servicing;
- emergency reserve;
- rate resilience;
- retirement/CPF impact.

**Three budgets**

Always distinguish:

# 1. Maximum theoretical budget
# 2. Prudent budget
# 3. Comfortable budget

**E. Decision Engine**

The decision engine must be separate from the LLM.

The LLM explains results; deterministic services and validated analytical models calculate financial outputs.

**Framework**

Each scenario receives scores for:

**Financial feasibility — 30%**

**Liquidity — 20%**

**Monthly sustainability — 15%**

**Market attractiveness — 10%**

**Property fundamentals — 10%**

**Timeline feasibility — 10%**

**Risk alignment — 5%**

Weights are configurable.

The engine returns:

- score;
- recommendation class;
- major positives;
- major risks;
- missing information;
- sensitivity.

**F. Timeline Planner**

Timeline types:

- purchase;
- sale;
- HDB upgrade;
- private-property upgrade;
- buy-first;
- sell-first.

Every milestone contains:

- title;
- planned date;
- estimated duration;
- prerequisite;
- owner;
- status;
- documents;
- expected cashflow;
- risk;
- reminder.

Views:

**Gantt | Checklist | Calendar | Cashflow**

Critical dependencies should be visually highlighted.

**G. Report Generator**

Reports:

# 1. Property Market Brief
# 2. Property Valuation Report
# 3. Homeowner Strategy Report
# 4. Buyer Readiness Report
# 5. Upgrade Strategy Report
# 6. Transaction Timeline Report

Each report contains:

- executive summary;
- client objective;
- key data;
- assumptions;
- analysis;
- scenarios;
- recommendation;
- risks;
- action plan;
- sources;
- disclaimers.

Advisor edition adds:

- advisor logo;
- advisor details;
- agency branding;
- consultation CTA.

**5. AI Capabilities**

**Behaviour Principles**

The assistant should be:

**Clear**

Avoid unexplained industry terminology.

**Analytical**

Use numbers whenever meaningful.

**Calibrated**

Say:

“Based on the information available…”

rather than:

“You should definitely sell.”

**Curious**

Ask high-value clarification questions.

**Transparent**

Separate:

- verified fact;
- user input;
- calculation;
- estimate;
- AI interpretation.

**Decision-oriented**

Every substantial analysis should conclude with:

# 1. what the evidence suggests;
# 2. biggest uncertainties;
# 3. risks;
# 4. next action.

**Confidence Framework**

**High confidence**

Strong data coverage + recent comparable evidence + complete user profile.

**Medium confidence**

Some assumptions or weaker comparable coverage.

**Low confidence**

Sparse transactions, unusual property or missing information.

**Sample AI Response — “Should I sell my condo now?”**

I wouldn't make that decision from market direction alone. I would first compare your likely net sale proceeds against the value of holding the property.

Based on the information you've provided, I would analyse four things: your property's current valuation and comparable transactions; the remaining mortgage and CPF refund; expected holding returns over the next 2–3 years; and what you intend to do with the proceeds.

If your unit is worth approximately S$1.6M, that does not mean you have S$1.6M available for your next purchase. We first need to deduct the outstanding loan, CPF refund, transaction expenses and any applicable taxes.

**Preliminary view:** Hold/Sell analysis cannot yet be rated with high confidence.

**I need three more details:** your purchase price and date, outstanding mortgage, and approximate CPF principal plus accrued interest used for the property.

**Sample — “Can I afford a $1.5M home?”**

Potentially—but “qualifying for a loan” and “comfortably affording the property” are different questions.

I would test the purchase against five constraints: borrowing capacity, down payment, cash requirement, CPF availability and your post-purchase emergency reserve.

I would also stress-test the mortgage at higher interest rates before recommending a comfortable budget.

If you provide your household income, existing monthly debt, cash savings, CPF OA balance, ages and whether either buyer already owns residential property, I can model the S$1.5M purchase and compare it with a safer budget.

**Sample — “Is now a good time to enter?”**

There isn't one answer for the whole Singapore market. HDB resale, OCR condos, CCR condos and individual projects can behave differently.

I would separate the question into **market attractiveness** and **your personal readiness**. A reasonably attractive market can still be the wrong time for you if the purchase leaves you with insufficient liquidity.

Tell me whether you're buying for own stay or investment, your approximate budget and the property segment you're considering. I can then evaluate current market conditions against your financial position.

**Sample — “How long will it take to sell?”**

I would plan using a range rather than promise a completion date.

The timeline depends on property type, asking price, competing listings, buyer demand, financing, negotiation and the legal completion process.

I can create three scenarios—fast, expected and delayed—and show when you could realistically expect proceeds to become available for your next purchase.

**6. Data Requirements**

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Dataset | Purpose | Frequency | Key fields | Potential source | MVP |
| Private transactions | AVM/comps | Frequent | project, date, area, floor, price, PSF | URA/REALIS/licensed provider | Yes |
| Private rentals | Yield | Frequent | project, rent, area, lease period | URA/REALIS/provider | Yes |
| HDB resale | Valuation | Monthly/frequent | town, block, flat type, floor, area, lease, price | HDB/data.gov.sg | Yes |
| HDB price index | Market trend | Quarterly | quarter, index | HDB | Yes |
| Private price index | Market trend | Quarterly | segment/index | URA | Yes |
| Supply pipeline | Market | Quarterly | units, completion, location | URA | Should |
| Listings | Asking-market context | Near-real-time | price, property, date | portal/provider agreements | Future |
| Mortgage rates | Affordability | Daily/weekly | rate, lock-in, tenure | banks/broker/provider | Should |
| Regulatory rules | Calculations | Event driven | rule/effective date | MAS/HDB/IRAS/CPF | Yes |
| CPF rules | Funding | Event driven | usage rules | CPF Board | Yes |
| Stamp duties | Cost | Event driven | thresholds/rates | IRAS | Yes |
| MRT | Location | Periodic | station, line, coordinates | LTA/data.gov.sg | Should |
| Schools | Location | Annual | school/location | MOE | Should |
| Amenities | Location | Periodic | POI/type | government/map provider | Future |
| Planning/development | Future potential | Periodic | zoning/plans | URA | Future |
| User financial data | Personalisation | User driven | income/assets/debt | user | Yes |

**Data Reliability Rules**

Every data object should contain:

- source
- source\_url
- effective\_date
- retrieved\_at
- data\_version
- confidence
- licence
- expiry\_or\_review\_date

Government policy data should be version-controlled.

**Never overwrite an old rule without preserving its effective period.**

Example:

SSD\_RULE\_VERSION\_2025\_07\_04

This allows historical transactions to be calculated correctly.

**7. Calculation and Recommendation Logic**

**7.1 Property Valuation**

Conceptual AVM:

**Estimated value = weighted comparable value + property adjustments + market-time adjustment**

Comparable weight:

W = similarity × recency × proximity × attribute quality

Similarity dimensions:

- same project;
- same property type;
- size;
- floor;
- tenure;
- transaction recency;
- stack/view where available.

The system should generally prefer ranges over point estimates.

**7.2 Appreciation**

**Nominal gain**

Current estimated value – Purchase price

**Percentage appreciation**

Gain / Purchase price × 100

**CAGR**

(Current value / Purchase price)^(1 / years held) – 1

Clearly distinguish price appreciation from true investment return.

**7.3 Rental Yield**

**Gross yield**

Annual rent / Current market value × 100

**Net yield**

(Annual rent – recurring property expenses) / Current market value × 100

Potential expenses:

- property tax;
- maintenance;
- agent fees;
- vacancy;
- repairs;
- insurance.

**7.4 Mortgage Payment**

For principal P, monthly rate r and n payments:

Payment = P × r(1+r)^n / ((1+r)^n – 1)

Provide amortisation schedule when requested.

**7.5 TDSR**

Conceptually:

Total monthly debt obligations / Gross monthly income

Use the current regulatory calculation methodology rather than simply applying the displayed threshold.

**7.6 MSR**

Conceptually:

Applicable monthly property-loan instalments / Gross monthly income

Apply only where legally relevant.

**7.7 Cash Required**

Conceptual calculation:

Purchase price – loan – usable CPF + BSD + ABSD + legal + valuation + renovation + other transaction costs

Separate:

- mandatory cash;
- CPF-eligible;
- optional spending.

**7.8 Net Sale Proceeds**

Sale price
– outstanding mortgage
– CPF refund including applicable accrued interest
– SSD if applicable
– agent fees
– legal expenses
– other sale expenses
= estimated cash proceeds

Also display **CPF returned** separately because CPF refund is not equivalent to cash proceeds.

**7.9 Upgrade Capacity**

Available cash + usable CPF + affordable financing – acquisition costs – required reserve

Run dynamically against replacement-property price.

**7.10 Opportunity Cost**

Compare:

**Hold existing property**

against:

**Sell + alternative property/investment/cash strategy**

Avoid presenting speculative appreciation assumptions as facts.

**7.11 Readiness Score**

Suggested weights:

|  |  |
| --- | --- |
| Component | Weight |
| Financing capacity | 25% |
| Downpayment readiness | 20% |
| Emergency buffer | 15% |
| Mortgage sustainability | 15% |
| Rate resilience | 10% |
| Debt profile | 10% |
| Timeline readiness | 5% |

Classification:

- 80–100: Strong
- 65–79: Generally ready
- 50–64: Conditional
- 35–49: Prepare first
- <35: High financial strain

Scores are decision-support indicators, not credit ratings.

**7.12 Risk Score**

Components:

- leverage;
- liquidity;
- rate sensitivity;
- income concentration;
- timeline dependency;
- market concentration;
- lease risk;
- valuation uncertainty.

**7.13 Recommendation Architecture**

The LLM should **not invent the score**.

Pipeline:

**Structured inputs → calculation services → rules engine → scoring engine → scenario engine → AI explanation**

**Edge Cases**

Must explicitly support:

- self-employed/variable income;
- multiple borrowers;
- multiple properties;
- PR/foreigner ownership;
- decoupled ownership;
- short remaining lease;
- negative equity;
- inherited property;
- partial ownership;
- unusual landed properties;
- recent transactions with few comparables;
- CPF-heavy purchases;
- impending retirement;
- divorce/estate situations;
- trust/entity ownership.

Complex legal/tax structures should trigger professional-review guidance.

**8. User Experience Requirements**

**UX Principle**

**Conversation when exploring. Structured interfaces when calculating.**

Do not force everything through chat.

**8.1 First-Time Onboarding**

Ask:

What are you trying to do?

Cards:

**Understand the market**
**Check my property's value**
**Buy a home**
**Sell my home**
**Upgrade my home**
**Invest in property**

Then progressively collect only relevant information.

**8.2 Profile Architecture**

**Personal profile**

- household;
- residency;
- ages;
- goals;
- timeline.

**Property profile**

Saved properties.

**Financial profile**

Sensitive and permission-controlled.

Users must see exactly which data the AI is using.

**8.3 Chat-First Mode**

Recommended layout:

**Left:** conversations
**Centre:** AI conversation
**Right:** live decision panel

Right panel changes dynamically:

- valuation;
- affordability;
- comparables;
- scenario;
- timeline.

**8.4 Dashboard-First Mode**

Cards:

**My Property**

S$1.46M estimated value
+18.2% since purchase

**Buying Power**

S$1.31M comfortable range

**Readiness**

74/100

**Market**

Neutral-positive

**Next milestone**

Mortgage assessment

**8.5 Scenario Comparison**

Users can save:

- Scenario A: hold;
- Scenario B: sell + HDB;
- Scenario C: sell + condo;
- Scenario D: buy first.

Changing one assumption updates all dependent calculations.

**Suggested Screens**

# 1. Landing
# 2. Goal onboarding
# 3. Household profile
# 4. Property profile
# 5. Financial profile
# 6. AI Advisor
# 7. Market Intelligence
# 8. Property Valuation
# 9. Financial Readiness
# 10. Scenario Simulator
# 11. Timeline Planner
# 12. Report
# 13. Advisor Dashboard
# 14. Client Profile
# 15. Settings/Privacy/Data
# 16. Sources & Methodology

**9. Visual and Interaction Requirements**

**Market charts**

- price index line;
- median PSF;
- volume bars;
- rental trends;
- supply pipeline;
- geographic heat map.

Every chart supports tooltips and source metadata.

**Valuation Range**

Example:

S$1.38M ├────────●────────┤ S$1.51M

Show:

- lower estimate;
- midpoint;
- upper estimate;
- confidence.

**Affordability Meter**

Avoid simplistic green/red presentation.

Show:

- purchase price;
- eligible limit;
- prudent limit;
- comfortable limit.

**Risk Meter**

Dimensions visible individually rather than only one opaque score.

**Timeline**

Gantt visual:

Financing ━━━━━
Search ━━━━━━━━━
OTP ━
Legal ━━━━━━━
Completion ◆
Renovation ━━━━━━━

**Cashflow Diagram**

Example:

Sale proceeds
↓
Mortgage discharge
↓
CPF refund
↓
Cash proceeds
↓
New purchase
↓
Downpayment + BSD/ABSD
↓
Remaining liquidity

**10. MVP Scope**

**MVP Objective**

Prove that users will provide sufficient information to receive a personalised property decision analysis and that advisors find the output valuable enough to use during consultations.

**Must Have**

**AI**

- chat assistant;
- profile-aware conversation;
- source citations;
- assumptions;
- recommendation explanations.

**Market**

- URA/HDB trend summaries;
- basic price/transaction charts.

**Property**

- HDB/condo profile;
- transaction comparables;
- estimated value range.

**Financial**

- household income;
- cash;
- CPF;
- debt;
- indicative TDSR/MSR;
- mortgage calculator;
- BSD/ABSD;
- downpayment;
- affordability range.

**Decision**

- buy now/wait;
- hold/sell;
- basic upgrade scenario;
- sell-first/buy-first comparison.

**Timeline**

- buying;
- selling;
- upgrading;
- milestone checklist.

**Report**

- browser report;
- PDF export.

**Platform**

- authentication;
- saved profile;
- saved scenarios.

**Should Have**

- rental-yield modelling;
- advisor dashboard;
- branded report;
- email reminders;
- interest-rate stress testing;
- richer neighbourhood comparison.

**Could Have**

- live mortgage products;
- live listings;
- project recommendations;
- advisor CRM;
- WhatsApp sharing;
- automatic property monitoring.

**Out of Scope for MVP**

- automated mortgage applications;
- automated legal conveyancing;
- transaction execution;
- autonomous property bidding;
- guaranteed AVM;
- native apps;
- overseas properties;
- full commercial property;
- automated investment execution.

**MVP User Journey**

**Landing**

→ “What are you trying to achieve?”

→ Build profile

→ Optional property profile

→ Financial snapshot

→ AI analysis

→ Scenario comparison

→ Recommended plan

→ Timeline

→ Report

→ Optional advisor consultation.

**MVP Success Criteria**

Within 90 days:

-

60% onboarding completion;

-

50% completed analysis among activated users;

-

30% scenario creation;

-

20% report generation;

- advisor analysis preparation time reduced by ≥50%;
-

4/5 usefulness rating;

- <1% material deterministic-calculation error rate in audited scenarios.

**11. Future Roadmap**

**Phase 1 — Advisory MVP**

Focus:

**Understand → Calculate → Decide → Plan**

**Phase 2 — Advanced Market Analytics**

Add:

- project-level analytics;
- supply analysis;
- neighbourhood scoring;
- historical cycles;
- rental analytics;
- richer AVM.

**Phase 3 — Advisor CRM**

Add:

- lead management;
- client pipeline;
- follow-up;
- opportunity alerts;
- team management.

**Phase 4 — Automated Reports**

Add:

- scheduled reports;
- market updates;
- property monitoring;
- automatic client briefs.

**Phase 5 — Listings and Mortgage Integrations**

Connect:

- listing portals;
- mortgage brokers;
- lenders;
- property feeds.

Allow:

**Financial position → suitable properties**

rather than:

**Property listing → “can I afford it?”**

**Phase 6 — Predictive Recommendation Engine**

Recommend properties based on:

- affordability;
- family needs;
- commute;
- schools;
- tenure;
- liquidity;
- investment characteristics;
- future supply.

Prediction must remain probabilistic and explainable.

**12. Non-Functional Requirements**

**Security**

- TLS in transit;
- encryption at rest;
- secrets management;
- RBAC;
- MFA for advisors/admins;
- rate limiting;
- OWASP protections.

**Privacy**

Financial profiles receive heightened protection.

Users must be able to:

- consent;
- revoke consent;
- download data;
- correct data;
- delete profile;
- control advisor access.

**Data Minimisation**

Collect only information needed for analysis.

Do not require NRIC for normal advisory functionality.

**Accuracy**

Financial calculations require:

- automated tests;
- reference scenarios;
- regulatory versioning;
- regression testing.

**Transparency**

Every market recommendation displays source freshness.

**Performance**

Targets:

- page load <2.5 sec;
- calculator <1 sec;
- normal AI response first feedback <3 sec;
- full complex analysis <15 sec target.

**Availability**

MVP: 99.5% monthly.

Later: 99.9%.

**Auditability**

Store:

- model version;
- prompt template version;
- calculation version;
- rule version;
- source version;
- user inputs;
- generated recommendation.

**Accessibility**

Target WCAG 2.2 AA.

**Responsive Design**

Minimum:

- 360px mobile;
- tablet;
- desktop;
- advisor presentation display.

**13. Compliance and Risk**

**Financial Advice**

The system provides educational information, affordability modelling and decision support.

It must not imply that:

- financing is approved;
- a mortgage product is suitable without appropriate regulated assessment;
- investment returns are guaranteed.

**Legal Advice**

Transaction timelines and documents are informational.

Complex questions should be escalated:

“Please confirm this with your conveyancing lawyer.”

**Real Estate Advice**

Where functionality crosses into estate agency work, product design and operating model must be reviewed against Singapore's CEA framework.

Advisor-facing tools must not obscure advisor responsibility.

**Market Predictions**

Never state:

“This condo will appreciate 15%.”

Instead:

“Under Scenario A, assuming 3% annual price growth…”

**Data Freshness**

Display:

**Source: URA**
**Period: Q2 2026**
**Updated: [date]**

Stale regulatory data should automatically block affected calculations.

**User Input Risk**

Before final recommendation:

“Please confirm these figures.”

Allow editing from the results page.

**Fairness**

Do not infer suitability using:

- ethnicity;
- religion;
- gender;
- other protected or irrelevant characteristics.

Location scoring must be based on objective user-selected criteria.

**Privacy**

Singapore PDPA controls should cover:

- consent;
- purpose limitation;
- access/correction;
- retention;
- protection;
- breach processes;
- cross-border transfers.

**14. Admin and Advisor Features**

**Advisor Dashboard**

Widgets:

- active clients;
- new leads;
- ready-to-buy;
- ready-to-sell;
- reports pending;
- follow-ups;
- watchlist alerts.

**Client Management**

Client record:

- profile;
- objective;
- property;
- financial summary;
- conversations;
- scenarios;
- timeline;
- reports;
- notes.

**Lead Qualification**

Example classifications:

**Hot**

Ready financially + target <90 days.

**Warm**

Financially feasible + target 3–12 months.

**Nurture**

Not yet financially ready.

**Advisor Tools**

- client notes;
- tasks;
- reminders;
- branded reports;
- shareable scenarios;
- meeting presentation mode;
- conversation summaries;
- property watchlists;
- market alerts;
- client readiness alerts.

Sensitive financial fields require explicit client permission.

**15. Metrics and Success Criteria**

**North Star Metric**

**Completed high-confidence property decisions per active user.**

A completed decision requires:

- sufficient profile;
- completed calculation;
- ≥2 scenarios or explicit recommendation;
- action plan.

**Consumer Metrics**

- signup → onboarding completion;
- property profiles created;
- financial assessments completed;
- scenarios simulated;
- reports generated;
- repeat sessions;
- recommendation satisfaction;
- advisor consultations booked.

**Advisor Metrics**

- clients analysed;
- reports generated;
- preparation time;
- consultations;
- lead conversion;
- follow-up completion;
- active client retention.

**Quality Metrics**

- calculation error rate;
- stale-data incidents;
- unsupported AI claims;
- citation accuracy;
- valuation error versus subsequent transaction;
- recommendation override rate;
- user-reported inaccuracies.

**16. Technical Architecture**

**Recommended Architecture**

┌─────────────────────┐

│ Responsive Web App │

│ Next.js / React │

└──────────┬──────────┘

│

API Gateway

│

┌────────────────────┼────────────────────┐

│ │ │

User Service Advisory API Analytics API

│ │ │

│ AI Orchestrator │

│ │ │

│ ┌─────────┼─────────┐ │

│ │ │ │ │

│ Rules RAG LLM │

│ Engine Service │

│ │ │ │

└──────────┼─────────┼───────────────────┘

│ │

PostgreSQL Vector Store

│

Calculation Engine

│

Data Warehouse

▲

│

Ingestion Pipeline

│

URA / HDB / IRAS / CPF / MAS /

mortgage / mapping / other data

**Suggested Stack**

**Frontend**

**Next.js + React + TypeScript**

UI:

**Tailwind CSS + shadcn/ui**

Charts:

**Recharts or Apache ECharts**

Timeline:

custom React timeline/Gantt component.

**Backend**

Recommended:

**Python FastAPI**

Reasons:

- excellent analytical ecosystem;
- suitable for financial calculations;
- AI tooling support;
- strong data-processing ecosystem.

Alternative:

NestJS for general application services with Python calculation/AI microservices.

**Database**

**PostgreSQL**

Extensions:

- PostGIS;
- pgvector where appropriate.

**Cache**

Redis.

**Object Storage**

S3-compatible storage for reports and generated files.

**AI Orchestration**

Dedicated service responsible for:

# 1. intent classification;
# 2. context assembly;
# 3. tool selection;
# 4. structured calculations;
# 5. retrieval;
# 6. model call;
# 7. output validation;
# 8. citation attachment.

**RAG Architecture**

Collections:

**Regulations**

- MAS;
- HDB;
- CPF;
- IRAS;
- CEA.

**Market Commentary**

- URA/HDB releases;
- government announcements.

**Product Knowledge**

- methodologies;
- FAQs;
- advisor content.

Metadata:

source

authority

document\_type

effective\_from

effective\_to

jurisdiction

property\_type

topic

retrieved\_at

version

**Critical AI Architecture Principle**

**Never use RAG as the authoritative calculator.**

RAG retrieves the rule.

The rule engine executes the rule.

Example:

Bad:

Ask the LLM to remember ABSD percentages.

Good:

get\_stamp\_duty\_rules(profile, ownership\_count, transaction\_date)

→ deterministic calculation

→ AI explains result.

**Database Entities**

Core:

- User
- Household
- HouseholdMember
- FinancialProfile
- Income
- Asset
- Liability
- CPFProfile
- Property
- PropertyOwnership
- PropertyTransaction
- RentalTransaction
- Mortgage
- Comparable
- Valuation
- MarketMetric
- Scenario
- ScenarioAssumption
- Calculation
- Recommendation
- Timeline
- Milestone
- Report
- Conversation
- Message
- Citation
- RegulatoryRule
- Advisor
- Agency
- ClientAdvisorRelationship
- Consent
- AuditEvent

**API Design**

Examples:

POST /properties

GET /properties/{id}/comparables

POST /valuations

POST /financial-readiness

POST /calculations/mortgage

POST /calculations/stamp-duty

POST /calculations/sale-proceeds

POST /scenarios

POST /scenarios/{id}/compare

POST /timelines

POST /reports

POST /ai/chat

GET /market/trends

Every calculation response should include:

{

"result": {},

"assumptions": {},

"rule\_versions": [],

"data\_timestamp": "",

"warnings": [],

"confidence": 0

}

**AI Model Usage**

Use a capable reasoning model for:

- ambiguous property questions;
- scenario explanation;
- personalised recommendations;
- report synthesis.

Use smaller/cheaper models for:

- classification;
- extraction;
- conversation summarisation;
- query rewriting.

Do not use LLMs for deterministic arithmetic where code is sufficient.

**Data Update Workflow**

Source

↓

Fetch

↓

Schema validation

↓

Normalisation

↓

Quality checks

↓

Version

↓

Publish

↓

Invalidate affected cache

↓

Trigger monitoring

Policy update:

Government update

→ ingestion

→ human verification

→ new rule version

→ automated test suite

→ approval

→ production

**Security Model**

Separate:

**Identity data**

from:

**Financial data**

from:

**AI conversation logs**

where feasible.

Advisor access should use explicit client-authorisation relationships.

Admin access must be logged.

**17. Example User Stories**

**US1 — Property Valuation**

**As a homeowner, I want to estimate my home's current market value so that I can decide whether selling makes financial sense.**

**Acceptance Criteria**

- User can identify property.
- System retrieves relevant comparables.
- System provides valuation range.
- Confidence is shown.
- Supporting transactions are visible.
- User can adjust property attributes.
- System displays source/update date.
- System never labels estimate as guaranteed sale price.

**US2 — Financial Readiness**

**As a buyer, I want to know what property price I can comfortably afford so that I avoid overcommitting financially.**

**Acceptance Criteria**

- User enters income/assets/debt.
- System calculates indicative financing constraints.
- System calculates cash and CPF needs.
- System calculates stamp duties.
- System displays theoretical and prudent budgets.
- Mortgage stress tests are available.
- Assumptions are shown.

**US3 — Upgrade Analysis**

**As an existing homeowner, I want to compare holding my home against selling and upgrading so that I understand the financial consequences of each choice.**

**Acceptance Criteria**

- Existing-property equity calculated.
- Sale proceeds estimated.
- CPF refund separated from cash.
- Replacement-property cost calculated.
- Scenarios displayed side-by-side.
- Liquidity and mortgage effects shown.

**US4 — Sell First vs Buy First**

**As an upgrader, I want to compare transaction sequences so that I can choose a strategy with manageable cashflow and timing risk.**

**Acceptance Criteria**

Both scenarios show:

- funding;
- ABSD where applicable;
- temporary accommodation;
- overlap;
- financing dependency;
- timeline risk.

**US5 — Market Intelligence**

**As a buyer, I want to understand whether prices in my target area are rising or falling so that I can negotiate with better context.**

**Acceptance Criteria**

- User selects location/property segment.
- Price and volume trends display.
- Data period visible.
- AI provides plain-language interpretation.
- Source citations visible.

**US6 — Timeline**

**As a seller, I want a realistic sale timeline so that I can coordinate my next purchase and move.**

**Acceptance Criteria**

- system generates milestone plan;
- dependencies visible;
- editable target dates;
- delays recalculate dependent milestones;
- cashflow events displayed;
- reminders supported.

**US7 — Advisor Report**

**As a property advisor, I want to generate a client-ready analysis so that I can spend consultation time discussing strategy instead of building spreadsheets.**

**Acceptance Criteria**

- advisor selects client;
- system generates report;
- source data shown;
- advisor branding supported;
- assumptions editable;
- PDF downloadable;
- report stored against client record.

**US8 — AI Explainability**

**As a client, I want to understand why the AI recommends waiting before buying so that I can decide whether I agree with it.**

**Acceptance Criteria**

Recommendation displays:

- primary drivers;
- calculations;
- assumptions;
- uncertainties;
- alternatives;
- actions that could change the recommendation.

**18. Open Questions**

**Business Model**

# 1. Consumer-first, advisor-first or hybrid?
# 2. Free analysis with paid report?
# 3. Advisor subscription?
# 4. Agency enterprise licence?
# 5. Referral revenue from mortgage partners?
# 6. Will reports generate leads for affiliated advisors?

**Product**

# 7. Should MVP support both HDB and private property?
# 8. Should landed property be excluded initially because AVM confidence may be lower?
# 9. Should new launches be included in MVP?
# 10. How much financial information is mandatory?
# 11. Can anonymous users perform basic calculations?
# 12. When is account creation required?

**Data**

# 13. Is REALIS licensing commercially viable?
# 14. Which datasets can legally be cached?
# 15. Can listing portal data be licensed?
# 16. Is project/unit-level data available?
# 17. What geographic enrichment provider should be used?

**AI**

# 18. How much conversational memory should persist?
# 19. Can users disable memory?
# 20. Should recommendations require minimum confidence?
# 21. What situations automatically require human review?

**Regulatory**

# 22. Does the operating model constitute estate agency work in specific user journeys?
# 23. Which functions require a registered RES?
# 24. Where is the boundary between financial education and regulated financial advice?
# 25. What mortgage-referral arrangements are permissible?
# 26. Which disclaimers must accompany calculations?

**Advisors**

# 27. Can advisors override recommendations?
# 28. Should overrides be logged?
# 29. Can advisors modify assumptions?
# 30. Can agencies configure their own recommendation methodology?

**Commercial**

# 31. Is the product ultimately a standalone SaaS product or an advisor lead-generation platform?
# 32. Who owns the client relationship?
# 33. Will agencies white-label it?
# 34. Should users be able to use PropLens without speaking to an agent?

**19. Recommended Product Strategy**

The largest product risk is trying to build:

**Chatbot + PropertyGuru + CRM + AVM + mortgage marketplace + financial planner**

simultaneously.

Do not begin there.

The strongest initial product loop is:

**KNOW → MODEL → DECIDE → PLAN**

**KNOW**

Understand the client's circumstances.

**MODEL**

Calculate property value and financial capacity.

**DECIDE**

Compare realistic scenarios.

**PLAN**

Create the transaction timeline.

That creates a defensible workflow because the value is not simply access to property information.

It is the **relationship between the client's property, finances, market conditions and next decision.**

**Recommended MVP Product Navigation**

Home

│

├── Ask PropLens

│

├── My Property

│ ├── Estimated Value

│ ├── Comparables

│ └── Performance

│

├── My Buying Power

│ ├── Affordability

│ ├── Cash + CPF

│ ├── Mortgage

│ └── Stress Test

│

├── My Options

│ ├── Hold

│ ├── Sell

│ ├── Upgrade

│ └── Buy

│

├── My Plan

│ ├── Timeline

│ ├── Cashflow

│ └── Checklist

│

└── My Report

This information architecture is substantially easier for consumers to understand than organising the interface around industry terminology.

**Core Product Object: The Property Decision**

The most important architectural decision should be to create a first-class object called a:

**Property Decision**

Example:

“Should the Lim household sell their Tampines condo and upgrade to a S$2.1M property within the next 12 months?”

The decision object contains:

Household

+

Existing Property

+

Financial Position

+

Goal

+

Market Context

+

Candidate Scenarios

+

Assumptions

+

Calculations

+

Risks

+

Recommendation

+

Timeline

This becomes the central object linking the consumer app, AI, reports and future advisor CRM.

**Recommended Decision Output**

Every significant analysis should end with the same structure:

**Your Position**

What the system knows.

**Your Numbers**

The financial/property calculations.

**Your Options**

Two to four realistic alternatives.

**Recommended Direction**

The strongest option under current assumptions.

**Why**

Three to five major recommendation drivers.

**Risks**

What could make the recommendation wrong.

**What Would Change This Recommendation?**

Example:

- selling price falls below S$1.42M;
- mortgage rates exceed assumed level;
- household income changes;
- replacement property exceeds S$2.0M.

**Next Three Actions**

Concrete tasks.

**Confidence**

High / Medium / Low, with explanation.

**Singapore-Specific Product Principles**

The platform must understand that Singapore property decisions are not merely mortgage calculations.

The decision graph should incorporate, where relevant:

**Citizenship/residency**

→ property eligibility
→ ABSD position
→ ownership structure

**Property ownership**

→ ABSD
→ financing/LTV considerations
→ sell-first/buy-first economics

**Property type**

→ HDB/private rules
→ MSR applicability
→ eligibility constraints

**Age**

→ financing tenure
→ CPF/retirement implications
→ lease considerations

**Existing property**

→ outstanding mortgage
→ CPF refund
→ sale proceeds
→ SSD

**Target property**

→ BSD
→ ABSD
→ downpayment
→ loan
→ CPF
→ cash

**Sequence**

→ sell first
or
→ buy first

→ materially different cashflow and risk.

This dependency graph should become a core domain service rather than relying on AI prompting alone.

**Product Safety Principle**

PropLens should never pretend that property decisions can be reduced to one algorithmic answer.

Its role is to transform:

**“I don't know what to do.”**

into:

**“These are my three realistic options, this is what each one costs, these are the risks, this is why Option B currently appears strongest, and these are the next actions required to execute it.”**

That is the core user value.

**Definition of MVP Success**

The MVP succeeds if a Singapore homeowner can enter the platform with a question such as:

“I own a 4-room HDB in Tampines. My spouse and I are thinking of buying a condo. Can we afford it, should we sell first, and when should we start?”

and, within approximately 10 minutes, leave with:

# 1. an estimated current-property value;
# 2. relevant comparable transactions;
# 3. estimated sale proceeds;
# 4. CPF/cash implications;
# 5. indicative borrowing capacity;
# 6. realistic purchase budget;
# 7. transaction-cost estimate;
# 8. sell-first versus buy-first scenarios;
# 9. financial stress test;
# 10. recommended strategy;
# 11. confidence and assumptions;
# 12. personalised transaction timeline;
# 13. action checklist; and
# 14. downloadable/shareable decision report.

If PropLens reliably delivers that experience, it has moved beyond being an AI property chatbot and becomes a genuine **property decision platform**.