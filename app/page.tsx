"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  analyseDecision,
  createDefaultDecision,
  currency,
  normaliseDecision,
  percent,
  type Assumptions,
  type CurrentProperty,
  type Household,
  type PropertyDecision,
  type TargetPurchase,
} from "@/lib/proplens/calculations";

const supabase = createClient();

export default function Home() {
  const [decisions, setDecisions] = useState<PropertyDecision[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [draft, setDraft] = useState<PropertyDecision>(() => createDefaultDecision());
  const [notice, setNotice] = useState("Loading saved decisions from Supabase...");
  const [isSaving, setIsSaving] = useState(false);

  const computed = useMemo(() => analyseDecision(draft), [draft]);
  const activeDecision = { ...draft, ...computed, status: "ready" as const };
  const analysis = computed.analysis;

  useEffect(() => {
    void loadDecisions();
  }, []);

  async function loadDecisions() {
    const { data, error } = await supabase
      .from("property_decisions")
      .select("*")
      .order("updated_at", { ascending: false });

    if (error) {
      setNotice(`Database needs the migration in supabase/migrations applied: ${error.message}`);
      return;
    }

    const rows = (data ?? []).map(normaliseDecision);
    if (rows.length === 0) {
      await createDecision("Lim household demo");
      return;
    }

    setDecisions(rows);
    setActiveId(rows[0].id ?? null);
    setDraft(rows[0]);
    setNotice("Connected to Supabase. Every save updates the database.");
  }

  async function createDecision(name?: string) {
    const next = createDefaultDecision();
    next.client_name = name ?? `Household ${decisions.length + 1}`;
    const enriched = { ...next, ...analyseDecision(next), status: "ready" as const };
    const { data, error } = await supabase.from("property_decisions").insert(toPayload(enriched)).select("*").single();

    if (error) {
      setNotice(`Could not create decision: ${error.message}`);
      return;
    }

    const saved = normaliseDecision(data);
    setDecisions((current) => [saved, ...current]);
    setActiveId(saved.id ?? null);
    setDraft(saved);
    setNotice(`${saved.client_name} was created in Supabase.`);
  }

  async function saveDecision() {
    setIsSaving(true);
    const payload = toPayload(activeDecision);
    const request = activeId
      ? supabase.from("property_decisions").update(payload).eq("id", activeId).select("*").single()
      : supabase.from("property_decisions").insert(payload).select("*").single();
    const { data, error } = await request;
    setIsSaving(false);

    if (error) {
      setNotice(`Save failed: ${error.message}`);
      return;
    }

    const saved = normaliseDecision(data);
    setActiveId(saved.id ?? null);
    setDraft(saved);
    setDecisions((current) => [saved, ...current.filter((item) => item.id !== saved.id)]);
    setNotice(`Saved ${saved.client_name}. Recommendation, timeline, checklist and report are persisted.`);
  }

  async function deleteDecision() {
    if (!activeId) return;
    const { error } = await supabase.from("property_decisions").delete().eq("id", activeId);

    if (error) {
      setNotice(`Delete failed: ${error.message}`);
      return;
    }

    const remaining = decisions.filter((item) => item.id !== activeId);
    setDecisions(remaining);
    setActiveId(remaining[0]?.id ?? null);
    setDraft(remaining[0] ?? createDefaultDecision());
    setNotice("Decision deleted from Supabase.");
  }

  function selectDecision(id: string) {
    const selected = decisions.find((item) => item.id === id);
    if (!selected) return;
    setActiveId(id);
    setDraft(selected);
    setNotice(`Editing ${selected.client_name}.`);
  }

  function updateRoot<K extends "client_name" | "objective">(key: K, value: PropertyDecision[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  function updateGroup<T extends Household | CurrentProperty | TargetPurchase | Assumptions>(
    group: "household" | "current_property" | "target_purchase" | "assumptions",
    key: keyof T,
    value: string,
  ) {
    setDraft((current) => {
      const previous = current[group] as Record<string, unknown>;
      const oldValue = previous[key as string];
      const nextValue = typeof oldValue === "number" ? Number(value) : value;
      return { ...current, [group]: { ...previous, [key]: Number.isNaN(nextValue) ? 0 : nextValue } };
    });
  }

  return (
    <main className="min-h-screen bg-[#f6f3ee] text-[#1f2523]">
      <section className="border-b border-[#d7d0c6] bg-[#fbfaf7]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7d2f1b]">PropLens AI</p>
            <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Property decision workspace for Singapore homeowners.
            </h1>
            <p className="mt-3 max-w-3xl text-base text-[#5f6864]">
              Model current value, sale proceeds, CPF impact, buying power, sell-first versus buy-first risk, timeline and report in one flow.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="button secondary" onClick={() => void createDecision()}>
              New decision
            </button>
            <button className="button secondary" onClick={() => void deleteDecision()} disabled={!activeId}>
              Delete
            </button>
            <button className="button" onClick={() => void saveDecision()} disabled={isSaving}>
              {isSaving ? "Saving..." : "Save analysis"}
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-5 lg:grid-cols-[280px_1fr]">
        <aside className="panel h-fit">
          <div className="flex items-center justify-between">
            <h2 className="section-title">Saved Decisions</h2>
            <span className="pill">{decisions.length}</span>
          </div>
          <div className="mt-3 space-y-2">
            {decisions.map((decision) => (
              <button
                key={decision.id}
                className={`saved-item ${decision.id === activeId ? "active" : ""}`}
                onClick={() => selectDecision(decision.id ?? "")}
              >
                <span className="font-semibold">{decision.client_name}</span>
                <span>{decision.objective}</span>
              </button>
            ))}
          </div>
          <p className="mt-4 rounded-md bg-[#fff7e8] p-3 text-sm text-[#6d5c35]">{notice}</p>
        </aside>

        <section className="space-y-5">
          <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
            <div className="panel">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="section-title">Core Inputs</h2>
                  <p className="muted">Change the facts, then save. The engine recalculates without AI.</p>
                </div>
                <div className="score-block">
                  <span>Readiness</span>
                  <strong>{analysis.readinessScore}</strong>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <Field label="Client name" value={draft.client_name} onChange={(value) => updateRoot("client_name", value)} />
                <Field label="Objective" value={draft.objective} onChange={(value) => updateRoot("objective", value)} />
                <Field label="Monthly household income" value={draft.household.monthlyIncome} money onChange={(value) => updateGroup<Household>("household", "monthlyIncome", value)} />
                <Field label="Cash savings" value={draft.household.cashSavings} money onChange={(value) => updateGroup<Household>("household", "cashSavings", value)} />
                <Field label="CPF OA available" value={draft.household.cpfOa} money onChange={(value) => updateGroup<Household>("household", "cpfOa", value)} />
                <Field label="Monthly debts" value={draft.household.monthlyDebt} money onChange={(value) => updateGroup<Household>("household", "monthlyDebt", value)} />
                <Field label="Current property value" value={draft.current_property.estimatedValue} money onChange={(value) => updateGroup<CurrentProperty>("current_property", "estimatedValue", value)} />
                <Field label="Outstanding loan" value={draft.current_property.outstandingLoan} money onChange={(value) => updateGroup<CurrentProperty>("current_property", "outstandingLoan", value)} />
                <Field label="CPF used" value={draft.current_property.cpfUsed} money onChange={(value) => updateGroup<CurrentProperty>("current_property", "cpfUsed", value)} />
                <Field label="CPF accrued interest" value={draft.current_property.cpfAccruedInterest} money onChange={(value) => updateGroup<CurrentProperty>("current_property", "cpfAccruedInterest", value)} />
                <Field label="Target purchase price" value={draft.target_purchase.targetPrice} money onChange={(value) => updateGroup<TargetPurchase>("target_purchase", "targetPrice", value)} />
                <Field label="Mortgage rate" value={draft.target_purchase.mortgageRate} suffix="%" onChange={(value) => updateGroup<TargetPurchase>("target_purchase", "mortgageRate", value)} />
              </div>
            </div>

            <div className="panel">
              <h2 className="section-title">Recommended Direction</h2>
              <p className="mt-3 text-2xl font-semibold">{analysis.recommendationClass}: {analysis.scenarios[0].name}</p>
              <p className="mt-3 text-sm leading-6 text-[#56615d]">{analysis.recommendation}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <Metric label="Value range" value={`${currency(analysis.valuationLow)} - ${currency(analysis.valuationHigh)}`} />
                <Metric label="Net sale cash" value={currency(analysis.netSaleProceeds)} />
                <Metric label="Comfort budget" value={currency(analysis.comfortableBudget)} />
                <Metric label="Confidence" value={analysis.confidence} />
              </div>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            <div className="panel xl:col-span-2">
              <h2 className="section-title">Scenario Comparison</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {analysis.scenarios.map((scenario) => (
                  <article className="scenario" key={scenario.name}>
                    <div className="flex items-start justify-between gap-3">
                      <h3>{scenario.name}</h3>
                      <span className="score">{scenario.score}</span>
                    </div>
                    <p className="pill mt-3">{scenario.className}</p>
                    <dl className="mt-4 space-y-2 text-sm">
                      <Row label="Cash after move" value={currency(scenario.cashAfterMove)} />
                      <Row label="Monthly mortgage" value={currency(scenario.monthlyPayment)} />
                      <Row label="Upfront need" value={currency(scenario.upfrontCashNeed)} />
                    </dl>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#7d2f1b]">Key risk</p>
                    <p className="mt-1 text-sm text-[#56615d]">{scenario.risks[0]}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="panel">
              <h2 className="section-title">Stress Test</h2>
              <div className="mt-4 space-y-3">
                {analysis.stressPayments.map((item) => (
                  <div key={item.rate}>
                    <div className="flex justify-between text-sm">
                      <span>{percent(item.rate)} rate</span>
                      <strong>{currency(item.payment)}</strong>
                    </div>
                    <div className="bar mt-2">
                      <span style={{ width: `${Math.min(100, item.tdsrUsage)}%` }} />
                    </div>
                    <p className="mt-1 text-xs text-[#6c7470]">TDSR usage {percent(item.tdsrUsage)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
            <div className="panel">
              <h2 className="section-title">Transaction Timeline</h2>
              <div className="mt-5 space-y-4">
                {computed.timeline.map((item) => (
                  <div className="timeline-item" key={item.title}>
                    <div className="timeline-dot" />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3>{item.title}</h3>
                        <span className="pill">Month {item.month}</span>
                        <span className={`risk ${item.risk.toLowerCase()}`}>{item.risk}</span>
                      </div>
                      <p className="mt-1 text-sm text-[#66706b]">
                        {item.durationWeeks} weeks · {item.owner} · cashflow {currency(item.cashflow)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel">
              <h2 className="section-title">Action Checklist</h2>
              <div className="mt-4 space-y-3">
                {computed.checklist.map((item, index) => (
                  <label className="check-row" key={item.label}>
                    <input
                      type="checkbox"
                      checked={item.done}
                      onChange={(event) => {
                        const checklist = [...computed.checklist];
                        checklist[index] = { ...item, done: event.target.checked };
                        setDraft((current) => ({ ...current, checklist }));
                      }}
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1fr_420px]">
            <div className="panel">
              <h2 className="section-title">Comparable Transactions</h2>
              <div className="mt-4 overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Comparable</th>
                      <th>Date</th>
                      <th>Size</th>
                      <th>Price</th>
                      <th>Similarity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analysis.comparables.map((item) => (
                      <tr key={`${item.project}-${item.date}`}>
                        <td>{item.project}</td>
                        <td>{item.date}</td>
                        <td>{item.sizeSqm} sqm</td>
                        <td>{currency(item.price)}</td>
                        <td>{item.similarity}/100</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel report">
              <h2 className="section-title">Decision Report</h2>
              <h3 className="mt-4 text-xl font-semibold">{computed.report.headline}</h3>
              <p className="mt-3 text-sm leading-6 text-[#56615d]">{computed.report.summary}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#7d2f1b]">Next actions</p>
              <ul className="mt-2 space-y-2 text-sm text-[#56615d]">
                {computed.report.nextActions.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <button className="button mt-5 w-full" onClick={() => window.print()}>
                Download / print report
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  money,
  suffix,
}: {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  money?: boolean;
  suffix?: string;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <div className="input-wrap">
        {money ? <b>S$</b> : null}
        <input value={value} onChange={(event) => onChange(event.target.value)} inputMode={typeof value === "number" ? "decimal" : "text"} />
        {suffix ? <b>{suffix}</b> : null}
      </div>
    </label>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-[#68736f]">{label}</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  );
}

function toPayload(decision: PropertyDecision) {
  return {
    client_name: decision.client_name,
    objective: decision.objective,
    status: decision.status,
    household: decision.household,
    current_property: decision.current_property,
    target_purchase: decision.target_purchase,
    assumptions: decision.assumptions,
    analysis: decision.analysis ?? {},
    timeline: decision.timeline ?? [],
    checklist: decision.checklist ?? [],
    report: decision.report ?? {},
  };
}
