export class Loja {
  constructor({
    id,
    nome,        
    cep,       
    logradouro,  
    numero, 
    bairro,      
    cidade,      
    uf,          
    cnpj,        
    telefone,    
    email,       
    status = true,
    dataCriacao = new Date(new Date().getTime() - 3 * 60 * 60 * 1000),
    usuarioId,  // ID do usuário associado à loja
  }) {
    this.id = id;
    this.nome = nome;
    this.cep = cep;
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
    this.cnpj = cnpj;
    this.telefone = telefone;
    this.email = email;
    this.status = status;
    this.dataCriacao = dataCriacao;
    this.usuarioId = usuarioId;
  }

  validarDados() {
    if (!this.nome) throw new Error("Nome da loja é obrigatório.");
    if (!this.logradouro) throw new Error("Endereço da loja é obrigatório.");
    if (!this.numero || isNaN(this.numero)) throw new Error("Número da loja é obrigatório e deve ser um número válido.");
    if (!this.usuarioId) throw new Error("Usuário associado à loja é obrigatório.");
    if (!this.cnpj) throw new Error("CNPJ da loja é obrigatório.");
    if (!this.telefone) throw new Error("Telefone da loja é obrigatório.");
    if (!this.email) throw new Error("Email da loja é obrigatório.");
    
    // Validação simples de formato de email (pode ser melhorado)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) throw new Error("Email da loja inválido.");

    // Validação do telefone permitindo caracteres especiais (como () -) 
    // (11) 1234-5678 ou 11 1234-5678
    const telefoneRegex = /^(?:\(\d{2}\)\s?)?\d{4,5}-?\d{4}$/;
    if (!telefoneRegex.test(this.telefone)) throw new Error("Telefone da loja inválido.");

    // Validação do CNPJ permitindo caracteres especiais (como . / -) 
    // 12.345.678/0001-90
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    if (!cnpjRegex.test(this.cnpj)) throw new Error("CNPJ da loja inválido.");

    // Validação da data de criação
    if (isNaN(this.dataCriacao.getTime())) throw new Error("Data de criação inválida.");
  }
}
