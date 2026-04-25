const SOCIALS = [
  { label: 'f', href: 'https://facebook.com' },
  { label: 'ig', href: 'https://instagram.com' },
  { label: 'tt', href: 'https://tiktok.com' },
  { label: 'yt', href: 'https://youtube.com' },
];

export default function Contact() {
  return (
    <section id="contacto" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-5 rounded-2xl border border-ink/15 bg-white p-6 sm:p-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-ink/55">
                Hablemos
              </p>
              <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Estamos aquí.
              </h2>
            </div>

            <InfoRow
              icon="☏"
              label="Teléfono · WhatsApp"
              value={
                <a href="https://wa.me/18095550143" className="hover:text-gold">
                  +1 (809) 555 · 0143
                </a>
              }
            />
            <InfoRow icon="⌖" label="Dirección" value="Av. 27 de Febrero #144, SDQ" />
            <InfoRow icon="⏱" label="Horario" value="Lun–Sáb · 9:00 — 19:00" />
            <InfoRow
              icon="@"
              label="Redes"
              value={
                <div className="mt-1.5 flex gap-2">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-9 w-9 place-items-center rounded-full border border-ink/30 text-xs text-ink transition hover:bg-paper"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              }
            />
          </div>

          <div
            className="relative min-h-[300px] overflow-hidden rounded-2xl border border-ink/15 bg-white"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.03), rgba(0,0,0,0.03)), repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0 1px, transparent 1px 40px), repeating-linear-gradient(90deg, rgba(0,0,0,0.06) 0 1px, transparent 1px 40px)',
            }}
          >
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl"
            >
              📍
            </span>
            <span className="absolute bottom-3 left-3 rounded-full border border-ink/20 bg-white px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-ink/55">
              Mapa · Google Maps
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 border-b border-dashed border-ink/15 pb-4 last:border-b-0 last:pb-0">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/25 text-sm text-ink">
        {icon}
      </span>
      <div className="flex-1">
        <p className="text-[10px] uppercase tracking-[0.18em] text-ink/55">
          {label}
        </p>
        <div className="mt-1 text-base text-ink">{value}</div>
      </div>
    </div>
  );
}
