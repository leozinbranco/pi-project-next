export interface UsuarioAdm {
  codUsuario: number
  nomeUsuario: string
  cpfUsuario: string
  telefoneUsuario: string
  emailUsuario: string
  senhaUsuario: string
  codEmpresaUsuario: number
  empresaUsuario: Empresa
}

interface Empresa {
  codEmpresa: number
  emailEmpresa: string
  cnpjEmpresa: string
}
