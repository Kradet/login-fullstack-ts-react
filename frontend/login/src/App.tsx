import { Bienvenida } from "./pages/Bienvenida";
import { Registro } from "./pages/Registro";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";

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
				<Route path="*" element={<h1>Página no encontrada</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
