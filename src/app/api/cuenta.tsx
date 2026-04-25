import mysql from 'mysql2/promise';
import { summaryQuery, tablaAmortQuery, tablaPagosQuery } from '@/constants/queries';

function parser(obj: any) {
    // Condensed into a single line
    return JSON.parse(JSON.stringify(obj));
}

export async function getCuenta(cuenta: string) {
    let connection; // Declare outside so the finally block can access it

    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
        });

        const [results] = await connection.execute(summaryQuery, [cuenta]);
        const parsedResults = parser(results);

        if (parsedResults.length > 0) {
            const idCta = parsedResults[0].IdCta; // Stored to a variable for cleaner code
            
            const [tablaamort] = await connection.execute(tablaAmortQuery, [idCta]);
            const [tablapagos] = await connection.execute(tablaPagosQuery, [idCta]);
            
            return [parsedResults[0], parser(tablaamort), parser(tablapagos)];
        } 
        
        return [null, [], []];

    } catch (err) {
        console.error("Database error in getCuenta:", err);
        // Throw the error or return a consistent default state so the caller 
        // doesn't unexpectedly receive `undefined`.
        throw new Error("Failed to fetch account data"); 
    } finally {
        // ALWAYS close the connection here
        if (connection) {
            await connection.end(); 
        }
    }
}