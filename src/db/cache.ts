import 'server-only';

type Entry<T> = { value: Promise<T>; expiresAt: number };

const TTL_MS = 5 * 60_000;
const MAX = 500;

declare global {
    var __cuentaCache: Map<string, Entry<unknown>> | undefined;
}

const cache: Map<string, Entry<unknown>> =
    globalThis.__cuentaCache ?? new Map();

if (process.env.NODE_ENV !== 'production') globalThis.__cuentaCache = cache;

export async function cached<T>(key: string, loader: () => Promise<T>): Promise<T> {
    const now = Date.now();
    const hit = cache.get(key);
    if (hit && hit.expiresAt > now) {
        cache.delete(key);
        cache.set(key, hit);
        return hit.value as Promise<T>;
    }
    if (hit) cache.delete(key);

    const promise = loader();
    const entry: Entry<T> = { value: promise, expiresAt: now + TTL_MS };
    cache.set(key, entry as Entry<unknown>);

    if (cache.size > MAX) {
        const oldest = cache.keys().next().value;
        if (oldest !== undefined) cache.delete(oldest);
    }

    promise.catch(() => {
        if (cache.get(key) === (entry as Entry<unknown>)) cache.delete(key);
    });

    return promise;
}
