import express from "express"; //importando biblioteca express

import { PrismaClient } from "@prisma/client"; //importando biblioteca PrismaClient

const prisma = new PrismaClient(); // Variavel que esta recebendo tudo que tem dentro do prisma client

const app = express(); //Variavel que esta recebendo tudo que tem dentro do express
app.use(express.json()); //Garante que vamos trabalhar com json de forma que as informações vão chegar

app.post("/usuario/cadastrar", async (request, response) => {
  await prisma.usuarios.create({
    data: {
      nome: request.body.nome,
      email: request.body.email,
      senha: request.body.senha,
    },
  });

  response.status(201).send(request.body);
});

app.get("/usuario/listar", async (request, response) => {
  const usuarios = await prisma.usuarios.findMany();

  response.status(200).send(usuarios);
});

app.get("/usuario/obter/:id", async (request, response) => {
  const usuario = await prisma.usuarios.findUnique({
    where: { id: request.params.id },
  });

  response.status(200).send(usuario);
});

app.put("/usuario/atualizar/:id", async (request, response) => {
  await prisma.usuarios.update({
    where: { id: request.params.id },
    data: {
      nome: request.body.nome,
      email: request.body.email,
      senha: request.body.senha
    },
  });
  response.status(201).send(request.body);
});

app.delete("/usuario/deletar/:id", async (request, response) => {
  await prisma.usuarios.delete({
    where: { id: request.params.id },
  });

  response.status(200).send({ mensagem: "Usuario deletado com sucesso!" });
});

app.listen(3000);
