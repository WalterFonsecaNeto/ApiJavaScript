import { UsuarioRepository } from "../repositories/usuarioRepository.js";
import { LojaRepository } from "../repositories/lojaRepository.js";
import { Loja } from "../domain/loja.js";

const usuarioRepository = new UsuarioRepository();
const lojaRepository = new LojaRepository();

export class UsuarioService {
  async criarLojaAsync(loja) {
    const usuarioEstaVinculado = usuarioRepository.obterUsuarioPorIdComLoja(
      loja.usuarioId
    );
    if (usuarioEstaVinculado) {
      throw new Error("Este usuário já possui uma loja vinculada.");
    }

    // Criando a entidade de domínio e validando os dados
    const lojaCriado = new Loja(loja);

    lojaCriado.validarDados();

    return await lojaRepository.criarLojaAsync(lojaCriado);
  }

  async listarLojaAsync(ativo) {
    const loja = await lojaRepository.listarLojaAsync(ativo);

    if (loja.length === 0) {
      throw new Error("Nenhuma loja encontrada.");
    }

    return loja;
  }

  async obterLojaPorIdAsync(lojaId) {
    const lojaEncontrada = await lojaRepository.obterLojaPorIdAsync(lojaId);

    if (!lojaEncontrada) {
      throw new Error("Loja não encontrada.");
    }

    return lojaEncontrada;
  }

  async obterLojaPorIdComUsuarioAsync(lojaId) {
    const lojaEncontrada = await lojaRepository.obterLojaPorIdComUsuarioAsync(
      lojaId
    );

    if (!lojaEncontrada) {
      throw new Error("loja não encontrada.");
    }

    return lojaEncontrada;
  }

  async atualizarLojaAsync(lojaId, loja) {
    const lojaEncontrada = await lojaRepository.obterLojaPorIdAsync(lojaId);

    if (!lojaEncontrada) {
      throw new Error("Loja não encontrada.");
    }

    return await lojaRepository.atualizarLojaAsync(lojaId, loja);
  }

  async obterLojaPorIdAsync(lojaId) {
    const lojaEncontrada = await lojaRepository.obterLojaPorIdAsync(lojaId);

    if (!lojaEncontrada) {
      throw new Error("Loja não Encontrada.");
    }
    return await lojaRepository.deletarUsuarioAsync(lojaId);
  }

  
}
