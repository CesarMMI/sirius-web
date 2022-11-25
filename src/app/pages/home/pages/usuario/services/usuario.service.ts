import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";

import { IUsuario } from "../models/usuario";

@Injectable({
    providedIn: "root",
})
export class UsuarioService extends CrudService<IUsuario> {
    constructor(
        protected override http: HttpClient,
        protected override pagination: PaginationService,
        protected override filter: FilterService,
        protected override message: MessageService
    ) {
        super(
            http,
            pagination,
            filter,
            message,
            `http://${environment.api_host}:8083/datasnap/rest/TSMUsuarios`,
            {
                getAll: {
                    endPoint: "GetUsuariosList",
                    response: {
                        payload: "usuarios",
                        pageCount: "qtdPaginas",
                    },
                },
                getById: "GetUsuario",
                post: "Usuario",
                put: "Usuario",
                delete: "Usuario",
            }
        );
    }
}
