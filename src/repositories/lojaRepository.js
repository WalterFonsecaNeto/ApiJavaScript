import { prisma } from "../prisma/prismaClient.js";

export class LojaRepository {

  async criarLojaAsync(loja) {
    return await prisma.lojas.create({
      data: {
        nome: loja.nome,
        endereco: loja.endereco,
        numero: loja.numero,
        usuarioId: loja.usuarioId,
        cnpj: loja.cnpj,
        telefone: loja.telefone,
        email: loja.email,
      },
      select:{
        id: true,
        nome: true,
        endereco: true,
        numero: true,
        usuarioId: true,
        cnpj: true,
        telefone: true,
        email: true,
      }
    });
  }

  async listarLojaAsync(status) {
    return await prisma.lojas.findMany({
      where: {status: status === true},
      select: {
        id: true,
        nome: true,
        endereco: true,
        numero: true,
        usuarioId: true,
        cnpj: true,
        telefone: true,
        email: true,
      },
    });
  }

  async obterLojaPorIdAsync(id) {
    return await prisma.lojas.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        endereco: true,
        numero: true,
        usuarioId: true,
        cnpj: true,
        telefone: true,
        email: true,
      },
    });
  }

  async atualizarLojaAsync(id, loja) {
    return await prisma.usuarios.update({
      where: { id },
      data: {
        nome: loja.nome,
        endereco: loja.endereco,
        numero: loja.numero,
        telefone: loja.telefone,
        email: loja.email,
      },
    });
  }

  async deletarUsuarioAsync(id) {
    return await prisma.lojas.update({
      where: { id },
      data: {
        status: false,
      },
    });
  }

  async obterLojaPorIdComUsuarioAsync(id) {
    return await prisma.lojas.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        endereco: true,
        numero: true,
        usuarioId: true,
        cnpj: true,
        telefone: true,
        email: true,
        usuario: {
          select: {
            nome: true,
            email: true,
          },
        },
      },
    });
  }
}
