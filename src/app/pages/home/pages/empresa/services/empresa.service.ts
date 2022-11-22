import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { IEmpresa } from "src/app/pages/home/pages/empresa/models/empresa";
import { ITableData } from "src/app/shared/components/custom-table/models/TableData";
import { CrudService } from "src/app/shared/services/crud-service";
import { PaginationService } from "src/app/shared/services/pagination.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class EmpresaService extends CrudService<IEmpresa> {
    constructor(
        protected override http: HttpClient,
        protected override pagination: PaginationService
    ) {
        super(
            http,
            pagination,
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
                delete: "Empresa"
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

    public override getById(id: number): Observable<Object> {
        return this.http.get(
            `http://${environment.api_host}:8083/datasnap/rest/TSMEmpresa/GetEmpresa`
        );
    }
}
