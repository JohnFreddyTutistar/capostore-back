const {getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario} = require("../controllers/usuarios");
const {Router} = require("express");

const router = Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuario);
router.post("/", postUsuario);
router.put("/:id", putUsuario);
router.delete("/:id", deleteUsuario);

module.exports = {
    userRoutes: router
}