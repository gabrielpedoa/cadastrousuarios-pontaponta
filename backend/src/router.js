import { Router } from "express";
import getUsuarios from "./controllers/getUsuarios.js";
import getUsuariosPorId from "./controllers/getUsuariosPorId.js";
import postUsuarios from "./controllers/postUsuarios.js";
import putUsuariosPorId from "./controllers/putUsuariosPorId.js";
import deleteUsuarios from "./controllers/deleteUsuarios.js";
import { login } from "./controllers/login.js";
import verifyToken from "./middlewares/verifyToken.js";

const router = Router();

export default () => {
    router.get("/usuarios",verifyToken,  getUsuarios);
    router.get("/usuarios/:id",verifyToken, getUsuariosPorId);
    router.post("/usuarios", postUsuarios);
    router.put("/usuarios/:id",verifyToken, putUsuariosPorId);
    router.delete("/usuarios/:id",verifyToken, deleteUsuarios);
    router.post("/login", login);
    return router;
};
