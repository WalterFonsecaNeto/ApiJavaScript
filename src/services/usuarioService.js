import { UsuarioRepository } from "../repositories/usuarioRepository.js";
import { Usuario } from "../domain/usuario.js";
import bcrypt from "bcrypt";

const usuarioRepository = new UsuarioRepository();

export class UsuarioService {

  async criarUsuarioAsync(usuario) {

    // Verificando se o email já existe
    const usuarioExistente = await usuarioRepository.obterUsuarioPorEmailAsync(
      usuario.email
    );
    if (usuarioExistente) {
      throw new Error("E-mail já cadastrado.");
    }

    // Criando a entidade de domínio e validando os dados
    const usuarioCriado = new Usuario(usuario);

    usuarioCriado.validarDados();

    const senhaCriptografada = await bcrypt.hash(usuarioCriado.senha, 10);
    usuarioCriado.senha = senhaCriptografada;

    return await usuarioRepository.criarUsuarioAsync(usuarioCriado);
  }

  async listarUsuariosAsync(ativo) {

    const usuarios = await usuarioRepository.listarUsuariosAsync(ativo);

    if (usuarios.length === 0) {
      throw new Error("Nenhum usuário encontrado.");
    }

    return usuarios;
  }

  async obterUsuarioPorIdAsync(usuarioId) {
    
    const usuarioEncontrado = await usuarioRepository.obterUsuarioPorIdAsync(usuarioId);

    if (!usuarioEncontrado) {
      throw new Error("Usuário não encontrado.");
    }

    return usuarioEncontrado;
  }

  async obterUsuarioPorIdComLoja(usuarioId) {
    const usuarioEncontrado = await usuarioRepository.obterUsuarioPorIdComLoja(usuarioId);

    if (!usuarioEncontrado) {
      throw new Error("Usuário não encontrado.");
    }

    return usuarioEncontrado;
  }

  async atualizarNomeUsuarioAsync(usuarioId, nome) {

    const usuarioEncontrado = await usuarioRepository.obterUsuarioPorIdAsync(usuarioId);

    if (!usuarioEncontrado) {
      throw new Error("Usuário não encontrado.");
    }

    return await usuarioRepository.atualizarNomeUsuarioAsync(usuarioId, nome);
  }

  async deletarUsuarioAsync(usuarioId) {

    const usuarioEncontrado = await usuarioRepository.obterUsuarioPorIdAsync(usuarioId);

    if (!usuarioEncontrado) {
      throw new Error("Usuário não encontrado.");
    }
    return await usuarioRepository.deletarUsuarioAsync(usuarioId);
  }

  async validarUsuarioLoginAsync(usuario) {

    const usuarioLogado = await usuarioRepository.validarUsuarioLoginAsync(
      usuario.email
    );

    if (!usuarioLogado) {
      throw new Error("E-mail ou senha inválidos.");
    }


    // Comparar a senha fornecida com a senha criptografada armazenada
    const senhaValida = await bcrypt.compare(usuario.senha, usuarioLogado.senha);

    if (!senhaValida) {
      throw new Error("E-mail ou senha inválidos.");
    }
  }
}
