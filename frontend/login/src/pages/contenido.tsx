import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DatosLocales } from "../entities/DatosLocales";
import {
	ObtenerDatosLocales,
	GuardarDatosLocales,
} from "../hooks/useLocalStorage";

export function Contenido() {
	const navigate = useNavigate();
	const usuario = ObtenerDatosLocales("usuario");

	useEffect(() => {
		usuario === null || usuario.login === false || usuario.username === ""
			? navigate("/login") : console.log("") ;
	}, []); /* Al tener arreglo vacío se usa al cargar el componente */

	const handleClick = () => {
		GuardarDatosLocales("usuario", {
			username: "",
			login: false,
			password:""
		})
		navigate("/");
	};

	return (
		<>
			<h1>Contenido solo puedes ver esto si estás logeado 🥴👌</h1>
			<br />
			<br />
			<button onClick={handleClick}>Cerrar Sesión</button>
		</>
	);
}
