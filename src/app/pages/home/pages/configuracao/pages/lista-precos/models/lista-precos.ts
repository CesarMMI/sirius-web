import { IListaPrecosReg } from "./lista-precos-reg";

export interface IListaPrecos {
    id?: number;
    descricao: string;
    registros?: IListaPrecosReg[]
}
