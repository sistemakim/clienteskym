import Reveal from '../motion/Reveal';

const STEPS = [
    {
        n: '01',
        title: 'Pídelo',
        body: 'Compártenos el enlace o una foto del producto que quieres traer.',
    },
    {
        n: '02',
        title: 'Lo compramos',
        body: 'En nuestro próximo viaje a Estados Unidos lo adquirimos por ti.',
    },
    {
        n: '03',
        title: 'Recógelo',
        body: 'Te avisamos cuando llegue a la tienda y pasas a retirarlo.',
    },
];

export default function Encargos() {
    return (
        <section id="encargos" className="bg-paper">
            <Reveal intensity="strong" className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-14 sm:px-8 sm:py-20">
                <div className="flex flex-col gap-3 sm:max-w-2xl">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 bg-white px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink/65">
                        <span aria-hidden>✈︎</span>
                        Encargos USA
                    </span>
                    <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                        ¿Lo viste en <span className="text-gold">Estados Unidos</span>? Te lo traemos.
                    </h2>
                    <p className="text-sm text-ink/70 sm:text-base">
                        Viajamos con frecuencia a Estados Unidos y compramos por ti los productos que no encuentras aquí. Tú nos dices qué quieres, nosotros lo hacemos llegar.
                    </p>
                </div>

                <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {STEPS.map((s) => (
                        <li
                            key={s.n}
                            className="relative flex flex-col gap-3 rounded-2xl border border-ink/15 bg-white p-5 sm:p-6"
                        >
                            <span
                                aria-hidden
                                className="absolute -top-3 left-5 rounded-full border border-gold/40 bg-goldSoft px-2.5 py-0.5 font-mono text-[10px] tracking-[0.18em] text-ink"
                            >
                                {s.n}
                            </span>
                            <h3 className="mt-1 text-lg font-semibold tracking-tight text-ink">
                                {s.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-ink/65">
                                {s.body}
                            </p>
                        </li>
                    ))}
                </ol>

                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-ink/55">
                        Sujeto a disponibilidad y a las fechas de viaje.
                    </p>
                    <a
                        href="https://wa.me/526461935224"
                        className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-ink2"
                    >
                        Hacer un encargo
                        <span aria-hidden>→</span>
                    </a>
                </div>
            </Reveal>
        </section>
    );
}
