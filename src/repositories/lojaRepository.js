import { prisma } from "../prisma/prismaClient.js";

export class LojaRepository {
  async criarLojaAsync(loja) {
    return await prisma.lojas.create({
      data: {
        nome: loja.nome,
        endereco: loja.endereco,
        



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
  async validarUsuarioLogin(email) {
    return await prisma.usuarios.findUnique({
      where: { email },
      select: {
        senha: true,
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

  async buscarPorIdComLoja(id) {
    return await prisma.usuarios.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        email: true,
        loja: {
          select: {
            nome: true,
            endereco: true,
          
          },
        },
      },
    });
  }
}
