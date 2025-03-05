import express from "express";
import {
  listarLojasAsync,
  listarLojasPorUsuarioAsync,
  obterLojaPorIdAsync,
  obterLojaPorIdComUsuarioAsync,
  atualizarLojaAsync,
  deletarLojaAsync,
  criarLojaAsync,
} from "../controllers/lojaController.js";

const router = express.Router();

router.get("/loja/listar", listarLojasAsync);
router.get("/loja/listarPorUsuario/:id", listarLojasPorUsuarioAsync);
router.get("/loja/obter/:id", obterLojaPorIdAsync);
router.get("/loja/obterComUsuario/:id", obterLojaPorIdComUsuarioAsync);
router.post("/loja/cadastrar", criarLojaAsync);
router.put("/loja/atualizar/:id", atualizarLojaAsync);
router.delete("/loja/deletar/:id", deletarLojaAsync);

export default router;
