'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE } from '../motion/motion-tokens';

const SESSION_KEY = 'hce:promo-seen';
const HASH = '#novedades';

function ScrollLock({ active }: { active: boolean }) {
    useEffect(() => {
        if (!active) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = original;
        };
    }, [active]);
    return null;
}

export default function PromoBanner() {
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setMounted(true);

        if (typeof window === 'undefined') return;

        const fromHash = window.location.hash === HASH;
        let seen = false;
        try {
            seen = sessionStorage.getItem(SESSION_KEY) === '1';
        } catch {
            seen = false;
        }

        if (fromHash || !seen) {
            setOpen(true);
            if (fromHash) {
                window.history.replaceState(
                    null,
                    '',
                    window.location.pathname + window.location.search,
                );
            }
        }

        const onHashChange = () => {
            if (window.location.hash === HASH) {
                setOpen(true);
                window.history.replaceState(
                    null,
                    '',
                    window.location.pathname + window.location.search,
                );
            }
        };
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    const close = useCallback(() => {
        setOpen(false);
        try {
            sessionStorage.setItem(SESSION_KEY, '1');
        } catch {
            // ignore
        }
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, close]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {open && (
                <>
                    <ScrollLock active={open} />
                    <motion.div
                        key="promo-backdrop"
                        className="fixed inset-0 z-[100] bg-ink/45 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'linear' as const }}
                        onClick={close}
                        aria-hidden
                    />
                    <motion.div
                        key="promo-card"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="promo-title"
                        className="fixed inset-x-4 top-1/2 z-[110] mx-auto max-w-lg -translate-y-1/2 overflow-hidden rounded-2xl border border-ink/15 bg-goldSoft shadow-2xl"
                        initial={{ opacity: 0, scale: 0.96, y: '-46%' }}
                        animate={{ opacity: 1, scale: 1, y: '-50%' }}
                        exit={{ opacity: 0, scale: 0.96, y: '-46%' }}
                        transition={{ duration: 0.35, ease: EASE }}
                    >
                        <button
                            type="button"
                            onClick={close}
                            aria-label="Cerrar"
                            className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full border border-ink/15 bg-white/70 text-ink/70 transition hover:bg-white hover:text-ink"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            >
                                <path d="M6 6l12 12M18 6L6 18" />
                            </svg>
                        </button>

                        <div className="flex flex-col items-stretch gap-5 p-6 sm:gap-6 sm:p-8">
                            <div
                                aria-hidden
                                className="h-40 w-full shrink-0 rounded-xl border border-ink/20 bg-[url('/puntos_ad.webp')] bg-cover bg-center sm:h-48"
                            />

                            <div>
                                <span className="text-[11px] uppercase tracking-[0.2em] text-ink/65">
                                    Novedades
                                </span>
                                <h2
                                    id="promo-title"
                                    className="mt-2 text-balance text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl"
                                >
                                    ¡Nuevo sistema de puntos!
                                </h2>
                                <p className="mt-2 text-sm text-ink/70 sm:text-base">
                                    Genera puntos con cada pago y canjéalos por productos. Ahora tus compras valen más.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={close}
                                className="self-start rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-ink2"
                            >
                                Entendido
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body,
    );
}
