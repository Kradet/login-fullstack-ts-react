import { Router } from "express";
import { CreateUsuario, GetUsuario, GetUsuarios } from "../controllers/usuarios.controller";

const router = Router();
const cors = require("cors");

router.route("/").get(cors(),GetUsuarios); //regresa la lista de los usuarios registrados
router.route("/").post(cors(),CreateUsuario); //se ingresa un usuario a traves del req.body = {username, password} //Registro de usuario
router.route("/:username/:password").get(cors(),GetUsuario); //regresa un usuario en especifico a traves de req.params = {username, password} //login 

export default router;