'use client';

import Link from 'next/link';
import Image from 'next/image'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

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
  { href: '/#catalogo', label: 'Catálogo' },
  { href: '/#promo', label: 'Ofertas' },
  { href: '/#contacto', label: 'Contacto' },
];

export default function Header() {
  return (
    <Disclosure
      as="header"
      className="sticky top-0 z-50 border-b border-ink/10 bg-white/85 backdrop-blur"
    >
      {({ open, close }) => (
        <>
          <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-3 sm:px-8">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="HCE logo"
                width={60}
                height={60}
              />
              <span className="leading-tight">
                <span className="block text-lg font-semibold tracking-tight text-ink">HCE</span>
              </span>
            </Link>

            <nav className="ml-6 hidden items-center gap-7 md:flex">
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

          <DisclosurePanel className="border-t border-ink/10 bg-white md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => close()}
                  className="rounded-lg px-3 py-2 text-base font-medium text-ink/80 hover:bg-paper2"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
