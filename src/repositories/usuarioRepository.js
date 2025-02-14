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
    return await prisma.usuarios.findMany();
  }

  async buscarPorId(id) {
    return await prisma.usuarios.findUnique({
      where: { id },
    });
  }

  async buscarPorEmail(email) {
    return await prisma.usuarios.findUnique({
      where: { email },
    });
  }

  async atualizarUsuario(id, nome) {
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
