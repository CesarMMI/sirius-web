import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ITableData } from 'src/app/shared/components/custom-table/models/TableData';
import { CrudService } from 'src/app/shared/services/crud-service';
import { environment } from 'src/environments/environment';
import { IVendedor } from '../models/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService extends CrudService {
  constructor(protected override http: HttpClient) {
    super(
      http,
      `http://${environment.api_host}:8087/datasnap/rest/TSMVendedores`,
      {
        getAll: "GetVendedores",
        getById: "GetVendedorDetail",
        post: "Vendedor",
        put: "Vendedor",
        delete: "Vendedor",
      }
    );
  }

  public override get(
    page: number,
    quantityPerPage: number
  ): Observable<ITableData<IVendedor>> {
    return super.get(page, quantityPerPage).pipe(
      map((response: any) => {
        return {
          data: response["vendedores"],
          pageTotal: response["QuantidadePaginas"],
        };
      })
    );
  }
}
