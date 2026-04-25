import { mysqlTable, int, varchar, decimal, datetime } from 'drizzle-orm/mysql-core';

export const gcTablaAmort = mysqlTable('gc_tablaamort', {
    IdTA: int('IdTA').primaryKey(),
    IdCta: int('IdCta').notNull(),
    NoPag: varchar('NoPag', { length: 16 }),
    FecPag: datetime('FecPag1'),
    Abono: decimal('Abono', { precision: 14, scale: 2 }),
    IntMor: decimal('IntMor', { precision: 14, scale: 2 }),
    ACuent: decimal('ACuent', { precision: 14, scale: 2 }),
    PorCob: decimal('PorCob', { precision: 14, scale: 2 }),
    SalVen: decimal('SalVen', { precision: 14, scale: 2 }),
    NvoSal: decimal('NvoSal', { precision: 14, scale: 2 }),
    Status: varchar('Status', { length: 32 }),
    PuntPag: int('PuntPag'),
});

export const gcPagsCli = mysqlTable('gc_pags_cli', {
    IdPagsCli: int('IdPagsCli').primaryKey(),
    IdCta: int('IdCta').notNull(),
    NoRec: varchar('NoRec', { length: 64 }),
    FecPag1: datetime('FecPag1'),
    FecPag2: datetime('FecPag2'),
    FormPag: varchar('FormPag', { length: 64 }),
    TipPag: varchar('TipPag', { length: 32 }),
    RefBanc: varchar('RefBanc', { length: 64 }),
    Importe: decimal('Importe', { precision: 14, scale: 2 }),
    Status: varchar('Status', { length: 32 }),
});
