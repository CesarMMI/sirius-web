import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { IEmpresa } from "src/app/pages/home/pages/empresa/models/Empresa";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class EmpresaService {
  private baseUrl = `http://${environment.api_host}:8083/datasnap/rest/TSMEmpresa/`;
  constructor(private http: HttpClient) {}

  public selectedEmpresa$ = new BehaviorSubject<IEmpresa | null>(null);

  public getAll(page: number, itemQuantity: number): Observable<ITableData> {
    return this.http
      .get(`${this.baseUrl}GetEmpresas`, {
        params: {
          pag: page,
          qtdItensPag: itemQuantity,
        },
      })
      .pipe(
        map((response: any) => {
          return {
            data: response["empresas"],
            totalPages: response["QtdPaginas"],
          };
        })
      );
  }
}
