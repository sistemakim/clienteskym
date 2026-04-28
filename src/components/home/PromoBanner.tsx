import Reveal from '../motion/Reveal';

export default function PromoBanner() {
  return (
    <section id="promo" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <Reveal intensity="strong" className="flex flex-col items-stretch gap-6 rounded-2xl border border-ink/15 bg-goldSoft p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
          <div
            aria-hidden
            className="bg-[url('/puntos_ad.webp')] bg-cover bg-center h-64 w-full shrink-0 rounded-xl border border-ink/20 sm:h-32 sm:w-52"
          />

          <div className="flex-1">
            <span className="text-[11px] uppercase tracking-[0.2em] text-ink/65">
            Novedades
            </span>
            <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            ¡Nuevo sistema de puntos!
            </h2>
            <p className="mt-2 text-sm text-ink/70">
            Genera puntos con cada pago y canjealos por productos! ahora tus compras valen más.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
