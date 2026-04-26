'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { EASE } from '../motion/motion-tokens';

type Product = {
  name: string;
  category: string;
  price: string;
  tag?: { label: string; tone?: 'gold' | 'dark' };
};

const PRODUCTS: Product[] = [
  { name: 'Smart TV 55"', category: 'Electrónica', price: 'RD$ 32,900', tag: { label: 'Nuevo', tone: 'gold' } },
  { name: 'Conjunto deportivo', category: 'Moda', price: 'RD$ 2,490' },
  { name: 'Audífonos premium', category: 'Electrónica', price: 'RD$ 6,790', tag: { label: '−25%', tone: 'dark' } },
  { name: 'Chaqueta cuero', category: 'Moda', price: 'RD$ 7,250' },
  { name: 'iPad Air M2', category: 'Electrónica', price: 'RD$ 38,000', tag: { label: 'Top', tone: 'gold' } },
  { name: 'Botines cuero', category: 'Moda', price: 'RD$ 4,890' },
];

const PLACEHOLDER_BG =
  'repeating-linear-gradient(135deg, rgba(0,0,0,0.06) 0 6px, transparent 6px 12px), linear-gradient(#fff,#fff)';

export default function Catalog() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();

  const scroll = (dir: -1 | 1) => {
    railRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  const railVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
        delayChildren: reduce ? 0 : 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28, scale: reduce ? 1 : 0.94 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: reduce
        ? { duration: 0.15, ease: 'linear' as const }
        : { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section id="catalogo" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink/55">
              Todo a tu alcance
            </p>
            <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Conoce nuestra gama de productos
            </h2>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="#promo"
              className="rounded-full border border-ink/20 px-3.5 py-1.5 text-xs text-ink transition hover:bg-paper"
            >
              Ver todo →
            </a>
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => scroll(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/30 text-ink transition hover:bg-paper"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Siguiente"
              onClick={() => scroll(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/30 text-ink transition hover:bg-paper"
            >
              →
            </button>
          </div>
        </div>

        <motion.div
          ref={railRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3"
          variants={railVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PRODUCTS.map((p) => (
            <motion.article
              key={p.name}
              variants={cardVariants}
              className="flex w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-ink/15 bg-white sm:w-[280px]"
            >
              <div
                className="relative flex h-[220px] items-center justify-center text-[10px] uppercase tracking-[0.16em] text-ink/45 sm:h-[240px]"
                style={{ backgroundImage: PLACEHOLDER_BG }}
              >
                {p.tag && (
                  <span
                    className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[9px] uppercase tracking-[0.14em] ${
                      p.tag.tone === 'gold'
                        ? 'bg-goldSoft text-ink'
                        : 'bg-ink text-paper'
                    }`}
                  >
                    {p.tag.label}
                  </span>
                )}
                [ {p.name} ]
              </div>
              <div className="flex flex-col gap-1 border-t border-dashed border-ink/15 px-3 py-3">
                <p className="text-base font-semibold tracking-tight text-ink">
                  {p.name}
                </p>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-ink/55">{p.category}</span>
                  <span className="font-medium text-ink">{p.price}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
