import { formatMoney, formatInt } from '@/utils/format';

type SummaryData = {
    NoCta?: string | number | null;
    Nombre?: string | null;
    SubTot0?: number | string | null;
    Anticipo?: number | string | null;
    Abonos?: number | string | null;
    TotPorCob?: number | string | null;
    Puntos?: number | string | null;
    CobNom?: string | null;
    CobTel?: string | null;
};

const money = (v: number | string | null | undefined) =>
    formatMoney(v) || '$0.00';
const intg = (v: number | string | null | undefined) =>
    formatInt(v) || '0';

function initials(name: string | null | undefined): string {
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
                    <div className="flex flex-row items-center">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink bg-ink text-sm font-semibold text-gold ring-2 ring-inset ring-gold sm:h-14 sm:w-14">
                            {initials(data.Nombre)}
                        </div>

                        <div className="min-w-0 ml-4">
                            <p className="truncate text-3xl font-semibold tracking-tight text-ink sm:text-3xl">
                                Cuenta · {data.NoCta ?? '—'}
                            </p>
                            <p className="mt-1 truncate text-lg uppercase tracking-[0.18em] text-ink/70 sm:text-base">
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

                    {(data.CobNom || data.CobTel) && (
                        <div className="flex flex-col gap-2 rounded-xl border border-ink/10 p-3 sm:p-4">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-ink/55">
                                Cobrador
                            </p>
                            {data.CobNom && (
                                <p className="truncate text-sm font-medium text-ink">
                                    {data.CobNom}
                                </p>
                            )}
                            {data.CobTel && (() => {
                                const digits = String(data.CobTel).replace(/\D/g, '');
                                if (!digits) return null;
                                const waNumber = digits.length === 10 ? `52${digits}` : digits;
                                const display =
                                    digits.length === 10
                                        ? `(${digits.slice(0, 3)}) ${digits.slice(3, 6)} ${digits.slice(6)}`
                                        : data.CobTel;
                                return (
                                    <a
                                        href={`https://wa.me/${waNumber}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
                                        aria-label={`Enviar WhatsApp al cobrador ${data.CobNom ?? ''} al ${data.CobTel}`}
                                    >
                                        <svg
                                            aria-hidden
                                            viewBox="0 0 24 24"
                                            className="h-4 w-4 fill-current"
                                        >
                                            <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.23.69-1.83.95-2.08.24-.26.51-.29.68-.27h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.96 1.3.25.14.4.12.55-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 1.83A8.16 8.16 0 0 0 3.83 12c0 1.73.54 3.34 1.46 4.66L4.37 19.63l3.07-.93a8.14 8.14 0 0 0 4.56 1.4A8.16 8.16 0 0 0 20.17 12 8.16 8.16 0 0 0 12 3.83Z" />
                                        </svg>
                                        <span className="tabular-nums">{display}</span>
                                    </a>
                                );
                            })()}
                        </div>
                    )}
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
