'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { isValidNoCuenta } from '@/utils/isValidNoCuenta';

export default function HeroSearch() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) {
      setError('Ingrese su número de factura');
      return;
    }
    if (!isValidNoCuenta(trimmed) || trimmed.length > 30) {
      setError('Número de factura inválido');
      return;
    }
    setError(null);
    router.push(`/cuenta/${trimmed}`);
  };

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
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0 1px, transparent 1px 14px)',
        }}
      />

      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <span className="text-[11px] uppercase tracking-[0.22em] text-paper/65">
          Consulta tu factura · sin login
        </span>
        <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          <span className="text-gold">Todo en</span> un solo lugar.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-paper/70 sm:text-base">
          Ingresa el número de tu factura para ver detalles, productos comprados
          y métodos de pago.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-full border border-ink bg-white p-2 pl-5 shadow-gold"
        >
          <span className="text-ink/50">#</span>
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (error) setError(null);
            }}
            placeholder="Ej. F-2026-00148"
            aria-label="Número de factura"
            className="flex-1 bg-transparent py-2 text-base text-ink placeholder:text-ink/40 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-ink2"
          >
            Buscar →
          </button>
        </form>
        {error && (
          <p className="mt-3 text-xs text-gold">{error}</p>
        )}

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Popover className="relative">
            <PopoverButton className="rounded-full border border-paper/40 px-3.5 py-1.5 text-xs text-paper/85 transition hover:bg-white/10 focus:outline-none">
              ¿Dónde está mi #?
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

          <a
            href="https://wa.me/18095550143"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-paper/40 px-3.5 py-1.5 text-xs text-paper/85 transition hover:bg-white/10"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
