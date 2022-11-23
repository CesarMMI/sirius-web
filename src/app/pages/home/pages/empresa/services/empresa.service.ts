import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { BehaviorSubject, Observable } from "rxjs";
import { IEmpresa } from "src/app/pages/home/pages/empresa/models/empresa";
import { CrudService } from "src/app/shared/services/crud-service";
import { PaginationService } from "src/app/shared/services/pagination.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class EmpresaService extends CrudService<IEmpresa> {
    constructor(
        protected override http: HttpClient,
        protected override pagination: PaginationService,
        protected override message: MessageService
    ) {
        super(
            http,
            pagination,
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
}
