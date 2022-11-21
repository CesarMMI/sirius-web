import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ITableData } from 'src/app/shared/components/custom-table/models/TableData';
import { CrudService } from 'src/app/shared/services/crud-service';
import { environment } from 'src/environments/environment';
import { ICliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends CrudService {
  constructor(protected override http: HttpClient) {
    super(
      http,
      `http://${environment.api_host}:8080/datasnap/rest/TSMClientes`,
      {
        getAll: "GetClientesList",
        getById: "GetClientesDetail",
        post: "Cliente",
        put: "Cliente",
        delete: "Cliente",
      }
    );
  }

  public override get(
    page: number,
    quantityPerPage: number
  ): Observable<ITableData<ICliente>> {
    return super.get(page, quantityPerPage).pipe(
      map((response: any) => {
        return {
          data: response["Clientes"],
          pageTotal: response["QuantidadePaginas"],
        };
      })
    );
  }
}
