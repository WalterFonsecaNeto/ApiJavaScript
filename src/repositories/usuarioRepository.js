import { prisma } from "../prisma/prismaClient.js";

export class UsuarioRepository {
  async criarUsuarioAsync(usuario) {
    return await prisma.usuarios.create({
      data: {
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha,
        status: usuario.status,
        dataCriacao: usuario.dataCriacao,
      },
    });
  }

  async listarUsuariosAsync(status) {
    return await prisma.usuarios.findMany({
      where: {
        status: status === true, // Verifica se o status é igual a true
      },
      select: {
        id: true,
        nome: true,
        email: true,
        senha: false,
        status: false,
        dataCriacao: true,
      },
    });
  }

  async obterUsuarioPorIdAsync(usuarioId) {
    return await prisma.usuarios.findUnique({
      where: { usuarioId },
      select: {
        id: true,
        nome: true,
        email: true,
        senha: false,
        status: false,
        dataCriacao: true,
      },
    });
  }

  async obterUsuarioPorEmailAsync(email) {
    return await prisma.usuarios.findUnique({
      where: { email },
      select: {
        id: true,
        nome: true,
        email: true,
        senha: false,
        status: false,
        dataCriacao: true,
      },
    });
  }
  async validarUsuarioLoginAsync(email) {
    return await prisma.usuarios.findUnique({
      where: { email },
      select: {
        id: false,
        nome: false,
        email: false,
        senha: true,
        status: false,
        dataCriacao: false,
      },
    });
  }

  async atualizarNomeUsuarioAsync(usuarioId, nome) {
    return await prisma.usuarios.update({
      where: { usuarioId },
      data: {
        nome: nome,
      },
    });
  }

  async deletarUsuarioAsync(usuarioId) {
    return await prisma.usuarios.update({
      where: { usuarioId },
      data: {
        status: false,
      },
    });
  }

  async obterUsuarioPorIdComLoja(usuarioId) {
    return await prisma.usuarios.findUnique({
      where: { usuarioId },
      select: {
        id: true,
        nome: true,
        email: true,
        senha: false,
        status: false,
        dataCriacao: true,
        loja: true,
      },
    });
  }
}
