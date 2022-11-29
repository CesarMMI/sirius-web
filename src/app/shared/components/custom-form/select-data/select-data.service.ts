import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, first, map, switchMap } from "rxjs";
import { CrudService } from "src/app/shared/services/crud-service";
import { FilterService } from "src/app/shared/services/http-params/filter.service";
import { PaginationService } from "src/app/shared/services/http-params/pagination.service";
import { environment } from "src/environments/environment";

import { ICol } from "../../custom-table/models/Col";

interface IType {
    port: string;
    endPoint: string;
    cols: ICol[];
    filter: ICol[];
    response: {
        payload: string;
        pageCount: string;
    };
}

@Injectable({
    providedIn: "root",
})
export class SelectDataService {
    constructor(
        protected http: HttpClient,
        protected filter: FilterService,
        protected pagination: PaginationService
    ) {}

    private currType$ = new BehaviorSubject<IType>({
        port: "",
        endPoint: "",
        cols: [],
        filter: [],
        response: {
            payload: "",
            pageCount: "",
        },
    });
    public get currentType$() {
        return this.currType$.asObservable();
    }

    pageCount = new BehaviorSubject<number>(0);
    data$ = combineLatest([
        this.filter.filter$,
        this.pagination.pagination$,
        this.currType$.asObservable(),
    ]).pipe(
        switchMap(([filter, page, type]) => {
            return this.http
                .get(
                    `http://${environment.api_host}:${type.port}/datasnap/rest/${type.endPoint}`
                )
                .pipe(
                    first(),
                    map((response: any) => {
                        return {
                            payload: response[type.response.payload],
                            pageCount: response[type.response.pageCount]
                        }
                    })    
                );
        })
    );



    setType(type: "clientes") {
        switch (type) {
            case "clientes":
                this.currType$.next({
                    port: "8080",
                    endPoint: "TSMClientes/GetClientesList",
                    cols: [],
                    filter: [],
                    response: {
                        payload: "Clientes",
                        pageCount: "QuantidadePaginas",
                    },
                });
                break;

            default:
                break;
        }
    }
}
