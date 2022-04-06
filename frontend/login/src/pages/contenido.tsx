import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DatosLocales } from "../entities/DatosLocales";
import "../styles/card.css";
import {
	ObtenerDatosLocales,
	GuardarDatosLocales,
} from "../hooks/useLocalStorage";

export function Contenido() {
	const navigate = useNavigate();
	const usuario = ObtenerDatosLocales("usuario");

	useEffect(() => {
		usuario === null || usuario.login === false || usuario.username === ""
			? navigate("/login")
			: console.log("");
	}, []); /* Al tener arreglo vacío se usa al cargar el componente */

	const handleClick = () => {
		GuardarDatosLocales("usuario", {
			username: "",
			login: false,
			password: "",
		});
		navigate("/");
	};

	return (
		<>
			<div className="Card">
				<div className="CardBody">
					<h1 className="CardTitle">
						Felicidades!!!🎆🎇🎂🥳 Sólo puedes ver esto si estás logeado🥴👌
					</h1>
					<img
					sizes="100px 50px"
						src="https://c.tenor.com/kuynBCCWpXQAAAAd/fuegos-artificiales.gif"
						alt="Gif fuegos artificiales"
					/>

					<br />
					<br />
					<div className="CardFooter">
						<button
							onClick={handleClick}
							className="CardBtn BtnText"
						>
							Cerrar Sesión
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
