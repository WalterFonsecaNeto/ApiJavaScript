import { UsuarioService } from "../services/usuarioService.js";

const usuarioService = new UsuarioService();

export async function cadastrarUsuario(req, res) {
  try {
    const novoUsuario = await usuarioService.criarUsuario(req.body);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}

export async function listarUsuarios(req, res) {
  try {
    const usuarios = await usuarioService.listarUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(404).json({ erro: error.message });
  }
}

export async function obterUsuario(req, res) {
  try {
    const usuario = await usuarioService.obterUsuario(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(404).json({ erro: error.message });
  }
}
export async function obterUsuarioComLoja(req, res) {
  try {
    const usuario = await usuarioService.obterUsuarioComLoja(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(404).json({ erro: error.message });
  }
}

export async function atualizarNomeUsuario(req, res) {
  try {
    const usuarioAtualizado = await usuarioService.atualizarNomeUsuario(
      req.params.id,
      req.body.nome
    );
    res.status(200).json(usuarioAtualizado.nome);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}

export async function deletarUsuario(req, res) {
  try {
    await usuarioService.deletarUsuario(req.params.id);
    res.status(200).json({ mensagem: "Usuário deletado com sucesso!" });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}
export async function validarUsuarioLogin(req, res) {
  try {
    const usuarioLogado = await usuarioService.validarUsuarioLogin(req.body);
    res.status(200).json({ mensagem: "Usuário logado com sucesso!", usuarioLogado } );
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}
