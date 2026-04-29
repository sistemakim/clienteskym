import { formatInt } from '@/utils/format';
import type { RedeemableProduct } from '@/app/api/cuenta';

export default function RedeemableProducts({ data }: { data: RedeemableProduct[] }) {
    if (data.length === 0) return null;

    return (
        <div className="rounded-2xl border border-ink/15 bg-white p-5 sm:p-6">
            <h2 className="mb-4 text-lg font-semibold tracking-tight text-ink">
                Productos disponibles para canje
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-ink/15 text-left text-[11px] uppercase tracking-[0.18em] text-ink/55">
                            <th className="py-2 pr-3 font-medium">Producto</th>
                            <th className="py-2 pl-3 text-right font-medium">Puntos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((p) => (
                            <tr key={p.IdProdCanj} className="border-b border-ink/5 last:border-b-0">
                                <td className="py-2 pr-3 text-ink">{p.nombre}</td>
                                <td className="py-2 pl-3 text-right">
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-goldSoft px-2.5 py-0.5 text-xs font-medium text-ink">
                                        <span aria-hidden>★</span>
                                        <span className="tabular-nums">{formatInt(p.puntosCosto)}</span>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
