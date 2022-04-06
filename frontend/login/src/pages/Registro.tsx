import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ObtenerDatosLocales } from "../hooks/useLocalStorage";
import "../styles/login.css";

export function Registro() {
	const usuario = ObtenerDatosLocales("usuario");
	const navigate = useNavigate();
	const [datos, setDatos] = useState({
		username: "",
		password: "",
		repeatPassword: "",
	});
	/* Se verifica si existe un usuario logeado */
	useEffect(() => {
		usuario === null || usuario.login === false || usuario.username === ""
			? console.log("")
			: navigate("/contenido");
	}, []); /* Al tener arreglo vacío se usa al cargar el componente */

	// cuando los campos input cambian, se actualizan los datos
	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		if (event.target.name === "username") {
			setDatos({ ...datos, username: event.target.value });
		}
		if (event.target.name === "password") {
			setDatos({ ...datos, password: event.target.value });
		}
		if (event.target.name === "repeatpassword") {
			setDatos({ ...datos, repeatPassword: event.target.value });
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (datos.username === "" || datos.password === "") {
			alert("Debes llenar todos los campos");
			return;
		}
		if (datos.password !== datos.repeatPassword) {
			alert("Las contraseñas no coinciden");
			return;
		}

		const requestInit: RequestInit = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: datos.username,
				password: datos.password,
			}),
		};

		/* const peticion = await fetch("http://localhost:4000/api", requestInit); */
		const peticion = await fetch(`${process.env.REACT_APP_API}`, requestInit);

		if ((await peticion.status) === 400) {
			alert("El usuario ya existe, intente con uno diferente");
			return;
		}

		if ((await peticion.status) === 200) {
			alert("Usuario creado correctamente, ingrese con su nuevo usuario");
			navigate("/login");
		}

		//console.log(await peticion.json());
	};

	return (
		<>
			<div className="ImgTarjeta">
				<div className="ImgSide"></div>
				<form
					action=""
					method="post"
					onSubmit={handleSubmit}
					className="Form"
				>
					<h1 className="FormText">Registro</h1>
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
						<div className="FormLabel">
							<label
								htmlFor="repeatpassword"
								className="FormText FormTextLabel"
							>
								Repetir contraseña
							</label>
							<br />
							<input
								type="password"
								id="repeatpassword"
								name="repeatpassword"
								onChange={handleChange}
								className="FormLabelInput"
							/>
						</div>
					</div>

					<button type="submit" className="Btn BtnText">
						Registrarse
					</button>
				</form>
			</div>
		</>
	);
}
