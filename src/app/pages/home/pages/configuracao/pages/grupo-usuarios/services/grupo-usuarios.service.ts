import { CurrencyPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { ICol } from "src/app/shared/components/custom-table/models/Col";
import { StatusPipe } from "src/app/shared/pipes/status.pipe";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class GrupoUsuariosService extends CrudService<any> {
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
            `http://${environment.api_host}:8083/datasnap/rest/TSMGruposUsuarios`,
            {
                getAll: {
                    endPoint: "GetGruposUsuarios",
                    response: {
                        payload: "gruposUsuarios",
                        pageCount: "QtdPaginas",
                    },
                },
                getById: "GetGrupoUsuario",
                post: "GrupoUsuario",
                put: "GrupoUsuario",
                delete: "GrupoUsuario",
            }
        );
    }

    #permissoes$ = new BehaviorSubject<any[]>([]);

    public get permissoes$() {
        return this.#permissoes$.asObservable();
    }
    private setPermissoes(permissoes: any[]) {
        this.#permissoes$.next(permissoes);
    }
    private genPermissoesObj(permissoes: any[]) {
        let newPermissoes = <any>{};
        for (const permissao of permissoes) {
            newPermissoes[permissao["tabela"]] = {
                ...newPermissoes[permissao["tabela"]],
                [permissao["desc"]]: {
                    id: parseInt(permissao["id"]),
                    value: permissao["permite"],
                },
            };
        }
        return newPermissoes;
    }

    override getById(id: number): Observable<any> {
        return super.getById(id).pipe(
            tap((response: any) => {
                this.setPermissoes(
                    response["permissoes"]
                );
            })
        );
    }

    override cols: ICol[] = [
        {
            header: "ID",
            field: "id",
        },
        {
            header: "Nome",
            field: "nome",
        },
    ];
}
