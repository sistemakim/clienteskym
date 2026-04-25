import { formatMoney, formatInt } from '@/utils/format';

type SummaryData = {
    NoCta?: string | number;
    Nombre?: string;
    SubTot0?: number | string | null;
    Anticipo?: number | string | null;
    Abonos?: number | string | null;
    TotPorCob?: number | string | null;
    Puntos?: number | string | null;
};

const money = (v: number | string | null | undefined) =>
    formatMoney(v) || '$0.00';
const intg = (v: number | string | null | undefined) =>
    formatInt(v) || '0';

function initials(name: string | undefined): string {
    if (!name) return 'HCE';
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return 'HCE';
    const letters = parts.slice(0, 2).map((p) => p[0]?.toUpperCase() ?? '').join('');
    return letters || 'HCE';
}

export default function Summary({ data }: { data: SummaryData }) {
    const name = data.Nombre?.trim() || 'Cliente';

    return (
        <div className="rounded-2xl border border-ink/15 bg-white p-5 sm:p-6">
            <h2 className="mb-5 text-lg font-semibold tracking-tight text-ink">Resumen de cuenta</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-0">
                {/* Left: identity */}
                <div className="flex flex-col gap-4 md:gap-6 md:pr-6">
                    <div className="flex flex-row">
                        <div className="grid h-14 w-14 place-items-center rounded-full border border-ink bg-ink text-sm font-semibold text-gold ring-2 ring-inset ring-gold">
                            {initials(data.Nombre)}
                        </div>

                        <div className="min-w-0 ml-4">
                            <p className="truncate text-2xl font-semibold tracking-tight text-ink">
                                Cuenta · {data.NoCta ?? '—'}
                            </p>
                            <p className="mt-1/2 text-md uppercase tracking-[0.18em] text-ink/55">
                                {name}
                            </p>
                        </div>
                    </div>

                    <div className="md:mt-auto">
                        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-goldSoft px-3 py-1.5 text-md font-medium text-ink">
                            <span aria-hidden>★</span>
                            <span className="tabular-nums">{intg(data.Puntos)}</span>
                            <span>puntos disponibles</span>
                        </span>
                    </div>
                </div>

                {/* Right: financials */}
                <div className="flex flex-col gap-5 border-t border-ink/10 pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-ink/55">
                            Por cobrar
                        </p>
                        <p className="mt-2 text-4xl font-semibold leading-none tracking-tight text-ink tabular-nums sm:text-5xl">
                            {money(data.TotPorCob)}
                        </p>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <BreakdownRow label="Crédito" value={money(data.SubTot0)} />
                        <BreakdownRow label="Anticipo" value={money(data.Anticipo)} />
                        <BreakdownRow label="Abono total" value={money(data.Abonos)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function BreakdownRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-baseline justify-between border-b border-dashed border-ink/10 pb-2 last:border-b-0 last:pb-0">
            <span className="text-sm text-ink/65">{label}</span>
            <span className="text-base font-medium tabular-nums text-ink">{value}</span>
        </div>
    );
}
