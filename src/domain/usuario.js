const TipoUsuario = Object.freeze({
  ADMIN: 1,
  GERENTE: 2,
  USUARIO: 3,
});

export class Usuario {
  constructor({
    id,
    nome,
    email,
    senha,
    status = true,
    dataCriacao = new Date(new Date().getTime() - 3 * 60 * 60 * 1000),
    tipoUsuario,
  }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.status = status;
    this.dataCriacao = dataCriacao;
    this.tipoUsuario = tipoUsuario;
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

    // Verificar se tipoUsuario é válido, ou seja, se é um número válido entre 1, 2 ou 3
    if (
      ![TipoUsuario.ADMIN, TipoUsuario.GERENTE, TipoUsuario.USUARIO].includes(
        this.tipoUsuario
      )
    ) {
      throw new Error("Tipo de usuário inválido.");
    }
  }

  // Método para exibir o tipo de usuário como string (ADMIN, GERENTE, USUARIO)
  obterTipoUsuario() {
    // Retorna o nome do tipo de usuário baseado no número
    return Object.keys(TipoUsuario).find(
      (key) => TipoUsuario[key] === this.tipoUsuario
    );
  }
}
