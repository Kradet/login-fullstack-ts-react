import { createPool } from "mysql2/promise";

export async function Conectar() {
	if (process.env.NODE_ENV === "production") {
		const connection = await createPool({
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME,
		});
		return connection;
	} else {
		const connection = await createPool({
			host: process.env.DB_DEV_HOST,
			user: process.env.DB_DEV_USER,
			password: "",
			database: process.env.DB_DEV_NAME,
		});
		return connection;
	}
}
