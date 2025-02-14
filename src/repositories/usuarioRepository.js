import { prisma } from "../prisma/prismaClient.js";

export class UsuarioRepository {
  async criarUsuario(usuario) {
    return await prisma.usuarios.create({
      data: {
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha,
      },
    });
  }

  async listarUsuarios() {
    return await prisma.usuarios.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        // Selecione apenas os campos necessários
      },
    });
  }

  async buscarPorId(id) {
    return await prisma.usuarios.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        email: true,
        // Selecione apenas os campos necessários
      },
    });
  }

  async buscarPorEmail(email) {
    return await prisma.usuarios.findUnique({
      where: { email },
      select: {
        id: true,
        nome: true,
        email: true,
        // Selecione apenas os campos necessários
      },
    });
  }

  async atualizarNomeUsuario(id, nome) {
    return await prisma.usuarios.update({
      where: { id },
      data: {
        nome: nome,
      },
    });
  }

  async deletarUsuario(id) {
    return await prisma.usuarios.delete({
      where: { id },
    });
  }
}
