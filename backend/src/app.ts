/* Si estamos en  entorno de desarrollo usamos las variables de entorno*/
process.env.NODE_ENV==="development"? require("dotenv").config():null;

/* Importamos las librerías necesarias */
import express, { Application } from "express";

/* Importamos las rutas */
import UsuarioRouter from "./routes/usuarios.routes";

export class App {
	private app: Application;
	cors = require("cors");

	constructor(private port?: number) {
		this.app = express();
		this.app.use(this.cors({origin:"*"}));
		this.settings();
		this.middlewares();
		this.routes();
	}

	settings() {
		this.app.set("port", this.port || process.env.PORT || 4000);
	}

	middlewares() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));
		/* this.app.use(this.cors()); */
	}

	routes() {
		/* var whiteList = ["http://localhost:3000"];
		var corsOptions = {
			origin: function (origin: any, callback: any) {
				if (whiteList.indexOf(origin) !== -1) {
					callback(null, true);
				} else {
					callback(
						new Error("Not allowed by CORS, no tiene permisos")
					);
				}
			},
		};

		this.app.use("/api", this.cors(corsOptions), UsuarioRouter); */
		/* this.app.use("/api",this.cors({origin:"*"}), UsuarioRouter); */
		this.app.use("/api", UsuarioRouter);
	}

	async Listen() {
		await this.app.listen(this.app.get("port"));
		console.log("Funcionando on port", this.app.get("port"));
	}
}
