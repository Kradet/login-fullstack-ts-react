import { createPool } from "mysql2/promise";

export async function Conectar(){
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        /* password: '', */
        database: 'dblogin'
    });

    return connection;
}