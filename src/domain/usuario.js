export class Usuario {
  constructor({ id, nome, email, senha }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  validarDados() {
    if (!this.nome || !this.email || !this.senha) {
      throw new Error("Nome, email e senha são obrigatórios.");
    }
    if (!this.email.includes("@")) {
      throw new Error("Email inválido.");
    }
    if (this.senha.length < 6) {
      throw new Error("A senha deve ter pelo menos 6 caracteres.");
    }
  }
}
