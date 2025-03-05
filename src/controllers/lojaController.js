import { LojaService } from "../services/lojaServices.js";

const lojaService = new LojaService();

export async function criarLojaAsync(req, res) {
  try {
    const novaLoja = await lojaService.criarLojaAsync(req.body);
    res.status(201).json(novaLoja);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}

export async function listarLojasAsync(req, res) {
  try {
    const ativo = req.query.ativo === "true";
    const lojas = await lojaService.listarLojaAsync(ativo);
    res.status(200).json(lojas);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
}

export async function listarLojasPorUsuarioAsync(req, res) {
  try {
    const usuarioId = req.params.id;
    const ativo = req.query.ativo === "true";
    const lojas = await lojaService.listarLojasDeUmUsuarioAsync(ativo, usuarioId);
    res.status(200).json(lojas);
  } catch (error) {
    res.status(404).json({ erro: error.message });
  }
}

export async function obterLojaPorIdAsync(req, res) {
  try {
    const loja = await lojaService.obterLojaPorIdAsync(req.params.id);
    res.status(200).json(loja);
  } catch (error) {
    res.status(404).json({ erro: error.message });
  }
}

export async function obterLojaPorIdComUsuarioAsync(req, res) {
  try {
    const loja = await lojaService.obterLojaPorIdComUsuarioAsync(req.params.id);
    res.status(200).json(loja);
  } catch (error) {
    res.status(404).json({ erro: error.message });
  }
}

export async function atualizarLojaAsync(req, res) {
  try {
    const lojaAtualizada = await lojaService.atualizarLojaAsync(
      req.params.id,
      req.body
    );
    res.status(200).json(lojaAtualizada);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}

export async function deletarLojaAsync(req, res) {
  try {
    await lojaService.deletarLojaAsync(req.params.id);
    res.status(200).json({ mensagem: "Loja deletada com sucesso!" });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}
