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


router.get("/usuario/listar", listarUsuarios);
router.get("/usuario/obter/:id", obterUsuario);
router.get("/usuario/login", validarUsuarioLogin);
router.post("/usuario/cadastrar", cadastrarUsuario);
router.put("/usuario/atualizar/:id", atualizarNomeUsuario);
router.delete("/usuario/deletar/:id", deletarUsuario);


export default router;
