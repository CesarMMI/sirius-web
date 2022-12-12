import { IPermissoes } from "./permissoes";

export interface IUserInfo {
    paginaInicial: string;
    permissoes: IPermissoes;
    vendedorId: number;
}
