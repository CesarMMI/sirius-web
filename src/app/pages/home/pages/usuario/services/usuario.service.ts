import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { BehaviorSubject, catchError, first, throwError } from "rxjs";
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

    selectedUsuario$ = new BehaviorSubject<IUsuario | null>(null);

    public insertUser(email: string) {
        return this.http
            .post(
                `http://${environment.api_host}:8083/datasnap/rest/TSMEmpresa/AdicionarUsuario`,
                { email }
            )
            .pipe(
                first(),
                catchError((err) => {
                    this.message.add({
                        severity: "error",
                        summary:
                            err.error.erro ||
                            err.error.error ||
                            err.error ||
                            "Erro Desconhecido. Caso persista, entre em contato.",
                        detail: `${err.statusText || "Erro"} ${err.status}`,
                    });
                    return throwError(() => new Error(err));
                })
            );
    }

    public switchGrupo(idUsuario: number, idGrupo: number) {
        return this.http
            .post(
                `http://${environment.api_host}:8083/datasnap/rest/TSMGruposUsuarios/TrocarUsuarioGrupo`,
                {
                    idGrupoUsuario: idGrupo,
                    idUsuario: idUsuario,
                }
            )
            .pipe(
                first(),
                catchError((err) => {
                    this.message.add({
                        severity: "error",
                        summary:
                            err.error.erro ||
                            err.error.error ||
                            err.error ||
                            "Erro Desconhecido. Caso persista, entre em contato.",
                        detail: `${err.statusText || "Erro"} ${err.status}`,
                    });
                    return throwError(() => new Error(err));
                })
            );
    }
}
