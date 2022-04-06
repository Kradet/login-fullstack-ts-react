/* Importamos las librerías necesarias */
import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import { Conectar } from "../database";
/* Regresa la lista de usuarios */
export async function GetUsuarios(
	req: Request,
	res: Response
): Promise<Response> {
	const con = await Conectar();
	const usuarios = await con.query("select id, username from usuarios");
	return res.json(usuarios[0]);
}

export async function CreateUsuario(
	req: Request,
	res: Response
): Promise<Response> {
	const { username, password } = req.body;
	const con = await Conectar();
	/* await con.query("call crear_usuario(?,?,'salecita')", [newUsuario]); */
	try{
		await con.query("call crear_usuario (?, ?, 'salecita')", [
			username,
			password,
		]);
	}catch(error){
		console.log(error);
		res.sendStatus(400);
	}


	return res.json({
		result: "true",
		message: "Usuario creado correctamente",
	});
}

export async function GetUsuario(
	req: Request,
	res: Response
): Promise<Response> {
	const username = req.params.username;
	const password = req.params.password;
	const con = await Conectar();
	const usuario: RowDataPacket[][] = (await con.query(
		"call buscar_usuario(?,?, 'salecita')",
		[username, password]
	)) as RowDataPacket[][];

	/* Si no se encuentra el usuario regresa 404 */
	if (usuario[0][0].length === 0) {
		res.sendStatus(404);
		return res;
	} else {
		return res.json(usuario[0][0]);
	}
}
