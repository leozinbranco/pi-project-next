// import { Configuration } from '@azure/msal-browser'
// import { User } from 'oidc-client'
import { UsuarioAdm } from 'domains/profiles.domain'
import { JwtPayload } from 'jsonwebtoken'
import React, { ReactElement } from 'react'

// export interface IMsalConfiguration extends Configuration {
//   scope: string
// }

export interface IAuthState {
  token: string
  user: UsuarioAdm
  userData?: JwtPayload
  signIn: (cpf: string, senha: string) => void
  signInAdm: (email: string, senha: string) => void
  signOut: () => void
}
export interface UsuarioAdmResponseAPI {
  access_token: string
  user: UsuarioAdm
}
export type Context = IAuthState | null

export type HookResult = IAuthState
export type Hook = () => HookResult

export interface IProps {
  onLoading: ReactElement
  children: React.ReactNode
}
export type Provider = React.FC<IProps>
