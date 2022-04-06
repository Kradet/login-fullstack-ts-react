import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { RiLoginCircleFill } from "react-icons/ri";
import {
	ObtenerDatosLocales,
	GuardarDatosLocales,
} from "../hooks/useLocalStorage";

export function Login() {
	const navigate = useNavigate();
	const usuario = ObtenerDatosLocales("usuario");

	const [datos, setDatos] = useState({
		username: "",
		password: "",
	});

	/* Se verifica si existe un usuario en local */
	useEffect(() => {
		usuario === null || usuario.login === false || usuario.username === ""
			? console.log("")
			: navigate("/contenido");
	}, []); /* Al tener arreglo vacío se usa al cargar el componente */

	// cuando los campos input cambian, se actualizan los datos
	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		event.target.name === "username"
			? setDatos({ ...datos, username: event.target.value })
			: setDatos({ ...datos, password: event.target.value });
		/* console.log(datos); */
	};

	// cuando se hace click en el botón de iniciar sesión, se guarda el usuario en el local storage
	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		//Validación de datos
		e.preventDefault();
		if (datos.username === "" || datos.password === "") {
			alert("Debes llenar todos los campos");
			return;
		}
		/* fetch(`http://localhost:4000/api/${datos.username}/${datos.password}`)
			.then((res) => res.json())
			.then((res) => console.log(res[0])); */

		const respuesta = await fetch(
			/* `http://localhost:4000/api/${datos.username}/${datos.password}` */
			`${process.env.REACT_APP_API}/${datos.username}/${datos.password}`
		);

		if (respuesta.status === 404) {
			alert("Usuario o contraseña incorrectos");
			return;
		}

		const [usuario] = await respuesta.json();
		//console.log(usuario);

		GuardarDatosLocales("usuario", {
			username: usuario.username,
			login: true,
			id: usuario.id,
			password: "",
		});

		//console.log(ObtenerDatosLocales("usuario"));

		navigate("/contenido");
	};

	return (
		<>
			<div className="ImgTarjeta">
				<div className="ImgSide"></div>
				<form
					action=""
					method="post"
					onSubmit={handleLogin}
					className="Form"
				>
					<h1 className="FormText">
						<RiLoginCircleFill /> Iniciar sesión
					</h1>
					<div className="FormLabelContainer">
						<div className="FormLabel">
							<label
								htmlFor="username"
								className="FormText FormTextLabel"
							>
								Nombre de usuario
							</label>
							<br />
							<input
								type="text"
								id="username"
								name="username"
								onChange={handleChange}
								className="FormLabelInput"
							/>
						</div>
						<div className="FormLabel">
							<label
								htmlFor="password"
								className="FormText FormTextLabel"
							>
								Contraseña
							</label>
							<br />
							<input
								type="password"
								id="password"
								name="password"
								onChange={handleChange}
								className="FormLabelInput"
							/>
						</div>
					</div>

					<button type="submit" className="Btn BtnText">
						Iniciar sesión
					</button>
				</form>
			</div>
		</>
	);
}
