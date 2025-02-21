import { UsuarioService } from "../services/usuarioService.js";

const usuarioService = new UsuarioService();

export async function criarUsuarioAsync(req, res) {
  try {
    const novoUsuario = await usuarioService.criarUsuarioAsync(req.body);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}

export async function listarUsuariosAsync(req, res) {
  try {
   
    const ativo = req.query.ativo === 'true'; // Se 'ativo' for a string "true", será convertido para true, senão, será false

    const usuarios = await usuarioService.listarUsuariosAsync(ativo);
    res.status(200).json(usuarios);

  } catch (error) {
    res.status(500).json({ erro: error.message }); // Mudando para o código 500 para erro interno
  }
}

export async function obterUsuarioPorIdAsync(req, res) {
  try {
    const usuario = await usuarioService.obterUsuarioPorIdAsync(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(404).json({ erro: error.message });
  }
}

export async function obterUsuarioPorIdComLoja(req, res) {
  try {
    const usuario = await usuarioService.obterUsuarioPorIdComLoja(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(404).json({ erro: error.message });
  }
}

export async function atualizarNomeUsuarioAsync(req, res) {
  try {
    const usuarioAtualizado = await usuarioService.atualizarNomeUsuarioAsync(
      req.params.id,
      req.body.nome
    );
    res.status(200).json(usuarioAtualizado.nome);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}

export async function deletarUsuarioAsync(req, res) {

  try {
    await usuarioService.deletarUsuarioAsync(req.params.id);

    res.status(200).json({ mensagem: "Usuário deletado com sucesso!" });

  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}

export async function validarUsuarioLoginAsync(req, res) {
  try {
    const usuarioId = await usuarioService.validarUsuarioLoginAsync(req.body);

    res.status(200).json({ mensagem: "Usuário logado com sucesso!", usuarioId } );
    
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
}
