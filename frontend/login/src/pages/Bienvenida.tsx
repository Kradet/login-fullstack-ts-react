import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ObtenerDatosLocales } from "../hooks/useLocalStorage";

export function Bienvenida() {
	const usuario = ObtenerDatosLocales("usuario");
	const navigate = useNavigate();
	/* Se verifica si existe un usuario en local */
	useEffect(() => {
		//fetch("http://localhost:4000/api").then((res) => res.json()).then((res) => console.log(res));
		//console.log(usuario);
		usuario === null || usuario.login === false || usuario.username === ""
			? console.log("")
			: navigate("/contenido");
	}, []); /* Al tener arreglo vacío se usa al cargar el componente */

	return (
		<div>
			<h1>Bienvenido</h1>
			<button>
				<Link to="/login">Iniciar sesión</Link>
			</button>
			<button>
				<Link to="/registro">Registrarse</Link>
			</button>
		</div>
	);
}
