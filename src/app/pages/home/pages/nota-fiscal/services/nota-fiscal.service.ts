import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CrudService } from "src/app/shared/services/crud-service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class NotaFiscalService extends CrudService {
  constructor(protected override http: HttpClient) {
    super(
      http,
      `http://${environment.api_host}:8082/datasnap/rest/TNFeMethods`,
      {
        getAll: "GetNotasFiscaisList",
        getById: "GetNotaFiscalDetail",
        post: "NotaFiscal",
        put: "NotaFiscal",
        delete: "NotaFiscal",
      }
    );
  }

  public override get(
    page: number,
    quantityPerPage: number
  ): Observable<ITableData<any>> {
    return super.get(page, quantityPerPage).pipe(
      map((response: any) => {
        return {
          data: response["NotasFiscais"],
          pageTotal: response["QuantidadePaginas"],
        };
      })
    );
  }
}
