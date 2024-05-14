export interface UsuarioAdm {
  codUsuario: number
  nomeUsuario: string
  cpfUsuario: string
  telefoneUsuario: string
  emailUsuario: string
  senhaUsuario: string
  codEmpresaUsuario: number
  empresaUsuario: EmpresaUsuario
}

interface EmpresaUsuario {
  codEmpresa: number
  emailEmpresa: string
  cnpjEmpresa: string
}
