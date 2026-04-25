export default function PromoBanner() {
  return (
    <section id="promo" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="flex flex-col items-stretch gap-6 rounded-2xl border border-ink/15 bg-goldSoft p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
          <div
            aria-hidden
            className="h-32 w-full shrink-0 rounded-xl border border-ink/20 sm:h-32 sm:w-52"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, rgba(0,0,0,0.07) 0 6px, transparent 6px 12px), linear-gradient(#fff,#fff)',
            }}
          />

          <div className="flex-1">
            <span className="text-[11px] uppercase tracking-[0.2em] text-ink/65">
              Sólo este mes
            </span>
            <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              −40% en electrónicos seleccionados.
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              Audífonos · smartwatches · tablets · accesorios.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-stretch gap-2 sm:items-end">
            <a
              href="#catalogo"
              className="rounded-full bg-ink px-5 py-2.5 text-center text-sm font-medium text-paper transition hover:bg-ink2"
            >
              Ver ofertas →
            </a>
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink/65">
              Termina 30 abril
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
