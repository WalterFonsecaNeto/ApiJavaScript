import { UsuarioRepository } from "../repositories/usuarioRepository.js";
import { Usuario } from "../domain/usuario.js";

const usuarioRepository = new UsuarioRepository();

export class UsuarioService {
  async criarUsuario(dados) {
    // Criando a entidade de domínio e validando os dados
    const usuario = new Usuario(dados);
    usuario.validarDados();

    // Verificando se o email já existe
    const usuarioExistente = await usuarioRepository.buscarPorEmail(
      usuario.email
    );
    if (usuarioExistente) {
      throw new Error("E-mail já cadastrado.");
    }

    // Criptografando a senha antes de salvar
    const senhaCriptografada = await bcrypt.hash(usuario.senha, 10);
    usuario.senha = senhaCriptografada;

    // Criando o usuário no banco
    return await usuarioRepository.criarUsuario(usuario);
  }

  async listarUsuarios() {
    const usuarios = await usuarioRepository.listarUsuarios();

    if (usuarios.Count() === 0) {
      throw new Error("Nenhum usuário encontrado.");
    }
  }

  async obterUsuario(id) {
    const usuario = await usuarioRepository.buscarPorId(id);

    if (!usuario) {
      throw new Error("Usuário não encontrado.");
    }

    return usuario;
  }

  async atualizarNomeUsuario(id, nome) {

    const usuarioEncontrado = await usuarioRepository.buscarPorId(id);
    
    if (!usuarioEncontrado) {
      throw new Error("Usuário não encontrado.");
    }

    return await usuarioRepository.atualizarUsuario(id, nome);
  }

  async deletarUsuario(id) {
    return await usuarioRepository.deletarUsuario(id);
  }
}
