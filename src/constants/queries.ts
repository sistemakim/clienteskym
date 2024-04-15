
export const summaryQuery = `
    SELECT 
        gc_cuentas.IdCta, 
        gc_cuentas.NoCta, 
        gc_cuentas.TotPorCob, 
        gc_cuentas.SubTot0, 
        gc_clientes.Nombre, 
        COALESCE(
            (SELECT 
                SUM(gc_pags_cli.Importe) 
            FROM gc_pags_cli 
            WHERE gc_pags_cli.idCta = gc_cuentas.IdCta 
            AND gc_pags_cli.TipPag = 'ABONO' LIMIT 1), 0) 
            AS Abonos, 
        COALESCE(
            (SELECT 
                anticipo.Importe 
            FROM gc_pags_cli 
            AS anticipo 
            WHERE anticipo.idCta = gc_cuentas.IdCta 
            AND anticipo.TipPag = 'ANTICIPO' LIMIT 1), 0) 
            AS Anticipo 
        FROM gc_cuentas 
        INNER JOIN gc_clientes 
        ON gc_clientes.IdCli = gc_cuentas.IdCli 
        WHERE gc_cuentas.NoCta = ?`

export const tablaAmortQuery = `
    select 
        IdTA, 
        NoPag, 
        FecPag1 as FecPag, 
        Abono, 
        IntMor, 
        ACuent, 
        PorCob, 
        SalVen, 
        NvoSal, 
        Status, 
        PuntPag 
    from gc_tablaamort 
    where IdCta = ?  
    order by IdTA asc`

export const tablaPagosQuery = `
    select 
        IdPagsCli, 
        NoRec, 
        FecPag1, 
        FormPag, 
        TipPag, 
        RefBanc, 
        Importe, 
        Status 
    from gc_pags_cli 
    where IdCta = ? 
    order by FecPag2 asc`