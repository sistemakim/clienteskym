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
              <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Contáctenos.
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
            <InfoRow icon="⌖" label="Dirección" value="Privada Circonia #1268 Col. Los Encinos" />
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
