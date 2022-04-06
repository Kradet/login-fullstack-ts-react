import { Bienvenida } from "./pages/Bienvenida";
import { Registro } from "./pages/Registro";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { NoEncontrado } from "./pages/404";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contenido } from "./pages/contenido";
export function App() {
 
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Bienvenida />} />
				<Route path="/registro" element={<Registro />} />
				<Route path="/login" element={<Login />} />
				<Route path ="/contenido" element={<Contenido />} />
				<Route path="/*" element={<NoEncontrado/>} />
			</Routes>
		</BrowserRouter>
	);
}
