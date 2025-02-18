import bcrypt from "bcrypt";

export class Usuario {
  constructor({ 
    id, 
    nome, 
    email, 
    senha, 
    status = true, 
    dataCriacao = new Date() 
  }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.status = status;
    this.dataCriacao = dataCriacao;
  }

  validarDados() {
    if (!this.nome) throw new Error("Nome de usuário é obrigatório.");
    if (!this.email) throw new Error("Email é obrigatório.");
    if (!this.senha) throw new Error("Senha é obrigatória.");
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email)) {
      throw new Error("Email inválido.");
    }
    if (this.senha.length < 6) {
      throw new Error("Senha deve ter pelo menos 6 caracteres.");
    }
  }
  
  async criptografarSenha() {
    this.senha = await bcrypt.hash(this.senha, 10);
  }


}
