import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ObtenerDatosLocales } from "../hooks/useLocalStorage";
import { AiOutlineUser } from "react-icons/ai";
import "../styles/card.css";

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
		<div className="Card">
			<div className="CardBody">
				<h1 className="CardTitle">
					Bienvenido <AiOutlineUser />
				</h1>
				<div className="CardFooter">
					<button className="CardBtn">
						<Link to="/login" className="BtnText">Iniciar sesión</Link>
					</button>
					<button className="CardBtn">
						<Link to="/registro" className="BtnText">Registrarse</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
