import mysql from 'mysql2/promise';
import { summaryQuery, tablaAmortQuery, tablaPagosQuery } from '@/constants/queries';

function parser(obj: any) {
    const stringified = JSON.stringify(obj)
    const parsed = JSON.parse(stringified)

    return parsed
}

export async function getCuenta(cuenta: string) {

    try {
        // create the connection to database
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
        });

        // execute will internally call prepare and query
        const [results] = await connection.execute(summaryQuery, [cuenta]);
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