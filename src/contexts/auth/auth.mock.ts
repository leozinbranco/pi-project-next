import { UsuarioAdm } from 'domains/profiles.domain'
import { IAuthState } from './auth.types'
import { JwtPayload } from 'jsonwebtoken'

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

export const userDataInitial: JwtPayload = {
  email: "",
  sub: "",
  adm: "",
}

export const authContext: IAuthState = {
  user: authUserInitial,
  signIn: () => true,
  userData: userDataInitial,
  signInAdm: () => false,
  signOut: () => true,
  token: 'token'
}