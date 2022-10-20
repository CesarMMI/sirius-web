export interface IEmpesa {
  id?: number;
  cnpj: string
  xrazaoSocial: string
  xfant: string
  xlgr: string
  nro: string
  xcpl: string
  xbairro: string
  cmun: string
  xmun: string
  uf: string
  cep: string
  fone: string
  ie: string
  crt: string
  token?: string
  banco?: string
  status: string
  grupoUsuario: string
}

export const selectedEmpresaInitialState: IEmpesa = {
  cep: '',
  cmun: '',
  cnpj: '',
  crt: '',
  fone: '',
  grupoUsuario: '',
  ie: '',
  nro: '',
  status: '',
  uf: '',
  xbairro: '',
  xcpl: '',
  xfant: '',
  xlgr: '',
  xmun: '',
  xrazaoSocial: ''
}