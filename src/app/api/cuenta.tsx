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

export async function getCuenta() {
    try {
        // create the connection to database
        const connection = await mysql.createConnection({
            host: '162.241.60.210',
            user: 'siste241_dev',
            database: 'siste241_db_dev',
            password: 'MzXM5hFmez'
        });

        // execute will internally call prepare and query
        const [results, fields] = await connection.execute("SELECT gc_cuentas.TotPorCob, gc_cuentas.SalIni, gc_clientes.Nombre, COALESCE((SELECT anticipo.Importe FROM gc_pags_cli AS anticipo WHERE anticipo.idCta = gc_cuentas.IdCta AND anticipo.TipPag = 'ANTICIPO'), 0) AS Anticipo FROM gc_cuentas INNER JOIN gc_clientes ON gc_clientes.IdCli = gc_cuentas.IdCli WHERE gc_cuentas.NoCta = ?",['jz59']);

        return results
    } catch (err) {
        console.log(err);
    }
} 