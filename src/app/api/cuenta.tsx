import 'server-only';
import { sql, eq, asc } from 'drizzle-orm';
import { db } from '@/db';
import { gcTablaAmort, gcPagsCli } from '@/db/schema';
import { cached } from '@/db/cache';

export async function getCuenta(cuenta: string) {
    return cached(`cuenta:${cuenta}`, async () => {
        try {
            const result = await db.execute(sql`
                SELECT gc_cuentas.IdCta, gc_cuentas.NoCta, gc_cuentas.TotPorCob, gc_cuentas.SubTot0,
                       gc_clientes.Nombre, gc_clientes.Puntos AS Puntos,
                       COALESCE((SELECT SUM(gc_pags_cli.Importe) FROM gc_pags_cli
                                 WHERE gc_pags_cli.idCta = gc_cuentas.IdCta
                                   AND gc_pags_cli.TipPag = 'ABONO' LIMIT 1), 0) AS Abonos,
                       COALESCE((SELECT anticipo.Importe FROM gc_pags_cli AS anticipo
                                 WHERE anticipo.idCta = gc_cuentas.IdCta
                                   AND anticipo.TipPag = 'ANTICIPO' LIMIT 1), 0) AS Anticipo
                FROM gc_cuentas
                INNER JOIN gc_clientes ON gc_clientes.IdCli = gc_cuentas.IdCli
                WHERE gc_cuentas.NoCta = ${cuenta}
            `);

            const rows = (result as any)[0] ?? result;
            const summary = Array.isArray(rows) ? rows[0] : rows;
            if (!summary) return [null, [], []];

            const idCta = summary.IdCta;
            const [tablaamort, tablapagos] = await Promise.all([
                db.select().from(gcTablaAmort).where(eq(gcTablaAmort.IdCta, idCta)).orderBy(asc(gcTablaAmort.IdTA)),
                db.select().from(gcPagsCli).where(eq(gcPagsCli.IdCta, idCta)).orderBy(asc(gcPagsCli.FecPag2)),
            ]);

            return [summary, tablaamort, tablapagos];
        } catch (err) {
            console.error('Database error in getCuenta:', err);
            throw new Error('Failed to fetch account data');
        }
    });
}
