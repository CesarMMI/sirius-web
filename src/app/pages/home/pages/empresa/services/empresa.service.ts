import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { BehaviorSubject, first, Observable, tap } from "rxjs";
import { IEmpresa } from "src/app/pages/home/pages/empresa/models/empresa";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { UserInfoService } from "src/app/shared/services/user-info/user-info.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class EmpresaService extends CrudService<IEmpresa> {
    constructor(
        protected router: Router,
        protected userInfoService: UserInfoService,
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
            `http://${environment.api_host}:8083/datasnap/rest/TSMEmpresa`,
            {
                getAll: {
                    endPoint: "GetEmpresas",
                    response: {
                        payload: "empresas",
                        pageCount: "QtdPaginas",
                    },
                },
                getById: "GetEmpresa",
                post: "Empresa",
                put: "Empresa",
                delete: "Empresa",
            }
        );
    }

    public selectedEmpresa$ = new BehaviorSubject<IEmpresa | null>(null);
    public chosenEmpresa$ = new BehaviorSubject<IEmpresa | null>(null);

    // public override get(
    //     page: number,
    //     quantityPerPage: number
    // ): Observable<ITableData<IEmpresa>> {
    //     return super.get(page, quantityPerPage).pipe(
    //         map((response: any) => {
    //             return {
    //                 data: response["empresas"],
    //                 pageTotal: response["QtdPaginas"],
    //             };
    //         })
    //     );
    // }

    public override getById(id: number): Observable<IEmpresa> {
        return this.http.get<IEmpresa>(
            `http://${environment.api_host}:8083/datasnap/rest/TSMEmpresa/GetEmpresa`
        );
    }

    public selectEmpresa(id: number) {
        return this.http
            .post(
                `http://${environment.api_host}:8083/datasnap/rest/TSMEmpresa/SelectEmpresa/${id}`,
                {}
            )
            .pipe(first())
            .subscribe({
                next: (res: any) => {
                    this.userInfoService.setUserInfo({
                        paginaInicial: res["paginaInicial"],
                        permissoes: res["permissões"],
                        vendedorId: res["vendedorId"],
                    });
                    if (res["paginaInicial"])
                        this.router.navigate([`home/${res["paginaInicial"]}`]);
                },
            });
    }
}
