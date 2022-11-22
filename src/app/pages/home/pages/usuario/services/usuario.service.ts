import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, tap } from "rxjs";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CrudService } from "src/app/shared/services/crud-service";
import { PaginationService } from "src/app/shared/services/pagination.service";
import { environment } from "src/environments/environment";
import { IUsuario } from "../models/usuario";

@Injectable({
    providedIn: "root",
})
export class UsuarioService extends CrudService<IUsuario> {
    constructor(
        protected override http: HttpClient,
        protected override pagination: PaginationService
    ) {
        super(
            http,
            pagination,
            `http://${environment.api_host}:8083/datasnap/rest/TSMUsuarios`,
            {
                getAll: {
                  endPoint: "GetUsuariosList",
                  response: {
                    payload: "usuarios",
                    pageCount: "qtdPaginas"
                  }
                },
                getById: "GetUsuario",
                post: "Usuario",
                put: "Usuario",
                delete: "Usuario",
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
