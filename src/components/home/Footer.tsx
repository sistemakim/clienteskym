const SOCIALS = [
  {
    label: 'Moda, Tecnología y Hogar HCE',
    href: 'https://www.facebook.com/share/1Ch2msV7ee/?mibextid=wwXIfr',
  },
  {
    label: 'Camila Herrera',
    href: 'https://www.facebook.com/share/17MSMbAdfr/?mibextid=wwXIfr',
  },
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="#1877F2"
        d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-xl flex-col gap-5 rounded-2xl border border-ink/15 bg-white p-6 sm:p-8">
          <div>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Contáctenos.
            </h2>
          </div>

          <InfoRow
            icon="☏"
            label="Teléfono · WhatsApp"
            value={
              <a href="https://wa.me/526461935224" className="hover:text-gold">
                (646) 193 · 5224
              </a>
            }
          />
          <InfoRow icon="⌖" label="Dirección" value="Argenta y Obeliscos #129 Bosques de los Olivos" />
          <InfoRow icon="⏱" label="Horario" value="Lun–Sáb · 9:00 P.M. — 5:00 P.M." />
          <InfoRow
            icon="f"
            label="Facebook"
            value={
              <ul className="mt-1.5 flex flex-col gap-2">
                {SOCIALS.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base text-ink hover:text-gold"
                    >
                      <FacebookIcon className="h-5 w-5 shrink-0" />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-8 text-[11px] uppercase tracking-[0.16em] text-ink/55 sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} HCE</span>
          <span>Todo en un solo lugar</span>
        </div>
      </div>
    </footer>
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
