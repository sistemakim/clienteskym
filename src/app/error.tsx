'use client'

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className='flex min-h-[70vh] items-center justify-center bg-paper p-5'>
            <div className='w-full max-w-md rounded-2xl border border-ink/15 bg-white p-6 text-center sm:p-8'>
                <span className='inline-block rounded-full border border-gold/40 bg-goldSoft px-3 py-1 text-xs font-medium tracking-wide text-gold'>
                    Advertencia
                </span>
                <h2 className='mt-4 text-2xl font-semibold tracking-tight text-ink'>
                    Algo salió mal
                </h2>
                <p className='mt-2 text-sm text-ink/65'>
                    No pudimos cargar la información en este momento. Inténtalo de nuevo o vuelve al inicio.
                </p>
                {error.digest && (
                    <p className='mt-3 font-mono text-[11px] text-ink/40'>
                        ref: {error.digest}
                    </p>
                )}
                <div className='mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center'>
                    <button
                        onClick={() => reset()}
                        className='rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-ink2'
                    >
                        Reintentar
                    </button>
                    <Link
                        href='/'
                        className='rounded-full border border-ink/15 bg-white px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-paper2'
                    >
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
