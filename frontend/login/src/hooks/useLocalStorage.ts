import { SetStateAction, useState } from "react";
import { DatosLocales } from "../entities/DatosLocales";

/*  export function useLocalStorage(key: string, initialValue: DatosLocales) {

 	const [valorGuardado, setValorGuardado] = useState<DatosLocales>(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item
				? JSON.parse(item)
				: initialValue; // Si hay un valor guardado lo regresamos en caso contrario usamos el valor inicial que es var datos 
		} catch (e) {
			console.log(e);
			return initialValue;
		}
	});

	const setValor = (value: SetStateAction<DatosLocales>) => {
		try {
			setValorGuardado(value);
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch (error) {
			console.log(error);
		}
	};

	return [valorGuardado, setValor];
}  */

export const ObtenerDatosLocales = (key:string) : DatosLocales | null => {
	try {
		const item = window.localStorage.getItem(key);
		return item
			? JSON.parse(item)
			: null; /* Si hay un valor guardado lo regresamos en caso contrario usamos el valor inicial que es var datos */
	} catch (e) {
		console.log(e);
		return null;
	}
}

export const GuardarDatosLocales = (key:string,datos: DatosLocales) => {
	try {
		window.localStorage.setItem(key, JSON.stringify(datos));
	} catch (error) {
		console.log(error);
	}	
}