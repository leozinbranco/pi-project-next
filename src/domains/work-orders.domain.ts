export interface OrdemServico {
  codOs: number
  numOs: string
  statusOs: string
  tipoObjOs: string
  tipoOs: string
  descricaoAjustesOs: string
  observacaoOs: string
  telContatoOs: string
  emailContatoOs: string
  cnpjClienteOs: string
  dataAberturaOs: Date
  dataUltimaModOs: Date
  dataUltimoUpload: Date
  atributoValidadorOs: string
  EmpresaOs: EmpresaOs
  codEmpresaOs: number
}

export interface EmpresaOs {
  razaoSocialEmpresa: string
  telefoneEmpresa: string
  emailEmpresa: string
}
