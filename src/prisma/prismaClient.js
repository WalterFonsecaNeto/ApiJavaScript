import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();  // Instância do PrismaClient

export { prisma };  // Exporta a instância
