'use client';

import Link from 'next/link';
import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { EASE } from '../motion/motion-tokens';

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: '/#busqueda', label: 'Inicio' },
  { href: '/#novedades', label: 'Novedades' },
  { href: '/#catalogo', label: 'Catálogo' },
  { href: '/#contacto', label: 'Contacto' },
];

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

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="md:hidden">
          <ScrollLock active={open} />
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[100] bg-ink/45 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'linear' as const }}
            onClick={onClose}
            aria-hidden
          />
          <motion.aside
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
            className="fixed inset-y-0 right-0 z-[110] flex w-[82vw] max-w-sm flex-col bg-white shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
              <span className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
                Menú
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar menú"
                className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink/70 transition hover:bg-paper hover:text-ink"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col px-2 pt-2">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: EASE,
                    delay: 0.15 + i * 0.07,
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={onClose}
                    className="group relative flex items-center justify-between border-b border-ink/[0.07] px-8 py-5 text-base font-medium tracking-tight text-ink/85 transition hover:text-ink"
                  >
                    <span className="flex items-center gap-3">
                      <span>{l.label}</span>
                    </span>
                    <span className="text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold">
                      →
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-gold transition-transform duration-300 group-hover:scale-y-100" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="mt-auto border-t border-ink/10 px-6 py-5 text-[11px] uppercase tracking-[0.2em] text-ink/45"
            >
              Moda • Tecnología • Hogar
            </motion.div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default function Header() {
  const { scrollY } = useScroll();
  const bgAlpha = useTransform(scrollY, [0, 80], [0.88, 0.55], { clamp: true });
  const shadowAlpha = useTransform(scrollY, [0, 80], [0, 0.25], { clamp: true });
  const backgroundColor = useMotionTemplate`rgba(255, 255, 255, ${bgAlpha})`;
  const boxShadow = useMotionTemplate`0 4px 24px -12px rgba(26, 26, 26, ${shadowAlpha})`;

  return (
    <Disclosure
      as="header"
      className="fixed inset-x-0 top-0 z-50"
    >
      {({ open, close }) => (
        <>
          <motion.div
            style={{ backgroundColor, boxShadow }}
            className="w-full backdrop-blur-md"
          >
            <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-3 sm:px-8 md:justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="HCE logo"
                width={50}
                height={50}
              />
            </Link>

            <nav className="ml-6 hidden gap-7 md:flex md:items-center">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-ink/75 transition hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="ml-auto md:hidden">
              <DisclosureButton
                aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 text-ink"
              >
                <MenuIcon open={open} />
              </DisclosureButton>
            </div>
            </div>
          </motion.div>

          <DisclosurePanel static as="div" className="hidden" />
          <MobileDrawer open={open} onClose={close} />
        </>
      )}
    </Disclosure>
  );
}
