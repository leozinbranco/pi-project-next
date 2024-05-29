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
    cnpjEmpresa: '-',
  },
  adm: false
}

export const authContext: IAuthState = {
  user: authUserInitial,
  signInAdm: () => true,
  signIn: () => true,
  signOut: () => true,
  token: 'token'
}