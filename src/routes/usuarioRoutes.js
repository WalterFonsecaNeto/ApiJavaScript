import express from "express";
import {
  cadastrarUsuario,
  listarUsuarios,
  obterUsuario,
  atualizarNomeUsuario,
  deletarUsuario,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/usuario/cadastrar", cadastrarUsuario);
router.get("/usuario/listar", listarUsuarios);
router.get("/usuario/obter/:id", obterUsuario);
router.put("/usuario/atualizar/:id", atualizarNomeUsuario);
router.delete("/usuario/deletar/:id", deletarUsuario);

export default router;
