create extension if not exists "pgcrypto";

create table if not exists public.property_decisions (
  id uuid primary key default gen_random_uuid(),
  client_name text not null default 'Demo household',
  objective text not null default 'Upgrade from HDB to condo',
  status text not null default 'draft' check (status in ('draft', 'ready', 'archived')),
  household jsonb not null default '{}'::jsonb,
  current_property jsonb not null default '{}'::jsonb,
  target_purchase jsonb not null default '{}'::jsonb,
  assumptions jsonb not null default '{}'::jsonb,
  analysis jsonb not null default '{}'::jsonb,
  timeline jsonb not null default '[]'::jsonb,
  checklist jsonb not null default '[]'::jsonb,
  report jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists property_decisions_set_updated_at on public.property_decisions;
create trigger property_decisions_set_updated_at
before update on public.property_decisions
for each row
execute function public.set_updated_at();

alter table public.property_decisions enable row level security;

drop policy if exists "demo read property decisions" on public.property_decisions;
create policy "demo read property decisions"
on public.property_decisions for select
to anon, authenticated
using (true);

drop policy if exists "demo insert property decisions" on public.property_decisions;
create policy "demo insert property decisions"
on public.property_decisions for insert
to anon, authenticated
with check (true);

drop policy if exists "demo update property decisions" on public.property_decisions;
create policy "demo update property decisions"
on public.property_decisions for update
to anon, authenticated
using (true)
with check (true);

drop policy if exists "demo delete property decisions" on public.property_decisions;
create policy "demo delete property decisions"
on public.property_decisions for delete
to anon, authenticated
using (true);

create index if not exists property_decisions_updated_at_idx
on public.property_decisions (updated_at desc);

insert into public.property_decisions (
  client_name,
  objective,
  status,
  household,
  current_property,
  target_purchase,
  assumptions
)
select
  'Lim household',
  'Assess whether to sell a Tampines 4-room HDB before buying a condo',
  'ready',
  '{
    "citizenship": "Singapore Citizen household",
    "monthlyIncome": 14500,
    "cashSavings": 168000,
    "cpfOa": 182000,
    "monthlyDebt": 850,
    "monthlyExpenses": 5600,
    "riskTolerance": "Balanced",
    "targetMonths": 9
  }'::jsonb,
  '{
    "propertyType": "HDB 4-room",
    "town": "Tampines",
    "floorAreaSqm": 93,
    "purchasePrice": 455000,
    "purchaseYear": 2016,
    "outstandingLoan": 218000,
    "cpfUsed": 148000,
    "cpfAccruedInterest": 28000,
    "estimatedValue": 690000,
    "monthlyRental": 3300,
    "remainingLease": 70
  }'::jsonb,
  '{
    "propertyType": "Private condo",
    "targetPrice": 1380000,
    "buyerStampDuty": 38400,
    "additionalBuyerStampDuty": 0,
    "legalFees": 3500,
    "renovationBudget": 45000,
    "mortgageRate": 3.6,
    "loanTenureYears": 25
  }'::jsonb,
  '{
    "valuationConfidence": 82,
    "marketGrowthRate": 2.5,
    "sellingCostsRate": 2.2,
    "emergencyMonths": 6
  }'::jsonb
where not exists (
  select 1 from public.property_decisions where client_name = 'Lim household'
);
