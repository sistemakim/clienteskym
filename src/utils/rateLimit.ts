type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
const WINDOW_MS = 60_000;
const MAX = 30;

let lastSweep = 0;
function sweep(now: number) {
    if (now - lastSweep < WINDOW_MS) return;
    lastSweep = now;
    for (const [k, b] of buckets) if (b.resetAt < now) buckets.delete(k);
}

export function rateLimit(key: string) {
    const now = Date.now();
    sweep(now);
    const b = buckets.get(key);
    if (!b || b.resetAt < now) {
        buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
        return { ok: true, remaining: MAX - 1, resetAt: now + WINDOW_MS };
    }
    b.count++;
    return { ok: b.count <= MAX, remaining: Math.max(0, MAX - b.count), resetAt: b.resetAt };
}
