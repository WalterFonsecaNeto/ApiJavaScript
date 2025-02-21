import express from "express";
import {
  listarUsuariosAsync,
  obterUsuarioPorIdAsync,
  obterUsuarioPorIdComLoja,
  atualizarNomeUsuarioAsync,
  deletarUsuarioAsync,
  validarUsuarioLoginAsync,
  criarUsuarioAsync,
  
} from "../controllers/usuarioController.js";

const router = express.Router();


router.get("/usuario/listar", listarUsuariosAsync);
router.get("/usuario/obter/:id", obterUsuarioPorIdAsync);
router.get("/usuario/obterComLoja/:id", obterUsuarioPorIdComLoja);
router.post("/usuario/login", validarUsuarioLoginAsync);
router.post("/usuario/cadastrar", criarUsuarioAsync);
router.put("/usuario/atualizar/:id", atualizarNomeUsuarioAsync);
router.put("/usuario/deletar/:id", deletarUsuarioAsync);



export default router;
