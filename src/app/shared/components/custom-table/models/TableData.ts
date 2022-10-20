import { IEmpesa } from "src/app/pages/empresa/models/Empresa";

export interface ITableData {
  data: IEmpesa[];
  totalPages: number;
}
