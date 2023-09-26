import { Router } from "express";
import getUsuarios from "./controllers/getUsuarios.js";
import getUsuariosPorId from "./controllers/getUsuariosPorId.js";
import postUsuarios from "./controllers/postUsuarios.js";
import putUsuariosPorId from "./controllers/putUsuariosPorId.js";
import deleteUsuarios from "./controllers/deleteUsuarios.js";

const router = Router();

export default () => {
    router.get("/usuarios", getUsuarios);
    router.get("/usuarios/:id", getUsuariosPorId);
    router.post("/usuarios", postUsuarios);
    router.put("/usuarios/:id", putUsuariosPorId);
    router.delete("/usuarios/:id", deleteUsuarios);
    return router;
};
