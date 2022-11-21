export interface ICliente {
  id?: number;
  status: string;
  dataFoiCadastrado: string;
  dataUltimaAtualizacao: string;
  razaoSocial: string;
  fantasia: string;
  cpfCnpj: string;
  inscEstadual: string;
  indIE: string;
  inscMunicipal: string;
  tipoCliente: string;
  exclusivo: number;
  vendedorId: number;
}
