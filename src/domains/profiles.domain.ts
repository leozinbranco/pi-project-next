export interface UsuarioAdm {
  codUsuario: number
  nomeUsuario: string
  cpfUsuario: string
  telefoneUsuario: string
  emailUsuario: string
  senhaUsuario: string
  codEmpresaUsuario: number
  empresaUsuarioCnpj: EmpresaUsuario,
  adm: boolean
}

interface EmpresaUsuario {
  codEmpresa: number
  emailEmpresa: string
  cnpjEmpresa: string
}
