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