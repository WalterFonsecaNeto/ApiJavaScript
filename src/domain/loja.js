export class Loja {
  constructor({ 
    id, 
    nome, 
    endereco, 
    numero, 
    usuarioId, 
    cnpj, 
    telefone, 
    email,
    status = true, 
    dataCriacao = new Date() 
  }) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.numero = numero;
    this.usuarioId = usuarioId;
    this.cnpj = cnpj;
    this.telefone = telefone;
    this.email = email;
    this.status = status;
    this.dataCriacao = dataCriacao;
  }

  validarDados() {
    if (!this.nome) throw new Error("Nome da loja é obrigatório.");
    if (!this.endereco) throw new Error("Endereço da loja é obrigatório.");
    if (!this.numero) throw new Error("Número da loja é obrigatório.");
    if (!this.usuarioId) throw new Error("Usuário associado à loja é obrigatório.");
    if (!this.cnpj) throw new Error("CNPJ da loja é obrigatório.");
    if (!this.telefone) throw new Error("Telefone da loja é obrigatório.");
    if (!this.email) throw new Error("Email da loja é obrigatório.");
  }
}
