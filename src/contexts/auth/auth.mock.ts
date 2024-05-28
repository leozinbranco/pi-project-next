import { UsuarioAdm } from 'domains/profiles.domain'
import { IAuthState } from './auth.types'

export const authUserInitial: UsuarioAdm = {
  codUsuario: 0,
  nomeUsuario: '-',
  cpfUsuario: '-',
  telefoneUsuario: '-',
  emailUsuario: '-',
  senhaUsuario: '-',
  codEmpresaUsuario: 0,
  empresaUsuarioCnpj: {
    codEmpresa: 0,
    emailEmpresa: '-',
    cnpjEmpresa: '-'
  }
}

export const authContext: IAuthState = {
  user: authUserInitial,
  signIn: () => true,
  signOut: () => true,
  token: 'token'
}
