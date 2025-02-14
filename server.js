import express from "express";
import usuarioRoutes from "./src/routes/usuarioRoutes.js";


const app = express();
app.use(express.json());

app.use("/api", usuarioRoutes); // Todas as rotas começam com /api

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀");
});
