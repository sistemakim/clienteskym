const moneyFmt = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const intFmt = new Intl.NumberFormat('en-US');

export function formatMoney(v: number | string | null | undefined): string {
    if (v == null || v === '') return '';
    const n = Number(v);
    return Number.isFinite(n) ? moneyFmt.format(n) : '';
}

export function formatInt(v: number | string | null | undefined): string {
    if (v == null || v === '') return '';
    const n = Number(v);
    return Number.isFinite(n) ? intFmt.format(n) : '';
}
