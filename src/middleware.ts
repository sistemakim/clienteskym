import { NextResponse, type NextRequest } from 'next/server';
import { rateLimit } from '@/utils/rateLimit';

export const config = {
    matcher: ['/cuenta/:cuenta+'],
};

function clientIp(req: NextRequest): string {
    const xff = req.headers.get('x-forwarded-for');
    if (xff) return xff.split(',')[0].trim();
    return req.headers.get('x-real-ip') ?? '0.0.0.0';
}

export function middleware(req: NextRequest) {
    const r = rateLimit(`cuenta:${clientIp(req)}`);
    const res = r.ok
        ? NextResponse.next()
        : new NextResponse('Too Many Requests', { status: 429 });
    res.headers.set('X-RateLimit-Remaining', String(r.remaining));
    res.headers.set('X-RateLimit-Reset', String(Math.ceil(r.resetAt / 1000)));
    if (!r.ok) {
        res.headers.set('Retry-After', String(Math.ceil((r.resetAt - Date.now()) / 1000)));
    }
    return res;
}
