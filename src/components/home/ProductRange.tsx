'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { EASE } from '../motion/motion-tokens';

const CATEGORIES = [
    { n: '01', name: 'Electrónica', caption: 'smartphones · audio · TV · gadgets' },
    { n: '02', name: 'Moda', caption: 'ropa · calzado · accesorios' },
    { n: '03', name: 'Hogar', caption: 'decoración · organización · confort' },
];

const VALUE_PROPS = [
    'Marcas reconocidas',
    'Atención personalizada',
    'Encargos a Estados Unidos',
];

export default function ProductRange() {
    const reduce = useReducedMotion();

    const listVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: reduce ? 0 : 0.12,
                delayChildren: reduce ? 0 : 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: reduce ? 0 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: reduce
                ? { duration: 0.15, ease: 'linear' as const }
                : { duration: 0.55, ease: EASE },
        },
    };

    const leftVariants: Variants = {
        hidden: { opacity: 0, y: reduce ? 0 : 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: reduce
                ? { duration: 0.15, ease: 'linear' as const }
                : { duration: 0.6, ease: EASE },
        },
    };

    return (
        <section id="gamadeproductos" className="bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
                <motion.div
                    variants={leftVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="flex flex-col"
                >
                    <p className="text-[11px] uppercase tracking-[0.22em] text-ink/55">
                        Todo a tu alcance
                    </p>
                    <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                        Nuestra gama
                    </h2>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
                        Tecnología, moda y todo para tu hogar conviven en una sola tienda. Lo que buscas, casi siempre, ya está aquí.
                    </p>

                    <div className="mt-8 border-t border-ink/15 pt-5">
                        <ul className="flex flex-col gap-2.5">
                            {VALUE_PROPS.map((v) => (
                                <li
                                    key={v}
                                    className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ink/65"
                                >
                                    <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                                    {v}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                <motion.ul
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="flex flex-col"
                >
                    {CATEGORIES.map((c, i) => (
                        <motion.li
                            key={c.name}
                            variants={itemVariants}
                            className={`group flex items-baseline gap-4 py-6 sm:gap-6 sm:py-8 ${
                                i === 0 ? '' : 'border-t border-ink/15'
                            }`}
                        >
                            <span className="font-mono text-[11px] tracking-[0.18em] text-ink/45">
                                {c.n}
                            </span>

                            <div className="flex flex-1 flex-col">
                                <h3 className="text-balance text-right text-4xl font-semibold leading-[1.05] tracking-tight text-ink transition-colors duration-300 group-hover:text-gold sm:text-6xl">
                                    {c.name}
                                </h3>
                                <p className="mt-2 text-right text-xs text-ink/55 sm:text-sm">
                                    {c.caption}
                                </p>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
}
