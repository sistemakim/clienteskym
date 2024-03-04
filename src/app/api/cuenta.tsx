/*
    // selects initial information

    SELECT gc_cuentas.TotPorCob, gc_cuentas.SalIni, gc_clientes.Nombre,
        COALESCE(
            (SELECT anticipo.Importe 
                FROM gc_pags_cli AS anticipo 
                WHERE anticipo.idCta = gc_cuentas.IdCta AND anticipo.TipPag = 'ANTICIPO'
            ), 0
        ) AS Anticipo
    FROM gc_cuentas
    INNER JOIN gc_clientes ON gc_clientes.IdCli = gc_cuentas.IdCli
    WHERE gc_cuentas.NoCta = VAR_IDCTA;
*/
import mysql from 'mysql2/promise';


export async function getCuenta(cuenta: string) {

    const resultsQuery = "SELECT gc_cuentas.IdCta, gc_cuentas.NoCta, gc_cuentas.TotPorCob, gc_cuentas.SalIni, gc_clientes.Nombre, COALESCE((SELECT SUM(gc_pags_cli.Importe) FROM gc_pags_cli WHERE gc_pags_cli.idCta = gc_cuentas.IdCta AND gc_pags_cli.TipPag = 'ABONO'), 0) AS Abonos, COALESCE((SELECT anticipo.Importe FROM gc_pags_cli AS anticipo WHERE anticipo.idCta = gc_cuentas.IdCta AND anticipo.TipPag = 'ANTICIPO'), 0) AS Anticipo FROM gc_cuentas INNER JOIN gc_clientes ON gc_clientes.IdCli = gc_cuentas.IdCli WHERE gc_cuentas.NoCta = ?"
    const tablaAmortQuery = "select IdTA, NoPag, FecPag1 as FecPag, Abono, IntMor, ACuent, PorCob, SalVen, NvoSal, Status, PuntPag from gc_tablaamort where IdCta = ?  order by IdTA asc"
    const tablaPagosQuery = "select IdPagsCli, NoRec, FecPag1, FormPag, TipPag, RefBanc, Importe, Status from gc_pags_cli where IdCta = ? order by FecPag2 asc"

    try {
        // create the connection to database
        const connection = await mysql.createConnection({
            host: process.env.NEXT_PUBLIC_HOST,
            user: process.env.NEXT_PUBLIC_USER,
            database: process.env.NEXT_PUBLIC_DATABASE,
            password: process.env.NEXT_PUBLIC_PASSWORD,
        });

        // execute will internally call prepare and query
        const [results] = await connection.execute(resultsQuery,[cuenta]);
        
        const [tablaamort] = await connection.execute(tablaAmortQuery,[results[0]['IdCta']]);
        const [tablapagos] = await connection.execute(tablaPagosQuery,[results[0]['IdCta']]);
        
        return [results[0], tablaamort, tablapagos]
    } catch (err) {
        console.log(err);
    }
} 