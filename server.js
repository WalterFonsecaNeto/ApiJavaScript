import express from "express";
import cors from "cors"; // Importando o cors
import usuarioRoutes from "./src/routes/usuarioRoutes.js";

const app = express();

// Configurando o CORS para permitir o acesso de localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000", // Permite acesso apenas de localhost:3000
  })
);

app.use(express.json());

app.use("/api", usuarioRoutes); // Todas as rotas começam com /api

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000 🚀");
});
