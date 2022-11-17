import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ITableData } from 'src/app/shared/components/custom-table/models/TableData';
import { CrudService } from 'src/app/shared/services/crud-service';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends CrudService {
  constructor(protected override http: HttpClient) {
    super(
      http,
      `http://${environment.api_host}:8083/datasnap/rest/TSMUsuarios`,
      {
        getAll: "GetUsuariosList",
        getById: "GetUsuario",
        post: "Usuario",
        put: "Usuario",
      }
    );
  }

  public override get(
    page: number,
    quantityPerPage: number
  ): Observable<ITableData<IUsuario>> {
    return super.get(page, quantityPerPage).pipe(
      map((response: any) => {
        return {
          data: response["usuarios"],
          pageTotal: response["qtdPaginas"],
        };
      })
    );
  }
}
