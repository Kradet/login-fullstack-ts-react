import { Router } from "express";
import { CreateUsuario, GetUsuario, GetUsuarios } from "../controllers/usuarios.controller";

const router = Router();

router.route("/").get(GetUsuarios); //regresa la lista de los usuarios registrados
router.route("/").post(CreateUsuario); //se ingresa un usuario a traves del req.body = {username, password} //Registro de usuario
router.route("/:username/:password").get(GetUsuario); //regresa un usuario en especifico a traves de req.params = {username, password} //login 

export default router;