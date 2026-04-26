'use client';

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import Search from '../cuenta/Search';
import { StaggerParent, StaggerItem } from '../motion/Stagger';

export default function HeroSearch() {

  return (
    <section
      id="busqueda"
      className="relative isolate overflow-hidden bg-ink text-paper"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 55% 70% at 50% 30%, rgba(184,137,58,0.22), transparent 65%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
      />

      <StaggerParent
        onMount
        className="mx-auto max-w-4xl px-5 py-32 text-center sm:px-8 sm:py-36"
      >
        <StaggerItem>
          <span className="text-[11px] uppercase tracking-[0.22em] text-paper/65">
            Moda • Tecnología • Hogar
          </span>
        </StaggerItem>
        <StaggerItem>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            <span className="text-gold">Todo </span>en un solo lugar.
          </h1>
        </StaggerItem>
        <StaggerItem>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-paper/70 sm:text-base">
            Ingresa el número de su cuenta para consultar todos los detalles.
          </p>
        </StaggerItem>
        <StaggerItem>
          <Search/>
        </StaggerItem>
        <StaggerItem className="mt-6 flex flex-wrap justify-center gap-2">
          <Popover className="relative">
            <PopoverButton className="rounded-full border border-paper/40 px-3.5 py-1.5 text-xs text-paper/85 transition hover:bg-white/10 focus:outline-none">
              ¿Dónde está mi número de cuenta?
            </PopoverButton>
            <PopoverPanel
              transition
              anchor={{ to: 'bottom', gap: 8 }}
              className="z-50 w-72 rounded-xl border border-ink bg-white p-4 text-left text-sm text-ink shadow-lg transition data-[closed]:translate-y-1 data-[closed]:opacity-0"
            >
              <p className="font-medium">Encuentra tu número</p>
              <p className="mt-1.5 text-ink/70">
                Aparece en la parte superior de tu factura impresa o en el
                correo de confirmación, con el formato <span className="font-mono">F-AAAA-XXXXX</span>.
              </p>
            </PopoverPanel>
          </Popover>
        </StaggerItem>
      </StaggerParent>
    </section>
  );
}
