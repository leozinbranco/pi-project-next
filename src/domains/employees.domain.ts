export interface Funcionario {
    nome: string,
    cpf: string,
    telefone: string,
    email: string,
    senha: string,
    cnpjEmpresa: EmpresaFunc
}
  
export interface EmpresaFunc {
    cnpj: string
}
  