export interface IProduto {
  id?: number;
  codProduto: string;
  descricao?: string;
  codEAN: string;
  NCM: string;
  CFOP: string;
  unCom: string;
  qtdCom: number;
  vlrUnCom: number;
  vlrProd: number;
  codEANTrib: string;
  unTrib: string;
  qtdTrib: number;
  vlrUnTrib: number;
  saldo: number;
  status: string;
}
