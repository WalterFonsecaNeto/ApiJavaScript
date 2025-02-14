import express from "express";
import {
  cadastrarUsuario,
  listarUsuarios,
  obterUsuario,
  atualizarNomeUsuario,
  deletarUsuario,
  validarUsuarioLogin
} from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/usuario/cadastrar", cadastrarUsuario);
router.get("/usuario/listar", listarUsuarios);
router.get("/usuario/obter/:id", obterUsuario);
router.put("/usuario/atualizar/:id", atualizarNomeUsuario);
router.delete("/usuario/deletar/:id", deletarUsuario);
router.get("/usuario/login", validarUsuarioLogin);

export default router;
