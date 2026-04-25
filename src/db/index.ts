import 'server-only';
import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';
import * as schema from './schema';

const useTLS = process.env.DB_SSL === 'true';
const limit = Number(process.env.DB_POOL_LIMIT ?? 5);

declare global {
    var __mysqlPool: mysql.Pool | undefined;
}

export const pool =
    globalThis.__mysqlPool ??
    mysql.createPool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT ?? 3306),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        waitForConnections: true,
        connectionLimit: limit,
        queueLimit: 0,
        idleTimeout: 60_000,
        enableKeepAlive: true,
        keepAliveInitialDelay: 10_000,
        decimalNumbers: true,
        ssl: useTLS ? { rejectUnauthorized: true } : undefined,
    });

if (process.env.NODE_ENV !== 'production') globalThis.__mysqlPool = pool;

export const db = drizzle(pool, { schema, mode: 'default' });
