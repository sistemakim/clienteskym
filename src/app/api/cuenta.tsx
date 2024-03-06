import mysql from 'mysql2/promise';

function parser(obj: any) {
    const stringified = JSON.stringify(obj)
    const parsed = JSON.parse(stringified)

    return parsed
}

export async function getCuenta(cuenta: string) {

    const resultsQuery = "SELECT gc_cuentas.IdCta, gc_cuentas.NoCta, gc_cuentas.TotPorCob, gc_cuentas.SalIni, gc_clientes.Nombre, COALESCE((SELECT SUM(gc_pags_cli.Importe) FROM gc_pags_cli WHERE gc_pags_cli.idCta = gc_cuentas.IdCta AND gc_pags_cli.TipPag = 'ABONO'), 0) AS Abonos, COALESCE((SELECT anticipo.Importe FROM gc_pags_cli AS anticipo WHERE anticipo.idCta = gc_cuentas.IdCta AND anticipo.TipPag = 'ANTICIPO'), 0) AS Anticipo FROM gc_cuentas INNER JOIN gc_clientes ON gc_clientes.IdCli = gc_cuentas.IdCli WHERE gc_cuentas.NoCta = ?"
    const tablaAmortQuery = "select IdTA, NoPag, FecPag1 as FecPag, Abono, IntMor, ACuent, PorCob, SalVen, NvoSal, Status, PuntPag from gc_tablaamort where IdCta = ?  order by IdTA asc"
    const tablaPagosQuery = "select IdPagsCli, NoRec, FecPag1, FormPag, TipPag, RefBanc, Importe, Status from gc_pags_cli where IdCta = ? order by FecPag2 asc"

    try {
        // create the connection to database
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
        });

        // execute will internally call prepare and query
        const [results] = await connection.execute(resultsQuery, [cuenta]);
        const parsedResults = parser(results)

        if (parsedResults.length > 0) {
            const [tablaamort] = await connection.execute(tablaAmortQuery, [parsedResults[0].IdCta]);
            const [tablapagos] = await connection.execute(tablaPagosQuery, [parsedResults[0].IdCta]);
            return [parsedResults[0], parser(tablaamort), parser(tablapagos)]
        } else {
            return [null, [], []]
        }

    } catch (err) {
        console.log(err);
    }
} 