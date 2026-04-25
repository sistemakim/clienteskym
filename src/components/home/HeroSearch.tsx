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
      />

      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <span className="text-[11px] uppercase tracking-[0.22em] text-paper/65">
          Moda • Tecnología • Hogar
        </span>
        <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          <span className="text-gold">Todo </span>en un solo lugar.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-paper/70 sm:text-base">
          Ingresa el número de su cuenta para consultar todos los detalles.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 flex max-w-xl flex-col gap-2 rounded-2xl border border-ink bg-white p-2 sm:flex-row sm:items-center sm:rounded-full sm:p-2 sm:pl-5"
        >
          <div className="flex flex-1 items-center gap-2 px-3 sm:px-0">
            <span aria-hidden className="text-ink/50">#</span>
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Ingrese su número de cuenta"
              aria-label="Número de factura"
              autoCapitalize="characters"
              autoCorrect="off"
              spellCheck={false}
              inputMode="text"
              enterKeyHint="search"
              className="w-full bg-transparent py-2.5 text-base text-ink placeholder:text-ink/40 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-ink px-5 py-3 text-base font-medium text-paper transition hover:bg-ink2 sm:w-auto sm:rounded-full sm:py-2.5 sm:text-sm"
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
        </div>
      </div>
    </section>
  );
}
